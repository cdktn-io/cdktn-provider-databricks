# `aiSearchIndex` Submodule <a name="`aiSearchIndex` Submodule" id="@cdktn/provider-databricks.aiSearchIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiSearchIndex <a name="AiSearchIndex" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index databricks_ai_search_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchIndex(Construct Scope, string Id, AiSearchIndexConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig">AiSearchIndexConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig">AiSearchIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.putDeltaSyncIndexSpec">PutDeltaSyncIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.putDirectAccessIndexSpec">PutDirectAccessIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.resetDeltaSyncIndexSpec">ResetDeltaSyncIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.resetDirectAccessIndexSpec">ResetDirectAccessIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.resetIndexId">ResetIndexId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.resetIndexSubtype">ResetIndexSubtype</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeltaSyncIndexSpec` <a name="PutDeltaSyncIndexSpec" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.putDeltaSyncIndexSpec"></a>

```csharp
private void PutDeltaSyncIndexSpec(AiSearchIndexDeltaSyncIndexSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.putDeltaSyncIndexSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec">AiSearchIndexDeltaSyncIndexSpec</a>

---

##### `PutDirectAccessIndexSpec` <a name="PutDirectAccessIndexSpec" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.putDirectAccessIndexSpec"></a>

```csharp
private void PutDirectAccessIndexSpec(AiSearchIndexDirectAccessIndexSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.putDirectAccessIndexSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec">AiSearchIndexDirectAccessIndexSpec</a>

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.putProviderConfig"></a>

```csharp
private void PutProviderConfig(AiSearchIndexProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfig">AiSearchIndexProviderConfig</a>

---

##### `ResetDeltaSyncIndexSpec` <a name="ResetDeltaSyncIndexSpec" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.resetDeltaSyncIndexSpec"></a>

```csharp
private void ResetDeltaSyncIndexSpec()
```

##### `ResetDirectAccessIndexSpec` <a name="ResetDirectAccessIndexSpec" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.resetDirectAccessIndexSpec"></a>

```csharp
private void ResetDirectAccessIndexSpec()
```

##### `ResetIndexId` <a name="ResetIndexId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.resetIndexId"></a>

```csharp
private void ResetIndexId()
```

##### `ResetIndexSubtype` <a name="ResetIndexSubtype" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.resetIndexSubtype"></a>

```csharp
private void ResetIndexSubtype()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AiSearchIndex resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

AiSearchIndex.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

AiSearchIndex.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

AiSearchIndex.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

AiSearchIndex.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AiSearchIndex resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AiSearchIndex to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AiSearchIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AiSearchIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.deltaSyncIndexSpec">DeltaSyncIndexSpec</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference">AiSearchIndexDeltaSyncIndexSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.directAccessIndexSpec">DirectAccessIndexSpec</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference">AiSearchIndexDirectAccessIndexSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference">AiSearchIndexProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference">AiSearchIndexStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.deltaSyncIndexSpecInput">DeltaSyncIndexSpecInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec">AiSearchIndexDeltaSyncIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.directAccessIndexSpecInput">DirectAccessIndexSpecInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec">AiSearchIndexDirectAccessIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.indexIdInput">IndexIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.indexSubtypeInput">IndexSubtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.indexTypeInput">IndexTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.primaryKeyInput">PrimaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfig">AiSearchIndexProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.indexId">IndexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.indexSubtype">IndexSubtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.indexType">IndexType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `DeltaSyncIndexSpec`<sup>Required</sup> <a name="DeltaSyncIndexSpec" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.deltaSyncIndexSpec"></a>

```csharp
public AiSearchIndexDeltaSyncIndexSpecOutputReference DeltaSyncIndexSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference">AiSearchIndexDeltaSyncIndexSpecOutputReference</a>

---

##### `DirectAccessIndexSpec`<sup>Required</sup> <a name="DirectAccessIndexSpec" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.directAccessIndexSpec"></a>

```csharp
public AiSearchIndexDirectAccessIndexSpecOutputReference DirectAccessIndexSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference">AiSearchIndexDirectAccessIndexSpecOutputReference</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.providerConfig"></a>

```csharp
public AiSearchIndexProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference">AiSearchIndexProviderConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.status"></a>

```csharp
public AiSearchIndexStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference">AiSearchIndexStatusOutputReference</a>

---

##### `DeltaSyncIndexSpecInput`<sup>Optional</sup> <a name="DeltaSyncIndexSpecInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.deltaSyncIndexSpecInput"></a>

```csharp
public IResolvable|AiSearchIndexDeltaSyncIndexSpec DeltaSyncIndexSpecInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec">AiSearchIndexDeltaSyncIndexSpec</a>

---

##### `DirectAccessIndexSpecInput`<sup>Optional</sup> <a name="DirectAccessIndexSpecInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.directAccessIndexSpecInput"></a>

```csharp
public IResolvable|AiSearchIndexDirectAccessIndexSpec DirectAccessIndexSpecInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec">AiSearchIndexDirectAccessIndexSpec</a>

---

##### `IndexIdInput`<sup>Optional</sup> <a name="IndexIdInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.indexIdInput"></a>

```csharp
public string IndexIdInput { get; }
```

- *Type:* string

---

##### `IndexSubtypeInput`<sup>Optional</sup> <a name="IndexSubtypeInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.indexSubtypeInput"></a>

```csharp
public string IndexSubtypeInput { get; }
```

- *Type:* string

---

##### `IndexTypeInput`<sup>Optional</sup> <a name="IndexTypeInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.indexTypeInput"></a>

```csharp
public string IndexTypeInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `PrimaryKeyInput`<sup>Optional</sup> <a name="PrimaryKeyInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.primaryKeyInput"></a>

```csharp
public string PrimaryKeyInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.providerConfigInput"></a>

```csharp
public IResolvable|AiSearchIndexProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfig">AiSearchIndexProviderConfig</a>

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.indexId"></a>

```csharp
public string IndexId { get; }
```

- *Type:* string

---

##### `IndexSubtype`<sup>Required</sup> <a name="IndexSubtype" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.indexSubtype"></a>

```csharp
public string IndexSubtype { get; }
```

- *Type:* string

---

##### `IndexType`<sup>Required</sup> <a name="IndexType" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.indexType"></a>

```csharp
public string IndexType { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AiSearchIndexConfig <a name="AiSearchIndexConfig" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchIndexConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string IndexType,
    string Parent,
    string PrimaryKey,
    AiSearchIndexDeltaSyncIndexSpec DeltaSyncIndexSpec = null,
    AiSearchIndexDirectAccessIndexSpec DirectAccessIndexSpec = null,
    string IndexId = null,
    string IndexSubtype = null,
    AiSearchIndexProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.indexType">IndexType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#index_type AiSearchIndex#index_type}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.parent">Parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#parent AiSearchIndex#parent}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#primary_key AiSearchIndex#primary_key}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.deltaSyncIndexSpec">DeltaSyncIndexSpec</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec">AiSearchIndexDeltaSyncIndexSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#delta_sync_index_spec AiSearchIndex#delta_sync_index_spec}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.directAccessIndexSpec">DirectAccessIndexSpec</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec">AiSearchIndexDirectAccessIndexSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#direct_access_index_spec AiSearchIndex#direct_access_index_spec}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.indexId">IndexId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#index_id AiSearchIndex#index_id}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.indexSubtype">IndexSubtype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#index_subtype AiSearchIndex#index_subtype}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfig">AiSearchIndexProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#provider_config AiSearchIndex#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IndexType`<sup>Required</sup> <a name="IndexType" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.indexType"></a>

```csharp
public string IndexType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#index_type AiSearchIndex#index_type}.

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#parent AiSearchIndex#parent}.

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#primary_key AiSearchIndex#primary_key}.

---

##### `DeltaSyncIndexSpec`<sup>Optional</sup> <a name="DeltaSyncIndexSpec" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.deltaSyncIndexSpec"></a>

```csharp
public AiSearchIndexDeltaSyncIndexSpec DeltaSyncIndexSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec">AiSearchIndexDeltaSyncIndexSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#delta_sync_index_spec AiSearchIndex#delta_sync_index_spec}.

---

##### `DirectAccessIndexSpec`<sup>Optional</sup> <a name="DirectAccessIndexSpec" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.directAccessIndexSpec"></a>

```csharp
public AiSearchIndexDirectAccessIndexSpec DirectAccessIndexSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec">AiSearchIndexDirectAccessIndexSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#direct_access_index_spec AiSearchIndex#direct_access_index_spec}.

---

##### `IndexId`<sup>Optional</sup> <a name="IndexId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.indexId"></a>

```csharp
public string IndexId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#index_id AiSearchIndex#index_id}.

---

##### `IndexSubtype`<sup>Optional</sup> <a name="IndexSubtype" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.indexSubtype"></a>

```csharp
public string IndexSubtype { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#index_subtype AiSearchIndex#index_subtype}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.providerConfig"></a>

```csharp
public AiSearchIndexProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfig">AiSearchIndexProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#provider_config AiSearchIndex#provider_config}.

---

### AiSearchIndexDeltaSyncIndexSpec <a name="AiSearchIndexDeltaSyncIndexSpec" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchIndexDeltaSyncIndexSpec {
    string PipelineType,
    string[] ColumnsToSync = null,
    IResolvable|AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[] EmbeddingSourceColumns = null,
    IResolvable|AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[] EmbeddingVectorColumns = null,
    string EmbeddingWritebackTable = null,
    string SourceTable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec.property.pipelineType">PipelineType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#pipeline_type AiSearchIndex#pipeline_type}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec.property.columnsToSync">ColumnsToSync</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#columns_to_sync AiSearchIndex#columns_to_sync}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec.property.embeddingSourceColumns">EmbeddingSourceColumns</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#embedding_source_columns AiSearchIndex#embedding_source_columns}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec.property.embeddingVectorColumns">EmbeddingVectorColumns</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#embedding_vector_columns AiSearchIndex#embedding_vector_columns}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec.property.embeddingWritebackTable">EmbeddingWritebackTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#embedding_writeback_table AiSearchIndex#embedding_writeback_table}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec.property.sourceTable">SourceTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#source_table AiSearchIndex#source_table}. |

---

##### `PipelineType`<sup>Required</sup> <a name="PipelineType" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec.property.pipelineType"></a>

```csharp
public string PipelineType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#pipeline_type AiSearchIndex#pipeline_type}.

---

##### `ColumnsToSync`<sup>Optional</sup> <a name="ColumnsToSync" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec.property.columnsToSync"></a>

```csharp
public string[] ColumnsToSync { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#columns_to_sync AiSearchIndex#columns_to_sync}.

---

##### `EmbeddingSourceColumns`<sup>Optional</sup> <a name="EmbeddingSourceColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec.property.embeddingSourceColumns"></a>

```csharp
public IResolvable|AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[] EmbeddingSourceColumns { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#embedding_source_columns AiSearchIndex#embedding_source_columns}.

---

##### `EmbeddingVectorColumns`<sup>Optional</sup> <a name="EmbeddingVectorColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec.property.embeddingVectorColumns"></a>

```csharp
public IResolvable|AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[] EmbeddingVectorColumns { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#embedding_vector_columns AiSearchIndex#embedding_vector_columns}.

---

##### `EmbeddingWritebackTable`<sup>Optional</sup> <a name="EmbeddingWritebackTable" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec.property.embeddingWritebackTable"></a>

```csharp
public string EmbeddingWritebackTable { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#embedding_writeback_table AiSearchIndex#embedding_writeback_table}.

---

##### `SourceTable`<sup>Optional</sup> <a name="SourceTable" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec.property.sourceTable"></a>

```csharp
public string SourceTable { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#source_table AiSearchIndex#source_table}.

---

### AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns <a name="AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns {
    string EmbeddingModelEndpoint = null,
    string ModelEndpointNameForQuery = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint">EmbeddingModelEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#embedding_model_endpoint AiSearchIndex#embedding_model_endpoint}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery">ModelEndpointNameForQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#model_endpoint_name_for_query AiSearchIndex#model_endpoint_name_for_query}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#name AiSearchIndex#name}. |

---

##### `EmbeddingModelEndpoint`<sup>Optional</sup> <a name="EmbeddingModelEndpoint" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint"></a>

```csharp
public string EmbeddingModelEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#embedding_model_endpoint AiSearchIndex#embedding_model_endpoint}.

---

##### `ModelEndpointNameForQuery`<sup>Optional</sup> <a name="ModelEndpointNameForQuery" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery"></a>

```csharp
public string ModelEndpointNameForQuery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#model_endpoint_name_for_query AiSearchIndex#model_endpoint_name_for_query}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#name AiSearchIndex#name}.

---

### AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns <a name="AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns {
    double EmbeddingDimension = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.embeddingDimension">EmbeddingDimension</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#embedding_dimension AiSearchIndex#embedding_dimension}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#name AiSearchIndex#name}. |

---

##### `EmbeddingDimension`<sup>Optional</sup> <a name="EmbeddingDimension" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.embeddingDimension"></a>

```csharp
public double EmbeddingDimension { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#embedding_dimension AiSearchIndex#embedding_dimension}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#name AiSearchIndex#name}.

---

### AiSearchIndexDirectAccessIndexSpec <a name="AiSearchIndexDirectAccessIndexSpec" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchIndexDirectAccessIndexSpec {
    IResolvable|AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[] EmbeddingSourceColumns = null,
    IResolvable|AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[] EmbeddingVectorColumns = null,
    string SchemaJson = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec.property.embeddingSourceColumns">EmbeddingSourceColumns</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#embedding_source_columns AiSearchIndex#embedding_source_columns}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec.property.embeddingVectorColumns">EmbeddingVectorColumns</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#embedding_vector_columns AiSearchIndex#embedding_vector_columns}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec.property.schemaJson">SchemaJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#schema_json AiSearchIndex#schema_json}. |

---

##### `EmbeddingSourceColumns`<sup>Optional</sup> <a name="EmbeddingSourceColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec.property.embeddingSourceColumns"></a>

```csharp
public IResolvable|AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[] EmbeddingSourceColumns { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#embedding_source_columns AiSearchIndex#embedding_source_columns}.

---

##### `EmbeddingVectorColumns`<sup>Optional</sup> <a name="EmbeddingVectorColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec.property.embeddingVectorColumns"></a>

```csharp
public IResolvable|AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[] EmbeddingVectorColumns { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#embedding_vector_columns AiSearchIndex#embedding_vector_columns}.

---

##### `SchemaJson`<sup>Optional</sup> <a name="SchemaJson" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec.property.schemaJson"></a>

```csharp
public string SchemaJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#schema_json AiSearchIndex#schema_json}.

---

### AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns <a name="AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns {
    string EmbeddingModelEndpoint = null,
    string ModelEndpointNameForQuery = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint">EmbeddingModelEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#embedding_model_endpoint AiSearchIndex#embedding_model_endpoint}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery">ModelEndpointNameForQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#model_endpoint_name_for_query AiSearchIndex#model_endpoint_name_for_query}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#name AiSearchIndex#name}. |

---

##### `EmbeddingModelEndpoint`<sup>Optional</sup> <a name="EmbeddingModelEndpoint" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint"></a>

```csharp
public string EmbeddingModelEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#embedding_model_endpoint AiSearchIndex#embedding_model_endpoint}.

---

##### `ModelEndpointNameForQuery`<sup>Optional</sup> <a name="ModelEndpointNameForQuery" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery"></a>

```csharp
public string ModelEndpointNameForQuery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#model_endpoint_name_for_query AiSearchIndex#model_endpoint_name_for_query}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#name AiSearchIndex#name}.

---

### AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns <a name="AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns {
    double EmbeddingDimension = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.embeddingDimension">EmbeddingDimension</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#embedding_dimension AiSearchIndex#embedding_dimension}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#name AiSearchIndex#name}. |

---

##### `EmbeddingDimension`<sup>Optional</sup> <a name="EmbeddingDimension" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.embeddingDimension"></a>

```csharp
public double EmbeddingDimension { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#embedding_dimension AiSearchIndex#embedding_dimension}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#name AiSearchIndex#name}.

---

### AiSearchIndexProviderConfig <a name="AiSearchIndexProviderConfig" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchIndexProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#workspace_id AiSearchIndex#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/ai_search_index#workspace_id AiSearchIndex#workspace_id}.

---

### AiSearchIndexStatus <a name="AiSearchIndexStatus" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchIndexStatus {

};
```


## Classes <a name="Classes" id="Classes"></a>

### AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList <a name="AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get"></a>

```csharp
private AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.internalValue"></a>

```csharp
public IResolvable|AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

---


### AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference <a name="AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint">ResetEmbeddingModelEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery">ResetModelEndpointNameForQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmbeddingModelEndpoint` <a name="ResetEmbeddingModelEndpoint" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint"></a>

```csharp
private void ResetEmbeddingModelEndpoint()
```

##### `ResetModelEndpointNameForQuery` <a name="ResetModelEndpointNameForQuery" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery"></a>

```csharp
private void ResetModelEndpointNameForQuery()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput">EmbeddingModelEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput">ModelEndpointNameForQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint">EmbeddingModelEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery">ModelEndpointNameForQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmbeddingModelEndpointInput`<sup>Optional</sup> <a name="EmbeddingModelEndpointInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput"></a>

```csharp
public string EmbeddingModelEndpointInput { get; }
```

- *Type:* string

---

##### `ModelEndpointNameForQueryInput`<sup>Optional</sup> <a name="ModelEndpointNameForQueryInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput"></a>

```csharp
public string ModelEndpointNameForQueryInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `EmbeddingModelEndpoint`<sup>Required</sup> <a name="EmbeddingModelEndpoint" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint"></a>

```csharp
public string EmbeddingModelEndpoint { get; }
```

- *Type:* string

---

##### `ModelEndpointNameForQuery`<sup>Required</sup> <a name="ModelEndpointNameForQuery" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery"></a>

```csharp
public string ModelEndpointNameForQuery { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>

---


### AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList <a name="AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get"></a>

```csharp
private AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.internalValue"></a>

```csharp
public IResolvable|AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

---


### AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference <a name="AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension">ResetEmbeddingDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmbeddingDimension` <a name="ResetEmbeddingDimension" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension"></a>

```csharp
private void ResetEmbeddingDimension()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput">EmbeddingDimensionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension">EmbeddingDimension</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmbeddingDimensionInput`<sup>Optional</sup> <a name="EmbeddingDimensionInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput"></a>

```csharp
public double EmbeddingDimensionInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `EmbeddingDimension`<sup>Required</sup> <a name="EmbeddingDimension" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension"></a>

```csharp
public double EmbeddingDimension { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>

---


### AiSearchIndexDeltaSyncIndexSpecOutputReference <a name="AiSearchIndexDeltaSyncIndexSpecOutputReference" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchIndexDeltaSyncIndexSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns">PutEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns">PutEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.resetColumnsToSync">ResetColumnsToSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingSourceColumns">ResetEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingVectorColumns">ResetEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingWritebackTable">ResetEmbeddingWritebackTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.resetSourceTable">ResetSourceTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEmbeddingSourceColumns` <a name="PutEmbeddingSourceColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns"></a>

```csharp
private void PutEmbeddingSourceColumns(IResolvable|AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

---

##### `PutEmbeddingVectorColumns` <a name="PutEmbeddingVectorColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns"></a>

```csharp
private void PutEmbeddingVectorColumns(IResolvable|AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

---

##### `ResetColumnsToSync` <a name="ResetColumnsToSync" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.resetColumnsToSync"></a>

```csharp
private void ResetColumnsToSync()
```

##### `ResetEmbeddingSourceColumns` <a name="ResetEmbeddingSourceColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingSourceColumns"></a>

```csharp
private void ResetEmbeddingSourceColumns()
```

##### `ResetEmbeddingVectorColumns` <a name="ResetEmbeddingVectorColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingVectorColumns"></a>

```csharp
private void ResetEmbeddingVectorColumns()
```

##### `ResetEmbeddingWritebackTable` <a name="ResetEmbeddingWritebackTable" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingWritebackTable"></a>

```csharp
private void ResetEmbeddingWritebackTable()
```

##### `ResetSourceTable` <a name="ResetSourceTable" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.resetSourceTable"></a>

```csharp
private void ResetSourceTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumns">EmbeddingSourceColumns</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList">AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumns">EmbeddingVectorColumns</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList">AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineId">PipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.columnsToSyncInput">ColumnsToSyncInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumnsInput">EmbeddingSourceColumnsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumnsInput">EmbeddingVectorColumnsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTableInput">EmbeddingWritebackTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineTypeInput">PipelineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTableInput">SourceTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.columnsToSync">ColumnsToSync</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTable">EmbeddingWritebackTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineType">PipelineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTable">SourceTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec">AiSearchIndexDeltaSyncIndexSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmbeddingSourceColumns`<sup>Required</sup> <a name="EmbeddingSourceColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumns"></a>

```csharp
public AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList EmbeddingSourceColumns { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList">AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList</a>

---

##### `EmbeddingVectorColumns`<sup>Required</sup> <a name="EmbeddingVectorColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumns"></a>

```csharp
public AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList EmbeddingVectorColumns { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList">AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList</a>

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineId"></a>

```csharp
public string PipelineId { get; }
```

- *Type:* string

---

##### `ColumnsToSyncInput`<sup>Optional</sup> <a name="ColumnsToSyncInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.columnsToSyncInput"></a>

```csharp
public string[] ColumnsToSyncInput { get; }
```

- *Type:* string[]

---

##### `EmbeddingSourceColumnsInput`<sup>Optional</sup> <a name="EmbeddingSourceColumnsInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumnsInput"></a>

```csharp
public IResolvable|AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[] EmbeddingSourceColumnsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

---

##### `EmbeddingVectorColumnsInput`<sup>Optional</sup> <a name="EmbeddingVectorColumnsInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumnsInput"></a>

```csharp
public IResolvable|AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[] EmbeddingVectorColumnsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

---

##### `EmbeddingWritebackTableInput`<sup>Optional</sup> <a name="EmbeddingWritebackTableInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTableInput"></a>

```csharp
public string EmbeddingWritebackTableInput { get; }
```

- *Type:* string

---

##### `PipelineTypeInput`<sup>Optional</sup> <a name="PipelineTypeInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineTypeInput"></a>

```csharp
public string PipelineTypeInput { get; }
```

- *Type:* string

---

##### `SourceTableInput`<sup>Optional</sup> <a name="SourceTableInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTableInput"></a>

```csharp
public string SourceTableInput { get; }
```

- *Type:* string

---

##### `ColumnsToSync`<sup>Required</sup> <a name="ColumnsToSync" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.columnsToSync"></a>

```csharp
public string[] ColumnsToSync { get; }
```

- *Type:* string[]

---

##### `EmbeddingWritebackTable`<sup>Required</sup> <a name="EmbeddingWritebackTable" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTable"></a>

```csharp
public string EmbeddingWritebackTable { get; }
```

- *Type:* string

---

##### `PipelineType`<sup>Required</sup> <a name="PipelineType" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineType"></a>

```csharp
public string PipelineType { get; }
```

- *Type:* string

---

##### `SourceTable`<sup>Required</sup> <a name="SourceTable" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTable"></a>

```csharp
public string SourceTable { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiSearchIndexDeltaSyncIndexSpec InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec">AiSearchIndexDeltaSyncIndexSpec</a>

---


### AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList <a name="AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get"></a>

```csharp
private AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.internalValue"></a>

```csharp
public IResolvable|AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

---


### AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference <a name="AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint">ResetEmbeddingModelEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery">ResetModelEndpointNameForQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmbeddingModelEndpoint` <a name="ResetEmbeddingModelEndpoint" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint"></a>

```csharp
private void ResetEmbeddingModelEndpoint()
```

##### `ResetModelEndpointNameForQuery` <a name="ResetModelEndpointNameForQuery" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery"></a>

```csharp
private void ResetModelEndpointNameForQuery()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput">EmbeddingModelEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput">ModelEndpointNameForQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint">EmbeddingModelEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery">ModelEndpointNameForQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmbeddingModelEndpointInput`<sup>Optional</sup> <a name="EmbeddingModelEndpointInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput"></a>

```csharp
public string EmbeddingModelEndpointInput { get; }
```

- *Type:* string

---

##### `ModelEndpointNameForQueryInput`<sup>Optional</sup> <a name="ModelEndpointNameForQueryInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput"></a>

```csharp
public string ModelEndpointNameForQueryInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `EmbeddingModelEndpoint`<sup>Required</sup> <a name="EmbeddingModelEndpoint" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint"></a>

```csharp
public string EmbeddingModelEndpoint { get; }
```

- *Type:* string

---

##### `ModelEndpointNameForQuery`<sup>Required</sup> <a name="ModelEndpointNameForQuery" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery"></a>

```csharp
public string ModelEndpointNameForQuery { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>

---


### AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList <a name="AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get"></a>

```csharp
private AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.internalValue"></a>

```csharp
public IResolvable|AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

---


### AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference <a name="AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension">ResetEmbeddingDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmbeddingDimension` <a name="ResetEmbeddingDimension" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension"></a>

```csharp
private void ResetEmbeddingDimension()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput">EmbeddingDimensionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension">EmbeddingDimension</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmbeddingDimensionInput`<sup>Optional</sup> <a name="EmbeddingDimensionInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput"></a>

```csharp
public double EmbeddingDimensionInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `EmbeddingDimension`<sup>Required</sup> <a name="EmbeddingDimension" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension"></a>

```csharp
public double EmbeddingDimension { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>

---


### AiSearchIndexDirectAccessIndexSpecOutputReference <a name="AiSearchIndexDirectAccessIndexSpecOutputReference" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchIndexDirectAccessIndexSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns">PutEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns">PutEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingSourceColumns">ResetEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingVectorColumns">ResetEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.resetSchemaJson">ResetSchemaJson</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEmbeddingSourceColumns` <a name="PutEmbeddingSourceColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns"></a>

```csharp
private void PutEmbeddingSourceColumns(IResolvable|AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

---

##### `PutEmbeddingVectorColumns` <a name="PutEmbeddingVectorColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns"></a>

```csharp
private void PutEmbeddingVectorColumns(IResolvable|AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

---

##### `ResetEmbeddingSourceColumns` <a name="ResetEmbeddingSourceColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingSourceColumns"></a>

```csharp
private void ResetEmbeddingSourceColumns()
```

##### `ResetEmbeddingVectorColumns` <a name="ResetEmbeddingVectorColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingVectorColumns"></a>

```csharp
private void ResetEmbeddingVectorColumns()
```

##### `ResetSchemaJson` <a name="ResetSchemaJson" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.resetSchemaJson"></a>

```csharp
private void ResetSchemaJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumns">EmbeddingSourceColumns</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList">AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumns">EmbeddingVectorColumns</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList">AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumnsInput">EmbeddingSourceColumnsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumnsInput">EmbeddingVectorColumnsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJsonInput">SchemaJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJson">SchemaJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec">AiSearchIndexDirectAccessIndexSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmbeddingSourceColumns`<sup>Required</sup> <a name="EmbeddingSourceColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumns"></a>

```csharp
public AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList EmbeddingSourceColumns { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList">AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList</a>

---

##### `EmbeddingVectorColumns`<sup>Required</sup> <a name="EmbeddingVectorColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumns"></a>

```csharp
public AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList EmbeddingVectorColumns { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList">AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList</a>

---

##### `EmbeddingSourceColumnsInput`<sup>Optional</sup> <a name="EmbeddingSourceColumnsInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumnsInput"></a>

```csharp
public IResolvable|AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[] EmbeddingSourceColumnsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

---

##### `EmbeddingVectorColumnsInput`<sup>Optional</sup> <a name="EmbeddingVectorColumnsInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumnsInput"></a>

```csharp
public IResolvable|AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[] EmbeddingVectorColumnsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

---

##### `SchemaJsonInput`<sup>Optional</sup> <a name="SchemaJsonInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJsonInput"></a>

```csharp
public string SchemaJsonInput { get; }
```

- *Type:* string

---

##### `SchemaJson`<sup>Required</sup> <a name="SchemaJson" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJson"></a>

```csharp
public string SchemaJson { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiSearchIndexDirectAccessIndexSpec InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec">AiSearchIndexDirectAccessIndexSpec</a>

---


### AiSearchIndexProviderConfigOutputReference <a name="AiSearchIndexProviderConfigOutputReference" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchIndexProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfig">AiSearchIndexProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AiSearchIndexProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfig">AiSearchIndexProviderConfig</a>

---


### AiSearchIndexStatusOutputReference <a name="AiSearchIndexStatusOutputReference" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AiSearchIndexStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.indexedRowCount">IndexedRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.indexUrl">IndexUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.ready">Ready</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatus">AiSearchIndexStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IndexedRowCount`<sup>Required</sup> <a name="IndexedRowCount" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.indexedRowCount"></a>

```csharp
public double IndexedRowCount { get; }
```

- *Type:* double

---

##### `IndexUrl`<sup>Required</sup> <a name="IndexUrl" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.indexUrl"></a>

```csharp
public string IndexUrl { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Ready`<sup>Required</sup> <a name="Ready" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.ready"></a>

```csharp
public IResolvable Ready { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.internalValue"></a>

```csharp
public AiSearchIndexStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatus">AiSearchIndexStatus</a>

---



