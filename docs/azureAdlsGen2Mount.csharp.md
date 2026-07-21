# `azureAdlsGen2Mount` Submodule <a name="`azureAdlsGen2Mount` Submodule" id="@cdktn/provider-databricks.azureAdlsGen2Mount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureAdlsGen2Mount <a name="AzureAdlsGen2Mount" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/azure_adls_gen2_mount databricks_azure_adls_gen2_mount}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AzureAdlsGen2Mount(Construct Scope, string Id, AzureAdlsGen2MountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig">AzureAdlsGen2MountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig">AzureAdlsGen2MountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetClusterId">ResetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetDirectory">ResetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetClusterId` <a name="ResetClusterId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetClusterId"></a>

```csharp
private void ResetClusterId()
```

##### `ResetDirectory` <a name="ResetDirectory" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetDirectory"></a>

```csharp
private void ResetDirectory()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AzureAdlsGen2Mount resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

AzureAdlsGen2Mount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

AzureAdlsGen2Mount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

AzureAdlsGen2Mount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

AzureAdlsGen2Mount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AzureAdlsGen2Mount resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AzureAdlsGen2Mount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AzureAdlsGen2Mount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/azure_adls_gen2_mount#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AzureAdlsGen2Mount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretKeyInput">ClientSecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretScopeInput">ClientSecretScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.containerNameInput">ContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.directoryInput">DirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.initializeFileSystemInput">InitializeFileSystemInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.mountNameInput">MountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.storageAccountNameInput">StorageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretKey">ClientSecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretScope">ClientSecretScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.containerName">ContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.directory">Directory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.initializeFileSystem">InitializeFileSystem</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.mountName">MountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.storageAccountName">StorageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretKeyInput`<sup>Optional</sup> <a name="ClientSecretKeyInput" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretKeyInput"></a>

```csharp
public string ClientSecretKeyInput { get; }
```

- *Type:* string

---

##### `ClientSecretScopeInput`<sup>Optional</sup> <a name="ClientSecretScopeInput" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretScopeInput"></a>

```csharp
public string ClientSecretScopeInput { get; }
```

- *Type:* string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.containerNameInput"></a>

```csharp
public string ContainerNameInput { get; }
```

- *Type:* string

---

##### `DirectoryInput`<sup>Optional</sup> <a name="DirectoryInput" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.directoryInput"></a>

```csharp
public string DirectoryInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InitializeFileSystemInput`<sup>Optional</sup> <a name="InitializeFileSystemInput" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.initializeFileSystemInput"></a>

```csharp
public bool|IResolvable InitializeFileSystemInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MountNameInput`<sup>Optional</sup> <a name="MountNameInput" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.mountNameInput"></a>

```csharp
public string MountNameInput { get; }
```

- *Type:* string

---

##### `StorageAccountNameInput`<sup>Optional</sup> <a name="StorageAccountNameInput" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.storageAccountNameInput"></a>

```csharp
public string StorageAccountNameInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecretKey`<sup>Required</sup> <a name="ClientSecretKey" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretKey"></a>

```csharp
public string ClientSecretKey { get; }
```

- *Type:* string

---

##### `ClientSecretScope`<sup>Required</sup> <a name="ClientSecretScope" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretScope"></a>

