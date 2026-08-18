# `disableLegacyDbfsSetting` Submodule <a name="`disableLegacyDbfsSetting` Submodule" id="@cdktn/provider-databricks.disableLegacyDbfsSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DisableLegacyDbfsSetting <a name="DisableLegacyDbfsSetting" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disable_legacy_dbfs_setting databricks_disable_legacy_dbfs_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisableLegacyDbfsSetting(Construct Scope, string Id, DisableLegacyDbfsSettingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig">DisableLegacyDbfsSettingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig">DisableLegacyDbfsSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.putDisableLegacyDbfs">PutDisableLegacyDbfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.resetSettingName">ResetSettingName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDisableLegacyDbfs` <a name="PutDisableLegacyDbfs" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.putDisableLegacyDbfs"></a>

```csharp
private void PutDisableLegacyDbfs(DisableLegacyDbfsSettingDisableLegacyDbfs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.putDisableLegacyDbfs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs">DisableLegacyDbfsSettingDisableLegacyDbfs</a>

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DisableLegacyDbfsSettingProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfig">DisableLegacyDbfsSettingProviderConfig</a>

---

##### `ResetEtag` <a name="ResetEtag" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.resetEtag"></a>

```csharp
private void ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

##### `ResetSettingName` <a name="ResetSettingName" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.resetSettingName"></a>

```csharp
private void ResetSettingName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DisableLegacyDbfsSetting resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DisableLegacyDbfsSetting.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DisableLegacyDbfsSetting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DisableLegacyDbfsSetting.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DisableLegacyDbfsSetting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DisableLegacyDbfsSetting resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DisableLegacyDbfsSetting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DisableLegacyDbfsSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disable_legacy_dbfs_setting#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DisableLegacyDbfsSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.disableLegacyDbfs">DisableLegacyDbfs</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference">DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference">DisableLegacyDbfsSettingProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.disableLegacyDbfsInput">DisableLegacyDbfsInput</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs">DisableLegacyDbfsSettingDisableLegacyDbfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.etagInput">EtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfig">DisableLegacyDbfsSettingProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.settingNameInput">SettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.settingName">SettingName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisableLegacyDbfs`<sup>Required</sup> <a name="DisableLegacyDbfs" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.disableLegacyDbfs"></a>

```csharp
public DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference DisableLegacyDbfs { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference">DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.providerConfig"></a>

```csharp
public DisableLegacyDbfsSettingProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference">DisableLegacyDbfsSettingProviderConfigOutputReference</a>

---

##### `DisableLegacyDbfsInput`<sup>Optional</sup> <a name="DisableLegacyDbfsInput" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.disableLegacyDbfsInput"></a>

```csharp
public DisableLegacyDbfsSettingDisableLegacyDbfs DisableLegacyDbfsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs">DisableLegacyDbfsSettingDisableLegacyDbfs</a>

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.etagInput"></a>

```csharp
public string EtagInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.providerConfigInput"></a>

```csharp
public DisableLegacyDbfsSettingProviderConfig ProviderConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfig">DisableLegacyDbfsSettingProviderConfig</a>

---

##### `SettingNameInput`<sup>Optional</sup> <a name="SettingNameInput" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.settingNameInput"></a>

```csharp
public string SettingNameInput { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SettingName`<sup>Required</sup> <a name="SettingName" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.settingName"></a>

```csharp
public string SettingName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSetting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DisableLegacyDbfsSettingConfig <a name="DisableLegacyDbfsSettingConfig" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisableLegacyDbfsSettingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    DisableLegacyDbfsSettingDisableLegacyDbfs DisableLegacyDbfs,
    string Etag = null,
    string Id = null,
    DisableLegacyDbfsSettingProviderConfig ProviderConfig = null,
    string SettingName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.disableLegacyDbfs">DisableLegacyDbfs</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs">DisableLegacyDbfsSettingDisableLegacyDbfs</a></code> | disable_legacy_dbfs block. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.etag">Etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disable_legacy_dbfs_setting#etag DisableLegacyDbfsSetting#etag}. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disable_legacy_dbfs_setting#id DisableLegacyDbfsSetting#id}. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfig">DisableLegacyDbfsSettingProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.settingName">SettingName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disable_legacy_dbfs_setting#setting_name DisableLegacyDbfsSetting#setting_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisableLegacyDbfs`<sup>Required</sup> <a name="DisableLegacyDbfs" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.disableLegacyDbfs"></a>

```csharp
public DisableLegacyDbfsSettingDisableLegacyDbfs DisableLegacyDbfs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs">DisableLegacyDbfsSettingDisableLegacyDbfs</a>

disable_legacy_dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disable_legacy_dbfs_setting#disable_legacy_dbfs DisableLegacyDbfsSetting#disable_legacy_dbfs}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.etag"></a>

```csharp
public string Etag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disable_legacy_dbfs_setting#etag DisableLegacyDbfsSetting#etag}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disable_legacy_dbfs_setting#id DisableLegacyDbfsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.providerConfig"></a>

```csharp
public DisableLegacyDbfsSettingProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfig">DisableLegacyDbfsSettingProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disable_legacy_dbfs_setting#provider_config DisableLegacyDbfsSetting#provider_config}

---

##### `SettingName`<sup>Optional</sup> <a name="SettingName" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingConfig.property.settingName"></a>

```csharp
public string SettingName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disable_legacy_dbfs_setting#setting_name DisableLegacyDbfsSetting#setting_name}.

---

### DisableLegacyDbfsSettingDisableLegacyDbfs <a name="DisableLegacyDbfsSettingDisableLegacyDbfs" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisableLegacyDbfsSettingDisableLegacyDbfs {
    bool|IResolvable Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs.property.value">Value</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disable_legacy_dbfs_setting#value DisableLegacyDbfsSetting#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs.property.value"></a>

```csharp
public bool|IResolvable Value { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disable_legacy_dbfs_setting#value DisableLegacyDbfsSetting#value}.

---

### DisableLegacyDbfsSettingProviderConfig <a name="DisableLegacyDbfsSettingProviderConfig" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisableLegacyDbfsSettingProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disable_legacy_dbfs_setting#workspace_id DisableLegacyDbfsSetting#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/disable_legacy_dbfs_setting#workspace_id DisableLegacyDbfsSetting#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference <a name="DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.valueInput">ValueInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.value">Value</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs">DisableLegacyDbfsSettingDisableLegacyDbfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.valueInput"></a>

```csharp
public bool|IResolvable ValueInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.value"></a>

```csharp
public bool|IResolvable Value { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference.property.internalValue"></a>

```csharp
public DisableLegacyDbfsSettingDisableLegacyDbfs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingDisableLegacyDbfs">DisableLegacyDbfsSettingDisableLegacyDbfs</a>

---


### DisableLegacyDbfsSettingProviderConfigOutputReference <a name="DisableLegacyDbfsSettingProviderConfigOutputReference" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisableLegacyDbfsSettingProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfig">DisableLegacyDbfsSettingProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfigOutputReference.property.internalValue"></a>

```csharp
public DisableLegacyDbfsSettingProviderConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyDbfsSetting.DisableLegacyDbfsSettingProviderConfig">DisableLegacyDbfsSettingProviderConfig</a>

---



