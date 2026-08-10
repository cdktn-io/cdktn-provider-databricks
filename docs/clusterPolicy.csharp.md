# `clusterPolicy` Submodule <a name="`clusterPolicy` Submodule" id="@cdktn/provider-databricks.clusterPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClusterPolicy <a name="ClusterPolicy" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy databricks_cluster_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ClusterPolicy(Construct Scope, string Id, ClusterPolicyConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig">ClusterPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig">ClusterPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.putLibraries">PutLibraries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.resetDefinition">ResetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.resetLibraries">ResetLibraries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.resetMaxClustersPerUser">ResetMaxClustersPerUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.resetPolicyFamilyDefinitionOverrides">ResetPolicyFamilyDefinitionOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.resetPolicyFamilyId">ResetPolicyFamilyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLibraries` <a name="PutLibraries" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.putLibraries"></a>

```csharp
private void PutLibraries(IResolvable|ClusterPolicyLibraries[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.putLibraries.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a>[]

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.putProviderConfig"></a>

```csharp
private void PutProviderConfig(ClusterPolicyProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfig">ClusterPolicyProviderConfig</a>

---

##### `ResetDefinition` <a name="ResetDefinition" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.resetDefinition"></a>

```csharp
private void ResetDefinition()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLibraries` <a name="ResetLibraries" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.resetLibraries"></a>

```csharp
private void ResetLibraries()
```

##### `ResetMaxClustersPerUser` <a name="ResetMaxClustersPerUser" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.resetMaxClustersPerUser"></a>

```csharp
private void ResetMaxClustersPerUser()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPolicyFamilyDefinitionOverrides` <a name="ResetPolicyFamilyDefinitionOverrides" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.resetPolicyFamilyDefinitionOverrides"></a>

```csharp
private void ResetPolicyFamilyDefinitionOverrides()
```

##### `ResetPolicyFamilyId` <a name="ResetPolicyFamilyId" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.resetPolicyFamilyId"></a>

```csharp
private void ResetPolicyFamilyId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ClusterPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

ClusterPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

ClusterPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

ClusterPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

ClusterPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ClusterPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ClusterPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ClusterPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ClusterPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.libraries">Libraries</a></code> | <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList">ClusterPolicyLibrariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference">ClusterPolicyProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.definitionInput">DefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.librariesInput">LibrariesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.maxClustersPerUserInput">MaxClustersPerUserInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyDefinitionOverridesInput">PolicyFamilyDefinitionOverridesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyIdInput">PolicyFamilyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfig">ClusterPolicyProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.definition">Definition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.maxClustersPerUser">MaxClustersPerUser</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyDefinitionOverrides">PolicyFamilyDefinitionOverrides</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyId">PolicyFamilyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Libraries`<sup>Required</sup> <a name="Libraries" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.libraries"></a>

```csharp
public ClusterPolicyLibrariesList Libraries { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList">ClusterPolicyLibrariesList</a>

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.providerConfig"></a>

```csharp
public ClusterPolicyProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference">ClusterPolicyProviderConfigOutputReference</a>

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.definitionInput"></a>

```csharp
public string DefinitionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LibrariesInput`<sup>Optional</sup> <a name="LibrariesInput" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.librariesInput"></a>

```csharp
public IResolvable|ClusterPolicyLibraries[] LibrariesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a>[]

---

##### `MaxClustersPerUserInput`<sup>Optional</sup> <a name="MaxClustersPerUserInput" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.maxClustersPerUserInput"></a>

```csharp
public double MaxClustersPerUserInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyFamilyDefinitionOverridesInput`<sup>Optional</sup> <a name="PolicyFamilyDefinitionOverridesInput" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyDefinitionOverridesInput"></a>

```csharp
public string PolicyFamilyDefinitionOverridesInput { get; }
```

- *Type:* string

---

##### `PolicyFamilyIdInput`<sup>Optional</sup> <a name="PolicyFamilyIdInput" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyIdInput"></a>

```csharp
public string PolicyFamilyIdInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.providerConfigInput"></a>

```csharp
public ClusterPolicyProviderConfig ProviderConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfig">ClusterPolicyProviderConfig</a>

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.definition"></a>

```csharp
public string Definition { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxClustersPerUser`<sup>Required</sup> <a name="MaxClustersPerUser" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.maxClustersPerUser"></a>

```csharp
public double MaxClustersPerUser { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyFamilyDefinitionOverrides`<sup>Required</sup> <a name="PolicyFamilyDefinitionOverrides" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyDefinitionOverrides"></a>

```csharp
public string PolicyFamilyDefinitionOverrides { get; }
```

- *Type:* string

---

##### `PolicyFamilyId`<sup>Required</sup> <a name="PolicyFamilyId" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.policyFamilyId"></a>

```csharp
public string PolicyFamilyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ClusterPolicyConfig <a name="ClusterPolicyConfig" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ClusterPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Definition = null,
    string Description = null,
    string Id = null,
    IResolvable|ClusterPolicyLibraries[] Libraries = null,
    double MaxClustersPerUser = null,
    string Name = null,
    string PolicyFamilyDefinitionOverrides = null,
    string PolicyFamilyId = null,
    ClusterPolicyProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.definition">Definition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#definition ClusterPolicy#definition}. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#description ClusterPolicy#description}. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#id ClusterPolicy#id}. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.libraries">Libraries</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a>[]</code> | libraries block. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.maxClustersPerUser">MaxClustersPerUser</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#max_clusters_per_user ClusterPolicy#max_clusters_per_user}. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#name ClusterPolicy#name}. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.policyFamilyDefinitionOverrides">PolicyFamilyDefinitionOverrides</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#policy_family_definition_overrides ClusterPolicy#policy_family_definition_overrides}. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.policyFamilyId">PolicyFamilyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#policy_family_id ClusterPolicy#policy_family_id}. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfig">ClusterPolicyProviderConfig</a></code> | provider_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Definition`<sup>Optional</sup> <a name="Definition" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.definition"></a>

```csharp
public string Definition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#definition ClusterPolicy#definition}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#description ClusterPolicy#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#id ClusterPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Libraries`<sup>Optional</sup> <a name="Libraries" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.libraries"></a>

```csharp
public IResolvable|ClusterPolicyLibraries[] Libraries { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a>[]

libraries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#libraries ClusterPolicy#libraries}

---

##### `MaxClustersPerUser`<sup>Optional</sup> <a name="MaxClustersPerUser" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.maxClustersPerUser"></a>

```csharp
public double MaxClustersPerUser { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#max_clusters_per_user ClusterPolicy#max_clusters_per_user}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#name ClusterPolicy#name}.

---

##### `PolicyFamilyDefinitionOverrides`<sup>Optional</sup> <a name="PolicyFamilyDefinitionOverrides" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.policyFamilyDefinitionOverrides"></a>

```csharp
public string PolicyFamilyDefinitionOverrides { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#policy_family_definition_overrides ClusterPolicy#policy_family_definition_overrides}.

---

##### `PolicyFamilyId`<sup>Optional</sup> <a name="PolicyFamilyId" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.policyFamilyId"></a>

```csharp
public string PolicyFamilyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#policy_family_id ClusterPolicy#policy_family_id}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyConfig.property.providerConfig"></a>

```csharp
public ClusterPolicyProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfig">ClusterPolicyProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#provider_config ClusterPolicy#provider_config}

---

### ClusterPolicyLibraries <a name="ClusterPolicyLibraries" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ClusterPolicyLibraries {
    ClusterPolicyLibrariesCran Cran = null,
    string Egg = null,
    string Jar = null,
    ClusterPolicyLibrariesMaven Maven = null,
    ClusterPolicyLibrariesProviderConfig ProviderConfig = null,
    ClusterPolicyLibrariesPypi Pypi = null,
    string Requirements = null,
    string Whl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.cran">Cran</a></code> | <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a></code> | cran block. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.egg">Egg</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#egg ClusterPolicy#egg}. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.jar">Jar</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#jar ClusterPolicy#jar}. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.maven">Maven</a></code> | <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a></code> | maven block. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfig">ClusterPolicyLibrariesProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.pypi">Pypi</a></code> | <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a></code> | pypi block. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.requirements">Requirements</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#requirements ClusterPolicy#requirements}. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.whl">Whl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#whl ClusterPolicy#whl}. |

---

##### `Cran`<sup>Optional</sup> <a name="Cran" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.cran"></a>

```csharp
public ClusterPolicyLibrariesCran Cran { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a>

cran block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#cran ClusterPolicy#cran}

---

##### `Egg`<sup>Optional</sup> <a name="Egg" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.egg"></a>

```csharp
public string Egg { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#egg ClusterPolicy#egg}.

---

##### `Jar`<sup>Optional</sup> <a name="Jar" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.jar"></a>

```csharp
public string Jar { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#jar ClusterPolicy#jar}.

---

##### `Maven`<sup>Optional</sup> <a name="Maven" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.maven"></a>

```csharp
public ClusterPolicyLibrariesMaven Maven { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a>

maven block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#maven ClusterPolicy#maven}

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.providerConfig"></a>

```csharp
public ClusterPolicyLibrariesProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfig">ClusterPolicyLibrariesProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#provider_config ClusterPolicy#provider_config}

---

##### `Pypi`<sup>Optional</sup> <a name="Pypi" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.pypi"></a>

```csharp
public ClusterPolicyLibrariesPypi Pypi { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a>

pypi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#pypi ClusterPolicy#pypi}

---

##### `Requirements`<sup>Optional</sup> <a name="Requirements" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.requirements"></a>

```csharp
public string Requirements { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#requirements ClusterPolicy#requirements}.

---

##### `Whl`<sup>Optional</sup> <a name="Whl" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries.property.whl"></a>

```csharp
public string Whl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#whl ClusterPolicy#whl}.

---

### ClusterPolicyLibrariesCran <a name="ClusterPolicyLibrariesCran" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ClusterPolicyLibrariesCran {
    string Package,
    string Repo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran.property.package">Package</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#package ClusterPolicy#package}. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran.property.repo">Repo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}. |

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran.property.package"></a>

```csharp
public string Package { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#package ClusterPolicy#package}.

---

##### `Repo`<sup>Optional</sup> <a name="Repo" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran.property.repo"></a>

```csharp
public string Repo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}.

---

### ClusterPolicyLibrariesMaven <a name="ClusterPolicyLibrariesMaven" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ClusterPolicyLibrariesMaven {
    string Coordinates,
    string[] Exclusions = null,
    string Repo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.property.coordinates">Coordinates</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#coordinates ClusterPolicy#coordinates}. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.property.exclusions">Exclusions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#exclusions ClusterPolicy#exclusions}. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.property.repo">Repo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}. |

---

##### `Coordinates`<sup>Required</sup> <a name="Coordinates" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.property.coordinates"></a>

```csharp
public string Coordinates { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#coordinates ClusterPolicy#coordinates}.

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.property.exclusions"></a>

```csharp
public string[] Exclusions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#exclusions ClusterPolicy#exclusions}.

---

##### `Repo`<sup>Optional</sup> <a name="Repo" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven.property.repo"></a>

```csharp
public string Repo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}.

---

### ClusterPolicyLibrariesProviderConfig <a name="ClusterPolicyLibrariesProviderConfig" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ClusterPolicyLibrariesProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#workspace_id ClusterPolicy#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#workspace_id ClusterPolicy#workspace_id}.

---

### ClusterPolicyLibrariesPypi <a name="ClusterPolicyLibrariesPypi" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ClusterPolicyLibrariesPypi {
    string Package,
    string Repo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi.property.package">Package</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#package ClusterPolicy#package}. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi.property.repo">Repo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}. |

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi.property.package"></a>

```csharp
public string Package { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#package ClusterPolicy#package}.

---

##### `Repo`<sup>Optional</sup> <a name="Repo" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi.property.repo"></a>

```csharp
public string Repo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#repo ClusterPolicy#repo}.

---

### ClusterPolicyProviderConfig <a name="ClusterPolicyProviderConfig" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ClusterPolicyProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#workspace_id ClusterPolicy#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/resources/cluster_policy#workspace_id ClusterPolicy#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClusterPolicyLibrariesCranOutputReference <a name="ClusterPolicyLibrariesCranOutputReference" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ClusterPolicyLibrariesCranOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.resetRepo">ResetRepo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRepo` <a name="ResetRepo" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.resetRepo"></a>

```csharp
private void ResetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.packageInput">PackageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.repoInput">RepoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.package">Package</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.repo">Repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PackageInput`<sup>Optional</sup> <a name="PackageInput" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.packageInput"></a>

```csharp
public string PackageInput { get; }
```

- *Type:* string

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.repoInput"></a>

```csharp
public string RepoInput { get; }
```

- *Type:* string

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.package"></a>

```csharp
public string Package { get; }
```

- *Type:* string

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.repo"></a>

```csharp
public string Repo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference.property.internalValue"></a>

```csharp
public ClusterPolicyLibrariesCran InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a>

---


### ClusterPolicyLibrariesList <a name="ClusterPolicyLibrariesList" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ClusterPolicyLibrariesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.get"></a>

```csharp
private ClusterPolicyLibrariesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesList.property.internalValue"></a>

```csharp
public IResolvable|ClusterPolicyLibraries[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a>[]

---


### ClusterPolicyLibrariesMavenOutputReference <a name="ClusterPolicyLibrariesMavenOutputReference" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ClusterPolicyLibrariesMavenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resetRepo">ResetRepo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resetExclusions"></a>

```csharp
private void ResetExclusions()
```

##### `ResetRepo` <a name="ResetRepo" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.resetRepo"></a>

```csharp
private void ResetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.coordinatesInput">CoordinatesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.repoInput">RepoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.coordinates">Coordinates</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.exclusions">Exclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.repo">Repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CoordinatesInput`<sup>Optional</sup> <a name="CoordinatesInput" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.coordinatesInput"></a>

```csharp
public string CoordinatesInput { get; }
```

- *Type:* string

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.exclusionsInput"></a>

```csharp
public string[] ExclusionsInput { get; }
```

- *Type:* string[]

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.repoInput"></a>

```csharp
public string RepoInput { get; }
```

- *Type:* string

---

##### `Coordinates`<sup>Required</sup> <a name="Coordinates" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.coordinates"></a>

```csharp
public string Coordinates { get; }
```

- *Type:* string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.exclusions"></a>

```csharp
public string[] Exclusions { get; }
```

- *Type:* string[]

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.repo"></a>

```csharp
public string Repo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference.property.internalValue"></a>

```csharp
public ClusterPolicyLibrariesMaven InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a>

---


### ClusterPolicyLibrariesOutputReference <a name="ClusterPolicyLibrariesOutputReference" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ClusterPolicyLibrariesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putCran">PutCran</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putMaven">PutMaven</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putPypi">PutPypi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetCran">ResetCran</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetEgg">ResetEgg</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetJar">ResetJar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetMaven">ResetMaven</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetPypi">ResetPypi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetRequirements">ResetRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetWhl">ResetWhl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCran` <a name="PutCran" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putCran"></a>

```csharp
private void PutCran(ClusterPolicyLibrariesCran Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putCran.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a>

---

##### `PutMaven` <a name="PutMaven" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putMaven"></a>

```csharp
private void PutMaven(ClusterPolicyLibrariesMaven Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putMaven.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a>

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putProviderConfig"></a>

```csharp
private void PutProviderConfig(ClusterPolicyLibrariesProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfig">ClusterPolicyLibrariesProviderConfig</a>

---

##### `PutPypi` <a name="PutPypi" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putPypi"></a>

```csharp
private void PutPypi(ClusterPolicyLibrariesPypi Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.putPypi.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a>

---

##### `ResetCran` <a name="ResetCran" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetCran"></a>

```csharp
private void ResetCran()
```

##### `ResetEgg` <a name="ResetEgg" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetEgg"></a>

```csharp
private void ResetEgg()
```

##### `ResetJar` <a name="ResetJar" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetJar"></a>

```csharp
private void ResetJar()
```

##### `ResetMaven` <a name="ResetMaven" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetMaven"></a>

```csharp
private void ResetMaven()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

##### `ResetPypi` <a name="ResetPypi" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetPypi"></a>

```csharp
private void ResetPypi()
```

##### `ResetRequirements` <a name="ResetRequirements" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetRequirements"></a>

```csharp
private void ResetRequirements()
```

##### `ResetWhl` <a name="ResetWhl" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.resetWhl"></a>

```csharp
private void ResetWhl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.cran">Cran</a></code> | <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference">ClusterPolicyLibrariesCranOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.maven">Maven</a></code> | <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference">ClusterPolicyLibrariesMavenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference">ClusterPolicyLibrariesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.pypi">Pypi</a></code> | <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference">ClusterPolicyLibrariesPypiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.cranInput">CranInput</a></code> | <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.eggInput">EggInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.jarInput">JarInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.mavenInput">MavenInput</a></code> | <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfig">ClusterPolicyLibrariesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.pypiInput">PypiInput</a></code> | <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.requirementsInput">RequirementsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.whlInput">WhlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.egg">Egg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.jar">Jar</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.requirements">Requirements</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.whl">Whl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cran`<sup>Required</sup> <a name="Cran" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.cran"></a>

```csharp
public ClusterPolicyLibrariesCranOutputReference Cran { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCranOutputReference">ClusterPolicyLibrariesCranOutputReference</a>

---

##### `Maven`<sup>Required</sup> <a name="Maven" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.maven"></a>

```csharp
public ClusterPolicyLibrariesMavenOutputReference Maven { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMavenOutputReference">ClusterPolicyLibrariesMavenOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.providerConfig"></a>

```csharp
public ClusterPolicyLibrariesProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference">ClusterPolicyLibrariesProviderConfigOutputReference</a>

---

##### `Pypi`<sup>Required</sup> <a name="Pypi" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.pypi"></a>

```csharp
public ClusterPolicyLibrariesPypiOutputReference Pypi { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference">ClusterPolicyLibrariesPypiOutputReference</a>

---

##### `CranInput`<sup>Optional</sup> <a name="CranInput" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.cranInput"></a>

```csharp
public ClusterPolicyLibrariesCran CranInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesCran">ClusterPolicyLibrariesCran</a>

---

##### `EggInput`<sup>Optional</sup> <a name="EggInput" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.eggInput"></a>

```csharp
public string EggInput { get; }
```

- *Type:* string

---

##### `JarInput`<sup>Optional</sup> <a name="JarInput" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.jarInput"></a>

```csharp
public string JarInput { get; }
```

- *Type:* string

---

##### `MavenInput`<sup>Optional</sup> <a name="MavenInput" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.mavenInput"></a>

```csharp
public ClusterPolicyLibrariesMaven MavenInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesMaven">ClusterPolicyLibrariesMaven</a>

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.providerConfigInput"></a>

```csharp
public ClusterPolicyLibrariesProviderConfig ProviderConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfig">ClusterPolicyLibrariesProviderConfig</a>

---

##### `PypiInput`<sup>Optional</sup> <a name="PypiInput" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.pypiInput"></a>

```csharp
public ClusterPolicyLibrariesPypi PypiInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a>

---

##### `RequirementsInput`<sup>Optional</sup> <a name="RequirementsInput" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.requirementsInput"></a>

```csharp
public string RequirementsInput { get; }
```

- *Type:* string

---

##### `WhlInput`<sup>Optional</sup> <a name="WhlInput" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.whlInput"></a>

```csharp
public string WhlInput { get; }
```

- *Type:* string

---

##### `Egg`<sup>Required</sup> <a name="Egg" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.egg"></a>

```csharp
public string Egg { get; }
```

- *Type:* string

---

##### `Jar`<sup>Required</sup> <a name="Jar" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.jar"></a>

```csharp
public string Jar { get; }
```

- *Type:* string

---

##### `Requirements`<sup>Required</sup> <a name="Requirements" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.requirements"></a>

```csharp
public string Requirements { get; }
```

- *Type:* string

---

##### `Whl`<sup>Required</sup> <a name="Whl" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.whl"></a>

```csharp
public string Whl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ClusterPolicyLibraries InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibraries">ClusterPolicyLibraries</a>

---


### ClusterPolicyLibrariesProviderConfigOutputReference <a name="ClusterPolicyLibrariesProviderConfigOutputReference" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ClusterPolicyLibrariesProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfig">ClusterPolicyLibrariesProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfigOutputReference.property.internalValue"></a>

```csharp
public ClusterPolicyLibrariesProviderConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesProviderConfig">ClusterPolicyLibrariesProviderConfig</a>

---


### ClusterPolicyLibrariesPypiOutputReference <a name="ClusterPolicyLibrariesPypiOutputReference" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ClusterPolicyLibrariesPypiOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.resetRepo">ResetRepo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRepo` <a name="ResetRepo" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.resetRepo"></a>

```csharp
private void ResetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.packageInput">PackageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.repoInput">RepoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.package">Package</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.repo">Repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PackageInput`<sup>Optional</sup> <a name="PackageInput" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.packageInput"></a>

```csharp
public string PackageInput { get; }
```

- *Type:* string

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.repoInput"></a>

```csharp
public string RepoInput { get; }
```

- *Type:* string

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.package"></a>

```csharp
public string Package { get; }
```

- *Type:* string

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.repo"></a>

```csharp
public string Repo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypiOutputReference.property.internalValue"></a>

```csharp
public ClusterPolicyLibrariesPypi InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyLibrariesPypi">ClusterPolicyLibrariesPypi</a>

---


### ClusterPolicyProviderConfigOutputReference <a name="ClusterPolicyProviderConfigOutputReference" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new ClusterPolicyProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfig">ClusterPolicyProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfigOutputReference.property.internalValue"></a>

```csharp
public ClusterPolicyProviderConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.clusterPolicy.ClusterPolicyProviderConfig">ClusterPolicyProviderConfig</a>

---



