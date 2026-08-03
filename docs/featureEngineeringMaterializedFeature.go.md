# `featureEngineeringMaterializedFeature` Submodule <a name="`featureEngineeringMaterializedFeature` Submodule" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FeatureEngineeringMaterializedFeature <a name="FeatureEngineeringMaterializedFeature" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature databricks_feature_engineering_materialized_feature}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/featureengineeringmaterializedfeature"

featureengineeringmaterializedfeature.NewFeatureEngineeringMaterializedFeature(scope Construct, id *string, config FeatureEngineeringMaterializedFeatureConfig) FeatureEngineeringMaterializedFeature
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig">FeatureEngineeringMaterializedFeatureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig">FeatureEngineeringMaterializedFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putCronScheduleTrigger">PutCronScheduleTrigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOfflineStoreConfig">PutOfflineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOnlineStoreConfig">PutOnlineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putStreamingMode">PutStreamingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putTableTrigger">PutTableTrigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetCronSchedule">ResetCronSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetCronScheduleTrigger">ResetCronScheduleTrigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetOfflineStoreConfig">ResetOfflineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetOnlineStoreConfig">ResetOnlineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetPipelineScheduleState">ResetPipelineScheduleState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetStreamingMode">ResetStreamingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetTableTrigger">ResetTableTrigger</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCronScheduleTrigger` <a name="PutCronScheduleTrigger" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putCronScheduleTrigger"></a>

```go
func PutCronScheduleTrigger(value FeatureEngineeringMaterializedFeatureCronScheduleTrigger)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putCronScheduleTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTrigger">FeatureEngineeringMaterializedFeatureCronScheduleTrigger</a>

---

##### `PutOfflineStoreConfig` <a name="PutOfflineStoreConfig" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOfflineStoreConfig"></a>

