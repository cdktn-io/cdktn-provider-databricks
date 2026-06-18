# `restrictWorkspaceAdminsSetting` Submodule <a name="`restrictWorkspaceAdminsSetting` Submodule" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RestrictWorkspaceAdminsSetting <a name="RestrictWorkspaceAdminsSetting" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/restrict_workspace_admins_setting databricks_restrict_workspace_admins_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new RestrictWorkspaceAdminsSetting(Construct Scope, string Id, RestrictWorkspaceAdminsSettingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig">RestrictWorkspaceAdminsSettingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig">RestrictWorkspaceAdminsSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.putRestrictWorkspaceAdmins">PutRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetSettingName">ResetSettingName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.putProviderConfig"></a>

```csharp
private void PutProviderConfig(RestrictWorkspaceAdminsSettingProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfig">RestrictWorkspaceAdminsSettingProviderConfig</a>

---

##### `PutRestrictWorkspaceAdmins` <a name="PutRestrictWorkspaceAdmins" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.putRestrictWorkspaceAdmins"></a>

```csharp
private void PutRestrictWorkspaceAdmins(RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.putRestrictWorkspaceAdmins.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins</a>

---

##### `ResetEtag` <a name="ResetEtag" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetEtag"></a>

```csharp
private void ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

##### `ResetSettingName` <a name="ResetSettingName" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetSettingName"></a>

```csharp
private void ResetSettingName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RestrictWorkspaceAdminsSetting resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

RestrictWorkspaceAdminsSetting.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

RestrictWorkspaceAdminsSetting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

RestrictWorkspaceAdminsSetting.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

RestrictWorkspaceAdminsSetting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RestrictWorkspaceAdminsSetting resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RestrictWorkspaceAdminsSetting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RestrictWorkspaceAdminsSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/restrict_workspace_admins_setting#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RestrictWorkspaceAdminsSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference">RestrictWorkspaceAdminsSettingProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.restrictWorkspaceAdmins">RestrictWorkspaceAdmins</a></code> | <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.etagInput">EtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfig">RestrictWorkspaceAdminsSettingProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.restrictWorkspaceAdminsInput">RestrictWorkspaceAdminsInput</a></code> | <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.settingNameInput">SettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.settingName">SettingName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.providerConfig"></a>

```csharp
public RestrictWorkspaceAdminsSettingProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference">RestrictWorkspaceAdminsSettingProviderConfigOutputReference</a>

---

##### `RestrictWorkspaceAdmins`<sup>Required</sup> <a name="RestrictWorkspaceAdmins" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.restrictWorkspaceAdmins"></a>

```csharp
public RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference RestrictWorkspaceAdmins { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference</a>

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.etagInput"></a>

```csharp
public string EtagInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.providerConfigInput"></a>

```csharp
public RestrictWorkspaceAdminsSettingProviderConfig ProviderConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfig">RestrictWorkspaceAdminsSettingProviderConfig</a>

---

##### `RestrictWorkspaceAdminsInput`<sup>Optional</sup> <a name="RestrictWorkspaceAdminsInput" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.restrictWorkspaceAdminsInput"></a>

```csharp
public RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins RestrictWorkspaceAdminsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins</a>

---

##### `SettingNameInput`<sup>Optional</sup> <a name="SettingNameInput" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.settingNameInput"></a>

```csharp
public string SettingNameInput { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SettingName`<sup>Required</sup> <a name="SettingName" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.settingName"></a>

```csharp
public string SettingName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RestrictWorkspaceAdminsSettingConfig <a name="RestrictWorkspaceAdminsSettingConfig" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new RestrictWorkspaceAdminsSettingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins RestrictWorkspaceAdmins,
    string Etag = null,
    string Id = null,
    RestrictWorkspaceAdminsSettingProviderConfig ProviderConfig = null,
    string SettingName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.restrictWorkspaceAdmins">RestrictWorkspaceAdmins</a></code> | <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins</a></code> | restrict_workspace_admins block. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.etag">Etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/restrict_workspace_admins_setting#etag RestrictWorkspaceAdminsSetting#etag}. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/restrict_workspace_admins_setting#id RestrictWorkspaceAdminsSetting#id}. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfig">RestrictWorkspaceAdminsSettingProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.settingName">SettingName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/restrict_workspace_admins_setting#setting_name RestrictWorkspaceAdminsSetting#setting_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RestrictWorkspaceAdmins`<sup>Required</sup> <a name="RestrictWorkspaceAdmins" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.restrictWorkspaceAdmins"></a>

```csharp
public RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins RestrictWorkspaceAdmins { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins</a>

restrict_workspace_admins block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/restrict_workspace_admins_setting#restrict_workspace_admins RestrictWorkspaceAdminsSetting#restrict_workspace_admins}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.etag"></a>

```csharp
public string Etag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/restrict_workspace_admins_setting#etag RestrictWorkspaceAdminsSetting#etag}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/restrict_workspace_admins_setting#id RestrictWorkspaceAdminsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.providerConfig"></a>

```csharp
public RestrictWorkspaceAdminsSettingProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfig">RestrictWorkspaceAdminsSettingProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/restrict_workspace_admins_setting#provider_config RestrictWorkspaceAdminsSetting#provider_config}

---

##### `SettingName`<sup>Optional</sup> <a name="SettingName" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.settingName"></a>

```csharp
public string SettingName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/restrict_workspace_admins_setting#setting_name RestrictWorkspaceAdminsSetting#setting_name}.

---

### RestrictWorkspaceAdminsSettingProviderConfig <a name="RestrictWorkspaceAdminsSettingProviderConfig" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new RestrictWorkspaceAdminsSettingProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/restrict_workspace_admins_setting#workspace_id RestrictWorkspaceAdminsSetting#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/restrict_workspace_admins_setting#workspace_id RestrictWorkspaceAdminsSetting#workspace_id}.

---

### RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins <a name="RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins {
    string Status,
    bool|IResolvable DisableGovTagCreation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/restrict_workspace_admins_setting#status RestrictWorkspaceAdminsSetting#status}. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins.property.disableGovTagCreation">DisableGovTagCreation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/restrict_workspace_admins_setting#disable_gov_tag_creation RestrictWorkspaceAdminsSetting#disable_gov_tag_creation}. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/restrict_workspace_admins_setting#status RestrictWorkspaceAdminsSetting#status}.

---

##### `DisableGovTagCreation`<sup>Optional</sup> <a name="DisableGovTagCreation" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins.property.disableGovTagCreation"></a>

```csharp
public bool|IResolvable DisableGovTagCreation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/restrict_workspace_admins_setting#disable_gov_tag_creation RestrictWorkspaceAdminsSetting#disable_gov_tag_creation}.

---

## Classes <a name="Classes" id="Classes"></a>

### RestrictWorkspaceAdminsSettingProviderConfigOutputReference <a name="RestrictWorkspaceAdminsSettingProviderConfigOutputReference" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new RestrictWorkspaceAdminsSettingProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfig">RestrictWorkspaceAdminsSettingProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.property.internalValue"></a>

```csharp
public RestrictWorkspaceAdminsSettingProviderConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfig">RestrictWorkspaceAdminsSettingProviderConfig</a>

---


### RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference <a name="RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.resetDisableGovTagCreation">ResetDisableGovTagCreation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisableGovTagCreation` <a name="ResetDisableGovTagCreation" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.resetDisableGovTagCreation"></a>

```csharp
private void ResetDisableGovTagCreation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.disableGovTagCreationInput">DisableGovTagCreationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.disableGovTagCreation">DisableGovTagCreation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisableGovTagCreationInput`<sup>Optional</sup> <a name="DisableGovTagCreationInput" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.disableGovTagCreationInput"></a>

```csharp
public bool|IResolvable DisableGovTagCreationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `DisableGovTagCreation`<sup>Required</sup> <a name="DisableGovTagCreation" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.disableGovTagCreation"></a>

```csharp
public bool|IResolvable DisableGovTagCreation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.internalValue"></a>

```csharp
public RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins</a>

---



