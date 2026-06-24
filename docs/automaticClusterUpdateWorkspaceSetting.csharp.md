# `automaticClusterUpdateWorkspaceSetting` Submodule <a name="`automaticClusterUpdateWorkspaceSetting` Submodule" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomaticClusterUpdateWorkspaceSetting <a name="AutomaticClusterUpdateWorkspaceSetting" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting databricks_automatic_cluster_update_workspace_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AutomaticClusterUpdateWorkspaceSetting(Construct Scope, string Id, AutomaticClusterUpdateWorkspaceSettingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig">AutomaticClusterUpdateWorkspaceSettingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig">AutomaticClusterUpdateWorkspaceSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.putAutomaticClusterUpdateWorkspace">PutAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.resetSettingName">ResetSettingName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutomaticClusterUpdateWorkspace` <a name="PutAutomaticClusterUpdateWorkspace" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.putAutomaticClusterUpdateWorkspace"></a>

```csharp
private void PutAutomaticClusterUpdateWorkspace(AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.putAutomaticClusterUpdateWorkspace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace</a>

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.putProviderConfig"></a>

```csharp
private void PutProviderConfig(AutomaticClusterUpdateWorkspaceSettingProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfig">AutomaticClusterUpdateWorkspaceSettingProviderConfig</a>

---

##### `ResetEtag` <a name="ResetEtag" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.resetEtag"></a>

```csharp
private void ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

##### `ResetSettingName` <a name="ResetSettingName" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.resetSettingName"></a>

```csharp
private void ResetSettingName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AutomaticClusterUpdateWorkspaceSetting resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

AutomaticClusterUpdateWorkspaceSetting.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

AutomaticClusterUpdateWorkspaceSetting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

AutomaticClusterUpdateWorkspaceSetting.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

AutomaticClusterUpdateWorkspaceSetting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AutomaticClusterUpdateWorkspaceSetting resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AutomaticClusterUpdateWorkspaceSetting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AutomaticClusterUpdateWorkspaceSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AutomaticClusterUpdateWorkspaceSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.automaticClusterUpdateWorkspace">AutomaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference">AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.automaticClusterUpdateWorkspaceInput">AutomaticClusterUpdateWorkspaceInput</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.etagInput">EtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfig">AutomaticClusterUpdateWorkspaceSettingProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.settingNameInput">SettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.settingName">SettingName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutomaticClusterUpdateWorkspace`<sup>Required</sup> <a name="AutomaticClusterUpdateWorkspace" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.automaticClusterUpdateWorkspace"></a>

```csharp
public AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference AutomaticClusterUpdateWorkspace { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.providerConfig"></a>

```csharp
public AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference">AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference</a>

---

##### `AutomaticClusterUpdateWorkspaceInput`<sup>Optional</sup> <a name="AutomaticClusterUpdateWorkspaceInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.automaticClusterUpdateWorkspaceInput"></a>

```csharp
public AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace AutomaticClusterUpdateWorkspaceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace</a>

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.etagInput"></a>

```csharp
public string EtagInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.providerConfigInput"></a>

```csharp
public AutomaticClusterUpdateWorkspaceSettingProviderConfig ProviderConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfig">AutomaticClusterUpdateWorkspaceSettingProviderConfig</a>

---

##### `SettingNameInput`<sup>Optional</sup> <a name="SettingNameInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.settingNameInput"></a>

```csharp
public string SettingNameInput { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SettingName`<sup>Required</sup> <a name="SettingName" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.settingName"></a>

```csharp
public string SettingName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace <a name="AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace {
    bool|IResolvable Enabled,
    bool|IResolvable CanToggle = null,
    AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow MaintenanceWindow = null,
    bool|IResolvable RestartEvenIfNoUpdatesAvailable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#enabled AutomaticClusterUpdateWorkspaceSetting#enabled}. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace.property.canToggle">CanToggle</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#can_toggle AutomaticClusterUpdateWorkspaceSetting#can_toggle}. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable">RestartEvenIfNoUpdatesAvailable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#restart_even_if_no_updates_available AutomaticClusterUpdateWorkspaceSetting#restart_even_if_no_updates_available}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#enabled AutomaticClusterUpdateWorkspaceSetting#enabled}.

---

##### `CanToggle`<sup>Optional</sup> <a name="CanToggle" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace.property.canToggle"></a>

```csharp
public bool|IResolvable CanToggle { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#can_toggle AutomaticClusterUpdateWorkspaceSetting#can_toggle}.

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace.property.maintenanceWindow"></a>

```csharp
public AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow MaintenanceWindow { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#maintenance_window AutomaticClusterUpdateWorkspaceSetting#maintenance_window}

---

##### `RestartEvenIfNoUpdatesAvailable`<sup>Optional</sup> <a name="RestartEvenIfNoUpdatesAvailable" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable"></a>

```csharp
public bool|IResolvable RestartEvenIfNoUpdatesAvailable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#restart_even_if_no_updates_available AutomaticClusterUpdateWorkspaceSetting#restart_even_if_no_updates_available}.

---

### AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails <a name="AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails {

};
```


### AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow <a name="AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow {
    AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule WeekDayBasedSchedule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule">WeekDayBasedSchedule</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | week_day_based_schedule block. |

---

##### `WeekDayBasedSchedule`<sup>Optional</sup> <a name="WeekDayBasedSchedule" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule"></a>

```csharp
public AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule WeekDayBasedSchedule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

week_day_based_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#week_day_based_schedule AutomaticClusterUpdateWorkspaceSetting#week_day_based_schedule}

---

### AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule <a name="AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule {
    string DayOfWeek,
    string Frequency,
    AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime WindowStartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#day_of_week AutomaticClusterUpdateWorkspaceSetting#day_of_week}. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency">Frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#frequency AutomaticClusterUpdateWorkspaceSetting#frequency}. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime">WindowStartTime</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | window_start_time block. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#day_of_week AutomaticClusterUpdateWorkspaceSetting#day_of_week}.

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#frequency AutomaticClusterUpdateWorkspaceSetting#frequency}.

---

##### `WindowStartTime`<sup>Optional</sup> <a name="WindowStartTime" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime"></a>

```csharp
public AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime WindowStartTime { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

window_start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#window_start_time AutomaticClusterUpdateWorkspaceSetting#window_start_time}

---

### AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime <a name="AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime {
    double Hours,
    double Minutes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours">Hours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#hours AutomaticClusterUpdateWorkspaceSetting#hours}. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes">Minutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#minutes AutomaticClusterUpdateWorkspaceSetting#minutes}. |

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours"></a>

```csharp
public double Hours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#hours AutomaticClusterUpdateWorkspaceSetting#hours}.

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#minutes AutomaticClusterUpdateWorkspaceSetting#minutes}.

---

### AutomaticClusterUpdateWorkspaceSettingConfig <a name="AutomaticClusterUpdateWorkspaceSettingConfig" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AutomaticClusterUpdateWorkspaceSettingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace AutomaticClusterUpdateWorkspace,
    string Etag = null,
    string Id = null,
    AutomaticClusterUpdateWorkspaceSettingProviderConfig ProviderConfig = null,
    string SettingName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.automaticClusterUpdateWorkspace">AutomaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace</a></code> | automatic_cluster_update_workspace block. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.etag">Etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#etag AutomaticClusterUpdateWorkspaceSetting#etag}. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#id AutomaticClusterUpdateWorkspaceSetting#id}. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfig">AutomaticClusterUpdateWorkspaceSettingProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.settingName">SettingName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#setting_name AutomaticClusterUpdateWorkspaceSetting#setting_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutomaticClusterUpdateWorkspace`<sup>Required</sup> <a name="AutomaticClusterUpdateWorkspace" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.automaticClusterUpdateWorkspace"></a>

```csharp
public AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace AutomaticClusterUpdateWorkspace { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace</a>

automatic_cluster_update_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#automatic_cluster_update_workspace AutomaticClusterUpdateWorkspaceSetting#automatic_cluster_update_workspace}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.etag"></a>

```csharp
public string Etag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#etag AutomaticClusterUpdateWorkspaceSetting#etag}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#id AutomaticClusterUpdateWorkspaceSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.providerConfig"></a>

```csharp
public AutomaticClusterUpdateWorkspaceSettingProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfig">AutomaticClusterUpdateWorkspaceSettingProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#provider_config AutomaticClusterUpdateWorkspaceSetting#provider_config}

---

##### `SettingName`<sup>Optional</sup> <a name="SettingName" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.settingName"></a>

```csharp
public string SettingName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#setting_name AutomaticClusterUpdateWorkspaceSetting#setting_name}.

---

### AutomaticClusterUpdateWorkspaceSettingProviderConfig <a name="AutomaticClusterUpdateWorkspaceSettingProviderConfig" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AutomaticClusterUpdateWorkspaceSettingProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#workspace_id AutomaticClusterUpdateWorkspaceSetting#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/automatic_cluster_update_workspace_setting#workspace_id AutomaticClusterUpdateWorkspaceSetting#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList <a name="AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.get"></a>

```csharp
private AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference <a name="AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode">ForcedForComplianceMode</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement">UnavailableForDisabledEntitlement</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier">UnavailableForNonEnterpriseTier</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForcedForComplianceMode`<sup>Required</sup> <a name="ForcedForComplianceMode" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode"></a>

```csharp
public IResolvable ForcedForComplianceMode { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UnavailableForDisabledEntitlement`<sup>Required</sup> <a name="UnavailableForDisabledEntitlement" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement"></a>

```csharp
public IResolvable UnavailableForDisabledEntitlement { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UnavailableForNonEnterpriseTier`<sup>Required</sup> <a name="UnavailableForNonEnterpriseTier" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier"></a>

```csharp
public IResolvable UnavailableForNonEnterpriseTier { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue"></a>

```csharp
public AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails</a>

---


### AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference <a name="AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule">PutWeekDayBasedSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule">ResetWeekDayBasedSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWeekDayBasedSchedule` <a name="PutWeekDayBasedSchedule" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule"></a>

```csharp
private void PutWeekDayBasedSchedule(AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---

##### `ResetWeekDayBasedSchedule` <a name="ResetWeekDayBasedSchedule" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule"></a>

```csharp
private void ResetWeekDayBasedSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule">WeekDayBasedSchedule</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput">WeekDayBasedScheduleInput</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WeekDayBasedSchedule`<sup>Required</sup> <a name="WeekDayBasedSchedule" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule"></a>

```csharp
public AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference WeekDayBasedSchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a>

---

##### `WeekDayBasedScheduleInput`<sup>Optional</sup> <a name="WeekDayBasedScheduleInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput"></a>

```csharp
public AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule WeekDayBasedScheduleInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---


### AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference <a name="AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime">PutWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime">ResetWindowStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWindowStartTime` <a name="PutWindowStartTime" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime"></a>

```csharp
private void PutWindowStartTime(AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---

##### `ResetWindowStartTime` <a name="ResetWindowStartTime" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime"></a>

```csharp
private void ResetWindowStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime">WindowStartTime</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput">WindowStartTimeInput</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WindowStartTime`<sup>Required</sup> <a name="WindowStartTime" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime"></a>

```csharp
public AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference WindowStartTime { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a>

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput"></a>

```csharp
public string DayOfWeekInput { get; }
```

- *Type:* string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `WindowStartTimeInput`<sup>Optional</sup> <a name="WindowStartTimeInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput"></a>

```csharp
public AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime WindowStartTimeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue"></a>

```csharp
public AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---


### AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference <a name="AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput"></a>

```csharp
public double HoursInput { get; }
```

- *Type:* double

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue"></a>

```csharp
public AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---


### AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference <a name="AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle">ResetCanToggle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable">ResetRestartEvenIfNoUpdatesAvailable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow"></a>

```csharp
private void PutMaintenanceWindow(AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---

##### `ResetCanToggle` <a name="ResetCanToggle" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle"></a>

```csharp
private void ResetCanToggle()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow"></a>

```csharp
private void ResetMaintenanceWindow()
```

##### `ResetRestartEvenIfNoUpdatesAvailable` <a name="ResetRestartEvenIfNoUpdatesAvailable" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable"></a>

```csharp
private void ResetRestartEvenIfNoUpdatesAvailable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails">EnablementDetails</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput">CanToggleInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput">RestartEvenIfNoUpdatesAvailableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.canToggle">CanToggle</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable">RestartEvenIfNoUpdatesAvailable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnablementDetails`<sup>Required</sup> <a name="EnablementDetails" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails"></a>

```csharp
public AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList EnablementDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList</a>

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow"></a>

```csharp
public AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference MaintenanceWindow { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a>

---

##### `CanToggleInput`<sup>Optional</sup> <a name="CanToggleInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput"></a>

```csharp
public bool|IResolvable CanToggleInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput"></a>

```csharp
public AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow MaintenanceWindowInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---

##### `RestartEvenIfNoUpdatesAvailableInput`<sup>Optional</sup> <a name="RestartEvenIfNoUpdatesAvailableInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput"></a>

```csharp
public bool|IResolvable RestartEvenIfNoUpdatesAvailableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CanToggle`<sup>Required</sup> <a name="CanToggle" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.canToggle"></a>

```csharp
public bool|IResolvable CanToggle { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RestartEvenIfNoUpdatesAvailable`<sup>Required</sup> <a name="RestartEvenIfNoUpdatesAvailable" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable"></a>

```csharp
public bool|IResolvable RestartEvenIfNoUpdatesAvailable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.internalValue"></a>

```csharp
public AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace</a>

---


### AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference <a name="AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfig">AutomaticClusterUpdateWorkspaceSettingProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.property.internalValue"></a>

```csharp
public AutomaticClusterUpdateWorkspaceSettingProviderConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfig">AutomaticClusterUpdateWorkspaceSettingProviderConfig</a>

---



