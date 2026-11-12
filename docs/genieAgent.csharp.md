# `genieAgent` Submodule <a name="`genieAgent` Submodule" id="@cdktn/provider-databricks.genieAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenieAgent <a name="GenieAgent" id="@cdktn/provider-databricks.genieAgent.GenieAgent"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent databricks_genie_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgent(Construct Scope, string Id, GenieAgentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig">GenieAgentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.genieAgent.GenieAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig">GenieAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.putDefinition">PutDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.resetGenieAgentId">ResetGenieAgentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.resetParentPath">ResetParentPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.genieAgent.GenieAgent.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.genieAgent.GenieAgent.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.genieAgent.GenieAgent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.genieAgent.GenieAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.genieAgent.GenieAgent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.genieAgent.GenieAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.genieAgent.GenieAgent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.genieAgent.GenieAgent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.genieAgent.GenieAgent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.genieAgent.GenieAgent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.genieAgent.GenieAgent.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.genieAgent.GenieAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.genieAgent.GenieAgent.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.genieAgent.GenieAgent.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.genieAgent.GenieAgent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.genieAgent.GenieAgent.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.genieAgent.GenieAgent.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.genieAgent.GenieAgent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.genieAgent.GenieAgent.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.genieAgent.GenieAgent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.genieAgent.GenieAgent.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.genieAgent.GenieAgent.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.genieAgent.GenieAgent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefinition` <a name="PutDefinition" id="@cdktn/provider-databricks.genieAgent.GenieAgent.putDefinition"></a>