```csharp
public string ClientSecretScope { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.containerName"></a>

```csharp
public string ContainerName { get; }
```

- *Type:* string

---

##### `Directory`<sup>Required</sup> <a name="Directory" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.directory"></a>

```csharp
public string Directory { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InitializeFileSystem`<sup>Required</sup> <a name="InitializeFileSystem" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.initializeFileSystem"></a>

```csharp
public bool|IResolvable InitializeFileSystem { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MountName`<sup>Required</sup> <a name="MountName" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.mountName"></a>

```csharp
public string MountName { get; }
```

- *Type:* string

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.storageAccountName"></a>

```csharp
public string StorageAccountName { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AzureAdlsGen2MountConfig <a name="AzureAdlsGen2MountConfig" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AzureAdlsGen2MountConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ClientId,
    string ClientSecretKey,
    string ClientSecretScope,
    string ContainerName,
    bool|IResolvable InitializeFileSystem,
    string MountName,
    string StorageAccountName,
    string TenantId,
    string ClusterId = null,
    string Directory = null,
    string Environment = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/azure_adls_gen2_mount#client_id AzureAdlsGen2Mount#client_id}. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clientSecretKey">ClientSecretKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/azure_adls_gen2_mount#client_secret_key AzureAdlsGen2Mount#client_secret_key}. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clientSecretScope">ClientSecretScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/azure_adls_gen2_mount#client_secret_scope AzureAdlsGen2Mount#client_secret_scope}. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.containerName">ContainerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/azure_adls_gen2_mount#container_name AzureAdlsGen2Mount#container_name}. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.initializeFileSystem">InitializeFileSystem</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/azure_adls_gen2_mount#initialize_file_system AzureAdlsGen2Mount#initialize_file_system}. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.mountName">MountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/azure_adls_gen2_mount#mount_name AzureAdlsGen2Mount#mount_name}. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.storageAccountName">StorageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/azure_adls_gen2_mount#storage_account_name AzureAdlsGen2Mount#storage_account_name}. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/azure_adls_gen2_mount#tenant_id AzureAdlsGen2Mount#tenant_id}. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/azure_adls_gen2_mount#cluster_id AzureAdlsGen2Mount#cluster_id}. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.directory">Directory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/azure_adls_gen2_mount#directory AzureAdlsGen2Mount#directory}. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.environment">Environment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/azure_adls_gen2_mount#environment AzureAdlsGen2Mount#environment}. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/azure_adls_gen2_mount#id AzureAdlsGen2Mount#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/azure_adls_gen2_mount#client_id AzureAdlsGen2Mount#client_id}.

---

##### `ClientSecretKey`<sup>Required</sup> <a name="ClientSecretKey" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clientSecretKey"></a>

```csharp
public string ClientSecretKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/azure_adls_gen2_mount#client_secret_key AzureAdlsGen2Mount#client_secret_key}.

---

##### `ClientSecretScope`<sup>Required</sup> <a name="ClientSecretScope" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clientSecretScope"></a>

```csharp
public string ClientSecretScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/azure_adls_gen2_mount#client_secret_scope AzureAdlsGen2Mount#client_secret_scope}.

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.containerName"></a>

```csharp
public string ContainerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/azure_adls_gen2_mount#container_name AzureAdlsGen2Mount#container_name}.

---

##### `InitializeFileSystem`<sup>Required</sup> <a name="InitializeFileSystem" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.initializeFileSystem"></a>

```csharp
public bool|IResolvable InitializeFileSystem { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/azure_adls_gen2_mount#initialize_file_system AzureAdlsGen2Mount#initialize_file_system}.

---

##### `MountName`<sup>Required</sup> <a name="MountName" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.mountName"></a>

```csharp
public string MountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/azure_adls_gen2_mount#mount_name AzureAdlsGen2Mount#mount_name}.

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.storageAccountName"></a>

```csharp
public string StorageAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/azure_adls_gen2_mount#storage_account_name AzureAdlsGen2Mount#storage_account_name}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/azure_adls_gen2_mount#tenant_id AzureAdlsGen2Mount#tenant_id}.

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/azure_adls_gen2_mount#cluster_id AzureAdlsGen2Mount#cluster_id}.

---

##### `Directory`<sup>Optional</sup> <a name="Directory" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.directory"></a>

```csharp
public string Directory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/azure_adls_gen2_mount#directory AzureAdlsGen2Mount#directory}.

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/azure_adls_gen2_mount#environment AzureAdlsGen2Mount#environment}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/azure_adls_gen2_mount#id AzureAdlsGen2Mount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



