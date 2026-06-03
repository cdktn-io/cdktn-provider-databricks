# `disableLegacyFeaturesSetting` Submodule <a name="`disableLegacyFeaturesSetting` Submodule" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DisableLegacyFeaturesSetting <a name="DisableLegacyFeaturesSetting" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/disable_legacy_features_setting databricks_disable_legacy_features_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisableLegacyFeaturesSetting(Construct Scope, string Id, DisableLegacyFeaturesSettingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig">DisableLegacyFeaturesSettingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig">DisableLegacyFeaturesSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.putDisableLegacyFeatures">PutDisableLegacyFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetSettingName">ResetSettingName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDisableLegacyFeatures` <a name="PutDisableLegacyFeatures" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.putDisableLegacyFeatures"></a>

```csharp
private void PutDisableLegacyFeatures(DisableLegacyFeaturesSettingDisableLegacyFeatures Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.putDisableLegacyFeatures.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a>

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DisableLegacyFeaturesSettingProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig">DisableLegacyFeaturesSettingProviderConfig</a>

---

##### `ResetEtag` <a name="ResetEtag" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetEtag"></a>

```csharp
private void ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

##### `ResetSettingName` <a name="ResetSettingName" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetSettingName"></a>

```csharp
private void ResetSettingName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DisableLegacyFeaturesSetting resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DisableLegacyFeaturesSetting.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DisableLegacyFeaturesSetting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DisableLegacyFeaturesSetting.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DisableLegacyFeaturesSetting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DisableLegacyFeaturesSetting resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DisableLegacyFeaturesSetting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DisableLegacyFeaturesSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/disable_legacy_features_setting#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DisableLegacyFeaturesSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.disableLegacyFeatures">DisableLegacyFeatures</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference">DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference">DisableLegacyFeaturesSettingProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.disableLegacyFeaturesInput">DisableLegacyFeaturesInput</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.etagInput">EtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig">DisableLegacyFeaturesSettingProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.settingNameInput">SettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.settingName">SettingName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisableLegacyFeatures`<sup>Required</sup> <a name="DisableLegacyFeatures" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.disableLegacyFeatures"></a>

```csharp
public DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference DisableLegacyFeatures { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference">DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.providerConfig"></a>

```csharp
public DisableLegacyFeaturesSettingProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference">DisableLegacyFeaturesSettingProviderConfigOutputReference</a>

---

##### `DisableLegacyFeaturesInput`<sup>Optional</sup> <a name="DisableLegacyFeaturesInput" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.disableLegacyFeaturesInput"></a>

```csharp
public DisableLegacyFeaturesSettingDisableLegacyFeatures DisableLegacyFeaturesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a>

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.etagInput"></a>

```csharp
public string EtagInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.providerConfigInput"></a>

```csharp
public DisableLegacyFeaturesSettingProviderConfig ProviderConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig">DisableLegacyFeaturesSettingProviderConfig</a>

---

##### `SettingNameInput`<sup>Optional</sup> <a name="SettingNameInput" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.settingNameInput"></a>

```csharp
public string SettingNameInput { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SettingName`<sup>Required</sup> <a name="SettingName" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.settingName"></a>

```csharp
public string SettingName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DisableLegacyFeaturesSettingConfig <a name="DisableLegacyFeaturesSettingConfig" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisableLegacyFeaturesSettingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    DisableLegacyFeaturesSettingDisableLegacyFeatures DisableLegacyFeatures,
    string Etag = null,
    string Id = null,
    DisableLegacyFeaturesSettingProviderConfig ProviderConfig = null,
    string SettingName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.disableLegacyFeatures">DisableLegacyFeatures</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a></code> | disable_legacy_features block. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.etag">Etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/disable_legacy_features_setting#etag DisableLegacyFeaturesSetting#etag}. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/disable_legacy_features_setting#id DisableLegacyFeaturesSetting#id}. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig">DisableLegacyFeaturesSettingProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.settingName">SettingName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/disable_legacy_features_setting#setting_name DisableLegacyFeaturesSetting#setting_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisableLegacyFeatures`<sup>Required</sup> <a name="DisableLegacyFeatures" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.disableLegacyFeatures"></a>

```csharp
public DisableLegacyFeaturesSettingDisableLegacyFeatures DisableLegacyFeatures { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a>

disable_legacy_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/disable_legacy_features_setting#disable_legacy_features DisableLegacyFeaturesSetting#disable_legacy_features}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.etag"></a>

```csharp
public string Etag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/disable_legacy_features_setting#etag DisableLegacyFeaturesSetting#etag}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/disable_legacy_features_setting#id DisableLegacyFeaturesSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.providerConfig"></a>

```csharp
public DisableLegacyFeaturesSettingProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig">DisableLegacyFeaturesSettingProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/disable_legacy_features_setting#provider_config DisableLegacyFeaturesSetting#provider_config}

---

##### `SettingName`<sup>Optional</sup> <a name="SettingName" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.settingName"></a>

```csharp
public string SettingName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/disable_legacy_features_setting#setting_name DisableLegacyFeaturesSetting#setting_name}.

---

### DisableLegacyFeaturesSettingDisableLegacyFeatures <a name="DisableLegacyFeaturesSettingDisableLegacyFeatures" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisableLegacyFeaturesSettingDisableLegacyFeatures {
    bool|IResolvable Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures.property.value">Value</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/disable_legacy_features_setting#value DisableLegacyFeaturesSetting#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures.property.value"></a>

```csharp
public bool|IResolvable Value { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/disable_legacy_features_setting#value DisableLegacyFeaturesSetting#value}.

---

### DisableLegacyFeaturesSettingProviderConfig <a name="DisableLegacyFeaturesSettingProviderConfig" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisableLegacyFeaturesSettingProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/disable_legacy_features_setting#workspace_id DisableLegacyFeaturesSetting#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/disable_legacy_features_setting#workspace_id DisableLegacyFeaturesSetting#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference <a name="DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.valueInput">ValueInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.value">Value</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.valueInput"></a>

```csharp
public bool|IResolvable ValueInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.value"></a>

```csharp
public bool|IResolvable Value { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.internalValue"></a>

```csharp
public DisableLegacyFeaturesSettingDisableLegacyFeatures InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a>

---


### DisableLegacyFeaturesSettingProviderConfigOutputReference <a name="DisableLegacyFeaturesSettingProviderConfigOutputReference" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DisableLegacyFeaturesSettingProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig">DisableLegacyFeaturesSettingProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.internalValue"></a>

```csharp
public DisableLegacyFeaturesSettingProviderConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig">DisableLegacyFeaturesSettingProviderConfig</a>

---