```go
func PutOfflineStoreConfig(value FeatureEngineeringMaterializedFeatureOfflineStoreConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOfflineStoreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig">FeatureEngineeringMaterializedFeatureOfflineStoreConfig</a>

---

##### `PutOnlineStoreConfig` <a name="PutOnlineStoreConfig" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOnlineStoreConfig"></a>

```go
func PutOnlineStoreConfig(value FeatureEngineeringMaterializedFeatureOnlineStoreConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOnlineStoreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig">FeatureEngineeringMaterializedFeatureOnlineStoreConfig</a>

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putProviderConfig"></a>

```go
func PutProviderConfig(value FeatureEngineeringMaterializedFeatureProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfig">FeatureEngineeringMaterializedFeatureProviderConfig</a>

---

##### `PutStreamingMode` <a name="PutStreamingMode" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putStreamingMode"></a>

```go
func PutStreamingMode(value FeatureEngineeringMaterializedFeatureStreamingMode)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putStreamingMode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingMode">FeatureEngineeringMaterializedFeatureStreamingMode</a>

---

##### `PutTableTrigger` <a name="PutTableTrigger" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putTableTrigger"></a>

```go
func PutTableTrigger(value FeatureEngineeringMaterializedFeatureTableTrigger)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putTableTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTrigger">FeatureEngineeringMaterializedFeatureTableTrigger</a>

---

##### `ResetCronSchedule` <a name="ResetCronSchedule" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetCronSchedule"></a>

```go
func ResetCronSchedule()
```

##### `ResetCronScheduleTrigger` <a name="ResetCronScheduleTrigger" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetCronScheduleTrigger"></a>

```go
func ResetCronScheduleTrigger()
```

##### `ResetOfflineStoreConfig` <a name="ResetOfflineStoreConfig" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetOfflineStoreConfig"></a>

```go
func ResetOfflineStoreConfig()
```

##### `ResetOnlineStoreConfig` <a name="ResetOnlineStoreConfig" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetOnlineStoreConfig"></a>

```go
func ResetOnlineStoreConfig()
```

##### `ResetPipelineScheduleState` <a name="ResetPipelineScheduleState" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetPipelineScheduleState"></a>

```go
func ResetPipelineScheduleState()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetStreamingMode` <a name="ResetStreamingMode" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetStreamingMode"></a>

```go
func ResetStreamingMode()
```

##### `ResetTableTrigger` <a name="ResetTableTrigger" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetTableTrigger"></a>

```go
func ResetTableTrigger()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FeatureEngineeringMaterializedFeature resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/featureengineeringmaterializedfeature"

featureengineeringmaterializedfeature.FeatureEngineeringMaterializedFeature_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/featureengineeringmaterializedfeature"

featureengineeringmaterializedfeature.FeatureEngineeringMaterializedFeature_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/featureengineeringmaterializedfeature"

featureengineeringmaterializedfeature.FeatureEngineeringMaterializedFeature_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/featureengineeringmaterializedfeature"

featureengineeringmaterializedfeature.FeatureEngineeringMaterializedFeature_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a FeatureEngineeringMaterializedFeature resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FeatureEngineeringMaterializedFeature to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FeatureEngineeringMaterializedFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the FeatureEngineeringMaterializedFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.cronScheduleTrigger">CronScheduleTrigger</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference">FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.isOnline">IsOnline</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.lastMaterializationTime">LastMaterializationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.materializedFeatureId">MaterializedFeatureId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.offlineStoreConfig">OfflineStoreConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference">FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.onlineStoreConfig">OnlineStoreConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference">FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference">FeatureEngineeringMaterializedFeatureProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.streamingMode">StreamingMode</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference">FeatureEngineeringMaterializedFeatureStreamingModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.tableTrigger">TableTrigger</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference">FeatureEngineeringMaterializedFeatureTableTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.cronScheduleInput">CronScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.cronScheduleTriggerInput">CronScheduleTriggerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.featureNameInput">FeatureNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.offlineStoreConfigInput">OfflineStoreConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.onlineStoreConfigInput">OnlineStoreConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.pipelineScheduleStateInput">PipelineScheduleStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.streamingModeInput">StreamingModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.tableTriggerInput">TableTriggerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.cronSchedule">CronSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.featureName">FeatureName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.pipelineScheduleState">PipelineScheduleState</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CronScheduleTrigger`<sup>Required</sup> <a name="CronScheduleTrigger" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.cronScheduleTrigger"></a>

```go
func CronScheduleTrigger() FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference">FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference</a>

---

##### `IsOnline`<sup>Required</sup> <a name="IsOnline" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.isOnline"></a>

```go
func IsOnline() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LastMaterializationTime`<sup>Required</sup> <a name="LastMaterializationTime" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.lastMaterializationTime"></a>

```go
func LastMaterializationTime() *string
```

- *Type:* *string

---

##### `MaterializedFeatureId`<sup>Required</sup> <a name="MaterializedFeatureId" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.materializedFeatureId"></a>

```go
func MaterializedFeatureId() *string
```

- *Type:* *string

---

##### `OfflineStoreConfig`<sup>Required</sup> <a name="OfflineStoreConfig" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.offlineStoreConfig"></a>

```go
func OfflineStoreConfig() FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference">FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference</a>

---

##### `OnlineStoreConfig`<sup>Required</sup> <a name="OnlineStoreConfig" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.onlineStoreConfig"></a>

```go
func OnlineStoreConfig() FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference">FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.providerConfig"></a>

```go
func ProviderConfig() FeatureEngineeringMaterializedFeatureProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference">FeatureEngineeringMaterializedFeatureProviderConfigOutputReference</a>

---

##### `StreamingMode`<sup>Required</sup> <a name="StreamingMode" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.streamingMode"></a>

```go
func StreamingMode() FeatureEngineeringMaterializedFeatureStreamingModeOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference">FeatureEngineeringMaterializedFeatureStreamingModeOutputReference</a>

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `TableTrigger`<sup>Required</sup> <a name="TableTrigger" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.tableTrigger"></a>

```go
func TableTrigger() FeatureEngineeringMaterializedFeatureTableTriggerOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference">FeatureEngineeringMaterializedFeatureTableTriggerOutputReference</a>

---

##### `CronScheduleInput`<sup>Optional</sup> <a name="CronScheduleInput" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.cronScheduleInput"></a>

```go
func CronScheduleInput() *string
```

- *Type:* *string

---

##### `CronScheduleTriggerInput`<sup>Optional</sup> <a name="CronScheduleTriggerInput" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.cronScheduleTriggerInput"></a>

```go
func CronScheduleTriggerInput() interface{}
```

- *Type:* interface{}

---

##### `FeatureNameInput`<sup>Optional</sup> <a name="FeatureNameInput" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.featureNameInput"></a>

```go
func FeatureNameInput() *string
```

- *Type:* *string

---

##### `OfflineStoreConfigInput`<sup>Optional</sup> <a name="OfflineStoreConfigInput" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.offlineStoreConfigInput"></a>

```go
func OfflineStoreConfigInput() interface{}
```

- *Type:* interface{}

---

##### `OnlineStoreConfigInput`<sup>Optional</sup> <a name="OnlineStoreConfigInput" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.onlineStoreConfigInput"></a>

```go
func OnlineStoreConfigInput() interface{}
```

- *Type:* interface{}

---

##### `PipelineScheduleStateInput`<sup>Optional</sup> <a name="PipelineScheduleStateInput" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.pipelineScheduleStateInput"></a>

```go
func PipelineScheduleStateInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `StreamingModeInput`<sup>Optional</sup> <a name="StreamingModeInput" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.streamingModeInput"></a>

```go
func StreamingModeInput() interface{}
```

- *Type:* interface{}

---

##### `TableTriggerInput`<sup>Optional</sup> <a name="TableTriggerInput" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.tableTriggerInput"></a>

```go
func TableTriggerInput() interface{}
```

- *Type:* interface{}

---

##### `CronSchedule`<sup>Required</sup> <a name="CronSchedule" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.cronSchedule"></a>

```go
func CronSchedule() *string
```

- *Type:* *string

---

##### `FeatureName`<sup>Required</sup> <a name="FeatureName" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.featureName"></a>

```go
func FeatureName() *string
```

- *Type:* *string

---

##### `PipelineScheduleState`<sup>Required</sup> <a name="PipelineScheduleState" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.pipelineScheduleState"></a>

```go
func PipelineScheduleState() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FeatureEngineeringMaterializedFeatureConfig <a name="FeatureEngineeringMaterializedFeatureConfig" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/featureengineeringmaterializedfeature"

&featureengineeringmaterializedfeature.FeatureEngineeringMaterializedFeatureConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FeatureName: *string,
	CronSchedule: *string,
	CronScheduleTrigger: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTrigger,
	OfflineStoreConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig,
	OnlineStoreConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig,
	PipelineScheduleState: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfig,
	StreamingMode: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingMode,
	TableTrigger: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTrigger,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.featureName">FeatureName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#feature_name FeatureEngineeringMaterializedFeature#feature_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.cronSchedule">CronSchedule</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#cron_schedule FeatureEngineeringMaterializedFeature#cron_schedule}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.cronScheduleTrigger">CronScheduleTrigger</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTrigger">FeatureEngineeringMaterializedFeatureCronScheduleTrigger</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#cron_schedule_trigger FeatureEngineeringMaterializedFeature#cron_schedule_trigger}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.offlineStoreConfig">OfflineStoreConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig">FeatureEngineeringMaterializedFeatureOfflineStoreConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#offline_store_config FeatureEngineeringMaterializedFeature#offline_store_config}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.onlineStoreConfig">OnlineStoreConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig">FeatureEngineeringMaterializedFeatureOnlineStoreConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#online_store_config FeatureEngineeringMaterializedFeature#online_store_config}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.pipelineScheduleState">PipelineScheduleState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#pipeline_schedule_state FeatureEngineeringMaterializedFeature#pipeline_schedule_state}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfig">FeatureEngineeringMaterializedFeatureProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#provider_config FeatureEngineeringMaterializedFeature#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.streamingMode">StreamingMode</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingMode">FeatureEngineeringMaterializedFeatureStreamingMode</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#streaming_mode FeatureEngineeringMaterializedFeature#streaming_mode}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.tableTrigger">TableTrigger</a></code> | <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTrigger">FeatureEngineeringMaterializedFeatureTableTrigger</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#table_trigger FeatureEngineeringMaterializedFeature#table_trigger}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FeatureName`<sup>Required</sup> <a name="FeatureName" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.featureName"></a>

```go
FeatureName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#feature_name FeatureEngineeringMaterializedFeature#feature_name}.

---

##### `CronSchedule`<sup>Optional</sup> <a name="CronSchedule" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.cronSchedule"></a>

```go
CronSchedule *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#cron_schedule FeatureEngineeringMaterializedFeature#cron_schedule}.

---

##### `CronScheduleTrigger`<sup>Optional</sup> <a name="CronScheduleTrigger" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.cronScheduleTrigger"></a>

```go
CronScheduleTrigger FeatureEngineeringMaterializedFeatureCronScheduleTrigger
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTrigger">FeatureEngineeringMaterializedFeatureCronScheduleTrigger</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#cron_schedule_trigger FeatureEngineeringMaterializedFeature#cron_schedule_trigger}.

---

##### `OfflineStoreConfig`<sup>Optional</sup> <a name="OfflineStoreConfig" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.offlineStoreConfig"></a>

```go
OfflineStoreConfig FeatureEngineeringMaterializedFeatureOfflineStoreConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig">FeatureEngineeringMaterializedFeatureOfflineStoreConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#offline_store_config FeatureEngineeringMaterializedFeature#offline_store_config}.

---

##### `OnlineStoreConfig`<sup>Optional</sup> <a name="OnlineStoreConfig" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.onlineStoreConfig"></a>

```go
OnlineStoreConfig FeatureEngineeringMaterializedFeatureOnlineStoreConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig">FeatureEngineeringMaterializedFeatureOnlineStoreConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#online_store_config FeatureEngineeringMaterializedFeature#online_store_config}.

---

##### `PipelineScheduleState`<sup>Optional</sup> <a name="PipelineScheduleState" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.pipelineScheduleState"></a>

```go
PipelineScheduleState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#pipeline_schedule_state FeatureEngineeringMaterializedFeature#pipeline_schedule_state}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.providerConfig"></a>

```go
ProviderConfig FeatureEngineeringMaterializedFeatureProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfig">FeatureEngineeringMaterializedFeatureProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#provider_config FeatureEngineeringMaterializedFeature#provider_config}.

---

##### `StreamingMode`<sup>Optional</sup> <a name="StreamingMode" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.streamingMode"></a>

```go
StreamingMode FeatureEngineeringMaterializedFeatureStreamingMode
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingMode">FeatureEngineeringMaterializedFeatureStreamingMode</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#streaming_mode FeatureEngineeringMaterializedFeature#streaming_mode}.

---

##### `TableTrigger`<sup>Optional</sup> <a name="TableTrigger" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.tableTrigger"></a>

```go
TableTrigger FeatureEngineeringMaterializedFeatureTableTrigger
```

- *Type:* <a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTrigger">FeatureEngineeringMaterializedFeatureTableTrigger</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#table_trigger FeatureEngineeringMaterializedFeature#table_trigger}.

---

### FeatureEngineeringMaterializedFeatureCronScheduleTrigger <a name="FeatureEngineeringMaterializedFeatureCronScheduleTrigger" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTrigger.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/featureengineeringmaterializedfeature"

&featureengineeringmaterializedfeature.FeatureEngineeringMaterializedFeatureCronScheduleTrigger {
	CronExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTrigger.property.cronExpression">CronExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#cron_expression FeatureEngineeringMaterializedFeature#cron_expression}. |

---

##### `CronExpression`<sup>Optional</sup> <a name="CronExpression" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTrigger.property.cronExpression"></a>

```go
CronExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#cron_expression FeatureEngineeringMaterializedFeature#cron_expression}.

---

### FeatureEngineeringMaterializedFeatureOfflineStoreConfig <a name="FeatureEngineeringMaterializedFeatureOfflineStoreConfig" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/featureengineeringmaterializedfeature"

&featureengineeringmaterializedfeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig {
	CatalogName: *string,
	SchemaName: *string,
	TableNamePrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.catalogName">CatalogName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#catalog_name FeatureEngineeringMaterializedFeature#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#schema_name FeatureEngineeringMaterializedFeature#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.tableNamePrefix">TableNamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#table_name_prefix FeatureEngineeringMaterializedFeature#table_name_prefix}. |

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#catalog_name FeatureEngineeringMaterializedFeature#catalog_name}.

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#schema_name FeatureEngineeringMaterializedFeature#schema_name}.

---

##### `TableNamePrefix`<sup>Required</sup> <a name="TableNamePrefix" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.tableNamePrefix"></a>

```go
TableNamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#table_name_prefix FeatureEngineeringMaterializedFeature#table_name_prefix}.

---

### FeatureEngineeringMaterializedFeatureOnlineStoreConfig <a name="FeatureEngineeringMaterializedFeatureOnlineStoreConfig" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/featureengineeringmaterializedfeature"

&featureengineeringmaterializedfeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig {
	CatalogName: *string,
	OnlineStoreName: *string,
	SchemaName: *string,
	TableNamePrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.catalogName">CatalogName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#catalog_name FeatureEngineeringMaterializedFeature#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.onlineStoreName">OnlineStoreName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#online_store_name FeatureEngineeringMaterializedFeature#online_store_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#schema_name FeatureEngineeringMaterializedFeature#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.tableNamePrefix">TableNamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#table_name_prefix FeatureEngineeringMaterializedFeature#table_name_prefix}. |

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#catalog_name FeatureEngineeringMaterializedFeature#catalog_name}.

---

##### `OnlineStoreName`<sup>Required</sup> <a name="OnlineStoreName" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.onlineStoreName"></a>

```go
OnlineStoreName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#online_store_name FeatureEngineeringMaterializedFeature#online_store_name}.

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#schema_name FeatureEngineeringMaterializedFeature#schema_name}.

---

##### `TableNamePrefix`<sup>Required</sup> <a name="TableNamePrefix" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.tableNamePrefix"></a>

```go
TableNamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#table_name_prefix FeatureEngineeringMaterializedFeature#table_name_prefix}.

---

### FeatureEngineeringMaterializedFeatureProviderConfig <a name="FeatureEngineeringMaterializedFeatureProviderConfig" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/featureengineeringmaterializedfeature"

&featureengineeringmaterializedfeature.FeatureEngineeringMaterializedFeatureProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#workspace_id FeatureEngineeringMaterializedFeature#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#workspace_id FeatureEngineeringMaterializedFeature#workspace_id}.

---

### FeatureEngineeringMaterializedFeatureStreamingMode <a name="FeatureEngineeringMaterializedFeatureStreamingMode" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingMode.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/featureengineeringmaterializedfeature"

&featureengineeringmaterializedfeature.FeatureEngineeringMaterializedFeatureStreamingMode {
	FreshnessTarget: *string,
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingMode.property.freshnessTarget">FreshnessTarget</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#freshness_target FeatureEngineeringMaterializedFeature#freshness_target}. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingMode.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#mode FeatureEngineeringMaterializedFeature#mode}. |

---

##### `FreshnessTarget`<sup>Optional</sup> <a name="FreshnessTarget" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingMode.property.freshnessTarget"></a>

```go
FreshnessTarget *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#freshness_target FeatureEngineeringMaterializedFeature#freshness_target}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingMode.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/feature_engineering_materialized_feature#mode FeatureEngineeringMaterializedFeature#mode}.

---

### FeatureEngineeringMaterializedFeatureTableTrigger <a name="FeatureEngineeringMaterializedFeatureTableTrigger" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTrigger.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/featureengineeringmaterializedfeature"

&featureengineeringmaterializedfeature.FeatureEngineeringMaterializedFeatureTableTrigger {

}
```


## Classes <a name="Classes" id="Classes"></a>

### FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference <a name="FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/featureengineeringmaterializedfeature"

featureengineeringmaterializedfeature.NewFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.resetCronExpression">ResetCronExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCronExpression` <a name="ResetCronExpression" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.resetCronExpression"></a>

```go
func ResetCronExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.cronExpression">CronExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.cronExpressionInput"></a>

```go
func CronExpressionInput() *string
```

- *Type:* *string

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.cronExpression"></a>

```go
func CronExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference <a name="FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/featureengineeringmaterializedfeature"

featureengineeringmaterializedfeature.NewFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefixInput">TableNamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefix">TableNamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `TableNamePrefixInput`<sup>Optional</sup> <a name="TableNamePrefixInput" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefixInput"></a>

```go
func TableNamePrefixInput() *string
```

- *Type:* *string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `TableNamePrefix`<sup>Required</sup> <a name="TableNamePrefix" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefix"></a>

```go
func TableNamePrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference <a name="FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/featureengineeringmaterializedfeature"

featureengineeringmaterializedfeature.NewFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.onlineStoreNameInput">OnlineStoreNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.tableNamePrefixInput">TableNamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.onlineStoreName">OnlineStoreName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.tableNamePrefix">TableNamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `OnlineStoreNameInput`<sup>Optional</sup> <a name="OnlineStoreNameInput" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.onlineStoreNameInput"></a>

```go
func OnlineStoreNameInput() *string
```

- *Type:* *string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `TableNamePrefixInput`<sup>Optional</sup> <a name="TableNamePrefixInput" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.tableNamePrefixInput"></a>

```go
func TableNamePrefixInput() *string
```

- *Type:* *string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `OnlineStoreName`<sup>Required</sup> <a name="OnlineStoreName" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.onlineStoreName"></a>

```go
func OnlineStoreName() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `TableNamePrefix`<sup>Required</sup> <a name="TableNamePrefix" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.tableNamePrefix"></a>

```go
func TableNamePrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FeatureEngineeringMaterializedFeatureProviderConfigOutputReference <a name="FeatureEngineeringMaterializedFeatureProviderConfigOutputReference" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/featureengineeringmaterializedfeature"

featureengineeringmaterializedfeature.NewFeatureEngineeringMaterializedFeatureProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FeatureEngineeringMaterializedFeatureProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FeatureEngineeringMaterializedFeatureStreamingModeOutputReference <a name="FeatureEngineeringMaterializedFeatureStreamingModeOutputReference" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/featureengineeringmaterializedfeature"

featureengineeringmaterializedfeature.NewFeatureEngineeringMaterializedFeatureStreamingModeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FeatureEngineeringMaterializedFeatureStreamingModeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.resetFreshnessTarget">ResetFreshnessTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFreshnessTarget` <a name="ResetFreshnessTarget" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.resetFreshnessTarget"></a>

```go
func ResetFreshnessTarget()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.freshnessTargetInput">FreshnessTargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.freshnessTarget">FreshnessTarget</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FreshnessTargetInput`<sup>Optional</sup> <a name="FreshnessTargetInput" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.freshnessTargetInput"></a>

```go
func FreshnessTargetInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `FreshnessTarget`<sup>Required</sup> <a name="FreshnessTarget" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.freshnessTarget"></a>

```go
func FreshnessTarget() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FeatureEngineeringMaterializedFeatureTableTriggerOutputReference <a name="FeatureEngineeringMaterializedFeatureTableTriggerOutputReference" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/featureengineeringmaterializedfeature"

featureengineeringmaterializedfeature.NewFeatureEngineeringMaterializedFeatureTableTriggerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FeatureEngineeringMaterializedFeatureTableTriggerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureTableTriggerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



