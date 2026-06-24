# `featureEngineeringKafkaConfig` Submodule <a name="`featureEngineeringKafkaConfig` Submodule" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FeatureEngineeringKafkaConfig <a name="FeatureEngineeringKafkaConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config databricks_feature_engineering_kafka_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfig(Construct Scope, string Id, FeatureEngineeringKafkaConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig">FeatureEngineeringKafkaConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig">FeatureEngineeringKafkaConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putAuthConfig">PutAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putBackfillSource">PutBackfillSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putIngestionConfig">PutIngestionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putKeySchema">PutKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putSubscriptionMode">PutSubscriptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putValueSchema">PutValueSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetBackfillSource">ResetBackfillSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetExtraOptions">ResetExtraOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetIngestionConfig">ResetIngestionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetKeySchema">ResetKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetValueSchema">ResetValueSchema</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthConfig` <a name="PutAuthConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putAuthConfig"></a>

```csharp
private void PutAuthConfig(FeatureEngineeringKafkaConfigAuthConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a>

---

##### `PutBackfillSource` <a name="PutBackfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putBackfillSource"></a>

```csharp
private void PutBackfillSource(FeatureEngineeringKafkaConfigBackfillSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putBackfillSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a>

---

##### `PutIngestionConfig` <a name="PutIngestionConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putIngestionConfig"></a>

```csharp
private void PutIngestionConfig(FeatureEngineeringKafkaConfigIngestionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putIngestionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig">FeatureEngineeringKafkaConfigIngestionConfig</a>

---

##### `PutKeySchema` <a name="PutKeySchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putKeySchema"></a>

```csharp
private void PutKeySchema(FeatureEngineeringKafkaConfigKeySchema Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putKeySchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a>

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putProviderConfig"></a>

```csharp
private void PutProviderConfig(FeatureEngineeringKafkaConfigProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a>

---

##### `PutSubscriptionMode` <a name="PutSubscriptionMode" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putSubscriptionMode"></a>

```csharp
private void PutSubscriptionMode(FeatureEngineeringKafkaConfigSubscriptionMode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putSubscriptionMode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a>

---

##### `PutValueSchema` <a name="PutValueSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putValueSchema"></a>

```csharp
private void PutValueSchema(FeatureEngineeringKafkaConfigValueSchema Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.putValueSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a>

---

##### `ResetBackfillSource` <a name="ResetBackfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetBackfillSource"></a>

```csharp
private void ResetBackfillSource()
```

##### `ResetExtraOptions` <a name="ResetExtraOptions" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetExtraOptions"></a>

```csharp
private void ResetExtraOptions()
```

##### `ResetIngestionConfig` <a name="ResetIngestionConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetIngestionConfig"></a>

```csharp
private void ResetIngestionConfig()
```

##### `ResetKeySchema` <a name="ResetKeySchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetKeySchema"></a>

```csharp
private void ResetKeySchema()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

##### `ResetValueSchema` <a name="ResetValueSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.resetValueSchema"></a>

```csharp
private void ResetValueSchema()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FeatureEngineeringKafkaConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

FeatureEngineeringKafkaConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

FeatureEngineeringKafkaConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

FeatureEngineeringKafkaConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

FeatureEngineeringKafkaConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a FeatureEngineeringKafkaConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FeatureEngineeringKafkaConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FeatureEngineeringKafkaConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the FeatureEngineeringKafkaConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.authConfig">AuthConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference">FeatureEngineeringKafkaConfigAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.backfillSource">BackfillSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference">FeatureEngineeringKafkaConfigBackfillSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.ingestionConfig">IngestionConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference">FeatureEngineeringKafkaConfigIngestionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.keySchema">KeySchema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference">FeatureEngineeringKafkaConfigKeySchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference">FeatureEngineeringKafkaConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.subscriptionMode">SubscriptionMode</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference">FeatureEngineeringKafkaConfigSubscriptionModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.valueSchema">ValueSchema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference">FeatureEngineeringKafkaConfigValueSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.authConfigInput">AuthConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.backfillSourceInput">BackfillSourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.bootstrapServersInput">BootstrapServersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.extraOptionsInput">ExtraOptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.ingestionConfigInput">IngestionConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig">FeatureEngineeringKafkaConfigIngestionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.keySchemaInput">KeySchemaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.subscriptionModeInput">SubscriptionModeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.valueSchemaInput">ValueSchemaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.bootstrapServers">BootstrapServers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.extraOptions">ExtraOptions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AuthConfig`<sup>Required</sup> <a name="AuthConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.authConfig"></a>

```csharp
public FeatureEngineeringKafkaConfigAuthConfigOutputReference AuthConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference">FeatureEngineeringKafkaConfigAuthConfigOutputReference</a>

---

##### `BackfillSource`<sup>Required</sup> <a name="BackfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.backfillSource"></a>

```csharp
public FeatureEngineeringKafkaConfigBackfillSourceOutputReference BackfillSource { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference">FeatureEngineeringKafkaConfigBackfillSourceOutputReference</a>

---

##### `IngestionConfig`<sup>Required</sup> <a name="IngestionConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.ingestionConfig"></a>

```csharp
public FeatureEngineeringKafkaConfigIngestionConfigOutputReference IngestionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference">FeatureEngineeringKafkaConfigIngestionConfigOutputReference</a>

---

##### `KeySchema`<sup>Required</sup> <a name="KeySchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.keySchema"></a>

```csharp
public FeatureEngineeringKafkaConfigKeySchemaOutputReference KeySchema { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference">FeatureEngineeringKafkaConfigKeySchemaOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.providerConfig"></a>

```csharp
public FeatureEngineeringKafkaConfigProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference">FeatureEngineeringKafkaConfigProviderConfigOutputReference</a>

---

##### `SubscriptionMode`<sup>Required</sup> <a name="SubscriptionMode" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.subscriptionMode"></a>

```csharp
public FeatureEngineeringKafkaConfigSubscriptionModeOutputReference SubscriptionMode { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference">FeatureEngineeringKafkaConfigSubscriptionModeOutputReference</a>

---

##### `ValueSchema`<sup>Required</sup> <a name="ValueSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.valueSchema"></a>

```csharp
public FeatureEngineeringKafkaConfigValueSchemaOutputReference ValueSchema { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference">FeatureEngineeringKafkaConfigValueSchemaOutputReference</a>

---

##### `AuthConfigInput`<sup>Optional</sup> <a name="AuthConfigInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.authConfigInput"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigAuthConfig AuthConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a>

---

##### `BackfillSourceInput`<sup>Optional</sup> <a name="BackfillSourceInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.backfillSourceInput"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigBackfillSource BackfillSourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a>

---

##### `BootstrapServersInput`<sup>Optional</sup> <a name="BootstrapServersInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.bootstrapServersInput"></a>

```csharp
public string BootstrapServersInput { get; }
```

- *Type:* string

---

##### `ExtraOptionsInput`<sup>Optional</sup> <a name="ExtraOptionsInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.extraOptionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraOptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IngestionConfigInput`<sup>Optional</sup> <a name="IngestionConfigInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.ingestionConfigInput"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigIngestionConfig IngestionConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig">FeatureEngineeringKafkaConfigIngestionConfig</a>

---

##### `KeySchemaInput`<sup>Optional</sup> <a name="KeySchemaInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.keySchemaInput"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigKeySchema KeySchemaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a>

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.providerConfigInput"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a>

---

##### `SubscriptionModeInput`<sup>Optional</sup> <a name="SubscriptionModeInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.subscriptionModeInput"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigSubscriptionMode SubscriptionModeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a>

---

##### `ValueSchemaInput`<sup>Optional</sup> <a name="ValueSchemaInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.valueSchemaInput"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigValueSchema ValueSchemaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a>

---

##### `BootstrapServers`<sup>Required</sup> <a name="BootstrapServers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.bootstrapServers"></a>

```csharp
public string BootstrapServers { get; }
```

- *Type:* string

---

##### `ExtraOptions`<sup>Required</sup> <a name="ExtraOptions" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.extraOptions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraOptions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FeatureEngineeringKafkaConfigAuthConfig <a name="FeatureEngineeringKafkaConfigAuthConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigAuthConfig {
    FeatureEngineeringKafkaConfigAuthConfigMtlsConfig MtlsConfig = null,
    string UcServiceCredentialName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig.property.mtlsConfig">MtlsConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig">FeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#mtls_config FeatureEngineeringKafkaConfig#mtls_config}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig.property.ucServiceCredentialName">UcServiceCredentialName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#uc_service_credential_name FeatureEngineeringKafkaConfig#uc_service_credential_name}. |

---

##### `MtlsConfig`<sup>Optional</sup> <a name="MtlsConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig.property.mtlsConfig"></a>

```csharp
public FeatureEngineeringKafkaConfigAuthConfigMtlsConfig MtlsConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig">FeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#mtls_config FeatureEngineeringKafkaConfig#mtls_config}.

---

##### `UcServiceCredentialName`<sup>Optional</sup> <a name="UcServiceCredentialName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig.property.ucServiceCredentialName"></a>

```csharp
public string UcServiceCredentialName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#uc_service_credential_name FeatureEngineeringKafkaConfig#uc_service_credential_name}.

---

### FeatureEngineeringKafkaConfigAuthConfigMtlsConfig <a name="FeatureEngineeringKafkaConfigAuthConfigMtlsConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigAuthConfigMtlsConfig {
    FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef KeyPasswordRef,
    string KeystoreLocation,
    FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef KeystorePasswordRef,
    string TruststoreLocation,
    FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef TruststorePasswordRef,
    bool|IResolvable DisableHostnameVerification = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.keyPasswordRef">KeyPasswordRef</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#key_password_ref FeatureEngineeringKafkaConfig#key_password_ref}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.keystoreLocation">KeystoreLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#keystore_location FeatureEngineeringKafkaConfig#keystore_location}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.keystorePasswordRef">KeystorePasswordRef</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#keystore_password_ref FeatureEngineeringKafkaConfig#keystore_password_ref}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.truststoreLocation">TruststoreLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#truststore_location FeatureEngineeringKafkaConfig#truststore_location}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.truststorePasswordRef">TruststorePasswordRef</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#truststore_password_ref FeatureEngineeringKafkaConfig#truststore_password_ref}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.disableHostnameVerification">DisableHostnameVerification</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#disable_hostname_verification FeatureEngineeringKafkaConfig#disable_hostname_verification}. |

---

##### `KeyPasswordRef`<sup>Required</sup> <a name="KeyPasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.keyPasswordRef"></a>

```csharp
public FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef KeyPasswordRef { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#key_password_ref FeatureEngineeringKafkaConfig#key_password_ref}.

---

##### `KeystoreLocation`<sup>Required</sup> <a name="KeystoreLocation" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.keystoreLocation"></a>

```csharp
public string KeystoreLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#keystore_location FeatureEngineeringKafkaConfig#keystore_location}.

---

##### `KeystorePasswordRef`<sup>Required</sup> <a name="KeystorePasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.keystorePasswordRef"></a>

```csharp
public FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef KeystorePasswordRef { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#keystore_password_ref FeatureEngineeringKafkaConfig#keystore_password_ref}.

---

##### `TruststoreLocation`<sup>Required</sup> <a name="TruststoreLocation" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.truststoreLocation"></a>

```csharp
public string TruststoreLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#truststore_location FeatureEngineeringKafkaConfig#truststore_location}.

---

##### `TruststorePasswordRef`<sup>Required</sup> <a name="TruststorePasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.truststorePasswordRef"></a>

```csharp
public FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef TruststorePasswordRef { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#truststore_password_ref FeatureEngineeringKafkaConfig#truststore_password_ref}.

---

##### `DisableHostnameVerification`<sup>Optional</sup> <a name="DisableHostnameVerification" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig.property.disableHostnameVerification"></a>

```csharp
public bool|IResolvable DisableHostnameVerification { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#disable_hostname_verification FeatureEngineeringKafkaConfig#disable_hostname_verification}.

---

### FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef <a name="FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef {
    string Key,
    string Scope
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#key FeatureEngineeringKafkaConfig#key}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#scope FeatureEngineeringKafkaConfig#scope}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#key FeatureEngineeringKafkaConfig#key}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#scope FeatureEngineeringKafkaConfig#scope}.

---

### FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef <a name="FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef {
    string Key,
    string Scope
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#key FeatureEngineeringKafkaConfig#key}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#scope FeatureEngineeringKafkaConfig#scope}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#key FeatureEngineeringKafkaConfig#key}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#scope FeatureEngineeringKafkaConfig#scope}.

---

### FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef <a name="FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef {
    string Key,
    string Scope
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#key FeatureEngineeringKafkaConfig#key}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#scope FeatureEngineeringKafkaConfig#scope}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#key FeatureEngineeringKafkaConfig#key}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#scope FeatureEngineeringKafkaConfig#scope}.

---

### FeatureEngineeringKafkaConfigBackfillSource <a name="FeatureEngineeringKafkaConfigBackfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigBackfillSource {
    string DeltaTableName = null,
    FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource DeltaTableSource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource.property.deltaTableName">DeltaTableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#delta_table_name FeatureEngineeringKafkaConfig#delta_table_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource.property.deltaTableSource">DeltaTableSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#delta_table_source FeatureEngineeringKafkaConfig#delta_table_source}. |

---

##### `DeltaTableName`<sup>Optional</sup> <a name="DeltaTableName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource.property.deltaTableName"></a>

```csharp
public string DeltaTableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#delta_table_name FeatureEngineeringKafkaConfig#delta_table_name}.

---

##### `DeltaTableSource`<sup>Optional</sup> <a name="DeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource.property.deltaTableSource"></a>

```csharp
public FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource DeltaTableSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#delta_table_source FeatureEngineeringKafkaConfig#delta_table_source}.

---

### FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource <a name="FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource {
    string FullName,
    string DataframeSchema = null,
    string[] EntityColumns = null,
    string FilterCondition = null,
    string TimeseriesColumn = null,
    string TransformationSql = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.fullName">FullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#full_name FeatureEngineeringKafkaConfig#full_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.dataframeSchema">DataframeSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#dataframe_schema FeatureEngineeringKafkaConfig#dataframe_schema}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.entityColumns">EntityColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#entity_columns FeatureEngineeringKafkaConfig#entity_columns}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.filterCondition">FilterCondition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#filter_condition FeatureEngineeringKafkaConfig#filter_condition}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.timeseriesColumn">TimeseriesColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#timeseries_column FeatureEngineeringKafkaConfig#timeseries_column}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.transformationSql">TransformationSql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#transformation_sql FeatureEngineeringKafkaConfig#transformation_sql}. |

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.fullName"></a>

```csharp
public string FullName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#full_name FeatureEngineeringKafkaConfig#full_name}.

---

##### `DataframeSchema`<sup>Optional</sup> <a name="DataframeSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.dataframeSchema"></a>

```csharp
public string DataframeSchema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#dataframe_schema FeatureEngineeringKafkaConfig#dataframe_schema}.

---

##### `EntityColumns`<sup>Optional</sup> <a name="EntityColumns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.entityColumns"></a>

```csharp
public string[] EntityColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#entity_columns FeatureEngineeringKafkaConfig#entity_columns}.

---

##### `FilterCondition`<sup>Optional</sup> <a name="FilterCondition" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.filterCondition"></a>

```csharp
public string FilterCondition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#filter_condition FeatureEngineeringKafkaConfig#filter_condition}.

---

##### `TimeseriesColumn`<sup>Optional</sup> <a name="TimeseriesColumn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.timeseriesColumn"></a>

```csharp
public string TimeseriesColumn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#timeseries_column FeatureEngineeringKafkaConfig#timeseries_column}.

---

##### `TransformationSql`<sup>Optional</sup> <a name="TransformationSql" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource.property.transformationSql"></a>

```csharp
public string TransformationSql { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#transformation_sql FeatureEngineeringKafkaConfig#transformation_sql}.

---

### FeatureEngineeringKafkaConfigConfig <a name="FeatureEngineeringKafkaConfigConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    FeatureEngineeringKafkaConfigAuthConfig AuthConfig,
    string BootstrapServers,
    FeatureEngineeringKafkaConfigSubscriptionMode SubscriptionMode,
    FeatureEngineeringKafkaConfigBackfillSource BackfillSource = null,
    System.Collections.Generic.IDictionary<string, string> ExtraOptions = null,
    FeatureEngineeringKafkaConfigIngestionConfig IngestionConfig = null,
    FeatureEngineeringKafkaConfigKeySchema KeySchema = null,
    FeatureEngineeringKafkaConfigProviderConfig ProviderConfig = null,
    FeatureEngineeringKafkaConfigValueSchema ValueSchema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.authConfig">AuthConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#auth_config FeatureEngineeringKafkaConfig#auth_config}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.bootstrapServers">BootstrapServers</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#bootstrap_servers FeatureEngineeringKafkaConfig#bootstrap_servers}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.subscriptionMode">SubscriptionMode</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#subscription_mode FeatureEngineeringKafkaConfig#subscription_mode}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.backfillSource">BackfillSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#backfill_source FeatureEngineeringKafkaConfig#backfill_source}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.extraOptions">ExtraOptions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#extra_options FeatureEngineeringKafkaConfig#extra_options}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.ingestionConfig">IngestionConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig">FeatureEngineeringKafkaConfigIngestionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#ingestion_config FeatureEngineeringKafkaConfig#ingestion_config}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.keySchema">KeySchema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#key_schema FeatureEngineeringKafkaConfig#key_schema}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#provider_config FeatureEngineeringKafkaConfig#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.valueSchema">ValueSchema</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#value_schema FeatureEngineeringKafkaConfig#value_schema}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AuthConfig`<sup>Required</sup> <a name="AuthConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.authConfig"></a>

```csharp
public FeatureEngineeringKafkaConfigAuthConfig AuthConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#auth_config FeatureEngineeringKafkaConfig#auth_config}.

---

##### `BootstrapServers`<sup>Required</sup> <a name="BootstrapServers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.bootstrapServers"></a>

```csharp
public string BootstrapServers { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#bootstrap_servers FeatureEngineeringKafkaConfig#bootstrap_servers}.

---

##### `SubscriptionMode`<sup>Required</sup> <a name="SubscriptionMode" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.subscriptionMode"></a>

```csharp
public FeatureEngineeringKafkaConfigSubscriptionMode SubscriptionMode { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#subscription_mode FeatureEngineeringKafkaConfig#subscription_mode}.

---

##### `BackfillSource`<sup>Optional</sup> <a name="BackfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.backfillSource"></a>

```csharp
public FeatureEngineeringKafkaConfigBackfillSource BackfillSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#backfill_source FeatureEngineeringKafkaConfig#backfill_source}.

---

##### `ExtraOptions`<sup>Optional</sup> <a name="ExtraOptions" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.extraOptions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExtraOptions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#extra_options FeatureEngineeringKafkaConfig#extra_options}.

---

##### `IngestionConfig`<sup>Optional</sup> <a name="IngestionConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.ingestionConfig"></a>

```csharp
public FeatureEngineeringKafkaConfigIngestionConfig IngestionConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig">FeatureEngineeringKafkaConfigIngestionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#ingestion_config FeatureEngineeringKafkaConfig#ingestion_config}.

---

##### `KeySchema`<sup>Optional</sup> <a name="KeySchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.keySchema"></a>

```csharp
public FeatureEngineeringKafkaConfigKeySchema KeySchema { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#key_schema FeatureEngineeringKafkaConfig#key_schema}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.providerConfig"></a>

```csharp
public FeatureEngineeringKafkaConfigProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#provider_config FeatureEngineeringKafkaConfig#provider_config}.

---

##### `ValueSchema`<sup>Optional</sup> <a name="ValueSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigConfig.property.valueSchema"></a>

```csharp
public FeatureEngineeringKafkaConfigValueSchema ValueSchema { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#value_schema FeatureEngineeringKafkaConfig#value_schema}.

---

### FeatureEngineeringKafkaConfigIngestionConfig <a name="FeatureEngineeringKafkaConfigIngestionConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigIngestionConfig {
    FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination IngestionDestination,
    FeatureEngineeringKafkaConfigIngestionConfigBackfillSource BackfillSource = null,
    string[] DeduplicationColumns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig.property.ingestionDestination">IngestionDestination</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#ingestion_destination FeatureEngineeringKafkaConfig#ingestion_destination}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig.property.backfillSource">BackfillSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#backfill_source FeatureEngineeringKafkaConfig#backfill_source}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig.property.deduplicationColumns">DeduplicationColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#deduplication_columns FeatureEngineeringKafkaConfig#deduplication_columns}. |

---

##### `IngestionDestination`<sup>Required</sup> <a name="IngestionDestination" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig.property.ingestionDestination"></a>

```csharp
public FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination IngestionDestination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#ingestion_destination FeatureEngineeringKafkaConfig#ingestion_destination}.

---

##### `BackfillSource`<sup>Optional</sup> <a name="BackfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig.property.backfillSource"></a>

```csharp
public FeatureEngineeringKafkaConfigIngestionConfigBackfillSource BackfillSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#backfill_source FeatureEngineeringKafkaConfig#backfill_source}.

---

##### `DeduplicationColumns`<sup>Optional</sup> <a name="DeduplicationColumns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig.property.deduplicationColumns"></a>

```csharp
public string[] DeduplicationColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#deduplication_columns FeatureEngineeringKafkaConfig#deduplication_columns}.

---

### FeatureEngineeringKafkaConfigIngestionConfigBackfillSource <a name="FeatureEngineeringKafkaConfigIngestionConfigBackfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigIngestionConfigBackfillSource {
    string DeltaTableName = null,
    FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource DeltaTableSource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource.property.deltaTableName">DeltaTableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#delta_table_name FeatureEngineeringKafkaConfig#delta_table_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource.property.deltaTableSource">DeltaTableSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#delta_table_source FeatureEngineeringKafkaConfig#delta_table_source}. |

---

##### `DeltaTableName`<sup>Optional</sup> <a name="DeltaTableName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource.property.deltaTableName"></a>

```csharp
public string DeltaTableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#delta_table_name FeatureEngineeringKafkaConfig#delta_table_name}.

---

##### `DeltaTableSource`<sup>Optional</sup> <a name="DeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource.property.deltaTableSource"></a>

```csharp
public FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource DeltaTableSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#delta_table_source FeatureEngineeringKafkaConfig#delta_table_source}.

---

### FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource <a name="FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource {
    string FullName,
    string DataframeSchema = null,
    string[] EntityColumns = null,
    string FilterCondition = null,
    string TimeseriesColumn = null,
    string TransformationSql = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.fullName">FullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#full_name FeatureEngineeringKafkaConfig#full_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.dataframeSchema">DataframeSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#dataframe_schema FeatureEngineeringKafkaConfig#dataframe_schema}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.entityColumns">EntityColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#entity_columns FeatureEngineeringKafkaConfig#entity_columns}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.filterCondition">FilterCondition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#filter_condition FeatureEngineeringKafkaConfig#filter_condition}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.timeseriesColumn">TimeseriesColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#timeseries_column FeatureEngineeringKafkaConfig#timeseries_column}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.transformationSql">TransformationSql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#transformation_sql FeatureEngineeringKafkaConfig#transformation_sql}. |

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.fullName"></a>

```csharp
public string FullName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#full_name FeatureEngineeringKafkaConfig#full_name}.

---

##### `DataframeSchema`<sup>Optional</sup> <a name="DataframeSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.dataframeSchema"></a>

```csharp
public string DataframeSchema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#dataframe_schema FeatureEngineeringKafkaConfig#dataframe_schema}.

---

##### `EntityColumns`<sup>Optional</sup> <a name="EntityColumns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.entityColumns"></a>

```csharp
public string[] EntityColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#entity_columns FeatureEngineeringKafkaConfig#entity_columns}.

---

##### `FilterCondition`<sup>Optional</sup> <a name="FilterCondition" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.filterCondition"></a>

```csharp
public string FilterCondition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#filter_condition FeatureEngineeringKafkaConfig#filter_condition}.

---

##### `TimeseriesColumn`<sup>Optional</sup> <a name="TimeseriesColumn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.timeseriesColumn"></a>

```csharp
public string TimeseriesColumn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#timeseries_column FeatureEngineeringKafkaConfig#timeseries_column}.

---

##### `TransformationSql`<sup>Optional</sup> <a name="TransformationSql" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource.property.transformationSql"></a>

```csharp
public string TransformationSql { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#transformation_sql FeatureEngineeringKafkaConfig#transformation_sql}.

---

### FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination <a name="FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination {
    string DeltaTableName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination.property.deltaTableName">DeltaTableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#delta_table_name FeatureEngineeringKafkaConfig#delta_table_name}. |

---

##### `DeltaTableName`<sup>Optional</sup> <a name="DeltaTableName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination.property.deltaTableName"></a>

```csharp
public string DeltaTableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#delta_table_name FeatureEngineeringKafkaConfig#delta_table_name}.

---

### FeatureEngineeringKafkaConfigKeySchema <a name="FeatureEngineeringKafkaConfigKeySchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigKeySchema {
    string JsonSchema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema.property.jsonSchema">JsonSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}. |

---

##### `JsonSchema`<sup>Optional</sup> <a name="JsonSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema.property.jsonSchema"></a>

```csharp
public string JsonSchema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}.

---

### FeatureEngineeringKafkaConfigProviderConfig <a name="FeatureEngineeringKafkaConfigProviderConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#workspace_id FeatureEngineeringKafkaConfig#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#workspace_id FeatureEngineeringKafkaConfig#workspace_id}.

---

### FeatureEngineeringKafkaConfigSubscriptionMode <a name="FeatureEngineeringKafkaConfigSubscriptionMode" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigSubscriptionMode {
    string Assign = null,
    string Subscribe = null,
    string SubscribePattern = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.assign">Assign</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#assign FeatureEngineeringKafkaConfig#assign}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.subscribe">Subscribe</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#subscribe FeatureEngineeringKafkaConfig#subscribe}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.subscribePattern">SubscribePattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#subscribe_pattern FeatureEngineeringKafkaConfig#subscribe_pattern}. |

---

##### `Assign`<sup>Optional</sup> <a name="Assign" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.assign"></a>

```csharp
public string Assign { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#assign FeatureEngineeringKafkaConfig#assign}.

---

##### `Subscribe`<sup>Optional</sup> <a name="Subscribe" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.subscribe"></a>

```csharp
public string Subscribe { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#subscribe FeatureEngineeringKafkaConfig#subscribe}.

---

##### `SubscribePattern`<sup>Optional</sup> <a name="SubscribePattern" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode.property.subscribePattern"></a>

```csharp
public string SubscribePattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#subscribe_pattern FeatureEngineeringKafkaConfig#subscribe_pattern}.

---

### FeatureEngineeringKafkaConfigValueSchema <a name="FeatureEngineeringKafkaConfigValueSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigValueSchema {
    string JsonSchema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema.property.jsonSchema">JsonSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}. |

---

##### `JsonSchema`<sup>Optional</sup> <a name="JsonSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema.property.jsonSchema"></a>

```csharp
public string JsonSchema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/feature_engineering_kafka_config#json_schema FeatureEngineeringKafkaConfig#json_schema}.

---

## Classes <a name="Classes" id="Classes"></a>

### FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference <a name="FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a>

---


### FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference <a name="FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a>

---


### FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference <a name="FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putKeyPasswordRef">PutKeyPasswordRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putKeystorePasswordRef">PutKeystorePasswordRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putTruststorePasswordRef">PutTruststorePasswordRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.resetDisableHostnameVerification">ResetDisableHostnameVerification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKeyPasswordRef` <a name="PutKeyPasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putKeyPasswordRef"></a>

```csharp
private void PutKeyPasswordRef(FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putKeyPasswordRef.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a>

---

##### `PutKeystorePasswordRef` <a name="PutKeystorePasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putKeystorePasswordRef"></a>

```csharp
private void PutKeystorePasswordRef(FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putKeystorePasswordRef.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a>

---

##### `PutTruststorePasswordRef` <a name="PutTruststorePasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putTruststorePasswordRef"></a>

```csharp
private void PutTruststorePasswordRef(FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.putTruststorePasswordRef.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a>

---

##### `ResetDisableHostnameVerification` <a name="ResetDisableHostnameVerification" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.resetDisableHostnameVerification"></a>

```csharp
private void ResetDisableHostnameVerification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keyPasswordRef">KeyPasswordRef</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystorePasswordRef">KeystorePasswordRef</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststorePasswordRef">TruststorePasswordRef</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.disableHostnameVerificationInput">DisableHostnameVerificationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keyPasswordRefInput">KeyPasswordRefInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystoreLocationInput">KeystoreLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystorePasswordRefInput">KeystorePasswordRefInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststoreLocationInput">TruststoreLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststorePasswordRefInput">TruststorePasswordRefInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.disableHostnameVerification">DisableHostnameVerification</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystoreLocation">KeystoreLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststoreLocation">TruststoreLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig">FeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyPasswordRef`<sup>Required</sup> <a name="KeyPasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keyPasswordRef"></a>

```csharp
public FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference KeyPasswordRef { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRefOutputReference</a>

---

##### `KeystorePasswordRef`<sup>Required</sup> <a name="KeystorePasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystorePasswordRef"></a>

```csharp
public FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference KeystorePasswordRef { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRefOutputReference</a>

---

##### `TruststorePasswordRef`<sup>Required</sup> <a name="TruststorePasswordRef" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststorePasswordRef"></a>

```csharp
public FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference TruststorePasswordRef { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference</a>

---

##### `DisableHostnameVerificationInput`<sup>Optional</sup> <a name="DisableHostnameVerificationInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.disableHostnameVerificationInput"></a>

```csharp
public bool|IResolvable DisableHostnameVerificationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeyPasswordRefInput`<sup>Optional</sup> <a name="KeyPasswordRefInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keyPasswordRefInput"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef KeyPasswordRefInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeyPasswordRef</a>

---

##### `KeystoreLocationInput`<sup>Optional</sup> <a name="KeystoreLocationInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystoreLocationInput"></a>

```csharp
public string KeystoreLocationInput { get; }
```

- *Type:* string

---

##### `KeystorePasswordRefInput`<sup>Optional</sup> <a name="KeystorePasswordRefInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystorePasswordRefInput"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef KeystorePasswordRefInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigKeystorePasswordRef</a>

---

##### `TruststoreLocationInput`<sup>Optional</sup> <a name="TruststoreLocationInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststoreLocationInput"></a>

```csharp
public string TruststoreLocationInput { get; }
```

- *Type:* string

---

##### `TruststorePasswordRefInput`<sup>Optional</sup> <a name="TruststorePasswordRefInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststorePasswordRefInput"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef TruststorePasswordRefInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a>

---

##### `DisableHostnameVerification`<sup>Required</sup> <a name="DisableHostnameVerification" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.disableHostnameVerification"></a>

```csharp
public bool|IResolvable DisableHostnameVerification { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeystoreLocation`<sup>Required</sup> <a name="KeystoreLocation" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.keystoreLocation"></a>

```csharp
public string KeystoreLocation { get; }
```

- *Type:* string

---

##### `TruststoreLocation`<sup>Required</sup> <a name="TruststoreLocation" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.truststoreLocation"></a>

```csharp
public string TruststoreLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigAuthConfigMtlsConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig">FeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a>

---


### FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference <a name="FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigTruststorePasswordRef</a>

---


### FeatureEngineeringKafkaConfigAuthConfigOutputReference <a name="FeatureEngineeringKafkaConfigAuthConfigOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigAuthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.putMtlsConfig">PutMtlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resetMtlsConfig">ResetMtlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resetUcServiceCredentialName">ResetUcServiceCredentialName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMtlsConfig` <a name="PutMtlsConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.putMtlsConfig"></a>

```csharp
private void PutMtlsConfig(FeatureEngineeringKafkaConfigAuthConfigMtlsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.putMtlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig">FeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a>

---

##### `ResetMtlsConfig` <a name="ResetMtlsConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resetMtlsConfig"></a>

```csharp
private void ResetMtlsConfig()
```

##### `ResetUcServiceCredentialName` <a name="ResetUcServiceCredentialName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.resetUcServiceCredentialName"></a>

```csharp
private void ResetUcServiceCredentialName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.mtlsConfig">MtlsConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.mtlsConfigInput">MtlsConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig">FeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialNameInput">UcServiceCredentialNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialName">UcServiceCredentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MtlsConfig`<sup>Required</sup> <a name="MtlsConfig" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.mtlsConfig"></a>

```csharp
public FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference MtlsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference">FeatureEngineeringKafkaConfigAuthConfigMtlsConfigOutputReference</a>

---

##### `MtlsConfigInput`<sup>Optional</sup> <a name="MtlsConfigInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.mtlsConfigInput"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigAuthConfigMtlsConfig MtlsConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigMtlsConfig">FeatureEngineeringKafkaConfigAuthConfigMtlsConfig</a>

---

##### `UcServiceCredentialNameInput`<sup>Optional</sup> <a name="UcServiceCredentialNameInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialNameInput"></a>

```csharp
public string UcServiceCredentialNameInput { get; }
```

- *Type:* string

---

##### `UcServiceCredentialName`<sup>Required</sup> <a name="UcServiceCredentialName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.ucServiceCredentialName"></a>

```csharp
public string UcServiceCredentialName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigAuthConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigAuthConfig">FeatureEngineeringKafkaConfigAuthConfig</a>

---


### FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference <a name="FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetDataframeSchema">ResetDataframeSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetEntityColumns">ResetEntityColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetFilterCondition">ResetFilterCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetTimeseriesColumn">ResetTimeseriesColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetTransformationSql">ResetTransformationSql</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataframeSchema` <a name="ResetDataframeSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetDataframeSchema"></a>

```csharp
private void ResetDataframeSchema()
```

##### `ResetEntityColumns` <a name="ResetEntityColumns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetEntityColumns"></a>

```csharp
private void ResetEntityColumns()
```

##### `ResetFilterCondition` <a name="ResetFilterCondition" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetFilterCondition"></a>

```csharp
private void ResetFilterCondition()
```

##### `ResetTimeseriesColumn` <a name="ResetTimeseriesColumn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetTimeseriesColumn"></a>

```csharp
private void ResetTimeseriesColumn()
```

##### `ResetTransformationSql` <a name="ResetTransformationSql" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.resetTransformationSql"></a>

```csharp
private void ResetTransformationSql()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchemaInput">DataframeSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumnsInput">EntityColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.filterConditionInput">FilterConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fullNameInput">FullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput">TimeseriesColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSqlInput">TransformationSqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchema">DataframeSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumns">EntityColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.filterCondition">FilterCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fullName">FullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumn">TimeseriesColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSql">TransformationSql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataframeSchemaInput`<sup>Optional</sup> <a name="DataframeSchemaInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchemaInput"></a>

```csharp
public string DataframeSchemaInput { get; }
```

- *Type:* string

---

##### `EntityColumnsInput`<sup>Optional</sup> <a name="EntityColumnsInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumnsInput"></a>

```csharp
public string[] EntityColumnsInput { get; }
```

- *Type:* string[]

---

##### `FilterConditionInput`<sup>Optional</sup> <a name="FilterConditionInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.filterConditionInput"></a>

```csharp
public string FilterConditionInput { get; }
```

- *Type:* string

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fullNameInput"></a>

```csharp
public string FullNameInput { get; }
```

- *Type:* string

---

##### `TimeseriesColumnInput`<sup>Optional</sup> <a name="TimeseriesColumnInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput"></a>

```csharp
public string TimeseriesColumnInput { get; }
```

- *Type:* string

---

##### `TransformationSqlInput`<sup>Optional</sup> <a name="TransformationSqlInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSqlInput"></a>

```csharp
public string TransformationSqlInput { get; }
```

- *Type:* string

---

##### `DataframeSchema`<sup>Required</sup> <a name="DataframeSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchema"></a>

```csharp
public string DataframeSchema { get; }
```

- *Type:* string

---

##### `EntityColumns`<sup>Required</sup> <a name="EntityColumns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumns"></a>

```csharp
public string[] EntityColumns { get; }
```

- *Type:* string[]

---

##### `FilterCondition`<sup>Required</sup> <a name="FilterCondition" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.filterCondition"></a>

```csharp
public string FilterCondition { get; }
```

- *Type:* string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.fullName"></a>

```csharp
public string FullName { get; }
```

- *Type:* string

---

##### `TimeseriesColumn`<sup>Required</sup> <a name="TimeseriesColumn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumn"></a>

```csharp
public string TimeseriesColumn { get; }
```

- *Type:* string

---

##### `TransformationSql`<sup>Required</sup> <a name="TransformationSql" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSql"></a>

```csharp
public string TransformationSql { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a>

---


### FeatureEngineeringKafkaConfigBackfillSourceOutputReference <a name="FeatureEngineeringKafkaConfigBackfillSourceOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigBackfillSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.putDeltaTableSource">PutDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.resetDeltaTableName">ResetDeltaTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.resetDeltaTableSource">ResetDeltaTableSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeltaTableSource` <a name="PutDeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.putDeltaTableSource"></a>

```csharp
private void PutDeltaTableSource(FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.putDeltaTableSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a>

---

##### `ResetDeltaTableName` <a name="ResetDeltaTableName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.resetDeltaTableName"></a>

```csharp
private void ResetDeltaTableName()
```

##### `ResetDeltaTableSource` <a name="ResetDeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.resetDeltaTableSource"></a>

```csharp
private void ResetDeltaTableSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableSource">DeltaTableSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableNameInput">DeltaTableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableSourceInput">DeltaTableSourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableName">DeltaTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeltaTableSource`<sup>Required</sup> <a name="DeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableSource"></a>

```csharp
public FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference DeltaTableSource { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSourceOutputReference</a>

---

##### `DeltaTableNameInput`<sup>Optional</sup> <a name="DeltaTableNameInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableNameInput"></a>

```csharp
public string DeltaTableNameInput { get; }
```

- *Type:* string

---

##### `DeltaTableSourceInput`<sup>Optional</sup> <a name="DeltaTableSourceInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableSourceInput"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource DeltaTableSourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigBackfillSourceDeltaTableSource</a>

---

##### `DeltaTableName`<sup>Required</sup> <a name="DeltaTableName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.deltaTableName"></a>

```csharp
public string DeltaTableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigBackfillSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigBackfillSource">FeatureEngineeringKafkaConfigBackfillSource</a>

---


### FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference <a name="FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetDataframeSchema">ResetDataframeSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetEntityColumns">ResetEntityColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetFilterCondition">ResetFilterCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetTimeseriesColumn">ResetTimeseriesColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetTransformationSql">ResetTransformationSql</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataframeSchema` <a name="ResetDataframeSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetDataframeSchema"></a>

```csharp
private void ResetDataframeSchema()
```

##### `ResetEntityColumns` <a name="ResetEntityColumns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetEntityColumns"></a>

```csharp
private void ResetEntityColumns()
```

##### `ResetFilterCondition` <a name="ResetFilterCondition" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetFilterCondition"></a>

```csharp
private void ResetFilterCondition()
```

##### `ResetTimeseriesColumn` <a name="ResetTimeseriesColumn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetTimeseriesColumn"></a>

```csharp
private void ResetTimeseriesColumn()
```

##### `ResetTransformationSql` <a name="ResetTransformationSql" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetTransformationSql"></a>

```csharp
private void ResetTransformationSql()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchemaInput">DataframeSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumnsInput">EntityColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.filterConditionInput">FilterConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.fullNameInput">FullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput">TimeseriesColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSqlInput">TransformationSqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchema">DataframeSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumns">EntityColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.filterCondition">FilterCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.fullName">FullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumn">TimeseriesColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSql">TransformationSql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataframeSchemaInput`<sup>Optional</sup> <a name="DataframeSchemaInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchemaInput"></a>

```csharp
public string DataframeSchemaInput { get; }
```

- *Type:* string

---

##### `EntityColumnsInput`<sup>Optional</sup> <a name="EntityColumnsInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumnsInput"></a>

```csharp
public string[] EntityColumnsInput { get; }
```

- *Type:* string[]

---

##### `FilterConditionInput`<sup>Optional</sup> <a name="FilterConditionInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.filterConditionInput"></a>

```csharp
public string FilterConditionInput { get; }
```

- *Type:* string

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.fullNameInput"></a>

```csharp
public string FullNameInput { get; }
```

- *Type:* string

---

##### `TimeseriesColumnInput`<sup>Optional</sup> <a name="TimeseriesColumnInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput"></a>

```csharp
public string TimeseriesColumnInput { get; }
```

- *Type:* string

---

##### `TransformationSqlInput`<sup>Optional</sup> <a name="TransformationSqlInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSqlInput"></a>

```csharp
public string TransformationSqlInput { get; }
```

- *Type:* string

---

##### `DataframeSchema`<sup>Required</sup> <a name="DataframeSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchema"></a>

```csharp
public string DataframeSchema { get; }
```

- *Type:* string

---

##### `EntityColumns`<sup>Required</sup> <a name="EntityColumns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumns"></a>

```csharp
public string[] EntityColumns { get; }
```

- *Type:* string[]

---

##### `FilterCondition`<sup>Required</sup> <a name="FilterCondition" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.filterCondition"></a>

```csharp
public string FilterCondition { get; }
```

- *Type:* string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.fullName"></a>

```csharp
public string FullName { get; }
```

- *Type:* string

---

##### `TimeseriesColumn`<sup>Required</sup> <a name="TimeseriesColumn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumn"></a>

```csharp
public string TimeseriesColumn { get; }
```

- *Type:* string

---

##### `TransformationSql`<sup>Required</sup> <a name="TransformationSql" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSql"></a>

```csharp
public string TransformationSql { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource</a>

---


### FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference <a name="FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.putDeltaTableSource">PutDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.resetDeltaTableName">ResetDeltaTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.resetDeltaTableSource">ResetDeltaTableSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeltaTableSource` <a name="PutDeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.putDeltaTableSource"></a>

```csharp
private void PutDeltaTableSource(FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.putDeltaTableSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource</a>

---

##### `ResetDeltaTableName` <a name="ResetDeltaTableName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.resetDeltaTableName"></a>

```csharp
private void ResetDeltaTableName()
```

##### `ResetDeltaTableSource` <a name="ResetDeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.resetDeltaTableSource"></a>

```csharp
private void ResetDeltaTableSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.deltaTableSource">DeltaTableSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.deltaTableNameInput">DeltaTableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.deltaTableSourceInput">DeltaTableSourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.deltaTableName">DeltaTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeltaTableSource`<sup>Required</sup> <a name="DeltaTableSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.deltaTableSource"></a>

```csharp
public FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference DeltaTableSource { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSourceOutputReference</a>

---

##### `DeltaTableNameInput`<sup>Optional</sup> <a name="DeltaTableNameInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.deltaTableNameInput"></a>

```csharp
public string DeltaTableNameInput { get; }
```

- *Type:* string

---

##### `DeltaTableSourceInput`<sup>Optional</sup> <a name="DeltaTableSourceInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.deltaTableSourceInput"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource DeltaTableSourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceDeltaTableSource</a>

---

##### `DeltaTableName`<sup>Required</sup> <a name="DeltaTableName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.deltaTableName"></a>

```csharp
public string DeltaTableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigIngestionConfigBackfillSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSource</a>

---


### FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference <a name="FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.resetDeltaTableName">ResetDeltaTableName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeltaTableName` <a name="ResetDeltaTableName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.resetDeltaTableName"></a>

```csharp
private void ResetDeltaTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.deltaTableNameInput">DeltaTableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.deltaTableName">DeltaTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeltaTableNameInput`<sup>Optional</sup> <a name="DeltaTableNameInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.deltaTableNameInput"></a>

```csharp
public string DeltaTableNameInput { get; }
```

- *Type:* string

---

##### `DeltaTableName`<sup>Required</sup> <a name="DeltaTableName" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.deltaTableName"></a>

```csharp
public string DeltaTableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination</a>

---


### FeatureEngineeringKafkaConfigIngestionConfigOutputReference <a name="FeatureEngineeringKafkaConfigIngestionConfigOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigIngestionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.putBackfillSource">PutBackfillSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.putIngestionDestination">PutIngestionDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.resetBackfillSource">ResetBackfillSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.resetDeduplicationColumns">ResetDeduplicationColumns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackfillSource` <a name="PutBackfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.putBackfillSource"></a>

```csharp
private void PutBackfillSource(FeatureEngineeringKafkaConfigIngestionConfigBackfillSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.putBackfillSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSource</a>

---

##### `PutIngestionDestination` <a name="PutIngestionDestination" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.putIngestionDestination"></a>

```csharp
private void PutIngestionDestination(FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.putIngestionDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination</a>

---

##### `ResetBackfillSource` <a name="ResetBackfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.resetBackfillSource"></a>

```csharp
private void ResetBackfillSource()
```

##### `ResetDeduplicationColumns` <a name="ResetDeduplicationColumns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.resetDeduplicationColumns"></a>

```csharp
private void ResetDeduplicationColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.backfillJobId">BackfillJobId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.backfillSource">BackfillSource</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.ingestionDestination">IngestionDestination</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.ingestionJobId">IngestionJobId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.ingestionPipelineId">IngestionPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.backfillSourceInput">BackfillSourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.deduplicationColumnsInput">DeduplicationColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.ingestionDestinationInput">IngestionDestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.deduplicationColumns">DeduplicationColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig">FeatureEngineeringKafkaConfigIngestionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackfillJobId`<sup>Required</sup> <a name="BackfillJobId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.backfillJobId"></a>

```csharp
public double BackfillJobId { get; }
```

- *Type:* double

---

##### `BackfillSource`<sup>Required</sup> <a name="BackfillSource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.backfillSource"></a>

```csharp
public FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference BackfillSource { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference">FeatureEngineeringKafkaConfigIngestionConfigBackfillSourceOutputReference</a>

---

##### `IngestionDestination`<sup>Required</sup> <a name="IngestionDestination" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.ingestionDestination"></a>

```csharp
public FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference IngestionDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestinationOutputReference</a>

---

##### `IngestionJobId`<sup>Required</sup> <a name="IngestionJobId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.ingestionJobId"></a>

```csharp
public double IngestionJobId { get; }
```

- *Type:* double

---

##### `IngestionPipelineId`<sup>Required</sup> <a name="IngestionPipelineId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.ingestionPipelineId"></a>

```csharp
public string IngestionPipelineId { get; }
```

- *Type:* string

---

##### `BackfillSourceInput`<sup>Optional</sup> <a name="BackfillSourceInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.backfillSourceInput"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigIngestionConfigBackfillSource BackfillSourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigBackfillSource">FeatureEngineeringKafkaConfigIngestionConfigBackfillSource</a>

---

##### `DeduplicationColumnsInput`<sup>Optional</sup> <a name="DeduplicationColumnsInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.deduplicationColumnsInput"></a>

```csharp
public string[] DeduplicationColumnsInput { get; }
```

- *Type:* string[]

---

##### `IngestionDestinationInput`<sup>Optional</sup> <a name="IngestionDestinationInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.ingestionDestinationInput"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination IngestionDestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination">FeatureEngineeringKafkaConfigIngestionConfigIngestionDestination</a>

---

##### `DeduplicationColumns`<sup>Required</sup> <a name="DeduplicationColumns" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.deduplicationColumns"></a>

```csharp
public string[] DeduplicationColumns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigIngestionConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigIngestionConfig">FeatureEngineeringKafkaConfigIngestionConfig</a>

---


### FeatureEngineeringKafkaConfigKeySchemaOutputReference <a name="FeatureEngineeringKafkaConfigKeySchemaOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigKeySchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resetJsonSchema">ResetJsonSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJsonSchema` <a name="ResetJsonSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.resetJsonSchema"></a>

```csharp
private void ResetJsonSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchemaInput">JsonSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchema">JsonSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JsonSchemaInput`<sup>Optional</sup> <a name="JsonSchemaInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchemaInput"></a>

```csharp
public string JsonSchemaInput { get; }
```

- *Type:* string

---

##### `JsonSchema`<sup>Required</sup> <a name="JsonSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.jsonSchema"></a>

```csharp
public string JsonSchema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchemaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigKeySchema InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigKeySchema">FeatureEngineeringKafkaConfigKeySchema</a>

---


### FeatureEngineeringKafkaConfigProviderConfigOutputReference <a name="FeatureEngineeringKafkaConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigProviderConfig">FeatureEngineeringKafkaConfigProviderConfig</a>

---


### FeatureEngineeringKafkaConfigSubscriptionModeOutputReference <a name="FeatureEngineeringKafkaConfigSubscriptionModeOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigSubscriptionModeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetAssign">ResetAssign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribe">ResetSubscribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribePattern">ResetSubscribePattern</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAssign` <a name="ResetAssign" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetAssign"></a>

```csharp
private void ResetAssign()
```

##### `ResetSubscribe` <a name="ResetSubscribe" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribe"></a>

```csharp
private void ResetSubscribe()
```

##### `ResetSubscribePattern` <a name="ResetSubscribePattern" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.resetSubscribePattern"></a>

```csharp
private void ResetSubscribePattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assignInput">AssignInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribeInput">SubscribeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePatternInput">SubscribePatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assign">Assign</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribe">Subscribe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePattern">SubscribePattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssignInput`<sup>Optional</sup> <a name="AssignInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assignInput"></a>

```csharp
public string AssignInput { get; }
```

- *Type:* string

---

##### `SubscribeInput`<sup>Optional</sup> <a name="SubscribeInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribeInput"></a>

```csharp
public string SubscribeInput { get; }
```

- *Type:* string

---

##### `SubscribePatternInput`<sup>Optional</sup> <a name="SubscribePatternInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePatternInput"></a>

```csharp
public string SubscribePatternInput { get; }
```

- *Type:* string

---

##### `Assign`<sup>Required</sup> <a name="Assign" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.assign"></a>

```csharp
public string Assign { get; }
```

- *Type:* string

---

##### `Subscribe`<sup>Required</sup> <a name="Subscribe" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribe"></a>

```csharp
public string Subscribe { get; }
```

- *Type:* string

---

##### `SubscribePattern`<sup>Required</sup> <a name="SubscribePattern" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.subscribePattern"></a>

```csharp
public string SubscribePattern { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionModeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigSubscriptionMode InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigSubscriptionMode">FeatureEngineeringKafkaConfigSubscriptionMode</a>

---


### FeatureEngineeringKafkaConfigValueSchemaOutputReference <a name="FeatureEngineeringKafkaConfigValueSchemaOutputReference" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new FeatureEngineeringKafkaConfigValueSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resetJsonSchema">ResetJsonSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJsonSchema` <a name="ResetJsonSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.resetJsonSchema"></a>

```csharp
private void ResetJsonSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchemaInput">JsonSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchema">JsonSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JsonSchemaInput`<sup>Optional</sup> <a name="JsonSchemaInput" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchemaInput"></a>

```csharp
public string JsonSchemaInput { get; }
```

- *Type:* string

---

##### `JsonSchema`<sup>Required</sup> <a name="JsonSchema" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.jsonSchema"></a>

```csharp
public string JsonSchema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchemaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FeatureEngineeringKafkaConfigValueSchema InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.featureEngineeringKafkaConfig.FeatureEngineeringKafkaConfigValueSchema">FeatureEngineeringKafkaConfigValueSchema</a>

---



