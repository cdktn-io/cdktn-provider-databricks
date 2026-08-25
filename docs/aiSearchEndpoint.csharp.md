# `aiSearchEndpoint` Submodule <a name="`aiSearchEndpoint` Submodule" id="@cdktn/provider-databricks.aiSearchEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiSearchEndpoint <a name="AiSearchEndpoint" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint databricks_ai_search_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchEndpoint(Construct Scope, string Id, AiSearchEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig">AiSearchEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig">AiSearchEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.putCustomTags">PutCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetBudgetPolicyId">ResetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetCustomTags">ResetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetEndpointId">ResetEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetReplicaCount">ResetReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetTargetQps">ResetTargetQps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetUsagePolicyId">ResetUsagePolicyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomTags` <a name="PutCustomTags" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.putCustomTags"></a>

```csharp
private void PutCustomTags(IResolvable|AiSearchEndpointCustomTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.putCustomTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a>[]

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.putProviderConfig"></a>

```csharp
private void PutProviderConfig(AiSearchEndpointProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig">AiSearchEndpointProviderConfig</a>

---

##### `ResetBudgetPolicyId` <a name="ResetBudgetPolicyId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetBudgetPolicyId"></a>

```csharp
private void ResetBudgetPolicyId()
```

##### `ResetCustomTags` <a name="ResetCustomTags" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetCustomTags"></a>

```csharp
private void ResetCustomTags()
```

##### `ResetEndpointId` <a name="ResetEndpointId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetEndpointId"></a>

```csharp
private void ResetEndpointId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

##### `ResetReplicaCount` <a name="ResetReplicaCount" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetReplicaCount"></a>

```csharp
private void ResetReplicaCount()
```

##### `ResetTargetQps` <a name="ResetTargetQps" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetTargetQps"></a>

```csharp
private void ResetTargetQps()
```

##### `ResetUsagePolicyId` <a name="ResetUsagePolicyId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetUsagePolicyId"></a>

```csharp
private void ResetUsagePolicyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AiSearchEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

AiSearchEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

AiSearchEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

AiSearchEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

AiSearchEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AiSearchEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AiSearchEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AiSearchEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AiSearchEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.customTags">CustomTags</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList">AiSearchEndpointCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.effectiveBudgetPolicyId">EffectiveBudgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointStatus">EndpointStatus</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference">AiSearchEndpointEndpointStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.indexCount">IndexCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.lastUpdatedUser">LastUpdatedUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference">AiSearchEndpointProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.scalingInfo">ScalingInfo</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference">AiSearchEndpointScalingInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.throughputInfo">ThroughputInfo</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference">AiSearchEndpointThroughputInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.budgetPolicyIdInput">BudgetPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.customTagsInput">CustomTagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointIdInput">EndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig">AiSearchEndpointProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.replicaCountInput">ReplicaCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.targetQpsInput">TargetQpsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.usagePolicyIdInput">UsagePolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointId">EndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.replicaCount">ReplicaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.targetQps">TargetQps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.usagePolicyId">UsagePolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.customTags"></a>

```csharp
public AiSearchEndpointCustomTagsList CustomTags { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList">AiSearchEndpointCustomTagsList</a>

---

##### `EffectiveBudgetPolicyId`<sup>Required</sup> <a name="EffectiveBudgetPolicyId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.effectiveBudgetPolicyId"></a>

```csharp
public string EffectiveBudgetPolicyId { get; }
```

- *Type:* string

---

##### `EndpointStatus`<sup>Required</sup> <a name="EndpointStatus" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointStatus"></a>

```csharp
public AiSearchEndpointEndpointStatusOutputReference EndpointStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference">AiSearchEndpointEndpointStatusOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IndexCount`<sup>Required</sup> <a name="IndexCount" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.indexCount"></a>

```csharp
public double IndexCount { get; }
```

- *Type:* double

---

##### `LastUpdatedUser`<sup>Required</sup> <a name="LastUpdatedUser" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.lastUpdatedUser"></a>

```csharp
public string LastUpdatedUser { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.providerConfig"></a>

```csharp
public AiSearchEndpointProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference">AiSearchEndpointProviderConfigOutputReference</a>

---

##### `ScalingInfo`<sup>Required</sup> <a name="ScalingInfo" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.scalingInfo"></a>

```csharp
public AiSearchEndpointScalingInfoOutputReference ScalingInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference">AiSearchEndpointScalingInfoOutputReference</a>

---

##### `ThroughputInfo`<sup>Required</sup> <a name="ThroughputInfo" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.throughputInfo"></a>

```csharp
public AiSearchEndpointThroughputInfoOutputReference ThroughputInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference">AiSearchEndpointThroughputInfoOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `BudgetPolicyIdInput`<sup>Optional</sup> <a name="BudgetPolicyIdInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.budgetPolicyIdInput"></a>

```csharp
public string BudgetPolicyIdInput { get; }
```

- *Type:* string

---

##### `CustomTagsInput`<sup>Optional</sup> <a name="CustomTagsInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.customTagsInput"></a>

```csharp
public IResolvable|AiSearchEndpointCustomTags[] CustomTagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a>[]

---

##### `EndpointIdInput`<sup>Optional</sup> <a name="EndpointIdInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointIdInput"></a>

```csharp
public string EndpointIdInput { get; }
```

- *Type:* string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointTypeInput"></a>

```csharp
public string EndpointTypeInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.providerConfigInput"></a>

```csharp
public IResolvable|AiSearchEndpointProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig">AiSearchEndpointProviderConfig</a>

---

##### `ReplicaCountInput`<sup>Optional</sup> <a name="ReplicaCountInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.replicaCountInput"></a>

```csharp
public double ReplicaCountInput { get; }
```

- *Type:* double

---

##### `TargetQpsInput`<sup>Optional</sup> <a name="TargetQpsInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.targetQpsInput"></a>

```csharp
public double TargetQpsInput { get; }
```

- *Type:* double

---

##### `UsagePolicyIdInput`<sup>Optional</sup> <a name="UsagePolicyIdInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.usagePolicyIdInput"></a>

```csharp
public string UsagePolicyIdInput { get; }
```

- *Type:* string

---

##### `BudgetPolicyId`<sup>Required</sup> <a name="BudgetPolicyId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.budgetPolicyId"></a>

```csharp
public string BudgetPolicyId { get; }
```

- *Type:* string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointId"></a>

```csharp
public string EndpointId { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `ReplicaCount`<sup>Required</sup> <a name="ReplicaCount" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.replicaCount"></a>

```csharp
public double ReplicaCount { get; }
```

- *Type:* double

---

##### `TargetQps`<sup>Required</sup> <a name="TargetQps" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.targetQps"></a>

```csharp
public double TargetQps { get; }
```

- *Type:* double

---

##### `UsagePolicyId`<sup>Required</sup> <a name="UsagePolicyId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.usagePolicyId"></a>

```csharp
public string UsagePolicyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AiSearchEndpointConfig <a name="AiSearchEndpointConfig" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchEndpointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EndpointType,
    string Parent,
    string BudgetPolicyId = null,
    IResolvable|AiSearchEndpointCustomTags[] CustomTags = null,
    string EndpointId = null,
    AiSearchEndpointProviderConfig ProviderConfig = null,
    double ReplicaCount = null,
    double TargetQps = null,
    string UsagePolicyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.endpointType">EndpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#endpoint_type AiSearchEndpoint#endpoint_type}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.parent">Parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#parent AiSearchEndpoint#parent}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#budget_policy_id AiSearchEndpoint#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.customTags">CustomTags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#custom_tags AiSearchEndpoint#custom_tags}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.endpointId">EndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#endpoint_id AiSearchEndpoint#endpoint_id}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig">AiSearchEndpointProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#provider_config AiSearchEndpoint#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.replicaCount">ReplicaCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#replica_count AiSearchEndpoint#replica_count}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.targetQps">TargetQps</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#target_qps AiSearchEndpoint#target_qps}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.usagePolicyId">UsagePolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#usage_policy_id AiSearchEndpoint#usage_policy_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.endpointType"></a>

```csharp
public string EndpointType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#endpoint_type AiSearchEndpoint#endpoint_type}.

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#parent AiSearchEndpoint#parent}.

---

##### `BudgetPolicyId`<sup>Optional</sup> <a name="BudgetPolicyId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.budgetPolicyId"></a>

```csharp
public string BudgetPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#budget_policy_id AiSearchEndpoint#budget_policy_id}.

---

##### `CustomTags`<sup>Optional</sup> <a name="CustomTags" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.customTags"></a>

```csharp
public IResolvable|AiSearchEndpointCustomTags[] CustomTags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#custom_tags AiSearchEndpoint#custom_tags}.

---

##### `EndpointId`<sup>Optional</sup> <a name="EndpointId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.endpointId"></a>

```csharp
public string EndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#endpoint_id AiSearchEndpoint#endpoint_id}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.providerConfig"></a>

```csharp
public AiSearchEndpointProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig">AiSearchEndpointProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#provider_config AiSearchEndpoint#provider_config}.

---

##### `ReplicaCount`<sup>Optional</sup> <a name="ReplicaCount" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.replicaCount"></a>

```csharp
public double ReplicaCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#replica_count AiSearchEndpoint#replica_count}.

---

##### `TargetQps`<sup>Optional</sup> <a name="TargetQps" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.targetQps"></a>

```csharp
public double TargetQps { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#target_qps AiSearchEndpoint#target_qps}.

---

##### `UsagePolicyId`<sup>Optional</sup> <a name="UsagePolicyId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.usagePolicyId"></a>

```csharp
public string UsagePolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#usage_policy_id AiSearchEndpoint#usage_policy_id}.

---

### AiSearchEndpointCustomTags <a name="AiSearchEndpointCustomTags" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchEndpointCustomTags {
    string Key,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#key AiSearchEndpoint#key}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#value AiSearchEndpoint#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#key AiSearchEndpoint#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#value AiSearchEndpoint#value}.

---

### AiSearchEndpointEndpointStatus <a name="AiSearchEndpointEndpointStatus" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchEndpointEndpointStatus {

};
```


### AiSearchEndpointProviderConfig <a name="AiSearchEndpointProviderConfig" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchEndpointProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#workspace_id AiSearchEndpoint#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#workspace_id AiSearchEndpoint#workspace_id}.

---

### AiSearchEndpointScalingInfo <a name="AiSearchEndpointScalingInfo" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchEndpointScalingInfo {
    double RequestedTargetQps = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfo.property.requestedTargetQps">RequestedTargetQps</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#requested_target_qps AiSearchEndpoint#requested_target_qps}. |

---

##### `RequestedTargetQps`<sup>Optional</sup> <a name="RequestedTargetQps" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfo.property.requestedTargetQps"></a>

```csharp
public double RequestedTargetQps { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#requested_target_qps AiSearchEndpoint#requested_target_qps}.

---

### AiSearchEndpointThroughputInfo <a name="AiSearchEndpointThroughputInfo" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchEndpointThroughputInfo {
    double MaximumConcurrencyAllowed = null,
    double MinimalConcurrencyAllowed = null,
    double RequestedConcurrency = null,
    double RequestedNumReplicas = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.maximumConcurrencyAllowed">MaximumConcurrencyAllowed</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#maximum_concurrency_allowed AiSearchEndpoint#maximum_concurrency_allowed}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.minimalConcurrencyAllowed">MinimalConcurrencyAllowed</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#minimal_concurrency_allowed AiSearchEndpoint#minimal_concurrency_allowed}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.requestedConcurrency">RequestedConcurrency</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#requested_concurrency AiSearchEndpoint#requested_concurrency}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.requestedNumReplicas">RequestedNumReplicas</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#requested_num_replicas AiSearchEndpoint#requested_num_replicas}. |

---

##### `MaximumConcurrencyAllowed`<sup>Optional</sup> <a name="MaximumConcurrencyAllowed" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.maximumConcurrencyAllowed"></a>

```csharp
public double MaximumConcurrencyAllowed { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#maximum_concurrency_allowed AiSearchEndpoint#maximum_concurrency_allowed}.

---

##### `MinimalConcurrencyAllowed`<sup>Optional</sup> <a name="MinimalConcurrencyAllowed" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.minimalConcurrencyAllowed"></a>

```csharp
public double MinimalConcurrencyAllowed { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#minimal_concurrency_allowed AiSearchEndpoint#minimal_concurrency_allowed}.

---

##### `RequestedConcurrency`<sup>Optional</sup> <a name="RequestedConcurrency" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.requestedConcurrency"></a>

```csharp
public double RequestedConcurrency { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#requested_concurrency AiSearchEndpoint#requested_concurrency}.

---

##### `RequestedNumReplicas`<sup>Optional</sup> <a name="RequestedNumReplicas" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.requestedNumReplicas"></a>

```csharp
public double RequestedNumReplicas { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_search_endpoint#requested_num_replicas AiSearchEndpoint#requested_num_replicas}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiSearchEndpointCustomTagsList <a name="AiSearchEndpointCustomTagsList" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchEndpointCustomTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.get"></a>

```csharp
private AiSearchEndpointCustomTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.property.internalValue"></a>

```csharp
public IResolvable|AiSearchEndpointCustomTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a>[]

---


### AiSearchEndpointCustomTagsOutputReference <a name="AiSearchEndpointCustomTagsOutputReference" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchEndpointCustomTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiSearchEndpointCustomTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a>

---


### AiSearchEndpointEndpointStatusOutputReference <a name="AiSearchEndpointEndpointStatusOutputReference" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchEndpointEndpointStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatus">AiSearchEndpointEndpointStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.internalValue"></a>

```csharp
public AiSearchEndpointEndpointStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatus">AiSearchEndpointEndpointStatus</a>

---


### AiSearchEndpointProviderConfigOutputReference <a name="AiSearchEndpointProviderConfigOutputReference" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchEndpointProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig">AiSearchEndpointProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiSearchEndpointProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig">AiSearchEndpointProviderConfig</a>

---


### AiSearchEndpointScalingInfoOutputReference <a name="AiSearchEndpointScalingInfoOutputReference" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchEndpointScalingInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.resetRequestedTargetQps">ResetRequestedTargetQps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRequestedTargetQps` <a name="ResetRequestedTargetQps" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.resetRequestedTargetQps"></a>

```csharp
private void ResetRequestedTargetQps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.requestedTargetQpsInput">RequestedTargetQpsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.requestedTargetQps">RequestedTargetQps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfo">AiSearchEndpointScalingInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `RequestedTargetQpsInput`<sup>Optional</sup> <a name="RequestedTargetQpsInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.requestedTargetQpsInput"></a>

```csharp
public double RequestedTargetQpsInput { get; }
```

- *Type:* double

---

##### `RequestedTargetQps`<sup>Required</sup> <a name="RequestedTargetQps" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.requestedTargetQps"></a>

```csharp
public double RequestedTargetQps { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.internalValue"></a>

```csharp
public AiSearchEndpointScalingInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfo">AiSearchEndpointScalingInfo</a>

---


### AiSearchEndpointThroughputInfoOutputReference <a name="AiSearchEndpointThroughputInfoOutputReference" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchEndpointThroughputInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetMaximumConcurrencyAllowed">ResetMaximumConcurrencyAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetMinimalConcurrencyAllowed">ResetMinimalConcurrencyAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetRequestedConcurrency">ResetRequestedConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetRequestedNumReplicas">ResetRequestedNumReplicas</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumConcurrencyAllowed` <a name="ResetMaximumConcurrencyAllowed" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetMaximumConcurrencyAllowed"></a>

```csharp
private void ResetMaximumConcurrencyAllowed()
```

##### `ResetMinimalConcurrencyAllowed` <a name="ResetMinimalConcurrencyAllowed" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetMinimalConcurrencyAllowed"></a>

```csharp
private void ResetMinimalConcurrencyAllowed()
```

##### `ResetRequestedConcurrency` <a name="ResetRequestedConcurrency" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetRequestedConcurrency"></a>

```csharp
private void ResetRequestedConcurrency()
```

##### `ResetRequestedNumReplicas` <a name="ResetRequestedNumReplicas" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetRequestedNumReplicas"></a>

```csharp
private void ResetRequestedNumReplicas()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.changeRequestMessage">ChangeRequestMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.changeRequestState">ChangeRequestState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.currentConcurrency">CurrentConcurrency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.currentConcurrencyUtilizationPercentage">CurrentConcurrencyUtilizationPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.currentNumReplicas">CurrentNumReplicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowedInput">MaximumConcurrencyAllowedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowedInput">MinimalConcurrencyAllowedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrencyInput">RequestedConcurrencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicasInput">RequestedNumReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowed">MaximumConcurrencyAllowed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowed">MinimalConcurrencyAllowed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrency">RequestedConcurrency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicas">RequestedNumReplicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo">AiSearchEndpointThroughputInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChangeRequestMessage`<sup>Required</sup> <a name="ChangeRequestMessage" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.changeRequestMessage"></a>

```csharp
public string ChangeRequestMessage { get; }
```

- *Type:* string

---

##### `ChangeRequestState`<sup>Required</sup> <a name="ChangeRequestState" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.changeRequestState"></a>

```csharp
public string ChangeRequestState { get; }
```

- *Type:* string

---

##### `CurrentConcurrency`<sup>Required</sup> <a name="CurrentConcurrency" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.currentConcurrency"></a>

```csharp
public double CurrentConcurrency { get; }
```

- *Type:* double

---

##### `CurrentConcurrencyUtilizationPercentage`<sup>Required</sup> <a name="CurrentConcurrencyUtilizationPercentage" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.currentConcurrencyUtilizationPercentage"></a>

```csharp
public double CurrentConcurrencyUtilizationPercentage { get; }
```

- *Type:* double

---

##### `CurrentNumReplicas`<sup>Required</sup> <a name="CurrentNumReplicas" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.currentNumReplicas"></a>

```csharp
public double CurrentNumReplicas { get; }
```

- *Type:* double

---

##### `MaximumConcurrencyAllowedInput`<sup>Optional</sup> <a name="MaximumConcurrencyAllowedInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowedInput"></a>

```csharp
public double MaximumConcurrencyAllowedInput { get; }
```

- *Type:* double

---

##### `MinimalConcurrencyAllowedInput`<sup>Optional</sup> <a name="MinimalConcurrencyAllowedInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowedInput"></a>

```csharp
public double MinimalConcurrencyAllowedInput { get; }
```

- *Type:* double

---

##### `RequestedConcurrencyInput`<sup>Optional</sup> <a name="RequestedConcurrencyInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrencyInput"></a>

```csharp
public double RequestedConcurrencyInput { get; }
```

- *Type:* double

---

##### `RequestedNumReplicasInput`<sup>Optional</sup> <a name="RequestedNumReplicasInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicasInput"></a>

```csharp
public double RequestedNumReplicasInput { get; }
```

- *Type:* double

---

##### `MaximumConcurrencyAllowed`<sup>Required</sup> <a name="MaximumConcurrencyAllowed" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowed"></a>

```csharp
public double MaximumConcurrencyAllowed { get; }
```

- *Type:* double

---

##### `MinimalConcurrencyAllowed`<sup>Required</sup> <a name="MinimalConcurrencyAllowed" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowed"></a>

```csharp
public double MinimalConcurrencyAllowed { get; }
```

- *Type:* double

---

##### `RequestedConcurrency`<sup>Required</sup> <a name="RequestedConcurrency" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrency"></a>

```csharp
public double RequestedConcurrency { get; }
```

- *Type:* double

---

##### `RequestedNumReplicas`<sup>Required</sup> <a name="RequestedNumReplicas" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicas"></a>

```csharp
public double RequestedNumReplicas { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.internalValue"></a>

```csharp
public AiSearchEndpointThroughputInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo">AiSearchEndpointThroughputInfo</a>

---



