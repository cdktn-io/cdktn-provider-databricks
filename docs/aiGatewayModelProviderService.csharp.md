# `aiGatewayModelProviderService` Submodule <a name="`aiGatewayModelProviderService` Submodule" id="@cdktn/provider-databricks.aiGatewayModelProviderService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiGatewayModelProviderService <a name="AiGatewayModelProviderService" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service databricks_ai_gateway_model_provider_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderService(Construct Scope, string Id, AiGatewayModelProviderServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig">AiGatewayModelProviderServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig">AiGatewayModelProviderServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putConfig"></a>

```csharp
private void PutConfig(AiGatewayModelProviderServiceConfigA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a>

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putProviderConfig"></a>

```csharp
private void PutProviderConfig(AiGatewayModelProviderServiceProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetConfig` <a name="ResetConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetConfig"></a>

```csharp
private void ResetConfig()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AiGatewayModelProviderService resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

AiGatewayModelProviderService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

AiGatewayModelProviderService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

AiGatewayModelProviderService.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

AiGatewayModelProviderService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AiGatewayModelProviderService resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AiGatewayModelProviderService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AiGatewayModelProviderService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AiGatewayModelProviderService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.browseOnly">BrowseOnly</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference">AiGatewayModelProviderServiceConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.effectiveOwner">EffectiveOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.metastoreId">MetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference">AiGatewayModelProviderServiceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.configInput">ConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.modelProviderServiceIdInput">ModelProviderServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.modelProviderServiceId">ModelProviderServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BrowseOnly`<sup>Required</sup> <a name="BrowseOnly" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.browseOnly"></a>

```csharp
public IResolvable BrowseOnly { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.config"></a>

```csharp
public AiGatewayModelProviderServiceConfigAOutputReference Config { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference">AiGatewayModelProviderServiceConfigAOutputReference</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveOwner`<sup>Required</sup> <a name="EffectiveOwner" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.effectiveOwner"></a>

```csharp
public string EffectiveOwner { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.metastoreId"></a>

```csharp
public string MetastoreId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.providerConfig"></a>

```csharp
public AiGatewayModelProviderServiceProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference">AiGatewayModelProviderServiceProviderConfigOutputReference</a>

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.configInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigA ConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a>

---

##### `ModelProviderServiceIdInput`<sup>Optional</sup> <a name="ModelProviderServiceIdInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.modelProviderServiceIdInput"></a>

```csharp
public string ModelProviderServiceIdInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.providerConfigInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a>

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `ModelProviderServiceId`<sup>Required</sup> <a name="ModelProviderServiceId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.modelProviderServiceId"></a>

```csharp
public string ModelProviderServiceId { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AiGatewayModelProviderServiceConfig <a name="AiGatewayModelProviderServiceConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ModelProviderServiceId,
    string Parent,
    string Comment = null,
    AiGatewayModelProviderServiceConfigA Config = null,
    string Owner = null,
    AiGatewayModelProviderServiceProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.modelProviderServiceId">ModelProviderServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#model_provider_service_id AiGatewayModelProviderService#model_provider_service_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.parent">Parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#parent AiGatewayModelProviderService#parent}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#comment AiGatewayModelProviderService#comment}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#config AiGatewayModelProviderService#config}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#owner AiGatewayModelProviderService#owner}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#provider_config AiGatewayModelProviderService#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ModelProviderServiceId`<sup>Required</sup> <a name="ModelProviderServiceId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.modelProviderServiceId"></a>

```csharp
public string ModelProviderServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#model_provider_service_id AiGatewayModelProviderService#model_provider_service_id}.

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#parent AiGatewayModelProviderService#parent}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#comment AiGatewayModelProviderService#comment}.

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.config"></a>

```csharp
public AiGatewayModelProviderServiceConfigA Config { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#config AiGatewayModelProviderService#config}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#owner AiGatewayModelProviderService#owner}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.providerConfig"></a>

```csharp
public AiGatewayModelProviderServiceProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#provider_config AiGatewayModelProviderService#provider_config}.

---

### AiGatewayModelProviderServiceConfigA <a name="AiGatewayModelProviderServiceConfigA" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigA {
    bool|IResolvable AllowAllTargets = null,
    AiGatewayModelProviderServiceConfigAmazonBedrock AmazonBedrock = null,
    AiGatewayModelProviderServiceConfigAnthropic Anthropic = null,
    AiGatewayModelProviderServiceConfigAzureOpenai AzureOpenai = null,
    AiGatewayModelProviderServiceConfigCustom Custom = null,
    bool|IResolvable ForwardHeaders = null,
    bool|IResolvable ForwardQueryParameters = null,
    bool|IResolvable ForwardUnmanagedPaths = null,
    AiGatewayModelProviderServiceConfigGeminiEnterprise GeminiEnterprise = null,
    AiGatewayModelProviderServiceConfigInferenceTable InferenceTable = null,
    AiGatewayModelProviderServiceConfigMicrosoftFoundry MicrosoftFoundry = null,
    AiGatewayModelProviderServiceConfigOpenai Openai = null,
    string ProviderType = null,
    IResolvable|AiGatewayModelProviderServiceConfigRateLimits[] RateLimits = null,
    IResolvable|AiGatewayModelProviderServiceConfigTargets[] Targets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.allowAllTargets">AllowAllTargets</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#allow_all_targets AiGatewayModelProviderService#allow_all_targets}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.amazonBedrock">AmazonBedrock</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock">AiGatewayModelProviderServiceConfigAmazonBedrock</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#amazon_bedrock AiGatewayModelProviderService#amazon_bedrock}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.anthropic">Anthropic</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic">AiGatewayModelProviderServiceConfigAnthropic</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#anthropic AiGatewayModelProviderService#anthropic}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.azureOpenai">AzureOpenai</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai">AiGatewayModelProviderServiceConfigAzureOpenai</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#azure_openai AiGatewayModelProviderService#azure_openai}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom">AiGatewayModelProviderServiceConfigCustom</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#custom AiGatewayModelProviderService#custom}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.forwardHeaders">ForwardHeaders</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#forward_headers AiGatewayModelProviderService#forward_headers}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.forwardQueryParameters">ForwardQueryParameters</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#forward_query_parameters AiGatewayModelProviderService#forward_query_parameters}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.forwardUnmanagedPaths">ForwardUnmanagedPaths</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#forward_unmanaged_paths AiGatewayModelProviderService#forward_unmanaged_paths}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.geminiEnterprise">GeminiEnterprise</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise">AiGatewayModelProviderServiceConfigGeminiEnterprise</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#gemini_enterprise AiGatewayModelProviderService#gemini_enterprise}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.inferenceTable">InferenceTable</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable">AiGatewayModelProviderServiceConfigInferenceTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#inference_table AiGatewayModelProviderService#inference_table}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.microsoftFoundry">MicrosoftFoundry</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry">AiGatewayModelProviderServiceConfigMicrosoftFoundry</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#microsoft_foundry AiGatewayModelProviderService#microsoft_foundry}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.openai">Openai</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai">AiGatewayModelProviderServiceConfigOpenai</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#openai AiGatewayModelProviderService#openai}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.providerType">ProviderType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#provider_type AiGatewayModelProviderService#provider_type}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.rateLimits">RateLimits</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#rate_limits AiGatewayModelProviderService#rate_limits}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.targets">Targets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#targets AiGatewayModelProviderService#targets}. |

---

##### `AllowAllTargets`<sup>Optional</sup> <a name="AllowAllTargets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.allowAllTargets"></a>

```csharp
public bool|IResolvable AllowAllTargets { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#allow_all_targets AiGatewayModelProviderService#allow_all_targets}.

---

##### `AmazonBedrock`<sup>Optional</sup> <a name="AmazonBedrock" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.amazonBedrock"></a>

```csharp
public AiGatewayModelProviderServiceConfigAmazonBedrock AmazonBedrock { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock">AiGatewayModelProviderServiceConfigAmazonBedrock</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#amazon_bedrock AiGatewayModelProviderService#amazon_bedrock}.

---

##### `Anthropic`<sup>Optional</sup> <a name="Anthropic" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.anthropic"></a>

```csharp
public AiGatewayModelProviderServiceConfigAnthropic Anthropic { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic">AiGatewayModelProviderServiceConfigAnthropic</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#anthropic AiGatewayModelProviderService#anthropic}.

---

##### `AzureOpenai`<sup>Optional</sup> <a name="AzureOpenai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.azureOpenai"></a>

```csharp
public AiGatewayModelProviderServiceConfigAzureOpenai AzureOpenai { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai">AiGatewayModelProviderServiceConfigAzureOpenai</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#azure_openai AiGatewayModelProviderService#azure_openai}.

---

##### `Custom`<sup>Optional</sup> <a name="Custom" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.custom"></a>

```csharp
public AiGatewayModelProviderServiceConfigCustom Custom { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom">AiGatewayModelProviderServiceConfigCustom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#custom AiGatewayModelProviderService#custom}.

---

##### `ForwardHeaders`<sup>Optional</sup> <a name="ForwardHeaders" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.forwardHeaders"></a>

```csharp
public bool|IResolvable ForwardHeaders { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#forward_headers AiGatewayModelProviderService#forward_headers}.

---

##### `ForwardQueryParameters`<sup>Optional</sup> <a name="ForwardQueryParameters" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.forwardQueryParameters"></a>

```csharp
public bool|IResolvable ForwardQueryParameters { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#forward_query_parameters AiGatewayModelProviderService#forward_query_parameters}.

---

##### `ForwardUnmanagedPaths`<sup>Optional</sup> <a name="ForwardUnmanagedPaths" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.forwardUnmanagedPaths"></a>

```csharp
public bool|IResolvable ForwardUnmanagedPaths { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#forward_unmanaged_paths AiGatewayModelProviderService#forward_unmanaged_paths}.

---

##### `GeminiEnterprise`<sup>Optional</sup> <a name="GeminiEnterprise" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.geminiEnterprise"></a>

```csharp
public AiGatewayModelProviderServiceConfigGeminiEnterprise GeminiEnterprise { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise">AiGatewayModelProviderServiceConfigGeminiEnterprise</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#gemini_enterprise AiGatewayModelProviderService#gemini_enterprise}.

---

##### `InferenceTable`<sup>Optional</sup> <a name="InferenceTable" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.inferenceTable"></a>

```csharp
public AiGatewayModelProviderServiceConfigInferenceTable InferenceTable { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable">AiGatewayModelProviderServiceConfigInferenceTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#inference_table AiGatewayModelProviderService#inference_table}.

---

##### `MicrosoftFoundry`<sup>Optional</sup> <a name="MicrosoftFoundry" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.microsoftFoundry"></a>

```csharp
public AiGatewayModelProviderServiceConfigMicrosoftFoundry MicrosoftFoundry { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry">AiGatewayModelProviderServiceConfigMicrosoftFoundry</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#microsoft_foundry AiGatewayModelProviderService#microsoft_foundry}.

---

##### `Openai`<sup>Optional</sup> <a name="Openai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.openai"></a>

```csharp
public AiGatewayModelProviderServiceConfigOpenai Openai { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai">AiGatewayModelProviderServiceConfigOpenai</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#openai AiGatewayModelProviderService#openai}.

---

##### `ProviderType`<sup>Optional</sup> <a name="ProviderType" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.providerType"></a>

```csharp
public string ProviderType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#provider_type AiGatewayModelProviderService#provider_type}.

---

##### `RateLimits`<sup>Optional</sup> <a name="RateLimits" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.rateLimits"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigRateLimits[] RateLimits { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#rate_limits AiGatewayModelProviderService#rate_limits}.

---

##### `Targets`<sup>Optional</sup> <a name="Targets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.targets"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigTargets[] Targets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#targets AiGatewayModelProviderService#targets}.

---

### AiGatewayModelProviderServiceConfigAmazonBedrock <a name="AiGatewayModelProviderServiceConfigAmazonBedrock" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAmazonBedrock {
    AiGatewayModelProviderServiceConfigAmazonBedrockDirect Direct = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect">AiGatewayModelProviderServiceConfigAmazonBedrockDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock.property.direct"></a>

```csharp
public AiGatewayModelProviderServiceConfigAmazonBedrockDirect Direct { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect">AiGatewayModelProviderServiceConfigAmazonBedrockDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

### AiGatewayModelProviderServiceConfigAmazonBedrockDirect <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAmazonBedrockDirect {
    AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey AwsAccessKey = null,
    string Region = null,
    AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential ServiceCredential = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.awsAccessKey">AwsAccessKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#aws_access_key AiGatewayModelProviderService#aws_access_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#region AiGatewayModelProviderService#region}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.serviceCredential">ServiceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}. |

---

##### `AwsAccessKey`<sup>Optional</sup> <a name="AwsAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.awsAccessKey"></a>

```csharp
public AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey AwsAccessKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#aws_access_key AiGatewayModelProviderService#aws_access_key}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#region AiGatewayModelProviderService#region}.

---

##### `ServiceCredential`<sup>Optional</sup> <a name="ServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.serviceCredential"></a>

```csharp
public AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential ServiceCredential { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}.

---

### AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey {
    string AccessKeyId = null,
    AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey SecretAccessKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#access_key_id AiGatewayModelProviderService#access_key_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.property.secretAccessKey">SecretAccessKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#secret_access_key AiGatewayModelProviderService#secret_access_key}. |

---

##### `AccessKeyId`<sup>Optional</sup> <a name="AccessKeyId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#access_key_id AiGatewayModelProviderService#access_key_id}.

---

##### `SecretAccessKey`<sup>Optional</sup> <a name="SecretAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.property.secretAccessKey"></a>

```csharp
public AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey SecretAccessKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#secret_access_key AiGatewayModelProviderService#secret_access_key}.

---

### AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey {
    string Plaintext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey.property.plaintext">Plaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey.property.plaintext"></a>

```csharp
public string Plaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}.

---

### AiGatewayModelProviderServiceConfigAnthropic <a name="AiGatewayModelProviderServiceConfigAnthropic" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAnthropic {
    AiGatewayModelProviderServiceConfigAnthropicDirect Direct = null,
    AiGatewayModelProviderServiceConfigAnthropicRelayed Relayed = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect">AiGatewayModelProviderServiceConfigAnthropicDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic.property.relayed">Relayed</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed">AiGatewayModelProviderServiceConfigAnthropicRelayed</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#relayed AiGatewayModelProviderService#relayed}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic.property.direct"></a>

```csharp
public AiGatewayModelProviderServiceConfigAnthropicDirect Direct { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect">AiGatewayModelProviderServiceConfigAnthropicDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

##### `Relayed`<sup>Optional</sup> <a name="Relayed" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic.property.relayed"></a>

```csharp
public AiGatewayModelProviderServiceConfigAnthropicRelayed Relayed { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed">AiGatewayModelProviderServiceConfigAnthropicRelayed</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#relayed AiGatewayModelProviderService#relayed}.

---

### AiGatewayModelProviderServiceConfigAnthropicDirect <a name="AiGatewayModelProviderServiceConfigAnthropicDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAnthropicDirect {
    AiGatewayModelProviderServiceConfigAnthropicDirectApiKey ApiKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey">AiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect.property.apiKey"></a>

```csharp
public AiGatewayModelProviderServiceConfigAnthropicDirectApiKey ApiKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey">AiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

### AiGatewayModelProviderServiceConfigAnthropicDirectApiKey <a name="AiGatewayModelProviderServiceConfigAnthropicDirectApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAnthropicDirectApiKey {
    string Plaintext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey.property.plaintext">Plaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey.property.plaintext"></a>

```csharp
public string Plaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigAnthropicRelayed <a name="AiGatewayModelProviderServiceConfigAnthropicRelayed" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAnthropicRelayed {
    string PlanType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed.property.planType">PlanType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#plan_type AiGatewayModelProviderService#plan_type}. |

---

##### `PlanType`<sup>Optional</sup> <a name="PlanType" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed.property.planType"></a>

```csharp
public string PlanType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#plan_type AiGatewayModelProviderService#plan_type}.

---

### AiGatewayModelProviderServiceConfigAzureOpenai <a name="AiGatewayModelProviderServiceConfigAzureOpenai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAzureOpenai {
    AiGatewayModelProviderServiceConfigAzureOpenaiDirect Direct = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect">AiGatewayModelProviderServiceConfigAzureOpenaiDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai.property.direct"></a>

```csharp
public AiGatewayModelProviderServiceConfigAzureOpenaiDirect Direct { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect">AiGatewayModelProviderServiceConfigAzureOpenaiDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

### AiGatewayModelProviderServiceConfigAzureOpenaiDirect <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAzureOpenaiDirect {
    AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey ApiKey = null,
    string BaseUrl = null,
    AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal EntraServicePrincipal = null,
    AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential ServiceCredential = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.baseUrl">BaseUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.entraServicePrincipal">EntraServicePrincipal</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#entra_service_principal AiGatewayModelProviderService#entra_service_principal}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.serviceCredential">ServiceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.apiKey"></a>

```csharp
public AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey ApiKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.baseUrl"></a>

```csharp
public string BaseUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}.

---

##### `EntraServicePrincipal`<sup>Optional</sup> <a name="EntraServicePrincipal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.entraServicePrincipal"></a>

```csharp
public AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal EntraServicePrincipal { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#entra_service_principal AiGatewayModelProviderService#entra_service_principal}.

---

##### `ServiceCredential`<sup>Optional</sup> <a name="ServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.serviceCredential"></a>

```csharp
public AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential ServiceCredential { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}.

---

### AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey {
    string Plaintext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey.property.plaintext">Plaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey.property.plaintext"></a>

```csharp
public string Plaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal {
    string ClientId = null,
    AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret ClientSecret = null,
    string TenantId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#client_id AiGatewayModelProviderService#client_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#client_secret AiGatewayModelProviderService#client_secret}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#tenant_id AiGatewayModelProviderService#tenant_id}. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#client_id AiGatewayModelProviderService#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.clientSecret"></a>

```csharp
public AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret ClientSecret { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#client_secret AiGatewayModelProviderService#client_secret}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#tenant_id AiGatewayModelProviderService#tenant_id}.

---

### AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret {
    string Plaintext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret.property.plaintext">Plaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret.property.plaintext"></a>

```csharp
public string Plaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}.

---

### AiGatewayModelProviderServiceConfigCustom <a name="AiGatewayModelProviderServiceConfigCustom" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigCustom {
    AiGatewayModelProviderServiceConfigCustomDirect Direct = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect">AiGatewayModelProviderServiceConfigCustomDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom.property.direct"></a>

```csharp
public AiGatewayModelProviderServiceConfigCustomDirect Direct { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect">AiGatewayModelProviderServiceConfigCustomDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

### AiGatewayModelProviderServiceConfigCustomDirect <a name="AiGatewayModelProviderServiceConfigCustomDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigCustomDirect {
    AiGatewayModelProviderServiceConfigCustomDirectApiKey ApiKey = null,
    string BaseUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey">AiGatewayModelProviderServiceConfigCustomDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect.property.baseUrl">BaseUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect.property.apiKey"></a>

```csharp
public AiGatewayModelProviderServiceConfigCustomDirectApiKey ApiKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey">AiGatewayModelProviderServiceConfigCustomDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect.property.baseUrl"></a>

```csharp
public string BaseUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}.

---

### AiGatewayModelProviderServiceConfigCustomDirectApiKey <a name="AiGatewayModelProviderServiceConfigCustomDirectApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigCustomDirectApiKey {
    string Plaintext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey.property.plaintext">Plaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey.property.plaintext"></a>

```csharp
public string Plaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigGeminiEnterprise <a name="AiGatewayModelProviderServiceConfigGeminiEnterprise" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigGeminiEnterprise {
    AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect Direct = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise.property.direct"></a>

```csharp
public AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect Direct { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

### AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect <a name="AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect {
    AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey ApiKey = null,
    string ProjectId = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#project_id AiGatewayModelProviderService#project_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#region AiGatewayModelProviderService#region}. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.apiKey"></a>

```csharp
public AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey ApiKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#project_id AiGatewayModelProviderService#project_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#region AiGatewayModelProviderService#region}.

---

### AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey <a name="AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey {
    string Plaintext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey.property.plaintext">Plaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey.property.plaintext"></a>

```csharp
public string Plaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigInferenceTable <a name="AiGatewayModelProviderServiceConfigInferenceTable" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigInferenceTable {
    string Parent,
    bool|IResolvable Disabled = null,
    string TableNamePrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.property.parent">Parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#parent AiGatewayModelProviderService#parent}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#disabled AiGatewayModelProviderService#disabled}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.property.tableNamePrefix">TableNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#table_name_prefix AiGatewayModelProviderService#table_name_prefix}. |

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#parent AiGatewayModelProviderService#parent}.

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#disabled AiGatewayModelProviderService#disabled}.

---

##### `TableNamePrefix`<sup>Optional</sup> <a name="TableNamePrefix" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.property.tableNamePrefix"></a>

```csharp
public string TableNamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#table_name_prefix AiGatewayModelProviderService#table_name_prefix}.

---

### AiGatewayModelProviderServiceConfigMicrosoftFoundry <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundry" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigMicrosoftFoundry {
    AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect Direct = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry.property.direct"></a>

```csharp
public AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect Direct { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect {
    AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey ApiKey = null,
    string BaseUrl = null,
    AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal EntraServicePrincipal = null,
    AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential ServiceCredential = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.baseUrl">BaseUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.entraServicePrincipal">EntraServicePrincipal</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#entra_service_principal AiGatewayModelProviderService#entra_service_principal}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.serviceCredential">ServiceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.apiKey"></a>

```csharp
public AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey ApiKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.baseUrl"></a>

```csharp
public string BaseUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}.

---

##### `EntraServicePrincipal`<sup>Optional</sup> <a name="EntraServicePrincipal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.entraServicePrincipal"></a>

```csharp
public AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal EntraServicePrincipal { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#entra_service_principal AiGatewayModelProviderService#entra_service_principal}.

---

##### `ServiceCredential`<sup>Optional</sup> <a name="ServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.serviceCredential"></a>

```csharp
public AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential ServiceCredential { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}.

---

### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey {
    string Plaintext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey.property.plaintext">Plaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey.property.plaintext"></a>

```csharp
public string Plaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal {
    string ClientId = null,
    AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret ClientSecret = null,
    string TenantId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#client_id AiGatewayModelProviderService#client_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#client_secret AiGatewayModelProviderService#client_secret}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#tenant_id AiGatewayModelProviderService#tenant_id}. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#client_id AiGatewayModelProviderService#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.clientSecret"></a>

```csharp
public AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret ClientSecret { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#client_secret AiGatewayModelProviderService#client_secret}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#tenant_id AiGatewayModelProviderService#tenant_id}.

---

### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret {
    string Plaintext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret.property.plaintext">Plaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret.property.plaintext"></a>

```csharp
public string Plaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}.

---

### AiGatewayModelProviderServiceConfigOpenai <a name="AiGatewayModelProviderServiceConfigOpenai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigOpenai {
    AiGatewayModelProviderServiceConfigOpenaiDirect Direct = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect">AiGatewayModelProviderServiceConfigOpenaiDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai.property.direct"></a>

```csharp
public AiGatewayModelProviderServiceConfigOpenaiDirect Direct { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect">AiGatewayModelProviderServiceConfigOpenaiDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

### AiGatewayModelProviderServiceConfigOpenaiDirect <a name="AiGatewayModelProviderServiceConfigOpenaiDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigOpenaiDirect {
    AiGatewayModelProviderServiceConfigOpenaiDirectApiKey ApiKey = null,
    string BaseUrl = null,
    string Organization = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.property.baseUrl">BaseUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.property.organization">Organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#organization AiGatewayModelProviderService#organization}. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.property.apiKey"></a>

```csharp
public AiGatewayModelProviderServiceConfigOpenaiDirectApiKey ApiKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.property.baseUrl"></a>

```csharp
public string BaseUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}.

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#organization AiGatewayModelProviderService#organization}.

---

### AiGatewayModelProviderServiceConfigOpenaiDirectApiKey <a name="AiGatewayModelProviderServiceConfigOpenaiDirectApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigOpenaiDirectApiKey {
    string Plaintext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey.property.plaintext">Plaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey.property.plaintext"></a>

```csharp
public string Plaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigRateLimits <a name="AiGatewayModelProviderServiceConfigRateLimits" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigRateLimits {
    string Key,
    string RenewalPeriod,
    string Principal = null,
    double Requests = null,
    string RequestTagKey = null,
    string RequestTagValue = null,
    double Tokens = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#key AiGatewayModelProviderService#key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.renewalPeriod">RenewalPeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#renewal_period AiGatewayModelProviderService#renewal_period}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.principal">Principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#principal AiGatewayModelProviderService#principal}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.requests">Requests</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#requests AiGatewayModelProviderService#requests}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.requestTagKey">RequestTagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#request_tag_key AiGatewayModelProviderService#request_tag_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.requestTagValue">RequestTagValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#request_tag_value AiGatewayModelProviderService#request_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.tokens">Tokens</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#tokens AiGatewayModelProviderService#tokens}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#key AiGatewayModelProviderService#key}.

---

##### `RenewalPeriod`<sup>Required</sup> <a name="RenewalPeriod" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.renewalPeriod"></a>

```csharp
public string RenewalPeriod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#renewal_period AiGatewayModelProviderService#renewal_period}.

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.principal"></a>

```csharp
public string Principal { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#principal AiGatewayModelProviderService#principal}.

---

##### `Requests`<sup>Optional</sup> <a name="Requests" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.requests"></a>

```csharp
public double Requests { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#requests AiGatewayModelProviderService#requests}.

---

##### `RequestTagKey`<sup>Optional</sup> <a name="RequestTagKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.requestTagKey"></a>

```csharp
public string RequestTagKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#request_tag_key AiGatewayModelProviderService#request_tag_key}.

---

##### `RequestTagValue`<sup>Optional</sup> <a name="RequestTagValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.requestTagValue"></a>

```csharp
public string RequestTagValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#request_tag_value AiGatewayModelProviderService#request_tag_value}.

---

##### `Tokens`<sup>Optional</sup> <a name="Tokens" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.tokens"></a>

```csharp
public double Tokens { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#tokens AiGatewayModelProviderService#tokens}.

---

### AiGatewayModelProviderServiceConfigTargets <a name="AiGatewayModelProviderServiceConfigTargets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigTargets {
    string Model,
    string[] NativeApiTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets.property.model">Model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#model AiGatewayModelProviderService#model}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets.property.nativeApiTypes">NativeApiTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#native_api_types AiGatewayModelProviderService#native_api_types}. |

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets.property.model"></a>

```csharp
public string Model { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#model AiGatewayModelProviderService#model}.

---

##### `NativeApiTypes`<sup>Optional</sup> <a name="NativeApiTypes" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets.property.nativeApiTypes"></a>

```csharp
public string[] NativeApiTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#native_api_types AiGatewayModelProviderService#native_api_types}.

---

### AiGatewayModelProviderServiceProviderConfig <a name="AiGatewayModelProviderServiceProviderConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#workspace_id AiGatewayModelProviderService#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_gateway_model_provider_service#workspace_id AiGatewayModelProviderService#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.putSecretAccessKey">PutSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resetAccessKeyId">ResetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resetSecretAccessKey">ResetSecretAccessKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretAccessKey` <a name="PutSecretAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.putSecretAccessKey"></a>

```csharp
private void PutSecretAccessKey(AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.putSecretAccessKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a>

---

##### `ResetAccessKeyId` <a name="ResetAccessKeyId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resetAccessKeyId"></a>

```csharp
private void ResetAccessKeyId()
```

##### `ResetSecretAccessKey` <a name="ResetSecretAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resetSecretAccessKey"></a>

```csharp
private void ResetSecretAccessKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.secretAccessKey">SecretAccessKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.secretAccessKey"></a>

```csharp
public AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference SecretAccessKey { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference</a>

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.accessKeyIdInput"></a>

```csharp
public string AccessKeyIdInput { get; }
```

- *Type:* string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.secretAccessKeyInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey SecretAccessKeyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a>

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a>

---


### AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resetPlaintext"></a>

```csharp
private void ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.plaintextInput"></a>

```csharp
public string PlaintextInput { get; }
```

- *Type:* string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.plaintext"></a>

```csharp
public string Plaintext { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a>

---


### AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putAwsAccessKey">PutAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putServiceCredential">PutServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetAwsAccessKey">ResetAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetServiceCredential">ResetServiceCredential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsAccessKey` <a name="PutAwsAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putAwsAccessKey"></a>

```csharp
private void PutAwsAccessKey(AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putAwsAccessKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a>

---

##### `PutServiceCredential` <a name="PutServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putServiceCredential"></a>

```csharp
private void PutServiceCredential(AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putServiceCredential.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a>

---

##### `ResetAwsAccessKey` <a name="ResetAwsAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetAwsAccessKey"></a>

```csharp
private void ResetAwsAccessKey()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetServiceCredential` <a name="ResetServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetServiceCredential"></a>

```csharp
private void ResetServiceCredential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKey">AwsAccessKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredential">ServiceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKeyInput">AwsAccessKeyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredentialInput">ServiceCredentialInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect">AiGatewayModelProviderServiceConfigAmazonBedrockDirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsAccessKey`<sup>Required</sup> <a name="AwsAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKey"></a>

```csharp
public AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference AwsAccessKey { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference</a>

---

##### `ServiceCredential`<sup>Required</sup> <a name="ServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredential"></a>

```csharp
public AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference ServiceCredential { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference</a>

---

##### `AwsAccessKeyInput`<sup>Optional</sup> <a name="AwsAccessKeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKeyInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey AwsAccessKeyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ServiceCredentialInput`<sup>Optional</sup> <a name="ServiceCredentialInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredentialInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential ServiceCredentialInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAmazonBedrockDirect InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect">AiGatewayModelProviderServiceConfigAmazonBedrockDirect</a>

---


### AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a>

---


### AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference <a name="AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.putDirect"></a>

```csharp
private void PutDirect(AiGatewayModelProviderServiceConfigAmazonBedrockDirect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect">AiGatewayModelProviderServiceConfigAmazonBedrockDirect</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resetDirect"></a>

```csharp
private void ResetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.directInput">DirectInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect">AiGatewayModelProviderServiceConfigAmazonBedrockDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock">AiGatewayModelProviderServiceConfigAmazonBedrock</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.direct"></a>

```csharp
public AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference Direct { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.directInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAmazonBedrockDirect DirectInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect">AiGatewayModelProviderServiceConfigAmazonBedrockDirect</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAmazonBedrock InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock">AiGatewayModelProviderServiceConfigAmazonBedrock</a>

---


### AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference <a name="AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resetPlaintext"></a>

```csharp
private void ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey">AiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintextInput"></a>

```csharp
public string PlaintextInput { get; }
```

- *Type:* string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintext"></a>

```csharp
public string Plaintext { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAnthropicDirectApiKey InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey">AiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a>

---


### AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference <a name="AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.putApiKey"></a>

```csharp
private void PutApiKey(AiGatewayModelProviderServiceConfigAnthropicDirectApiKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey">AiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resetApiKey"></a>

```csharp
private void ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey">AiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect">AiGatewayModelProviderServiceConfigAnthropicDirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKey"></a>

```csharp
public AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference ApiKey { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKeyInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAnthropicDirectApiKey ApiKeyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey">AiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAnthropicDirect InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect">AiGatewayModelProviderServiceConfigAnthropicDirect</a>

---


### AiGatewayModelProviderServiceConfigAnthropicOutputReference <a name="AiGatewayModelProviderServiceConfigAnthropicOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAnthropicOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.putRelayed">PutRelayed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resetRelayed">ResetRelayed</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.putDirect"></a>

```csharp
private void PutDirect(AiGatewayModelProviderServiceConfigAnthropicDirect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect">AiGatewayModelProviderServiceConfigAnthropicDirect</a>

---

##### `PutRelayed` <a name="PutRelayed" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.putRelayed"></a>

```csharp
private void PutRelayed(AiGatewayModelProviderServiceConfigAnthropicRelayed Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.putRelayed.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed">AiGatewayModelProviderServiceConfigAnthropicRelayed</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resetDirect"></a>

```csharp
private void ResetDirect()
```

##### `ResetRelayed` <a name="ResetRelayed" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resetRelayed"></a>

```csharp
private void ResetRelayed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference">AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayed">Relayed</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference">AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.directInput">DirectInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect">AiGatewayModelProviderServiceConfigAnthropicDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayedInput">RelayedInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed">AiGatewayModelProviderServiceConfigAnthropicRelayed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic">AiGatewayModelProviderServiceConfigAnthropic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.direct"></a>

```csharp
public AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference Direct { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference">AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference</a>

---

##### `Relayed`<sup>Required</sup> <a name="Relayed" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayed"></a>

```csharp
public AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference Relayed { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference">AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.directInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAnthropicDirect DirectInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect">AiGatewayModelProviderServiceConfigAnthropicDirect</a>

---

##### `RelayedInput`<sup>Optional</sup> <a name="RelayedInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayedInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAnthropicRelayed RelayedInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed">AiGatewayModelProviderServiceConfigAnthropicRelayed</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAnthropic InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic">AiGatewayModelProviderServiceConfigAnthropic</a>

---


### AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference <a name="AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resetPlanType">ResetPlanType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlanType` <a name="ResetPlanType" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resetPlanType"></a>

```csharp
private void ResetPlanType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planTypeInput">PlanTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planType">PlanType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed">AiGatewayModelProviderServiceConfigAnthropicRelayed</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PlanTypeInput`<sup>Optional</sup> <a name="PlanTypeInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planTypeInput"></a>

```csharp
public string PlanTypeInput { get; }
```

- *Type:* string

---

##### `PlanType`<sup>Required</sup> <a name="PlanType" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planType"></a>

```csharp
public string PlanType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAnthropicRelayed InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed">AiGatewayModelProviderServiceConfigAnthropicRelayed</a>

---


### AiGatewayModelProviderServiceConfigAOutputReference <a name="AiGatewayModelProviderServiceConfigAOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAmazonBedrock">PutAmazonBedrock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAnthropic">PutAnthropic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAzureOpenai">PutAzureOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putCustom">PutCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putGeminiEnterprise">PutGeminiEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putInferenceTable">PutInferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putMicrosoftFoundry">PutMicrosoftFoundry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putOpenai">PutOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putRateLimits">PutRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAllowAllTargets">ResetAllowAllTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAmazonBedrock">ResetAmazonBedrock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAnthropic">ResetAnthropic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAzureOpenai">ResetAzureOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetCustom">ResetCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetForwardHeaders">ResetForwardHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetForwardQueryParameters">ResetForwardQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetForwardUnmanagedPaths">ResetForwardUnmanagedPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetGeminiEnterprise">ResetGeminiEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetInferenceTable">ResetInferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetMicrosoftFoundry">ResetMicrosoftFoundry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetOpenai">ResetOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetProviderType">ResetProviderType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetRateLimits">ResetRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetTargets">ResetTargets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAmazonBedrock` <a name="PutAmazonBedrock" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAmazonBedrock"></a>

```csharp
private void PutAmazonBedrock(AiGatewayModelProviderServiceConfigAmazonBedrock Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAmazonBedrock.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock">AiGatewayModelProviderServiceConfigAmazonBedrock</a>

---

##### `PutAnthropic` <a name="PutAnthropic" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAnthropic"></a>

```csharp
private void PutAnthropic(AiGatewayModelProviderServiceConfigAnthropic Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAnthropic.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic">AiGatewayModelProviderServiceConfigAnthropic</a>

---

##### `PutAzureOpenai` <a name="PutAzureOpenai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAzureOpenai"></a>

```csharp
private void PutAzureOpenai(AiGatewayModelProviderServiceConfigAzureOpenai Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAzureOpenai.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai">AiGatewayModelProviderServiceConfigAzureOpenai</a>

---

##### `PutCustom` <a name="PutCustom" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putCustom"></a>

```csharp
private void PutCustom(AiGatewayModelProviderServiceConfigCustom Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom">AiGatewayModelProviderServiceConfigCustom</a>

---

##### `PutGeminiEnterprise` <a name="PutGeminiEnterprise" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putGeminiEnterprise"></a>

```csharp
private void PutGeminiEnterprise(AiGatewayModelProviderServiceConfigGeminiEnterprise Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putGeminiEnterprise.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise">AiGatewayModelProviderServiceConfigGeminiEnterprise</a>

---

##### `PutInferenceTable` <a name="PutInferenceTable" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putInferenceTable"></a>

```csharp
private void PutInferenceTable(AiGatewayModelProviderServiceConfigInferenceTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putInferenceTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable">AiGatewayModelProviderServiceConfigInferenceTable</a>

---

##### `PutMicrosoftFoundry` <a name="PutMicrosoftFoundry" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putMicrosoftFoundry"></a>

```csharp
private void PutMicrosoftFoundry(AiGatewayModelProviderServiceConfigMicrosoftFoundry Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putMicrosoftFoundry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry">AiGatewayModelProviderServiceConfigMicrosoftFoundry</a>

---

##### `PutOpenai` <a name="PutOpenai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putOpenai"></a>

```csharp
private void PutOpenai(AiGatewayModelProviderServiceConfigOpenai Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putOpenai.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai">AiGatewayModelProviderServiceConfigOpenai</a>

---

##### `PutRateLimits` <a name="PutRateLimits" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putRateLimits"></a>

```csharp
private void PutRateLimits(IResolvable|AiGatewayModelProviderServiceConfigRateLimits[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putRateLimits.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a>[]

---

##### `PutTargets` <a name="PutTargets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putTargets"></a>

```csharp
private void PutTargets(IResolvable|AiGatewayModelProviderServiceConfigTargets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putTargets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a>[]

---

##### `ResetAllowAllTargets` <a name="ResetAllowAllTargets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAllowAllTargets"></a>

```csharp
private void ResetAllowAllTargets()
```

##### `ResetAmazonBedrock` <a name="ResetAmazonBedrock" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAmazonBedrock"></a>

```csharp
private void ResetAmazonBedrock()
```

##### `ResetAnthropic` <a name="ResetAnthropic" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAnthropic"></a>

```csharp
private void ResetAnthropic()
```

##### `ResetAzureOpenai` <a name="ResetAzureOpenai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAzureOpenai"></a>

```csharp
private void ResetAzureOpenai()
```

##### `ResetCustom` <a name="ResetCustom" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetCustom"></a>

```csharp
private void ResetCustom()
```

##### `ResetForwardHeaders` <a name="ResetForwardHeaders" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetForwardHeaders"></a>

```csharp
private void ResetForwardHeaders()
```

##### `ResetForwardQueryParameters` <a name="ResetForwardQueryParameters" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetForwardQueryParameters"></a>

```csharp
private void ResetForwardQueryParameters()
```

##### `ResetForwardUnmanagedPaths` <a name="ResetForwardUnmanagedPaths" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetForwardUnmanagedPaths"></a>

```csharp
private void ResetForwardUnmanagedPaths()
```

##### `ResetGeminiEnterprise` <a name="ResetGeminiEnterprise" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetGeminiEnterprise"></a>

```csharp
private void ResetGeminiEnterprise()
```

##### `ResetInferenceTable` <a name="ResetInferenceTable" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetInferenceTable"></a>

```csharp
private void ResetInferenceTable()
```

##### `ResetMicrosoftFoundry` <a name="ResetMicrosoftFoundry" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetMicrosoftFoundry"></a>

```csharp
private void ResetMicrosoftFoundry()
```

##### `ResetOpenai` <a name="ResetOpenai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetOpenai"></a>

```csharp
private void ResetOpenai()
```

##### `ResetProviderType` <a name="ResetProviderType" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetProviderType"></a>

```csharp
private void ResetProviderType()
```

##### `ResetRateLimits` <a name="ResetRateLimits" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetRateLimits"></a>

```csharp
private void ResetRateLimits()
```

##### `ResetTargets` <a name="ResetTargets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetTargets"></a>

```csharp
private void ResetTargets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrock">AmazonBedrock</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.anthropic">Anthropic</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference">AiGatewayModelProviderServiceConfigAnthropicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenai">AzureOpenai</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference">AiGatewayModelProviderServiceConfigCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterprise">GeminiEnterprise</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference">AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTable">InferenceTable</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference">AiGatewayModelProviderServiceConfigInferenceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundry">MicrosoftFoundry</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.openai">Openai</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference">AiGatewayModelProviderServiceConfigOpenaiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.rateLimits">RateLimits</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList">AiGatewayModelProviderServiceConfigRateLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList">AiGatewayModelProviderServiceConfigTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargetsInput">AllowAllTargetsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrockInput">AmazonBedrockInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock">AiGatewayModelProviderServiceConfigAmazonBedrock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.anthropicInput">AnthropicInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic">AiGatewayModelProviderServiceConfigAnthropic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenaiInput">AzureOpenaiInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai">AiGatewayModelProviderServiceConfigAzureOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.customInput">CustomInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom">AiGatewayModelProviderServiceConfigCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeadersInput">ForwardHeadersInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParametersInput">ForwardQueryParametersInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPathsInput">ForwardUnmanagedPathsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterpriseInput">GeminiEnterpriseInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise">AiGatewayModelProviderServiceConfigGeminiEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTableInput">InferenceTableInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable">AiGatewayModelProviderServiceConfigInferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundryInput">MicrosoftFoundryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry">AiGatewayModelProviderServiceConfigMicrosoftFoundry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.openaiInput">OpenaiInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai">AiGatewayModelProviderServiceConfigOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.providerTypeInput">ProviderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.rateLimitsInput">RateLimitsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.targetsInput">TargetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargets">AllowAllTargets</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeaders">ForwardHeaders</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParameters">ForwardQueryParameters</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPaths">ForwardUnmanagedPaths</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.providerType">ProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmazonBedrock`<sup>Required</sup> <a name="AmazonBedrock" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrock"></a>

```csharp
public AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference AmazonBedrock { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference</a>

---

##### `Anthropic`<sup>Required</sup> <a name="Anthropic" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.anthropic"></a>

```csharp
public AiGatewayModelProviderServiceConfigAnthropicOutputReference Anthropic { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference">AiGatewayModelProviderServiceConfigAnthropicOutputReference</a>

---

##### `AzureOpenai`<sup>Required</sup> <a name="AzureOpenai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenai"></a>

```csharp
public AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference AzureOpenai { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference</a>

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.custom"></a>

```csharp
public AiGatewayModelProviderServiceConfigCustomOutputReference Custom { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference">AiGatewayModelProviderServiceConfigCustomOutputReference</a>

---

##### `GeminiEnterprise`<sup>Required</sup> <a name="GeminiEnterprise" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterprise"></a>

```csharp
public AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference GeminiEnterprise { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference">AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference</a>

---

##### `InferenceTable`<sup>Required</sup> <a name="InferenceTable" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTable"></a>

```csharp
public AiGatewayModelProviderServiceConfigInferenceTableOutputReference InferenceTable { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference">AiGatewayModelProviderServiceConfigInferenceTableOutputReference</a>

---

##### `MicrosoftFoundry`<sup>Required</sup> <a name="MicrosoftFoundry" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundry"></a>

```csharp
public AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference MicrosoftFoundry { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference</a>

---

##### `Openai`<sup>Required</sup> <a name="Openai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.openai"></a>

```csharp
public AiGatewayModelProviderServiceConfigOpenaiOutputReference Openai { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference">AiGatewayModelProviderServiceConfigOpenaiOutputReference</a>

---

##### `RateLimits`<sup>Required</sup> <a name="RateLimits" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.rateLimits"></a>

```csharp
public AiGatewayModelProviderServiceConfigRateLimitsList RateLimits { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList">AiGatewayModelProviderServiceConfigRateLimitsList</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.targets"></a>

```csharp
public AiGatewayModelProviderServiceConfigTargetsList Targets { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList">AiGatewayModelProviderServiceConfigTargetsList</a>

---

##### `AllowAllTargetsInput`<sup>Optional</sup> <a name="AllowAllTargetsInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargetsInput"></a>

```csharp
public bool|IResolvable AllowAllTargetsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AmazonBedrockInput`<sup>Optional</sup> <a name="AmazonBedrockInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrockInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAmazonBedrock AmazonBedrockInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock">AiGatewayModelProviderServiceConfigAmazonBedrock</a>

---

##### `AnthropicInput`<sup>Optional</sup> <a name="AnthropicInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.anthropicInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAnthropic AnthropicInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic">AiGatewayModelProviderServiceConfigAnthropic</a>

---

##### `AzureOpenaiInput`<sup>Optional</sup> <a name="AzureOpenaiInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenaiInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAzureOpenai AzureOpenaiInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai">AiGatewayModelProviderServiceConfigAzureOpenai</a>

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.customInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigCustom CustomInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom">AiGatewayModelProviderServiceConfigCustom</a>

---

##### `ForwardHeadersInput`<sup>Optional</sup> <a name="ForwardHeadersInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeadersInput"></a>

```csharp
public bool|IResolvable ForwardHeadersInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForwardQueryParametersInput`<sup>Optional</sup> <a name="ForwardQueryParametersInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParametersInput"></a>

```csharp
public bool|IResolvable ForwardQueryParametersInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForwardUnmanagedPathsInput`<sup>Optional</sup> <a name="ForwardUnmanagedPathsInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPathsInput"></a>

```csharp
public bool|IResolvable ForwardUnmanagedPathsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GeminiEnterpriseInput`<sup>Optional</sup> <a name="GeminiEnterpriseInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterpriseInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigGeminiEnterprise GeminiEnterpriseInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise">AiGatewayModelProviderServiceConfigGeminiEnterprise</a>

---

##### `InferenceTableInput`<sup>Optional</sup> <a name="InferenceTableInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTableInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigInferenceTable InferenceTableInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable">AiGatewayModelProviderServiceConfigInferenceTable</a>

---

##### `MicrosoftFoundryInput`<sup>Optional</sup> <a name="MicrosoftFoundryInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundryInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigMicrosoftFoundry MicrosoftFoundryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry">AiGatewayModelProviderServiceConfigMicrosoftFoundry</a>

---

##### `OpenaiInput`<sup>Optional</sup> <a name="OpenaiInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.openaiInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigOpenai OpenaiInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai">AiGatewayModelProviderServiceConfigOpenai</a>

---

##### `ProviderTypeInput`<sup>Optional</sup> <a name="ProviderTypeInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.providerTypeInput"></a>

```csharp
public string ProviderTypeInput { get; }
```

- *Type:* string

---

##### `RateLimitsInput`<sup>Optional</sup> <a name="RateLimitsInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.rateLimitsInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigRateLimits[] RateLimitsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a>[]

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.targetsInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigTargets[] TargetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a>[]

---

##### `AllowAllTargets`<sup>Required</sup> <a name="AllowAllTargets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargets"></a>

```csharp
public bool|IResolvable AllowAllTargets { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForwardHeaders`<sup>Required</sup> <a name="ForwardHeaders" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeaders"></a>

```csharp
public bool|IResolvable ForwardHeaders { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForwardQueryParameters`<sup>Required</sup> <a name="ForwardQueryParameters" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParameters"></a>

```csharp
public bool|IResolvable ForwardQueryParameters { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForwardUnmanagedPaths`<sup>Required</sup> <a name="ForwardUnmanagedPaths" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPaths"></a>

```csharp
public bool|IResolvable ForwardUnmanagedPaths { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.providerType"></a>

```csharp
public string ProviderType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigA InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a>

---


### AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resetPlaintext"></a>

```csharp
private void ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintextInput"></a>

```csharp
public string PlaintextInput { get; }
```

- *Type:* string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintext"></a>

```csharp
public string Plaintext { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a>

---


### AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resetPlaintext"></a>

```csharp
private void ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.plaintext">Plaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.plaintextInput"></a>

```csharp
public string PlaintextInput { get; }
```

- *Type:* string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.plaintext"></a>

```csharp
public string Plaintext { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a>

---


### AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.putClientSecret">PutClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientSecret` <a name="PutClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.putClientSecret"></a>

```csharp
private void PutClientSecret(AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a>

---

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetTenantId"></a>

```csharp
private void ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientSecret"></a>

```csharp
public AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference ClientSecret { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientSecretInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret ClientSecretInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a>

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a>

---


### AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putEntraServicePrincipal">PutEntraServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putServiceCredential">PutServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetEntraServicePrincipal">ResetEntraServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetServiceCredential">ResetServiceCredential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putApiKey"></a>

```csharp
private void PutApiKey(AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a>

---

##### `PutEntraServicePrincipal` <a name="PutEntraServicePrincipal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putEntraServicePrincipal"></a>

```csharp
private void PutEntraServicePrincipal(AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putEntraServicePrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a>

---

##### `PutServiceCredential` <a name="PutServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putServiceCredential"></a>

```csharp
private void PutServiceCredential(AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putServiceCredential.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetApiKey"></a>

```csharp
private void ResetApiKey()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetBaseUrl"></a>

```csharp
private void ResetBaseUrl()
```

##### `ResetEntraServicePrincipal` <a name="ResetEntraServicePrincipal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetEntraServicePrincipal"></a>

```csharp
private void ResetEntraServicePrincipal()
```

##### `ResetServiceCredential` <a name="ResetServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetServiceCredential"></a>

```csharp
private void ResetServiceCredential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.entraServicePrincipal">EntraServicePrincipal</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredential">ServiceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.entraServicePrincipalInput">EntraServicePrincipalInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredentialInput">ServiceCredentialInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect">AiGatewayModelProviderServiceConfigAzureOpenaiDirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKey"></a>

```csharp
public AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference ApiKey { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference</a>

---

##### `EntraServicePrincipal`<sup>Required</sup> <a name="EntraServicePrincipal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.entraServicePrincipal"></a>

```csharp
public AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference EntraServicePrincipal { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference</a>

---

##### `ServiceCredential`<sup>Required</sup> <a name="ServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredential"></a>

```csharp
public AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference ServiceCredential { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKeyInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey ApiKeyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a>

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrlInput"></a>

```csharp
public string BaseUrlInput { get; }
```

- *Type:* string

---

##### `EntraServicePrincipalInput`<sup>Optional</sup> <a name="EntraServicePrincipalInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.entraServicePrincipalInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal EntraServicePrincipalInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a>

---

##### `ServiceCredentialInput`<sup>Optional</sup> <a name="ServiceCredentialInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredentialInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential ServiceCredentialInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a>

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAzureOpenaiDirect InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect">AiGatewayModelProviderServiceConfigAzureOpenaiDirect</a>

---


### AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a>

---


### AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference <a name="AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect"></a>

```csharp
private void PutDirect(AiGatewayModelProviderServiceConfigAzureOpenaiDirect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect">AiGatewayModelProviderServiceConfigAzureOpenaiDirect</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resetDirect"></a>

```csharp
private void ResetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.directInput">DirectInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect">AiGatewayModelProviderServiceConfigAzureOpenaiDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai">AiGatewayModelProviderServiceConfigAzureOpenai</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.direct"></a>

```csharp
public AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference Direct { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.directInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAzureOpenaiDirect DirectInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect">AiGatewayModelProviderServiceConfigAzureOpenaiDirect</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigAzureOpenai InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai">AiGatewayModelProviderServiceConfigAzureOpenai</a>

---


### AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference <a name="AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resetPlaintext"></a>

```csharp
private void ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey">AiGatewayModelProviderServiceConfigCustomDirectApiKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintextInput"></a>

```csharp
public string PlaintextInput { get; }
```

- *Type:* string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintext"></a>

```csharp
public string Plaintext { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigCustomDirectApiKey InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey">AiGatewayModelProviderServiceConfigCustomDirectApiKey</a>

---


### AiGatewayModelProviderServiceConfigCustomDirectOutputReference <a name="AiGatewayModelProviderServiceConfigCustomDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigCustomDirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.putApiKey"></a>

```csharp
private void PutApiKey(AiGatewayModelProviderServiceConfigCustomDirectApiKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey">AiGatewayModelProviderServiceConfigCustomDirectApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetApiKey"></a>

```csharp
private void ResetApiKey()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetBaseUrl"></a>

```csharp
private void ResetBaseUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey">AiGatewayModelProviderServiceConfigCustomDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect">AiGatewayModelProviderServiceConfigCustomDirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKey"></a>

```csharp
public AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference ApiKey { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKeyInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigCustomDirectApiKey ApiKeyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey">AiGatewayModelProviderServiceConfigCustomDirectApiKey</a>

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrlInput"></a>

```csharp
public string BaseUrlInput { get; }
```

- *Type:* string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigCustomDirect InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect">AiGatewayModelProviderServiceConfigCustomDirect</a>

---


### AiGatewayModelProviderServiceConfigCustomOutputReference <a name="AiGatewayModelProviderServiceConfigCustomOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigCustomOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.putDirect"></a>

```csharp
private void PutDirect(AiGatewayModelProviderServiceConfigCustomDirect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect">AiGatewayModelProviderServiceConfigCustomDirect</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.resetDirect"></a>

```csharp
private void ResetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference">AiGatewayModelProviderServiceConfigCustomDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.directInput">DirectInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect">AiGatewayModelProviderServiceConfigCustomDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom">AiGatewayModelProviderServiceConfigCustom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.direct"></a>

```csharp
public AiGatewayModelProviderServiceConfigCustomDirectOutputReference Direct { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference">AiGatewayModelProviderServiceConfigCustomDirectOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.directInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigCustomDirect DirectInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect">AiGatewayModelProviderServiceConfigCustomDirect</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigCustom InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom">AiGatewayModelProviderServiceConfigCustom</a>

---


### AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference <a name="AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resetPlaintext"></a>

```csharp
private void ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintextInput"></a>

```csharp
public string PlaintextInput { get; }
```

- *Type:* string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintext"></a>

```csharp
public string Plaintext { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a>

---


### AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference <a name="AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.putApiKey"></a>

```csharp
private void PutApiKey(AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetApiKey"></a>

```csharp
private void ResetApiKey()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKey"></a>

```csharp
public AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference ApiKey { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKeyInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey ApiKeyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a>

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a>

---


### AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference <a name="AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.putDirect"></a>

```csharp
private void PutDirect(AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resetDirect"></a>

```csharp
private void ResetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.directInput">DirectInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise">AiGatewayModelProviderServiceConfigGeminiEnterprise</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.direct"></a>

```csharp
public AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference Direct { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.directInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect DirectInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigGeminiEnterprise InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise">AiGatewayModelProviderServiceConfigGeminiEnterprise</a>

---


### AiGatewayModelProviderServiceConfigInferenceTableOutputReference <a name="AiGatewayModelProviderServiceConfigInferenceTableOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigInferenceTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetTableNamePrefix">ResetTableNamePrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetTableNamePrefix` <a name="ResetTableNamePrefix" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetTableNamePrefix"></a>

```csharp
private void ResetTableNamePrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.isDeleted">IsDeleted</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.table">Table</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefixInput">TableNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefix">TableNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable">AiGatewayModelProviderServiceConfigInferenceTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsDeleted`<sup>Required</sup> <a name="IsDeleted" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.isDeleted"></a>

```csharp
public IResolvable IsDeleted { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.table"></a>

```csharp
public string Table { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `TableNamePrefixInput`<sup>Optional</sup> <a name="TableNamePrefixInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefixInput"></a>

```csharp
public string TableNamePrefixInput { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `TableNamePrefix`<sup>Required</sup> <a name="TableNamePrefix" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefix"></a>

```csharp
public string TableNamePrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigInferenceTable InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable">AiGatewayModelProviderServiceConfigInferenceTable</a>

---


### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resetPlaintext"></a>

```csharp
private void ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintextInput"></a>

```csharp
public string PlaintextInput { get; }
```

- *Type:* string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintext"></a>

```csharp
public string Plaintext { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a>

---


### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resetPlaintext"></a>

```csharp
private void ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.plaintext">Plaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.plaintextInput"></a>

```csharp
public string PlaintextInput { get; }
```

- *Type:* string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.plaintext"></a>

```csharp
public string Plaintext { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a>

---


### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.putClientSecret">PutClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientSecret` <a name="PutClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.putClientSecret"></a>

```csharp
private void PutClientSecret(AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a>

---

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetTenantId"></a>

```csharp
private void ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientSecret"></a>

```csharp
public AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference ClientSecret { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientSecretInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret ClientSecretInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a>

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a>

---


### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putEntraServicePrincipal">PutEntraServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putServiceCredential">PutServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetEntraServicePrincipal">ResetEntraServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetServiceCredential">ResetServiceCredential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putApiKey"></a>

```csharp
private void PutApiKey(AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a>

---

##### `PutEntraServicePrincipal` <a name="PutEntraServicePrincipal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putEntraServicePrincipal"></a>

```csharp
private void PutEntraServicePrincipal(AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putEntraServicePrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a>

---

##### `PutServiceCredential` <a name="PutServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putServiceCredential"></a>

```csharp
private void PutServiceCredential(AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putServiceCredential.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetApiKey"></a>

```csharp
private void ResetApiKey()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetBaseUrl"></a>

```csharp
private void ResetBaseUrl()
```

##### `ResetEntraServicePrincipal` <a name="ResetEntraServicePrincipal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetEntraServicePrincipal"></a>

```csharp
private void ResetEntraServicePrincipal()
```

##### `ResetServiceCredential` <a name="ResetServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetServiceCredential"></a>

```csharp
private void ResetServiceCredential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.entraServicePrincipal">EntraServicePrincipal</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredential">ServiceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.entraServicePrincipalInput">EntraServicePrincipalInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredentialInput">ServiceCredentialInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKey"></a>

```csharp
public AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference ApiKey { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference</a>

---

##### `EntraServicePrincipal`<sup>Required</sup> <a name="EntraServicePrincipal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.entraServicePrincipal"></a>

```csharp
public AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference EntraServicePrincipal { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference</a>

---

##### `ServiceCredential`<sup>Required</sup> <a name="ServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredential"></a>

```csharp
public AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference ServiceCredential { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKeyInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey ApiKeyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a>

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrlInput"></a>

```csharp
public string BaseUrlInput { get; }
```

- *Type:* string

---

##### `EntraServicePrincipalInput`<sup>Optional</sup> <a name="EntraServicePrincipalInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.entraServicePrincipalInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal EntraServicePrincipalInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a>

---

##### `ServiceCredentialInput`<sup>Optional</sup> <a name="ServiceCredentialInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredentialInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential ServiceCredentialInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a>

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a>

---


### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a>

---


### AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect"></a>

```csharp
private void PutDirect(AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resetDirect"></a>

```csharp
private void ResetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.directInput">DirectInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry">AiGatewayModelProviderServiceConfigMicrosoftFoundry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.direct"></a>

```csharp
public AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference Direct { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.directInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect DirectInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigMicrosoftFoundry InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry">AiGatewayModelProviderServiceConfigMicrosoftFoundry</a>

---


### AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference <a name="AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resetPlaintext"></a>

```csharp
private void ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintextInput"></a>

```csharp
public string PlaintextInput { get; }
```

- *Type:* string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintext"></a>

```csharp
public string Plaintext { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigOpenaiDirectApiKey InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a>

---


### AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference <a name="AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetOrganization">ResetOrganization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.putApiKey"></a>

```csharp
private void PutApiKey(AiGatewayModelProviderServiceConfigOpenaiDirectApiKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetApiKey"></a>

```csharp
private void ResetApiKey()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetBaseUrl"></a>

```csharp
private void ResetBaseUrl()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetOrganization"></a>

```csharp
private void ResetOrganization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect">AiGatewayModelProviderServiceConfigOpenaiDirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKey"></a>

```csharp
public AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference ApiKey { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKeyInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigOpenaiDirectApiKey ApiKeyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a>

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrlInput"></a>

```csharp
public string BaseUrlInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigOpenaiDirect InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect">AiGatewayModelProviderServiceConfigOpenaiDirect</a>

---


### AiGatewayModelProviderServiceConfigOpenaiOutputReference <a name="AiGatewayModelProviderServiceConfigOpenaiOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigOpenaiOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.putDirect"></a>

```csharp
private void PutDirect(AiGatewayModelProviderServiceConfigOpenaiDirect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect">AiGatewayModelProviderServiceConfigOpenaiDirect</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.resetDirect"></a>

```csharp
private void ResetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference">AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.directInput">DirectInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect">AiGatewayModelProviderServiceConfigOpenaiDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai">AiGatewayModelProviderServiceConfigOpenai</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.direct"></a>

```csharp
public AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference Direct { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference">AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.directInput"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigOpenaiDirect DirectInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect">AiGatewayModelProviderServiceConfigOpenaiDirect</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigOpenai InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai">AiGatewayModelProviderServiceConfigOpenai</a>

---


### AiGatewayModelProviderServiceConfigRateLimitsList <a name="AiGatewayModelProviderServiceConfigRateLimitsList" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigRateLimitsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.get"></a>

```csharp
private AiGatewayModelProviderServiceConfigRateLimitsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigRateLimits[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a>[]

---


### AiGatewayModelProviderServiceConfigRateLimitsOutputReference <a name="AiGatewayModelProviderServiceConfigRateLimitsOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigRateLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetPrincipal">ResetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequests">ResetRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagKey">ResetRequestTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagValue">ResetRequestTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetTokens">ResetTokens</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetPrincipal"></a>

```csharp
private void ResetPrincipal()
```

##### `ResetRequests` <a name="ResetRequests" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequests"></a>

```csharp
private void ResetRequests()
```

##### `ResetRequestTagKey` <a name="ResetRequestTagKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagKey"></a>

```csharp
private void ResetRequestTagKey()
```

##### `ResetRequestTagValue` <a name="ResetRequestTagValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagValue"></a>

```csharp
private void ResetRequestTagValue()
```

##### `ResetTokens` <a name="ResetTokens" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetTokens"></a>

```csharp
private void ResetTokens()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principalInput">PrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriodInput">RenewalPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestsInput">RequestsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKeyInput">RequestTagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValueInput">RequestTagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokensInput">TokensInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriod">RenewalPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requests">Requests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKey">RequestTagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValue">RequestTagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokens">Tokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principalInput"></a>

```csharp
public string PrincipalInput { get; }
```

- *Type:* string

---

##### `RenewalPeriodInput`<sup>Optional</sup> <a name="RenewalPeriodInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriodInput"></a>

```csharp
public string RenewalPeriodInput { get; }
```

- *Type:* string

---

##### `RequestsInput`<sup>Optional</sup> <a name="RequestsInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestsInput"></a>

```csharp
public double RequestsInput { get; }
```

- *Type:* double

---

##### `RequestTagKeyInput`<sup>Optional</sup> <a name="RequestTagKeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKeyInput"></a>

```csharp
public string RequestTagKeyInput { get; }
```

- *Type:* string

---

##### `RequestTagValueInput`<sup>Optional</sup> <a name="RequestTagValueInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValueInput"></a>

```csharp
public string RequestTagValueInput { get; }
```

- *Type:* string

---

##### `TokensInput`<sup>Optional</sup> <a name="TokensInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokensInput"></a>

```csharp
public double TokensInput { get; }
```

- *Type:* double

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `RenewalPeriod`<sup>Required</sup> <a name="RenewalPeriod" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriod"></a>

```csharp
public string RenewalPeriod { get; }
```

- *Type:* string

---

##### `Requests`<sup>Required</sup> <a name="Requests" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requests"></a>

```csharp
public double Requests { get; }
```

- *Type:* double

---

##### `RequestTagKey`<sup>Required</sup> <a name="RequestTagKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKey"></a>

```csharp
public string RequestTagKey { get; }
```

- *Type:* string

---

##### `RequestTagValue`<sup>Required</sup> <a name="RequestTagValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValue"></a>

```csharp
public string RequestTagValue { get; }
```

- *Type:* string

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokens"></a>

```csharp
public double Tokens { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigRateLimits InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a>

---


### AiGatewayModelProviderServiceConfigTargetsList <a name="AiGatewayModelProviderServiceConfigTargetsList" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.get"></a>

```csharp
private AiGatewayModelProviderServiceConfigTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigTargets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a>[]

---


### AiGatewayModelProviderServiceConfigTargetsOutputReference <a name="AiGatewayModelProviderServiceConfigTargetsOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceConfigTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.resetNativeApiTypes">ResetNativeApiTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNativeApiTypes` <a name="ResetNativeApiTypes" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.resetNativeApiTypes"></a>

```csharp
private void ResetNativeApiTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.modelInput">ModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypesInput">NativeApiTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypes">NativeApiTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.modelInput"></a>

```csharp
public string ModelInput { get; }
```

- *Type:* string

---

##### `NativeApiTypesInput`<sup>Optional</sup> <a name="NativeApiTypesInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypesInput"></a>

```csharp
public string[] NativeApiTypesInput { get; }
```

- *Type:* string[]

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `NativeApiTypes`<sup>Required</sup> <a name="NativeApiTypes" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypes"></a>

```csharp
public string[] NativeApiTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceConfigTargets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a>

---


### AiGatewayModelProviderServiceProviderConfigOutputReference <a name="AiGatewayModelProviderServiceProviderConfigOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiGatewayModelProviderServiceProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiGatewayModelProviderServiceProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a>

---