```csharp
private void PutDefinition(GenieAgentDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgent.putDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition">GenieAgentDefinition</a>

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.genieAgent.GenieAgent.putProviderConfig"></a>

```csharp
private void PutProviderConfig(GenieAgentProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgent.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig">GenieAgentProviderConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.genieAgent.GenieAgent.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGenieAgentId` <a name="ResetGenieAgentId" id="@cdktn/provider-databricks.genieAgent.GenieAgent.resetGenieAgentId"></a>

```csharp
private void ResetGenieAgentId()
```

##### `ResetParentPath` <a name="ResetParentPath" id="@cdktn/provider-databricks.genieAgent.GenieAgent.resetParentPath"></a>

```csharp
private void ResetParentPath()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.genieAgent.GenieAgent.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GenieAgent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.genieAgent.GenieAgent.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

GenieAgent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.genieAgent.GenieAgent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.genieAgent.GenieAgent.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

GenieAgent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.genieAgent.GenieAgent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgent.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

GenieAgent.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.genieAgent.GenieAgent.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.genieAgent.GenieAgent.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

GenieAgent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GenieAgent resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.genieAgent.GenieAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.genieAgent.GenieAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GenieAgent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.genieAgent.GenieAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GenieAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.genieAgent.GenieAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GenieAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.definition">Definition</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference">GenieAgentDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.effectiveParentPath">EffectiveParentPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference">GenieAgentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.definitionInput">DefinitionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition">GenieAgentDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.genieAgentIdInput">GenieAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.parentPathInput">ParentPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig">GenieAgentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.warehouseIdInput">WarehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.genieAgentId">GenieAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.parentPath">ParentPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.warehouseId">WarehouseId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.definition"></a>

```csharp
public GenieAgentDefinitionOutputReference Definition { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference">GenieAgentDefinitionOutputReference</a>

---

##### `EffectiveParentPath`<sup>Required</sup> <a name="EffectiveParentPath" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.effectiveParentPath"></a>

```csharp
public string EffectiveParentPath { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.providerConfig"></a>

```csharp
public GenieAgentProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference">GenieAgentProviderConfigOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.definitionInput"></a>

```csharp
public IResolvable|GenieAgentDefinition DefinitionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition">GenieAgentDefinition</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `GenieAgentIdInput`<sup>Optional</sup> <a name="GenieAgentIdInput" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.genieAgentIdInput"></a>

```csharp
public string GenieAgentIdInput { get; }
```

- *Type:* string

---

##### `ParentPathInput`<sup>Optional</sup> <a name="ParentPathInput" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.parentPathInput"></a>

```csharp
public string ParentPathInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.providerConfigInput"></a>

```csharp
public IResolvable|GenieAgentProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig">GenieAgentProviderConfig</a>

---

##### `WarehouseIdInput`<sup>Optional</sup> <a name="WarehouseIdInput" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.warehouseIdInput"></a>

```csharp
public string WarehouseIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `GenieAgentId`<sup>Required</sup> <a name="GenieAgentId" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.genieAgentId"></a>

```csharp
public string GenieAgentId { get; }
```

- *Type:* string

---

##### `ParentPath`<sup>Required</sup> <a name="ParentPath" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.parentPath"></a>

```csharp
public string ParentPath { get; }
```

- *Type:* string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.warehouseId"></a>

```csharp
public string WarehouseId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.genieAgent.GenieAgent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GenieAgentConfig <a name="GenieAgentConfig" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    GenieAgentDefinition Definition,
    string DisplayName,
    string WarehouseId,
    string Description = null,
    string GenieAgentId = null,
    string ParentPath = null,
    GenieAgentProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.definition">Definition</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition">GenieAgentDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#definition GenieAgent#definition}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.warehouseId">WarehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#warehouse_id GenieAgent#warehouse_id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.genieAgentId">GenieAgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#genie_agent_id GenieAgent#genie_agent_id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.parentPath">ParentPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#parent_path GenieAgent#parent_path}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig">GenieAgentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#provider_config GenieAgent#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.definition"></a>

```csharp
public GenieAgentDefinition Definition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition">GenieAgentDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#definition GenieAgent#definition}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}.

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.warehouseId"></a>

```csharp
public string WarehouseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#warehouse_id GenieAgent#warehouse_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}.

---

##### `GenieAgentId`<sup>Optional</sup> <a name="GenieAgentId" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.genieAgentId"></a>

```csharp
public string GenieAgentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#genie_agent_id GenieAgent#genie_agent_id}.

---

##### `ParentPath`<sup>Optional</sup> <a name="ParentPath" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.parentPath"></a>

```csharp
public string ParentPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#parent_path GenieAgent#parent_path}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.genieAgent.GenieAgentConfig.property.providerConfig"></a>

```csharp
public GenieAgentProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig">GenieAgentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#provider_config GenieAgent#provider_config}.

---

### GenieAgentDefinition <a name="GenieAgentDefinition" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinition {
    GenieAgentDefinitionBenchmarks Benchmarks = null,
    GenieAgentDefinitionConfig Config = null,
    GenieAgentDefinitionDataSources DataSources = null,
    GenieAgentDefinitionInstructions Instructions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.property.benchmarks">Benchmarks</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks">GenieAgentDefinitionBenchmarks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#benchmarks GenieAgent#benchmarks}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.property.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig">GenieAgentDefinitionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#config GenieAgent#config}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.property.dataSources">DataSources</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources">GenieAgentDefinitionDataSources</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#data_sources GenieAgent#data_sources}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.property.instructions">Instructions</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions">GenieAgentDefinitionInstructions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instructions GenieAgent#instructions}. |

---

##### `Benchmarks`<sup>Optional</sup> <a name="Benchmarks" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.property.benchmarks"></a>

```csharp
public GenieAgentDefinitionBenchmarks Benchmarks { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks">GenieAgentDefinitionBenchmarks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#benchmarks GenieAgent#benchmarks}.

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.property.config"></a>

```csharp
public GenieAgentDefinitionConfig Config { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig">GenieAgentDefinitionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#config GenieAgent#config}.

---

##### `DataSources`<sup>Optional</sup> <a name="DataSources" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.property.dataSources"></a>

```csharp
public GenieAgentDefinitionDataSources DataSources { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources">GenieAgentDefinitionDataSources</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#data_sources GenieAgent#data_sources}.

---

##### `Instructions`<sup>Optional</sup> <a name="Instructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinition.property.instructions"></a>

```csharp
public GenieAgentDefinitionInstructions Instructions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions">GenieAgentDefinitionInstructions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instructions GenieAgent#instructions}.

---

### GenieAgentDefinitionBenchmarks <a name="GenieAgentDefinitionBenchmarks" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionBenchmarks {
    IResolvable|GenieAgentDefinitionBenchmarksQuestions[] Questions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks.property.questions">Questions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#questions GenieAgent#questions}. |

---

##### `Questions`<sup>Optional</sup> <a name="Questions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks.property.questions"></a>

```csharp
public IResolvable|GenieAgentDefinitionBenchmarksQuestions[] Questions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#questions GenieAgent#questions}.

---

### GenieAgentDefinitionBenchmarksQuestions <a name="GenieAgentDefinitionBenchmarksQuestions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionBenchmarksQuestions {
    string Id,
    string Question,
    IResolvable|GenieAgentDefinitionBenchmarksQuestionsAnswer[] Answer = null,
    string EvaluationNote = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.property.question">Question</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#question GenieAgent#question}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.property.answer">Answer</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#answer GenieAgent#answer}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.property.evaluationNote">EvaluationNote</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#evaluation_note GenieAgent#evaluation_note}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Question`<sup>Required</sup> <a name="Question" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.property.question"></a>

```csharp
public string Question { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#question GenieAgent#question}.

---

##### `Answer`<sup>Optional</sup> <a name="Answer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.property.answer"></a>

```csharp
public IResolvable|GenieAgentDefinitionBenchmarksQuestionsAnswer[] Answer { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#answer GenieAgent#answer}.

---

##### `EvaluationNote`<sup>Optional</sup> <a name="EvaluationNote" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions.property.evaluationNote"></a>

```csharp
public string EvaluationNote { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#evaluation_note GenieAgent#evaluation_note}.

---

### GenieAgentDefinitionBenchmarksQuestionsAnswer <a name="GenieAgentDefinitionBenchmarksQuestionsAnswer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionBenchmarksQuestionsAnswer {
    string Content,
    string Format
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#content GenieAgent#content}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer.property.format">Format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#format GenieAgent#format}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#content GenieAgent#content}.

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#format GenieAgent#format}.

---

### GenieAgentDefinitionConfig <a name="GenieAgentDefinitionConfig" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionConfig {
    IResolvable|GenieAgentDefinitionConfigSampleQuestions[] SampleQuestions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig.property.sampleQuestions">SampleQuestions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sample_questions GenieAgent#sample_questions}. |

---

##### `SampleQuestions`<sup>Optional</sup> <a name="SampleQuestions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig.property.sampleQuestions"></a>

```csharp
public IResolvable|GenieAgentDefinitionConfigSampleQuestions[] SampleQuestions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sample_questions GenieAgent#sample_questions}.

---

### GenieAgentDefinitionConfigSampleQuestions <a name="GenieAgentDefinitionConfigSampleQuestions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionConfigSampleQuestions {
    string Id,
    string Question
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions.property.question">Question</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#question GenieAgent#question}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Question`<sup>Required</sup> <a name="Question" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions.property.question"></a>

```csharp
public string Question { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#question GenieAgent#question}.

---

### GenieAgentDefinitionDataSources <a name="GenieAgentDefinitionDataSources" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionDataSources {
    IResolvable|GenieAgentDefinitionDataSourcesMcpConnections[] McpConnections = null,
    IResolvable|GenieAgentDefinitionDataSourcesTables[] Tables = null,
    IResolvable|GenieAgentDefinitionDataSourcesVolumes[] Volumes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources.property.mcpConnections">McpConnections</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#mcp_connections GenieAgent#mcp_connections}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources.property.tables">Tables</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#tables GenieAgent#tables}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources.property.volumes">Volumes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#volumes GenieAgent#volumes}. |

---

##### `McpConnections`<sup>Optional</sup> <a name="McpConnections" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources.property.mcpConnections"></a>

```csharp
public IResolvable|GenieAgentDefinitionDataSourcesMcpConnections[] McpConnections { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#mcp_connections GenieAgent#mcp_connections}.

---

##### `Tables`<sup>Optional</sup> <a name="Tables" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources.property.tables"></a>

```csharp
public IResolvable|GenieAgentDefinitionDataSourcesTables[] Tables { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#tables GenieAgent#tables}.

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources.property.volumes"></a>

```csharp
public IResolvable|GenieAgentDefinitionDataSourcesVolumes[] Volumes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#volumes GenieAgent#volumes}.

---

### GenieAgentDefinitionDataSourcesMcpConnections <a name="GenieAgentDefinitionDataSourcesMcpConnections" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionDataSourcesMcpConnections {
    string McpConnection
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections.property.mcpConnection">McpConnection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#mcp_connection GenieAgent#mcp_connection}. |

---

##### `McpConnection`<sup>Required</sup> <a name="McpConnection" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections.property.mcpConnection"></a>

```csharp
public string McpConnection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#mcp_connection GenieAgent#mcp_connection}.

---

### GenieAgentDefinitionDataSourcesTables <a name="GenieAgentDefinitionDataSourcesTables" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionDataSourcesTables {
    string Identifier,
    IResolvable|GenieAgentDefinitionDataSourcesTablesColumnConfigs[] ColumnConfigs = null,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables.property.columnConfigs">ColumnConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#column_configs GenieAgent#column_configs}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}.

---

##### `ColumnConfigs`<sup>Optional</sup> <a name="ColumnConfigs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables.property.columnConfigs"></a>

```csharp
public IResolvable|GenieAgentDefinitionDataSourcesTablesColumnConfigs[] ColumnConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#column_configs GenieAgent#column_configs}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}.

---

### GenieAgentDefinitionDataSourcesTablesColumnConfigs <a name="GenieAgentDefinitionDataSourcesTablesColumnConfigs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionDataSourcesTablesColumnConfigs {
    string Column,
    string Description = null,
    string DisplayName = null,
    bool|IResolvable EnableEntityMatching = null,
    bool|IResolvable EnableFormatAssistance = null,
    bool|IResolvable Exclude = null,
    string[] Synonyms = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.column">Column</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#column GenieAgent#column}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableEntityMatching">EnableEntityMatching</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#enable_entity_matching GenieAgent#enable_entity_matching}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableFormatAssistance">EnableFormatAssistance</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#enable_format_assistance GenieAgent#enable_format_assistance}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.exclude">Exclude</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#exclude GenieAgent#exclude}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.synonyms">Synonyms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.column"></a>

```csharp
public string Column { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#column GenieAgent#column}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}.

---

##### `EnableEntityMatching`<sup>Optional</sup> <a name="EnableEntityMatching" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableEntityMatching"></a>

```csharp
public bool|IResolvable EnableEntityMatching { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#enable_entity_matching GenieAgent#enable_entity_matching}.

---

##### `EnableFormatAssistance`<sup>Optional</sup> <a name="EnableFormatAssistance" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.enableFormatAssistance"></a>

```csharp
public bool|IResolvable EnableFormatAssistance { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#enable_format_assistance GenieAgent#enable_format_assistance}.

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.exclude"></a>

```csharp
public bool|IResolvable Exclude { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#exclude GenieAgent#exclude}.

---

##### `Synonyms`<sup>Optional</sup> <a name="Synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs.property.synonyms"></a>

```csharp
public string[] Synonyms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}.

---

### GenieAgentDefinitionDataSourcesVolumes <a name="GenieAgentDefinitionDataSourcesVolumes" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionDataSourcesVolumes {
    string Path,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#path GenieAgent#path}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#path GenieAgent#path}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}.

---

### GenieAgentDefinitionInstructions <a name="GenieAgentDefinitionInstructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructions {
    IResolvable|GenieAgentDefinitionInstructionsExampleQuestionSqls[] ExampleQuestionSqls = null,
    IResolvable|GenieAgentDefinitionInstructionsJoinSpecs[] JoinSpecs = null,
    IResolvable|GenieAgentDefinitionInstructionsSqlFunctions[] SqlFunctions = null,
    GenieAgentDefinitionInstructionsSqlSnippets SqlSnippets = null,
    IResolvable|GenieAgentDefinitionInstructionsTextInstructions[] TextInstructions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.exampleQuestionSqls">ExampleQuestionSqls</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#example_question_sqls GenieAgent#example_question_sqls}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.joinSpecs">JoinSpecs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#join_specs GenieAgent#join_specs}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.sqlFunctions">SqlFunctions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql_functions GenieAgent#sql_functions}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.sqlSnippets">SqlSnippets</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets">GenieAgentDefinitionInstructionsSqlSnippets</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql_snippets GenieAgent#sql_snippets}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.textInstructions">TextInstructions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#text_instructions GenieAgent#text_instructions}. |

---

##### `ExampleQuestionSqls`<sup>Optional</sup> <a name="ExampleQuestionSqls" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.exampleQuestionSqls"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsExampleQuestionSqls[] ExampleQuestionSqls { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#example_question_sqls GenieAgent#example_question_sqls}.

---

##### `JoinSpecs`<sup>Optional</sup> <a name="JoinSpecs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.joinSpecs"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsJoinSpecs[] JoinSpecs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#join_specs GenieAgent#join_specs}.

---

##### `SqlFunctions`<sup>Optional</sup> <a name="SqlFunctions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.sqlFunctions"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsSqlFunctions[] SqlFunctions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql_functions GenieAgent#sql_functions}.

---

##### `SqlSnippets`<sup>Optional</sup> <a name="SqlSnippets" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.sqlSnippets"></a>

```csharp
public GenieAgentDefinitionInstructionsSqlSnippets SqlSnippets { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets">GenieAgentDefinitionInstructionsSqlSnippets</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql_snippets GenieAgent#sql_snippets}.

---

##### `TextInstructions`<sup>Optional</sup> <a name="TextInstructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions.property.textInstructions"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsTextInstructions[] TextInstructions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#text_instructions GenieAgent#text_instructions}.

---

### GenieAgentDefinitionInstructionsExampleQuestionSqls <a name="GenieAgentDefinitionInstructionsExampleQuestionSqls" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsExampleQuestionSqls {
    string Id,
    string Question,
    string Sql,
    IResolvable|GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters[] Parameters = null,
    string UsageGuidance = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.question">Question</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#question GenieAgent#question}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.sql">Sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.parameters">Parameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#parameters GenieAgent#parameters}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.usageGuidance">UsageGuidance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#usage_guidance GenieAgent#usage_guidance}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Question`<sup>Required</sup> <a name="Question" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.question"></a>

```csharp
public string Question { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#question GenieAgent#question}.

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.sql"></a>

```csharp
public string Sql { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.parameters"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters[] Parameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#parameters GenieAgent#parameters}.

---

##### `UsageGuidance`<sup>Optional</sup> <a name="UsageGuidance" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls.property.usageGuidance"></a>

```csharp
public string UsageGuidance { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#usage_guidance GenieAgent#usage_guidance}.

---

### GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters {
    string Name,
    GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue DefaultValue = null,
    string Description = null,
    string TypeHint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#name GenieAgent#name}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.defaultValue">DefaultValue</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#default_value GenieAgent#default_value}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.typeHint">TypeHint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#type_hint GenieAgent#type_hint}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#name GenieAgent#name}.

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.defaultValue"></a>

```csharp
public GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue DefaultValue { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#default_value GenieAgent#default_value}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#description GenieAgent#description}.

---

##### `TypeHint`<sup>Optional</sup> <a name="TypeHint" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters.property.typeHint"></a>

```csharp
public string TypeHint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#type_hint GenieAgent#type_hint}.

---

### GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue {
    GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange ValueRange = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.valueRange">ValueRange</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#value_range GenieAgent#value_range}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#values GenieAgent#values}. |

---

##### `ValueRange`<sup>Optional</sup> <a name="ValueRange" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.valueRange"></a>

```csharp
public GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange ValueRange { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#value_range GenieAgent#value_range}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#values GenieAgent#values}.

---

### GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange {
    string Max = null,
    string Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.max">Max</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#max GenieAgent#max}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.min">Min</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#min GenieAgent#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.max"></a>

```csharp
public string Max { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#max GenieAgent#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange.property.min"></a>

```csharp
public string Min { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#min GenieAgent#min}.

---

### GenieAgentDefinitionInstructionsJoinSpecs <a name="GenieAgentDefinitionInstructionsJoinSpecs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsJoinSpecs {
    string Id,
    GenieAgentDefinitionInstructionsJoinSpecsLeft Left,
    GenieAgentDefinitionInstructionsJoinSpecsRight Right,
    string Sql,
    string Comment = null,
    string Instruction = null,
    string RelationshipType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.left">Left</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft">GenieAgentDefinitionInstructionsJoinSpecsLeft</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#left GenieAgent#left}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.right">Right</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight">GenieAgentDefinitionInstructionsJoinSpecsRight</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#right GenieAgent#right}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.sql">Sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#comment GenieAgent#comment}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.instruction">Instruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.relationshipType">RelationshipType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#relationship_type GenieAgent#relationship_type}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Left`<sup>Required</sup> <a name="Left" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.left"></a>

```csharp
public GenieAgentDefinitionInstructionsJoinSpecsLeft Left { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft">GenieAgentDefinitionInstructionsJoinSpecsLeft</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#left GenieAgent#left}.

---

##### `Right`<sup>Required</sup> <a name="Right" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.right"></a>

```csharp
public GenieAgentDefinitionInstructionsJoinSpecsRight Right { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight">GenieAgentDefinitionInstructionsJoinSpecsRight</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#right GenieAgent#right}.

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.sql"></a>

```csharp
public string Sql { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#comment GenieAgent#comment}.

---

##### `Instruction`<sup>Optional</sup> <a name="Instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.instruction"></a>

```csharp
public string Instruction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}.

---

##### `RelationshipType`<sup>Optional</sup> <a name="RelationshipType" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs.property.relationshipType"></a>

```csharp
public string RelationshipType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#relationship_type GenieAgent#relationship_type}.

---

### GenieAgentDefinitionInstructionsJoinSpecsLeft <a name="GenieAgentDefinitionInstructionsJoinSpecsLeft" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsJoinSpecsLeft {
    string Identifier,
    string Alias = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft.property.alias">Alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}.

---

### GenieAgentDefinitionInstructionsJoinSpecsRight <a name="GenieAgentDefinitionInstructionsJoinSpecsRight" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsJoinSpecsRight {
    string Identifier,
    string Alias = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight.property.alias">Alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}.

---

### GenieAgentDefinitionInstructionsSqlFunctions <a name="GenieAgentDefinitionInstructionsSqlFunctions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsSqlFunctions {
    string Id,
    string Identifier
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#identifier GenieAgent#identifier}.

---

### GenieAgentDefinitionInstructionsSqlSnippets <a name="GenieAgentDefinitionInstructionsSqlSnippets" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsSqlSnippets {
    IResolvable|GenieAgentDefinitionInstructionsSqlSnippetsExpressions[] Expressions = null,
    IResolvable|GenieAgentDefinitionInstructionsSqlSnippetsFilters[] Filters = null,
    IResolvable|GenieAgentDefinitionInstructionsSqlSnippetsMeasures[] Measures = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets.property.expressions">Expressions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#expressions GenieAgent#expressions}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets.property.filters">Filters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#filters GenieAgent#filters}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets.property.measures">Measures</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#measures GenieAgent#measures}. |

---

##### `Expressions`<sup>Optional</sup> <a name="Expressions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets.property.expressions"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsSqlSnippetsExpressions[] Expressions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#expressions GenieAgent#expressions}.

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets.property.filters"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsSqlSnippetsFilters[] Filters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#filters GenieAgent#filters}.

---

##### `Measures`<sup>Optional</sup> <a name="Measures" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets.property.measures"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsSqlSnippetsMeasures[] Measures { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#measures GenieAgent#measures}.

---

### GenieAgentDefinitionInstructionsSqlSnippetsExpressions <a name="GenieAgentDefinitionInstructionsSqlSnippetsExpressions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsSqlSnippetsExpressions {
    string Id,
    string Sql,
    string Alias = null,
    string DisplayName = null,
    string Instruction = null,
    string[] Synonyms = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.sql">Sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.alias">Alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.instruction">Instruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.synonyms">Synonyms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.sql"></a>

```csharp
public string Sql { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}.

---

##### `Instruction`<sup>Optional</sup> <a name="Instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.instruction"></a>

```csharp
public string Instruction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}.

---

##### `Synonyms`<sup>Optional</sup> <a name="Synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions.property.synonyms"></a>

```csharp
public string[] Synonyms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}.

---

### GenieAgentDefinitionInstructionsSqlSnippetsFilters <a name="GenieAgentDefinitionInstructionsSqlSnippetsFilters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsSqlSnippetsFilters {
    string Id,
    string Sql,
    string DisplayName = null,
    string Instruction = null,
    string[] Synonyms = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.sql">Sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.instruction">Instruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.synonyms">Synonyms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.sql"></a>

```csharp
public string Sql { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}.

---

##### `Instruction`<sup>Optional</sup> <a name="Instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.instruction"></a>

```csharp
public string Instruction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}.

---

##### `Synonyms`<sup>Optional</sup> <a name="Synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters.property.synonyms"></a>

```csharp
public string[] Synonyms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}.

---

### GenieAgentDefinitionInstructionsSqlSnippetsMeasures <a name="GenieAgentDefinitionInstructionsSqlSnippetsMeasures" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsSqlSnippetsMeasures {
    string Id,
    string Sql,
    string Alias = null,
    string DisplayName = null,
    string Instruction = null,
    string[] Synonyms = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.sql">Sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.alias">Alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.instruction">Instruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.synonyms">Synonyms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.sql"></a>

```csharp
public string Sql { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#sql GenieAgent#sql}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#alias GenieAgent#alias}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#display_name GenieAgent#display_name}.

---

##### `Instruction`<sup>Optional</sup> <a name="Instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.instruction"></a>

```csharp
public string Instruction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#instruction GenieAgent#instruction}.

---

##### `Synonyms`<sup>Optional</sup> <a name="Synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures.property.synonyms"></a>

```csharp
public string[] Synonyms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#synonyms GenieAgent#synonyms}.

---

### GenieAgentDefinitionInstructionsTextInstructions <a name="GenieAgentDefinitionInstructionsTextInstructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsTextInstructions {
    string Content,
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#content GenieAgent#content}. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#content GenieAgent#content}.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#id GenieAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### GenieAgentProviderConfig <a name="GenieAgentProviderConfig" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#workspace_id GenieAgent#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/genie_agent#workspace_id GenieAgent#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### GenieAgentDefinitionBenchmarksOutputReference <a name="GenieAgentDefinitionBenchmarksOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionBenchmarksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.putQuestions">PutQuestions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.resetQuestions">ResetQuestions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutQuestions` <a name="PutQuestions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.putQuestions"></a>

```csharp
private void PutQuestions(IResolvable|GenieAgentDefinitionBenchmarksQuestions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.putQuestions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a>[]

---

##### `ResetQuestions` <a name="ResetQuestions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.resetQuestions"></a>

```csharp
private void ResetQuestions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.questions">Questions</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList">GenieAgentDefinitionBenchmarksQuestionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.questionsInput">QuestionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks">GenieAgentDefinitionBenchmarks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Questions`<sup>Required</sup> <a name="Questions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.questions"></a>

```csharp
public GenieAgentDefinitionBenchmarksQuestionsList Questions { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList">GenieAgentDefinitionBenchmarksQuestionsList</a>

---

##### `QuestionsInput`<sup>Optional</sup> <a name="QuestionsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.questionsInput"></a>

```csharp
public IResolvable|GenieAgentDefinitionBenchmarksQuestions[] QuestionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionBenchmarks InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks">GenieAgentDefinitionBenchmarks</a>

---


### GenieAgentDefinitionBenchmarksQuestionsAnswerList <a name="GenieAgentDefinitionBenchmarksQuestionsAnswerList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionBenchmarksQuestionsAnswerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.get"></a>

```csharp
private GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionBenchmarksQuestionsAnswer[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]

---


### GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference <a name="GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionBenchmarksQuestionsAnswer InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a>

---


### GenieAgentDefinitionBenchmarksQuestionsList <a name="GenieAgentDefinitionBenchmarksQuestionsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionBenchmarksQuestionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.get"></a>

```csharp
private GenieAgentDefinitionBenchmarksQuestionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsList.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionBenchmarksQuestions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a>[]

---


### GenieAgentDefinitionBenchmarksQuestionsOutputReference <a name="GenieAgentDefinitionBenchmarksQuestionsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionBenchmarksQuestionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.putAnswer">PutAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.resetAnswer">ResetAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.resetEvaluationNote">ResetEvaluationNote</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnswer` <a name="PutAnswer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.putAnswer"></a>

```csharp
private void PutAnswer(IResolvable|GenieAgentDefinitionBenchmarksQuestionsAnswer[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.putAnswer.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]

---

##### `ResetAnswer` <a name="ResetAnswer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.resetAnswer"></a>

```csharp
private void ResetAnswer()
```

##### `ResetEvaluationNote` <a name="ResetEvaluationNote" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.resetEvaluationNote"></a>

```csharp
private void ResetEvaluationNote()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answer">Answer</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList">GenieAgentDefinitionBenchmarksQuestionsAnswerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answerInput">AnswerInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNoteInput">EvaluationNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.questionInput">QuestionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNote">EvaluationNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.question">Question</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Answer`<sup>Required</sup> <a name="Answer" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answer"></a>

```csharp
public GenieAgentDefinitionBenchmarksQuestionsAnswerList Answer { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswerList">GenieAgentDefinitionBenchmarksQuestionsAnswerList</a>

---

##### `AnswerInput`<sup>Optional</sup> <a name="AnswerInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.answerInput"></a>

```csharp
public IResolvable|GenieAgentDefinitionBenchmarksQuestionsAnswer[] AnswerInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsAnswer">GenieAgentDefinitionBenchmarksQuestionsAnswer</a>[]

---

##### `EvaluationNoteInput`<sup>Optional</sup> <a name="EvaluationNoteInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNoteInput"></a>

```csharp
public string EvaluationNoteInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `QuestionInput`<sup>Optional</sup> <a name="QuestionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.questionInput"></a>

```csharp
public string QuestionInput { get; }
```

- *Type:* string

---

##### `EvaluationNote`<sup>Required</sup> <a name="EvaluationNote" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.evaluationNote"></a>

```csharp
public string EvaluationNote { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Question`<sup>Required</sup> <a name="Question" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.question"></a>

```csharp
public string Question { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionBenchmarksQuestions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksQuestions">GenieAgentDefinitionBenchmarksQuestions</a>

---


### GenieAgentDefinitionConfigOutputReference <a name="GenieAgentDefinitionConfigOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.putSampleQuestions">PutSampleQuestions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.resetSampleQuestions">ResetSampleQuestions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSampleQuestions` <a name="PutSampleQuestions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.putSampleQuestions"></a>

```csharp
private void PutSampleQuestions(IResolvable|GenieAgentDefinitionConfigSampleQuestions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.putSampleQuestions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a>[]

---

##### `ResetSampleQuestions` <a name="ResetSampleQuestions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.resetSampleQuestions"></a>

```csharp
private void ResetSampleQuestions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.sampleQuestions">SampleQuestions</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList">GenieAgentDefinitionConfigSampleQuestionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.sampleQuestionsInput">SampleQuestionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig">GenieAgentDefinitionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SampleQuestions`<sup>Required</sup> <a name="SampleQuestions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.sampleQuestions"></a>

```csharp
public GenieAgentDefinitionConfigSampleQuestionsList SampleQuestions { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList">GenieAgentDefinitionConfigSampleQuestionsList</a>

---

##### `SampleQuestionsInput`<sup>Optional</sup> <a name="SampleQuestionsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.sampleQuestionsInput"></a>

```csharp
public IResolvable|GenieAgentDefinitionConfigSampleQuestions[] SampleQuestionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig">GenieAgentDefinitionConfig</a>

---


### GenieAgentDefinitionConfigSampleQuestionsList <a name="GenieAgentDefinitionConfigSampleQuestionsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionConfigSampleQuestionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.get"></a>

```csharp
private GenieAgentDefinitionConfigSampleQuestionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsList.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionConfigSampleQuestions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a>[]

---


### GenieAgentDefinitionConfigSampleQuestionsOutputReference <a name="GenieAgentDefinitionConfigSampleQuestionsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionConfigSampleQuestionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.questionInput">QuestionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.question">Question</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `QuestionInput`<sup>Optional</sup> <a name="QuestionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.questionInput"></a>

```csharp
public string QuestionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Question`<sup>Required</sup> <a name="Question" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.question"></a>

```csharp
public string Question { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionConfigSampleQuestions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigSampleQuestions">GenieAgentDefinitionConfigSampleQuestions</a>

---


### GenieAgentDefinitionDataSourcesMcpConnectionsList <a name="GenieAgentDefinitionDataSourcesMcpConnectionsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionDataSourcesMcpConnectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.get"></a>

```csharp
private GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionDataSourcesMcpConnections[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a>[]

---


### GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference <a name="GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnectionInput">McpConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnection">McpConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `McpConnectionInput`<sup>Optional</sup> <a name="McpConnectionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnectionInput"></a>

```csharp
public string McpConnectionInput { get; }
```

- *Type:* string

---

##### `McpConnection`<sup>Required</sup> <a name="McpConnection" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.mcpConnection"></a>

```csharp
public string McpConnection { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionDataSourcesMcpConnections InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a>

---


### GenieAgentDefinitionDataSourcesOutputReference <a name="GenieAgentDefinitionDataSourcesOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionDataSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putMcpConnections">PutMcpConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putTables">PutTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resetMcpConnections">ResetMcpConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resetTables">ResetTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMcpConnections` <a name="PutMcpConnections" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putMcpConnections"></a>

```csharp
private void PutMcpConnections(IResolvable|GenieAgentDefinitionDataSourcesMcpConnections[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putMcpConnections.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a>[]

---

##### `PutTables` <a name="PutTables" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putTables"></a>

```csharp
private void PutTables(IResolvable|GenieAgentDefinitionDataSourcesTables[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putTables.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a>[]

---

##### `PutVolumes` <a name="PutVolumes" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putVolumes"></a>

```csharp
private void PutVolumes(IResolvable|GenieAgentDefinitionDataSourcesVolumes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.putVolumes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a>[]

---

##### `ResetMcpConnections` <a name="ResetMcpConnections" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resetMcpConnections"></a>

```csharp
private void ResetMcpConnections()
```

##### `ResetTables` <a name="ResetTables" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resetTables"></a>

```csharp
private void ResetTables()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.resetVolumes"></a>

```csharp
private void ResetVolumes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.mcpConnections">McpConnections</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList">GenieAgentDefinitionDataSourcesMcpConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.tables">Tables</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList">GenieAgentDefinitionDataSourcesTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList">GenieAgentDefinitionDataSourcesVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.mcpConnectionsInput">McpConnectionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.tablesInput">TablesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.volumesInput">VolumesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources">GenieAgentDefinitionDataSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `McpConnections`<sup>Required</sup> <a name="McpConnections" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.mcpConnections"></a>

```csharp
public GenieAgentDefinitionDataSourcesMcpConnectionsList McpConnections { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnectionsList">GenieAgentDefinitionDataSourcesMcpConnectionsList</a>

---

##### `Tables`<sup>Required</sup> <a name="Tables" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.tables"></a>

```csharp
public GenieAgentDefinitionDataSourcesTablesList Tables { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList">GenieAgentDefinitionDataSourcesTablesList</a>

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.volumes"></a>

```csharp
public GenieAgentDefinitionDataSourcesVolumesList Volumes { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList">GenieAgentDefinitionDataSourcesVolumesList</a>

---

##### `McpConnectionsInput`<sup>Optional</sup> <a name="McpConnectionsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.mcpConnectionsInput"></a>

```csharp
public IResolvable|GenieAgentDefinitionDataSourcesMcpConnections[] McpConnectionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesMcpConnections">GenieAgentDefinitionDataSourcesMcpConnections</a>[]

---

##### `TablesInput`<sup>Optional</sup> <a name="TablesInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.tablesInput"></a>

```csharp
public IResolvable|GenieAgentDefinitionDataSourcesTables[] TablesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a>[]

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.volumesInput"></a>

```csharp
public IResolvable|GenieAgentDefinitionDataSourcesVolumes[] VolumesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionDataSources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources">GenieAgentDefinitionDataSources</a>

---


### GenieAgentDefinitionDataSourcesTablesColumnConfigsList <a name="GenieAgentDefinitionDataSourcesTablesColumnConfigsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionDataSourcesTablesColumnConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.get"></a>

```csharp
private GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionDataSourcesTablesColumnConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]

---


### GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference <a name="GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableEntityMatching">ResetEnableEntityMatching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableFormatAssistance">ResetEnableFormatAssistance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetSynonyms">ResetSynonyms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEnableEntityMatching` <a name="ResetEnableEntityMatching" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableEntityMatching"></a>

```csharp
private void ResetEnableEntityMatching()
```

##### `ResetEnableFormatAssistance` <a name="ResetEnableFormatAssistance" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetEnableFormatAssistance"></a>

```csharp
private void ResetEnableFormatAssistance()
```

##### `ResetExclude` <a name="ResetExclude" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetExclude"></a>

```csharp
private void ResetExclude()
```

##### `ResetSynonyms` <a name="ResetSynonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.resetSynonyms"></a>

```csharp
private void ResetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.columnInput">ColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatchingInput">EnableEntityMatchingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistanceInput">EnableFormatAssistanceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.excludeInput">ExcludeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonymsInput">SynonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.column">Column</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatching">EnableEntityMatching</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistance">EnableFormatAssistance</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.exclude">Exclude</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonyms">Synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.columnInput"></a>

```csharp
public string ColumnInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnableEntityMatchingInput`<sup>Optional</sup> <a name="EnableEntityMatchingInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatchingInput"></a>

```csharp
public bool|IResolvable EnableEntityMatchingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableFormatAssistanceInput`<sup>Optional</sup> <a name="EnableFormatAssistanceInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistanceInput"></a>

```csharp
public bool|IResolvable EnableFormatAssistanceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.excludeInput"></a>

```csharp
public bool|IResolvable ExcludeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SynonymsInput`<sup>Optional</sup> <a name="SynonymsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonymsInput"></a>

```csharp
public string[] SynonymsInput { get; }
```

- *Type:* string[]

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.column"></a>

```csharp
public string Column { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnableEntityMatching`<sup>Required</sup> <a name="EnableEntityMatching" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableEntityMatching"></a>

```csharp
public bool|IResolvable EnableEntityMatching { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableFormatAssistance`<sup>Required</sup> <a name="EnableFormatAssistance" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.enableFormatAssistance"></a>

```csharp
public bool|IResolvable EnableFormatAssistance { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.exclude"></a>

```csharp
public bool|IResolvable Exclude { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.synonyms"></a>

```csharp
public string[] Synonyms { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionDataSourcesTablesColumnConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a>

---


### GenieAgentDefinitionDataSourcesTablesList <a name="GenieAgentDefinitionDataSourcesTablesList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionDataSourcesTablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.get"></a>

```csharp
private GenieAgentDefinitionDataSourcesTablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesList.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionDataSourcesTables[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a>[]

---


### GenieAgentDefinitionDataSourcesTablesOutputReference <a name="GenieAgentDefinitionDataSourcesTablesOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionDataSourcesTablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.putColumnConfigs">PutColumnConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.resetColumnConfigs">ResetColumnConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumnConfigs` <a name="PutColumnConfigs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.putColumnConfigs"></a>

```csharp
private void PutColumnConfigs(IResolvable|GenieAgentDefinitionDataSourcesTablesColumnConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.putColumnConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]

---

##### `ResetColumnConfigs` <a name="ResetColumnConfigs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.resetColumnConfigs"></a>

```csharp
private void ResetColumnConfigs()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigs">ColumnConfigs</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList">GenieAgentDefinitionDataSourcesTablesColumnConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigsInput">ColumnConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnConfigs`<sup>Required</sup> <a name="ColumnConfigs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigs"></a>

```csharp
public GenieAgentDefinitionDataSourcesTablesColumnConfigsList ColumnConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigsList">GenieAgentDefinitionDataSourcesTablesColumnConfigsList</a>

---

##### `ColumnConfigsInput`<sup>Optional</sup> <a name="ColumnConfigsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.columnConfigsInput"></a>

```csharp
public IResolvable|GenieAgentDefinitionDataSourcesTablesColumnConfigs[] ColumnConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesColumnConfigs">GenieAgentDefinitionDataSourcesTablesColumnConfigs</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTablesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionDataSourcesTables InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesTables">GenieAgentDefinitionDataSourcesTables</a>

---


### GenieAgentDefinitionDataSourcesVolumesList <a name="GenieAgentDefinitionDataSourcesVolumesList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionDataSourcesVolumesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.get"></a>

```csharp
private GenieAgentDefinitionDataSourcesVolumesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesList.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionDataSourcesVolumes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a>[]

---


### GenieAgentDefinitionDataSourcesVolumesOutputReference <a name="GenieAgentDefinitionDataSourcesVolumesOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionDataSourcesVolumesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionDataSourcesVolumes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesVolumes">GenieAgentDefinitionDataSourcesVolumes</a>

---


### GenieAgentDefinitionInstructionsExampleQuestionSqlsList <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsExampleQuestionSqlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.get"></a>

```csharp
private GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsExampleQuestionSqls[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]

---


### GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetUsageGuidance">ResetUsageGuidance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters"></a>

```csharp
private void PutParameters(IResolvable|GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.putParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]

---

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetUsageGuidance` <a name="ResetUsageGuidance" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.resetUsageGuidance"></a>

```csharp
private void ResetUsageGuidance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.questionInput">QuestionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sqlInput">SqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidanceInput">UsageGuidanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.question">Question</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sql">Sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidance">UsageGuidance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parameters"></a>

```csharp
public GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.parametersInput"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters[] ParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]

---

##### `QuestionInput`<sup>Optional</sup> <a name="QuestionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.questionInput"></a>

```csharp
public string QuestionInput { get; }
```

- *Type:* string

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sqlInput"></a>

```csharp
public string SqlInput { get; }
```

- *Type:* string

---

##### `UsageGuidanceInput`<sup>Optional</sup> <a name="UsageGuidanceInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidanceInput"></a>

```csharp
public string UsageGuidanceInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Question`<sup>Required</sup> <a name="Question" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.question"></a>

```csharp
public string Question { get; }
```

- *Type:* string

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.sql"></a>

```csharp
public string Sql { get; }
```

- *Type:* string

---

##### `UsageGuidance`<sup>Required</sup> <a name="UsageGuidance" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.usageGuidance"></a>

```csharp
public string UsageGuidance { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsExampleQuestionSqls InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a>

---


### GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange">PutValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValueRange">ResetValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValueRange` <a name="PutValueRange" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange"></a>

```csharp
private void PutValueRange(GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.putValueRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

---

##### `ResetValueRange` <a name="ResetValueRange" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValueRange"></a>

```csharp
private void ResetValueRange()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRange">ValueRange</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRangeInput">ValueRangeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueRange`<sup>Required</sup> <a name="ValueRange" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRange"></a>

```csharp
public GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference ValueRange { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference</a>

---

##### `ValueRangeInput`<sup>Optional</sup> <a name="ValueRangeInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valueRangeInput"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange ValueRangeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

---


### GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.minInput">MinInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.max">Max</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.min">Min</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.maxInput"></a>

```csharp
public string MaxInput { get; }
```

- *Type:* string

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.minInput"></a>

```csharp
public string MinInput { get; }
```

- *Type:* string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.max"></a>

```csharp
public string Max { get; }
```

- *Type:* string

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.min"></a>

```csharp
public string Min { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange</a>

---


### GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.get"></a>

```csharp
private GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>[]

---


### GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference <a name="GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue">PutDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetTypeHint">ResetTypeHint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultValue` <a name="PutDefaultValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue"></a>

```csharp
private void PutDefaultValue(GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.putDefaultValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

---

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDefaultValue"></a>

```csharp
private void ResetDefaultValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTypeHint` <a name="ResetTypeHint" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.resetTypeHint"></a>

```csharp
private void ResetTypeHint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValue">DefaultValue</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHintInput">TypeHintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHint">TypeHint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValue"></a>

```csharp
public GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference DefaultValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference</a>

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.defaultValueInput"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue DefaultValueInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue">GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeHintInput`<sup>Optional</sup> <a name="TypeHintInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHintInput"></a>

```csharp
public string TypeHintInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TypeHint`<sup>Required</sup> <a name="TypeHint" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.typeHint"></a>

```csharp
public string TypeHint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters">GenieAgentDefinitionInstructionsExampleQuestionSqlsParameters</a>

---


### GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference <a name="GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.resetAlias"></a>

```csharp
private void ResetAlias()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft">GenieAgentDefinitionInstructionsJoinSpecsLeft</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsJoinSpecsLeft InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft">GenieAgentDefinitionInstructionsJoinSpecsLeft</a>

---


### GenieAgentDefinitionInstructionsJoinSpecsList <a name="GenieAgentDefinitionInstructionsJoinSpecsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsJoinSpecsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.get"></a>

```csharp
private GenieAgentDefinitionInstructionsJoinSpecsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsJoinSpecs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a>[]

---


### GenieAgentDefinitionInstructionsJoinSpecsOutputReference <a name="GenieAgentDefinitionInstructionsJoinSpecsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsJoinSpecsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.putLeft">PutLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.putRight">PutRight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetInstruction">ResetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetRelationshipType">ResetRelationshipType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLeft` <a name="PutLeft" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.putLeft"></a>

```csharp
private void PutLeft(GenieAgentDefinitionInstructionsJoinSpecsLeft Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.putLeft.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft">GenieAgentDefinitionInstructionsJoinSpecsLeft</a>

---

##### `PutRight` <a name="PutRight" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.putRight"></a>

```csharp
private void PutRight(GenieAgentDefinitionInstructionsJoinSpecsRight Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.putRight.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight">GenieAgentDefinitionInstructionsJoinSpecsRight</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetInstruction` <a name="ResetInstruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetInstruction"></a>

```csharp
private void ResetInstruction()
```

##### `ResetRelationshipType` <a name="ResetRelationshipType" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.resetRelationshipType"></a>

```csharp
private void ResetRelationshipType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.left">Left</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference">GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.right">Right</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference">GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instructionInput">InstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.leftInput">LeftInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft">GenieAgentDefinitionInstructionsJoinSpecsLeft</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipTypeInput">RelationshipTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.rightInput">RightInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight">GenieAgentDefinitionInstructionsJoinSpecsRight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sqlInput">SqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instruction">Instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipType">RelationshipType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sql">Sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Left`<sup>Required</sup> <a name="Left" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.left"></a>

```csharp
public GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference Left { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference">GenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference</a>

---

##### `Right`<sup>Required</sup> <a name="Right" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.right"></a>

```csharp
public GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference Right { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference">GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstructionInput`<sup>Optional</sup> <a name="InstructionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instructionInput"></a>

```csharp
public string InstructionInput { get; }
```

- *Type:* string

---

##### `LeftInput`<sup>Optional</sup> <a name="LeftInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.leftInput"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsJoinSpecsLeft LeftInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsLeft">GenieAgentDefinitionInstructionsJoinSpecsLeft</a>

---

##### `RelationshipTypeInput`<sup>Optional</sup> <a name="RelationshipTypeInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipTypeInput"></a>

```csharp
public string RelationshipTypeInput { get; }
```

- *Type:* string

---

##### `RightInput`<sup>Optional</sup> <a name="RightInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.rightInput"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsJoinSpecsRight RightInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight">GenieAgentDefinitionInstructionsJoinSpecsRight</a>

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sqlInput"></a>

```csharp
public string SqlInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.instruction"></a>

```csharp
public string Instruction { get; }
```

- *Type:* string

---

##### `RelationshipType`<sup>Required</sup> <a name="RelationshipType" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.relationshipType"></a>

```csharp
public string RelationshipType { get; }
```

- *Type:* string

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.sql"></a>

```csharp
public string Sql { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsJoinSpecs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a>

---


### GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference <a name="GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.resetAlias"></a>

```csharp
private void ResetAlias()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight">GenieAgentDefinitionInstructionsJoinSpecsRight</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRightOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsJoinSpecsRight InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsRight">GenieAgentDefinitionInstructionsJoinSpecsRight</a>

---


### GenieAgentDefinitionInstructionsOutputReference <a name="GenieAgentDefinitionInstructionsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putExampleQuestionSqls">PutExampleQuestionSqls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putJoinSpecs">PutJoinSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putSqlFunctions">PutSqlFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putSqlSnippets">PutSqlSnippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putTextInstructions">PutTextInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetExampleQuestionSqls">ResetExampleQuestionSqls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetJoinSpecs">ResetJoinSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetSqlFunctions">ResetSqlFunctions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetSqlSnippets">ResetSqlSnippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetTextInstructions">ResetTextInstructions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExampleQuestionSqls` <a name="PutExampleQuestionSqls" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putExampleQuestionSqls"></a>

```csharp
private void PutExampleQuestionSqls(IResolvable|GenieAgentDefinitionInstructionsExampleQuestionSqls[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putExampleQuestionSqls.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]

---

##### `PutJoinSpecs` <a name="PutJoinSpecs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putJoinSpecs"></a>

```csharp
private void PutJoinSpecs(IResolvable|GenieAgentDefinitionInstructionsJoinSpecs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putJoinSpecs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a>[]

---

##### `PutSqlFunctions` <a name="PutSqlFunctions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putSqlFunctions"></a>

```csharp
private void PutSqlFunctions(IResolvable|GenieAgentDefinitionInstructionsSqlFunctions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putSqlFunctions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a>[]

---

##### `PutSqlSnippets` <a name="PutSqlSnippets" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putSqlSnippets"></a>

```csharp
private void PutSqlSnippets(GenieAgentDefinitionInstructionsSqlSnippets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putSqlSnippets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets">GenieAgentDefinitionInstructionsSqlSnippets</a>

---

##### `PutTextInstructions` <a name="PutTextInstructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putTextInstructions"></a>

```csharp
private void PutTextInstructions(IResolvable|GenieAgentDefinitionInstructionsTextInstructions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.putTextInstructions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a>[]

---

##### `ResetExampleQuestionSqls` <a name="ResetExampleQuestionSqls" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetExampleQuestionSqls"></a>

```csharp
private void ResetExampleQuestionSqls()
```

##### `ResetJoinSpecs` <a name="ResetJoinSpecs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetJoinSpecs"></a>

```csharp
private void ResetJoinSpecs()
```

##### `ResetSqlFunctions` <a name="ResetSqlFunctions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetSqlFunctions"></a>

```csharp
private void ResetSqlFunctions()
```

##### `ResetSqlSnippets` <a name="ResetSqlSnippets" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetSqlSnippets"></a>

```csharp
private void ResetSqlSnippets()
```

##### `ResetTextInstructions` <a name="ResetTextInstructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.resetTextInstructions"></a>

```csharp
private void ResetTextInstructions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqls">ExampleQuestionSqls</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList">GenieAgentDefinitionInstructionsExampleQuestionSqlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.joinSpecs">JoinSpecs</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList">GenieAgentDefinitionInstructionsJoinSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.sqlFunctions">SqlFunctions</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList">GenieAgentDefinitionInstructionsSqlFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.sqlSnippets">SqlSnippets</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference">GenieAgentDefinitionInstructionsSqlSnippetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.textInstructions">TextInstructions</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList">GenieAgentDefinitionInstructionsTextInstructionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqlsInput">ExampleQuestionSqlsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.joinSpecsInput">JoinSpecsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.sqlFunctionsInput">SqlFunctionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.sqlSnippetsInput">SqlSnippetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets">GenieAgentDefinitionInstructionsSqlSnippets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.textInstructionsInput">TextInstructionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions">GenieAgentDefinitionInstructions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExampleQuestionSqls`<sup>Required</sup> <a name="ExampleQuestionSqls" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqls"></a>

```csharp
public GenieAgentDefinitionInstructionsExampleQuestionSqlsList ExampleQuestionSqls { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqlsList">GenieAgentDefinitionInstructionsExampleQuestionSqlsList</a>

---

##### `JoinSpecs`<sup>Required</sup> <a name="JoinSpecs" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.joinSpecs"></a>

```csharp
public GenieAgentDefinitionInstructionsJoinSpecsList JoinSpecs { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecsList">GenieAgentDefinitionInstructionsJoinSpecsList</a>

---

##### `SqlFunctions`<sup>Required</sup> <a name="SqlFunctions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.sqlFunctions"></a>

```csharp
public GenieAgentDefinitionInstructionsSqlFunctionsList SqlFunctions { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList">GenieAgentDefinitionInstructionsSqlFunctionsList</a>

---

##### `SqlSnippets`<sup>Required</sup> <a name="SqlSnippets" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.sqlSnippets"></a>

```csharp
public GenieAgentDefinitionInstructionsSqlSnippetsOutputReference SqlSnippets { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference">GenieAgentDefinitionInstructionsSqlSnippetsOutputReference</a>

---

##### `TextInstructions`<sup>Required</sup> <a name="TextInstructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.textInstructions"></a>

```csharp
public GenieAgentDefinitionInstructionsTextInstructionsList TextInstructions { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList">GenieAgentDefinitionInstructionsTextInstructionsList</a>

---

##### `ExampleQuestionSqlsInput`<sup>Optional</sup> <a name="ExampleQuestionSqlsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.exampleQuestionSqlsInput"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsExampleQuestionSqls[] ExampleQuestionSqlsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsExampleQuestionSqls">GenieAgentDefinitionInstructionsExampleQuestionSqls</a>[]

---

##### `JoinSpecsInput`<sup>Optional</sup> <a name="JoinSpecsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.joinSpecsInput"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsJoinSpecs[] JoinSpecsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsJoinSpecs">GenieAgentDefinitionInstructionsJoinSpecs</a>[]

---

##### `SqlFunctionsInput`<sup>Optional</sup> <a name="SqlFunctionsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.sqlFunctionsInput"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsSqlFunctions[] SqlFunctionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a>[]

---

##### `SqlSnippetsInput`<sup>Optional</sup> <a name="SqlSnippetsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.sqlSnippetsInput"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsSqlSnippets SqlSnippetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets">GenieAgentDefinitionInstructionsSqlSnippets</a>

---

##### `TextInstructionsInput`<sup>Optional</sup> <a name="TextInstructionsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.textInstructionsInput"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsTextInstructions[] TextInstructionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions">GenieAgentDefinitionInstructions</a>

---


### GenieAgentDefinitionInstructionsSqlFunctionsList <a name="GenieAgentDefinitionInstructionsSqlFunctionsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsSqlFunctionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.get"></a>

```csharp
private GenieAgentDefinitionInstructionsSqlFunctionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsList.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsSqlFunctions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a>[]

---


### GenieAgentDefinitionInstructionsSqlFunctionsOutputReference <a name="GenieAgentDefinitionInstructionsSqlFunctionsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsSqlFunctionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsSqlFunctions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlFunctions">GenieAgentDefinitionInstructionsSqlFunctions</a>

---


### GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList <a name="GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.get"></a>

```csharp
private GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsSqlSnippetsExpressions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]

---


### GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference <a name="GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetInstruction">ResetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetSynonyms">ResetSynonyms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetInstruction` <a name="ResetInstruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetInstruction"></a>

```csharp
private void ResetInstruction()
```

##### `ResetSynonyms` <a name="ResetSynonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.resetSynonyms"></a>

```csharp
private void ResetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instructionInput">InstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sqlInput">SqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonymsInput">SynonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instruction">Instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sql">Sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonyms">Synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstructionInput`<sup>Optional</sup> <a name="InstructionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instructionInput"></a>

```csharp
public string InstructionInput { get; }
```

- *Type:* string

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sqlInput"></a>

```csharp
public string SqlInput { get; }
```

- *Type:* string

---

##### `SynonymsInput`<sup>Optional</sup> <a name="SynonymsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonymsInput"></a>

```csharp
public string[] SynonymsInput { get; }
```

- *Type:* string[]

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.instruction"></a>

```csharp
public string Instruction { get; }
```

- *Type:* string

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.sql"></a>

```csharp
public string Sql { get; }
```

- *Type:* string

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.synonyms"></a>

```csharp
public string[] Synonyms { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsSqlSnippetsExpressions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>

---


### GenieAgentDefinitionInstructionsSqlSnippetsFiltersList <a name="GenieAgentDefinitionInstructionsSqlSnippetsFiltersList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsSqlSnippetsFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.get"></a>

```csharp
private GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsSqlSnippetsFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]

---


### GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference <a name="GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetInstruction">ResetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetSynonyms">ResetSynonyms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetInstruction` <a name="ResetInstruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetInstruction"></a>

```csharp
private void ResetInstruction()
```

##### `ResetSynonyms` <a name="ResetSynonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.resetSynonyms"></a>

```csharp
private void ResetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instructionInput">InstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sqlInput">SqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonymsInput">SynonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instruction">Instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sql">Sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonyms">Synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstructionInput`<sup>Optional</sup> <a name="InstructionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instructionInput"></a>

```csharp
public string InstructionInput { get; }
```

- *Type:* string

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sqlInput"></a>

```csharp
public string SqlInput { get; }
```

- *Type:* string

---

##### `SynonymsInput`<sup>Optional</sup> <a name="SynonymsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonymsInput"></a>

```csharp
public string[] SynonymsInput { get; }
```

- *Type:* string[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.instruction"></a>

```csharp
public string Instruction { get; }
```

- *Type:* string

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.sql"></a>

```csharp
public string Sql { get; }
```

- *Type:* string

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.synonyms"></a>

```csharp
public string[] Synonyms { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsSqlSnippetsFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a>

---


### GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList <a name="GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.get"></a>

```csharp
private GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsSqlSnippetsMeasures[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]

---


### GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference <a name="GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetInstruction">ResetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetSynonyms">ResetSynonyms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetInstruction` <a name="ResetInstruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetInstruction"></a>

```csharp
private void ResetInstruction()
```

##### `ResetSynonyms` <a name="ResetSynonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.resetSynonyms"></a>

```csharp
private void ResetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instructionInput">InstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sqlInput">SqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonymsInput">SynonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instruction">Instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sql">Sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonyms">Synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstructionInput`<sup>Optional</sup> <a name="InstructionInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instructionInput"></a>

```csharp
public string InstructionInput { get; }
```

- *Type:* string

---

##### `SqlInput`<sup>Optional</sup> <a name="SqlInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sqlInput"></a>

```csharp
public string SqlInput { get; }
```

- *Type:* string

---

##### `SynonymsInput`<sup>Optional</sup> <a name="SynonymsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonymsInput"></a>

```csharp
public string[] SynonymsInput { get; }
```

- *Type:* string[]

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.instruction"></a>

```csharp
public string Instruction { get; }
```

- *Type:* string

---

##### `Sql`<sup>Required</sup> <a name="Sql" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.sql"></a>

```csharp
public string Sql { get; }
```

- *Type:* string

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.synonyms"></a>

```csharp
public string[] Synonyms { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsSqlSnippetsMeasures InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>

---


### GenieAgentDefinitionInstructionsSqlSnippetsOutputReference <a name="GenieAgentDefinitionInstructionsSqlSnippetsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsSqlSnippetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putExpressions">PutExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putMeasures">PutMeasures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetExpressions">ResetExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetMeasures">ResetMeasures</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpressions` <a name="PutExpressions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putExpressions"></a>

```csharp
private void PutExpressions(IResolvable|GenieAgentDefinitionInstructionsSqlSnippetsExpressions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putExpressions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]

---

##### `PutFilters` <a name="PutFilters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putFilters"></a>

```csharp
private void PutFilters(IResolvable|GenieAgentDefinitionInstructionsSqlSnippetsFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]

---

##### `PutMeasures` <a name="PutMeasures" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putMeasures"></a>

```csharp
private void PutMeasures(IResolvable|GenieAgentDefinitionInstructionsSqlSnippetsMeasures[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.putMeasures.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]

---

##### `ResetExpressions` <a name="ResetExpressions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetExpressions"></a>

```csharp
private void ResetExpressions()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetFilters"></a>

```csharp
private void ResetFilters()
```

##### `ResetMeasures` <a name="ResetMeasures" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.resetMeasures"></a>

```csharp
private void ResetMeasures()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressions">Expressions</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList">GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList">GenieAgentDefinitionInstructionsSqlSnippetsFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measures">Measures</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList">GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressionsInput">ExpressionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filtersInput">FiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measuresInput">MeasuresInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets">GenieAgentDefinitionInstructionsSqlSnippets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expressions`<sup>Required</sup> <a name="Expressions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressions"></a>

```csharp
public GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList Expressions { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList">GenieAgentDefinitionInstructionsSqlSnippetsExpressionsList</a>

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filters"></a>

```csharp
public GenieAgentDefinitionInstructionsSqlSnippetsFiltersList Filters { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFiltersList">GenieAgentDefinitionInstructionsSqlSnippetsFiltersList</a>

---

##### `Measures`<sup>Required</sup> <a name="Measures" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measures"></a>

```csharp
public GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList Measures { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList">GenieAgentDefinitionInstructionsSqlSnippetsMeasuresList</a>

---

##### `ExpressionsInput`<sup>Optional</sup> <a name="ExpressionsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.expressionsInput"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsSqlSnippetsExpressions[] ExpressionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsExpressions">GenieAgentDefinitionInstructionsSqlSnippetsExpressions</a>[]

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.filtersInput"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsSqlSnippetsFilters[] FiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsFilters">GenieAgentDefinitionInstructionsSqlSnippetsFilters</a>[]

---

##### `MeasuresInput`<sup>Optional</sup> <a name="MeasuresInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.measuresInput"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsSqlSnippetsMeasures[] MeasuresInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsMeasures">GenieAgentDefinitionInstructionsSqlSnippetsMeasures</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsSqlSnippets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsSqlSnippets">GenieAgentDefinitionInstructionsSqlSnippets</a>

---


### GenieAgentDefinitionInstructionsTextInstructionsList <a name="GenieAgentDefinitionInstructionsTextInstructionsList" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsTextInstructionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.get"></a>

```csharp
private GenieAgentDefinitionInstructionsTextInstructionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsList.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsTextInstructions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a>[]

---


### GenieAgentDefinitionInstructionsTextInstructionsOutputReference <a name="GenieAgentDefinitionInstructionsTextInstructionsOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionInstructionsTextInstructionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructionsTextInstructions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsTextInstructions">GenieAgentDefinitionInstructionsTextInstructions</a>

---


### GenieAgentDefinitionOutputReference <a name="GenieAgentDefinitionOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putBenchmarks">PutBenchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putDataSources">PutDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putInstructions">PutInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resetBenchmarks">ResetBenchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resetDataSources">ResetDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resetInstructions">ResetInstructions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBenchmarks` <a name="PutBenchmarks" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putBenchmarks"></a>

```csharp
private void PutBenchmarks(GenieAgentDefinitionBenchmarks Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putBenchmarks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks">GenieAgentDefinitionBenchmarks</a>

---

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putConfig"></a>

```csharp
private void PutConfig(GenieAgentDefinitionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig">GenieAgentDefinitionConfig</a>

---

##### `PutDataSources` <a name="PutDataSources" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putDataSources"></a>

```csharp
private void PutDataSources(GenieAgentDefinitionDataSources Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putDataSources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources">GenieAgentDefinitionDataSources</a>

---

##### `PutInstructions` <a name="PutInstructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putInstructions"></a>

```csharp
private void PutInstructions(GenieAgentDefinitionInstructions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.putInstructions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions">GenieAgentDefinitionInstructions</a>

---

##### `ResetBenchmarks` <a name="ResetBenchmarks" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resetBenchmarks"></a>

```csharp
private void ResetBenchmarks()
```

##### `ResetConfig` <a name="ResetConfig" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resetConfig"></a>

```csharp
private void ResetConfig()
```

##### `ResetDataSources` <a name="ResetDataSources" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resetDataSources"></a>

```csharp
private void ResetDataSources()
```

##### `ResetInstructions` <a name="ResetInstructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.resetInstructions"></a>

```csharp
private void ResetInstructions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.benchmarks">Benchmarks</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference">GenieAgentDefinitionBenchmarksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference">GenieAgentDefinitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.dataSources">DataSources</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference">GenieAgentDefinitionDataSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.instructions">Instructions</a></code> | <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference">GenieAgentDefinitionInstructionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.benchmarksInput">BenchmarksInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks">GenieAgentDefinitionBenchmarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.configInput">ConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig">GenieAgentDefinitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.dataSourcesInput">DataSourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources">GenieAgentDefinitionDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.instructionsInput">InstructionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions">GenieAgentDefinitionInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition">GenieAgentDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Benchmarks`<sup>Required</sup> <a name="Benchmarks" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.benchmarks"></a>

```csharp
public GenieAgentDefinitionBenchmarksOutputReference Benchmarks { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarksOutputReference">GenieAgentDefinitionBenchmarksOutputReference</a>

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.config"></a>

```csharp
public GenieAgentDefinitionConfigOutputReference Config { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfigOutputReference">GenieAgentDefinitionConfigOutputReference</a>

---

##### `DataSources`<sup>Required</sup> <a name="DataSources" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.dataSources"></a>

```csharp
public GenieAgentDefinitionDataSourcesOutputReference DataSources { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSourcesOutputReference">GenieAgentDefinitionDataSourcesOutputReference</a>

---

##### `Instructions`<sup>Required</sup> <a name="Instructions" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.instructions"></a>

```csharp
public GenieAgentDefinitionInstructionsOutputReference Instructions { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructionsOutputReference">GenieAgentDefinitionInstructionsOutputReference</a>

---

##### `BenchmarksInput`<sup>Optional</sup> <a name="BenchmarksInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.benchmarksInput"></a>

```csharp
public IResolvable|GenieAgentDefinitionBenchmarks BenchmarksInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionBenchmarks">GenieAgentDefinitionBenchmarks</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.configInput"></a>

```csharp
public IResolvable|GenieAgentDefinitionConfig ConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionConfig">GenieAgentDefinitionConfig</a>

---

##### `DataSourcesInput`<sup>Optional</sup> <a name="DataSourcesInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.dataSourcesInput"></a>

```csharp
public IResolvable|GenieAgentDefinitionDataSources DataSourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionDataSources">GenieAgentDefinitionDataSources</a>

---

##### `InstructionsInput`<sup>Optional</sup> <a name="InstructionsInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.instructionsInput"></a>

```csharp
public IResolvable|GenieAgentDefinitionInstructions InstructionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionInstructions">GenieAgentDefinitionInstructions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentDefinitionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentDefinition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentDefinition">GenieAgentDefinition</a>

---


### GenieAgentProviderConfigOutputReference <a name="GenieAgentProviderConfigOutputReference" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new GenieAgentProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig">GenieAgentProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GenieAgentProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.genieAgent.GenieAgentProviderConfig">GenieAgentProviderConfig</a>

---



