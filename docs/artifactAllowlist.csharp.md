# `artifactAllowlist` Submodule <a name="`artifactAllowlist` Submodule" id="@cdktn/provider-databricks.artifactAllowlist"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArtifactAllowlist <a name="ArtifactAllowlist" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/artifact_allowlist databricks_artifact_allowlist}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ArtifactAllowlist(Construct Scope, string Id, ArtifactAllowlistConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig">ArtifactAllowlistConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig">ArtifactAllowlistConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.putArtifactMatcher">PutArtifactMatcher</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetMetastoreId">ResetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutArtifactMatcher` <a name="PutArtifactMatcher" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.putArtifactMatcher"></a>

```csharp
private void PutArtifactMatcher(IResolvable|ArtifactAllowlistArtifactMatcher[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.putArtifactMatcher.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher">ArtifactAllowlistArtifactMatcher</a>[]

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.putProviderConfig"></a>

```csharp
private void PutProviderConfig(ArtifactAllowlistProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig">ArtifactAllowlistProviderConfig</a>

---

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetCreatedAt"></a>

```csharp
private void ResetCreatedAt()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetCreatedBy"></a>

```csharp
private void ResetCreatedBy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetastoreId` <a name="ResetMetastoreId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetMetastoreId"></a>

```csharp
private void ResetMetastoreId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ArtifactAllowlist resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

ArtifactAllowlist.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

ArtifactAllowlist.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

ArtifactAllowlist.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

ArtifactAllowlist.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ArtifactAllowlist resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ArtifactAllowlist to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ArtifactAllowlist that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/artifact_allowlist#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ArtifactAllowlist to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.artifactMatcher">ArtifactMatcher</a></code> | <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList">ArtifactAllowlistArtifactMatcherList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference">ArtifactAllowlistProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.artifactMatcherInput">ArtifactMatcherInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher">ArtifactAllowlistArtifactMatcher</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.artifactTypeInput">ArtifactTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.createdAtInput">CreatedAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.createdByInput">CreatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig">ArtifactAllowlistProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.artifactType">ArtifactType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.createdAt">CreatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.metastoreId">MetastoreId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ArtifactMatcher`<sup>Required</sup> <a name="ArtifactMatcher" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.artifactMatcher"></a>

```csharp
public ArtifactAllowlistArtifactMatcherList ArtifactMatcher { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList">ArtifactAllowlistArtifactMatcherList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.providerConfig"></a>

```csharp
public ArtifactAllowlistProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference">ArtifactAllowlistProviderConfigOutputReference</a>

---

##### `ArtifactMatcherInput`<sup>Optional</sup> <a name="ArtifactMatcherInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.artifactMatcherInput"></a>

```csharp
public IResolvable|ArtifactAllowlistArtifactMatcher[] ArtifactMatcherInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher">ArtifactAllowlistArtifactMatcher</a>[]

---

##### `ArtifactTypeInput`<sup>Optional</sup> <a name="ArtifactTypeInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.artifactTypeInput"></a>

```csharp
public string ArtifactTypeInput { get; }
```

- *Type:* string

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.createdAtInput"></a>

```csharp
public double CreatedAtInput { get; }
```

- *Type:* double

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.createdByInput"></a>

```csharp
public string CreatedByInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.metastoreIdInput"></a>

```csharp
public string MetastoreIdInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.providerConfigInput"></a>

```csharp
public ArtifactAllowlistProviderConfig ProviderConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig">ArtifactAllowlistProviderConfig</a>

---

##### `ArtifactType`<sup>Required</sup> <a name="ArtifactType" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.artifactType"></a>

```csharp
public string ArtifactType { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.createdAt"></a>

```csharp
public double CreatedAt { get; }
```

- *Type:* double

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.metastoreId"></a>

```csharp
public string MetastoreId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ArtifactAllowlistArtifactMatcher <a name="ArtifactAllowlistArtifactMatcher" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ArtifactAllowlistArtifactMatcher {
    string Artifact,
    string MatchType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher.property.artifact">Artifact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/artifact_allowlist#artifact ArtifactAllowlist#artifact}. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher.property.matchType">MatchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/artifact_allowlist#match_type ArtifactAllowlist#match_type}. |

---

##### `Artifact`<sup>Required</sup> <a name="Artifact" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher.property.artifact"></a>

```csharp
public string Artifact { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/artifact_allowlist#artifact ArtifactAllowlist#artifact}.

---

##### `MatchType`<sup>Required</sup> <a name="MatchType" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher.property.matchType"></a>

```csharp
public string MatchType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/artifact_allowlist#match_type ArtifactAllowlist#match_type}.

---

### ArtifactAllowlistConfig <a name="ArtifactAllowlistConfig" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ArtifactAllowlistConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|ArtifactAllowlistArtifactMatcher[] ArtifactMatcher,
    string ArtifactType,
    double CreatedAt = null,
    string CreatedBy = null,
    string Id = null,
    string MetastoreId = null,
    ArtifactAllowlistProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.artifactMatcher">ArtifactMatcher</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher">ArtifactAllowlistArtifactMatcher</a>[]</code> | artifact_matcher block. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.artifactType">ArtifactType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/artifact_allowlist#artifact_type ArtifactAllowlist#artifact_type}. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.createdAt">CreatedAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/artifact_allowlist#created_at ArtifactAllowlist#created_at}. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.createdBy">CreatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/artifact_allowlist#created_by ArtifactAllowlist#created_by}. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/artifact_allowlist#id ArtifactAllowlist#id}. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.metastoreId">MetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/artifact_allowlist#metastore_id ArtifactAllowlist#metastore_id}. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig">ArtifactAllowlistProviderConfig</a></code> | provider_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ArtifactMatcher`<sup>Required</sup> <a name="ArtifactMatcher" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.artifactMatcher"></a>

```csharp
public IResolvable|ArtifactAllowlistArtifactMatcher[] ArtifactMatcher { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher">ArtifactAllowlistArtifactMatcher</a>[]

artifact_matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/artifact_allowlist#artifact_matcher ArtifactAllowlist#artifact_matcher}

---

##### `ArtifactType`<sup>Required</sup> <a name="ArtifactType" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.artifactType"></a>

```csharp
public string ArtifactType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/artifact_allowlist#artifact_type ArtifactAllowlist#artifact_type}.

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.createdAt"></a>

```csharp
public double CreatedAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/artifact_allowlist#created_at ArtifactAllowlist#created_at}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.createdBy"></a>

```csharp
public string CreatedBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/artifact_allowlist#created_by ArtifactAllowlist#created_by}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/artifact_allowlist#id ArtifactAllowlist#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MetastoreId`<sup>Optional</sup> <a name="MetastoreId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.metastoreId"></a>

```csharp
public string MetastoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/artifact_allowlist#metastore_id ArtifactAllowlist#metastore_id}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.providerConfig"></a>

```csharp
public ArtifactAllowlistProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig">ArtifactAllowlistProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/artifact_allowlist#provider_config ArtifactAllowlist#provider_config}

---

### ArtifactAllowlistProviderConfig <a name="ArtifactAllowlistProviderConfig" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ArtifactAllowlistProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/artifact_allowlist#workspace_id ArtifactAllowlist#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/artifact_allowlist#workspace_id ArtifactAllowlist#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArtifactAllowlistArtifactMatcherList <a name="ArtifactAllowlistArtifactMatcherList" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ArtifactAllowlistArtifactMatcherList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.get"></a>

```csharp
private ArtifactAllowlistArtifactMatcherOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher">ArtifactAllowlistArtifactMatcher</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.property.internalValue"></a>

```csharp
public IResolvable|ArtifactAllowlistArtifactMatcher[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher">ArtifactAllowlistArtifactMatcher</a>[]

---


### ArtifactAllowlistArtifactMatcherOutputReference <a name="ArtifactAllowlistArtifactMatcherOutputReference" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ArtifactAllowlistArtifactMatcherOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.artifactInput">ArtifactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.matchTypeInput">MatchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.artifact">Artifact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.matchType">MatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher">ArtifactAllowlistArtifactMatcher</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArtifactInput`<sup>Optional</sup> <a name="ArtifactInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.artifactInput"></a>

```csharp
public string ArtifactInput { get; }
```

- *Type:* string

---

##### `MatchTypeInput`<sup>Optional</sup> <a name="MatchTypeInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.matchTypeInput"></a>

```csharp
public string MatchTypeInput { get; }
```

- *Type:* string

---

##### `Artifact`<sup>Required</sup> <a name="Artifact" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.artifact"></a>

```csharp
public string Artifact { get; }
```

- *Type:* string

---

##### `MatchType`<sup>Required</sup> <a name="MatchType" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.matchType"></a>

```csharp
public string MatchType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ArtifactAllowlistArtifactMatcher InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher">ArtifactAllowlistArtifactMatcher</a>

---


### ArtifactAllowlistProviderConfigOutputReference <a name="ArtifactAllowlistProviderConfigOutputReference" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ArtifactAllowlistProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig">ArtifactAllowlistProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.internalValue"></a>

```csharp
public ArtifactAllowlistProviderConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig">ArtifactAllowlistProviderConfig</a>

---



