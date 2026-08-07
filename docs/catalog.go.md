# `catalog` Submodule <a name="`catalog` Submodule" id="@cdktn/provider-databricks.catalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Catalog <a name="Catalog" id="@cdktn/provider-databricks.catalog.Catalog"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog databricks_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.catalog.Catalog.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/catalog"

catalog.NewCatalog(scope Construct, id *string, config CatalogConfig) Catalog
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig">CatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.catalog.Catalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogConfig">CatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.putEffectivePredictiveOptimizationFlag">PutEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.putManagedEncryptionSettings">PutManagedEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.putProvisioningInfo">PutProvisioningInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetBrowseOnly">ResetBrowseOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetConnectionName">ResetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetCustomMaxRetentionHours">ResetCustomMaxRetentionHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetEffectivePredictiveOptimizationFlag">ResetEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetEnablePredictiveOptimization">ResetEnablePredictiveOptimization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetIsolationMode">ResetIsolationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetManagedEncryptionSettings">ResetManagedEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetMetastoreId">ResetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetProviderName">ResetProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetProvisioningInfo">ResetProvisioningInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetShareName">ResetShareName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.resetStorageRoot">ResetStorageRoot</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.catalog.Catalog.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.catalog.Catalog.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.catalog.Catalog.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.catalog.Catalog.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.catalog.Catalog.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.catalog.Catalog.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.catalog.Catalog.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.catalog.Catalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.catalog.Catalog.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.catalog.Catalog.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.catalog.Catalog.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.catalog.Catalog.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.catalog.Catalog.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.catalog.Catalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.Catalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.catalog.Catalog.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.catalog.Catalog.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.catalog.Catalog.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.catalog.Catalog.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.catalog.Catalog.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.Catalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.catalog.Catalog.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.catalog.Catalog.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.catalog.Catalog.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.catalog.Catalog.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.catalog.Catalog.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.catalog.Catalog.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.catalog.Catalog.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEffectivePredictiveOptimizationFlag` <a name="PutEffectivePredictiveOptimizationFlag" id="@cdktn/provider-databricks.catalog.Catalog.putEffectivePredictiveOptimizationFlag"></a>

```go
func PutEffectivePredictiveOptimizationFlag(value CatalogEffectivePredictiveOptimizationFlag)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.catalog.Catalog.putEffectivePredictiveOptimizationFlag.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a>

---

##### `PutManagedEncryptionSettings` <a name="PutManagedEncryptionSettings" id="@cdktn/provider-databricks.catalog.Catalog.putManagedEncryptionSettings"></a>

```go
func PutManagedEncryptionSettings(value CatalogManagedEncryptionSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.catalog.Catalog.putManagedEncryptionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings">CatalogManagedEncryptionSettings</a>

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.catalog.Catalog.putProviderConfig"></a>

```go
func PutProviderConfig(value CatalogProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.catalog.Catalog.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfig">CatalogProviderConfig</a>

---

##### `PutProvisioningInfo` <a name="PutProvisioningInfo" id="@cdktn/provider-databricks.catalog.Catalog.putProvisioningInfo"></a>

```go
func PutProvisioningInfo(value CatalogProvisioningInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.catalog.Catalog.putProvisioningInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a>

---

##### `ResetBrowseOnly` <a name="ResetBrowseOnly" id="@cdktn/provider-databricks.catalog.Catalog.resetBrowseOnly"></a>

```go
func ResetBrowseOnly()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-databricks.catalog.Catalog.resetComment"></a>

```go
func ResetComment()
```

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktn/provider-databricks.catalog.Catalog.resetConnectionName"></a>

```go
func ResetConnectionName()
```

##### `ResetCustomMaxRetentionHours` <a name="ResetCustomMaxRetentionHours" id="@cdktn/provider-databricks.catalog.Catalog.resetCustomMaxRetentionHours"></a>

```go
func ResetCustomMaxRetentionHours()
```

##### `ResetEffectivePredictiveOptimizationFlag` <a name="ResetEffectivePredictiveOptimizationFlag" id="@cdktn/provider-databricks.catalog.Catalog.resetEffectivePredictiveOptimizationFlag"></a>

```go
func ResetEffectivePredictiveOptimizationFlag()
```

##### `ResetEnablePredictiveOptimization` <a name="ResetEnablePredictiveOptimization" id="@cdktn/provider-databricks.catalog.Catalog.resetEnablePredictiveOptimization"></a>

```go
func ResetEnablePredictiveOptimization()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktn/provider-databricks.catalog.Catalog.resetForceDestroy"></a>

```go
func ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.catalog.Catalog.resetId"></a>

```go
func ResetId()
```

##### `ResetIsolationMode` <a name="ResetIsolationMode" id="@cdktn/provider-databricks.catalog.Catalog.resetIsolationMode"></a>

```go
func ResetIsolationMode()
```

##### `ResetManagedEncryptionSettings` <a name="ResetManagedEncryptionSettings" id="@cdktn/provider-databricks.catalog.Catalog.resetManagedEncryptionSettings"></a>

```go
func ResetManagedEncryptionSettings()
```

##### `ResetMetastoreId` <a name="ResetMetastoreId" id="@cdktn/provider-databricks.catalog.Catalog.resetMetastoreId"></a>

```go
func ResetMetastoreId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.catalog.Catalog.resetName"></a>

```go
func ResetName()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-databricks.catalog.Catalog.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktn/provider-databricks.catalog.Catalog.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-databricks.catalog.Catalog.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.catalog.Catalog.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetProviderName` <a name="ResetProviderName" id="@cdktn/provider-databricks.catalog.Catalog.resetProviderName"></a>

```go
func ResetProviderName()
```

##### `ResetProvisioningInfo` <a name="ResetProvisioningInfo" id="@cdktn/provider-databricks.catalog.Catalog.resetProvisioningInfo"></a>

```go
func ResetProvisioningInfo()
```

##### `ResetShareName` <a name="ResetShareName" id="@cdktn/provider-databricks.catalog.Catalog.resetShareName"></a>

```go
func ResetShareName()
```

##### `ResetStorageRoot` <a name="ResetStorageRoot" id="@cdktn/provider-databricks.catalog.Catalog.resetStorageRoot"></a>

```go
func ResetStorageRoot()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Catalog resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.catalog.Catalog.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/catalog"

catalog.Catalog_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.catalog.Catalog.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.catalog.Catalog.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/catalog"

catalog.Catalog_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.catalog.Catalog.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.catalog.Catalog.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/catalog"

catalog.Catalog_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.catalog.Catalog.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.catalog.Catalog.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/catalog"

catalog.Catalog_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Catalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.catalog.Catalog.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.catalog.Catalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Catalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.catalog.Catalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Catalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.catalog.Catalog.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Catalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.catalogType">CatalogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.effectivePredictiveOptimizationFlag">EffectivePredictiveOptimizationFlag</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference">CatalogEffectivePredictiveOptimizationFlagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.fullName">FullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.managedEncryptionSettings">ManagedEncryptionSettings</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference">CatalogManagedEncryptionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference">CatalogProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.provisioningInfo">ProvisioningInfo</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference">CatalogProvisioningInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.securableType">SecurableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.storageLocation">StorageLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.updatedAt">UpdatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.browseOnlyInput">BrowseOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.connectionNameInput">ConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.customMaxRetentionHoursInput">CustomMaxRetentionHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.effectivePredictiveOptimizationFlagInput">EffectivePredictiveOptimizationFlagInput</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.enablePredictiveOptimizationInput">EnablePredictiveOptimizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.isolationModeInput">IsolationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.managedEncryptionSettingsInput">ManagedEncryptionSettingsInput</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings">CatalogManagedEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.optionsInput">OptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfig">CatalogProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.providerNameInput">ProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.provisioningInfoInput">ProvisioningInfoInput</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.shareNameInput">ShareNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.storageRootInput">StorageRootInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.browseOnly">BrowseOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.customMaxRetentionHours">CustomMaxRetentionHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.enablePredictiveOptimization">EnablePredictiveOptimization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.isolationMode">IsolationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.options">Options</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.shareName">ShareName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.storageRoot">StorageRoot</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.catalog.Catalog.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.catalog.Catalog.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.catalog.Catalog.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.catalog.Catalog.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.catalog.Catalog.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.catalog.Catalog.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.catalog.Catalog.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.catalog.Catalog.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.catalog.Catalog.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.catalog.Catalog.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.catalog.Catalog.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.catalog.Catalog.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.catalog.Catalog.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.catalog.Catalog.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CatalogType`<sup>Required</sup> <a name="CatalogType" id="@cdktn/provider-databricks.catalog.Catalog.property.catalogType"></a>

```go
func CatalogType() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-databricks.catalog.Catalog.property.createdAt"></a>

```go
func CreatedAt() *f64
```

- *Type:* *f64

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-databricks.catalog.Catalog.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `EffectivePredictiveOptimizationFlag`<sup>Required</sup> <a name="EffectivePredictiveOptimizationFlag" id="@cdktn/provider-databricks.catalog.Catalog.property.effectivePredictiveOptimizationFlag"></a>

```go
func EffectivePredictiveOptimizationFlag() CatalogEffectivePredictiveOptimizationFlagOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference">CatalogEffectivePredictiveOptimizationFlagOutputReference</a>

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktn/provider-databricks.catalog.Catalog.property.fullName"></a>

```go
func FullName() *string
```

- *Type:* *string

---

##### `ManagedEncryptionSettings`<sup>Required</sup> <a name="ManagedEncryptionSettings" id="@cdktn/provider-databricks.catalog.Catalog.property.managedEncryptionSettings"></a>

```go
func ManagedEncryptionSettings() CatalogManagedEncryptionSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference">CatalogManagedEncryptionSettingsOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.catalog.Catalog.property.providerConfig"></a>

```go
func ProviderConfig() CatalogProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference">CatalogProviderConfigOutputReference</a>

---

##### `ProvisioningInfo`<sup>Required</sup> <a name="ProvisioningInfo" id="@cdktn/provider-databricks.catalog.Catalog.property.provisioningInfo"></a>

```go
func ProvisioningInfo() CatalogProvisioningInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference">CatalogProvisioningInfoOutputReference</a>

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktn/provider-databricks.catalog.Catalog.property.securableType"></a>

```go
func SecurableType() *string
```

- *Type:* *string

---

##### `StorageLocation`<sup>Required</sup> <a name="StorageLocation" id="@cdktn/provider-databricks.catalog.Catalog.property.storageLocation"></a>

```go
func StorageLocation() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-databricks.catalog.Catalog.property.updatedAt"></a>

```go
func UpdatedAt() *f64
```

- *Type:* *f64

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-databricks.catalog.Catalog.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `BrowseOnlyInput`<sup>Optional</sup> <a name="BrowseOnlyInput" id="@cdktn/provider-databricks.catalog.Catalog.property.browseOnlyInput"></a>

```go
func BrowseOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-databricks.catalog.Catalog.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktn/provider-databricks.catalog.Catalog.property.connectionNameInput"></a>

```go
func ConnectionNameInput() *string
```

- *Type:* *string

---

##### `CustomMaxRetentionHoursInput`<sup>Optional</sup> <a name="CustomMaxRetentionHoursInput" id="@cdktn/provider-databricks.catalog.Catalog.property.customMaxRetentionHoursInput"></a>

```go
func CustomMaxRetentionHoursInput() *f64
```

- *Type:* *f64

---

##### `EffectivePredictiveOptimizationFlagInput`<sup>Optional</sup> <a name="EffectivePredictiveOptimizationFlagInput" id="@cdktn/provider-databricks.catalog.Catalog.property.effectivePredictiveOptimizationFlagInput"></a>

```go
func EffectivePredictiveOptimizationFlagInput() CatalogEffectivePredictiveOptimizationFlag
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a>

---

##### `EnablePredictiveOptimizationInput`<sup>Optional</sup> <a name="EnablePredictiveOptimizationInput" id="@cdktn/provider-databricks.catalog.Catalog.property.enablePredictiveOptimizationInput"></a>

```go
func EnablePredictiveOptimizationInput() *string
```

- *Type:* *string

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktn/provider-databricks.catalog.Catalog.property.forceDestroyInput"></a>

```go
func ForceDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.catalog.Catalog.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsolationModeInput`<sup>Optional</sup> <a name="IsolationModeInput" id="@cdktn/provider-databricks.catalog.Catalog.property.isolationModeInput"></a>

```go
func IsolationModeInput() *string
```

- *Type:* *string

---

##### `ManagedEncryptionSettingsInput`<sup>Optional</sup> <a name="ManagedEncryptionSettingsInput" id="@cdktn/provider-databricks.catalog.Catalog.property.managedEncryptionSettingsInput"></a>

```go
func ManagedEncryptionSettingsInput() CatalogManagedEncryptionSettings
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings">CatalogManagedEncryptionSettings</a>

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="@cdktn/provider-databricks.catalog.Catalog.property.metastoreIdInput"></a>

```go
func MetastoreIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.catalog.Catalog.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-databricks.catalog.Catalog.property.optionsInput"></a>

```go
func OptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktn/provider-databricks.catalog.Catalog.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-databricks.catalog.Catalog.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.catalog.Catalog.property.providerConfigInput"></a>

```go
func ProviderConfigInput() CatalogProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfig">CatalogProviderConfig</a>

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktn/provider-databricks.catalog.Catalog.property.providerNameInput"></a>

```go
func ProviderNameInput() *string
```

- *Type:* *string

---

##### `ProvisioningInfoInput`<sup>Optional</sup> <a name="ProvisioningInfoInput" id="@cdktn/provider-databricks.catalog.Catalog.property.provisioningInfoInput"></a>

```go
func ProvisioningInfoInput() CatalogProvisioningInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a>

---

##### `ShareNameInput`<sup>Optional</sup> <a name="ShareNameInput" id="@cdktn/provider-databricks.catalog.Catalog.property.shareNameInput"></a>

```go
func ShareNameInput() *string
```

- *Type:* *string

---

##### `StorageRootInput`<sup>Optional</sup> <a name="StorageRootInput" id="@cdktn/provider-databricks.catalog.Catalog.property.storageRootInput"></a>

```go
func StorageRootInput() *string
```

- *Type:* *string

---

##### `BrowseOnly`<sup>Required</sup> <a name="BrowseOnly" id="@cdktn/provider-databricks.catalog.Catalog.property.browseOnly"></a>

```go
func BrowseOnly() interface{}
```

- *Type:* interface{}

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-databricks.catalog.Catalog.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-databricks.catalog.Catalog.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `CustomMaxRetentionHours`<sup>Required</sup> <a name="CustomMaxRetentionHours" id="@cdktn/provider-databricks.catalog.Catalog.property.customMaxRetentionHours"></a>

```go
func CustomMaxRetentionHours() *f64
```

- *Type:* *f64

---

##### `EnablePredictiveOptimization`<sup>Required</sup> <a name="EnablePredictiveOptimization" id="@cdktn/provider-databricks.catalog.Catalog.property.enablePredictiveOptimization"></a>

```go
func EnablePredictiveOptimization() *string
```

- *Type:* *string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktn/provider-databricks.catalog.Catalog.property.forceDestroy"></a>

```go
func ForceDestroy() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.catalog.Catalog.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsolationMode`<sup>Required</sup> <a name="IsolationMode" id="@cdktn/provider-databricks.catalog.Catalog.property.isolationMode"></a>

```go
func IsolationMode() *string
```

- *Type:* *string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktn/provider-databricks.catalog.Catalog.property.metastoreId"></a>

```go
func MetastoreId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.catalog.Catalog.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-databricks.catalog.Catalog.property.options"></a>

```go
func Options() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-databricks.catalog.Catalog.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-databricks.catalog.Catalog.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-databricks.catalog.Catalog.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktn/provider-databricks.catalog.Catalog.property.shareName"></a>

```go
func ShareName() *string
```

- *Type:* *string

---

##### `StorageRoot`<sup>Required</sup> <a name="StorageRoot" id="@cdktn/provider-databricks.catalog.Catalog.property.storageRoot"></a>

```go
func StorageRoot() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.Catalog.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.catalog.Catalog.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CatalogConfig <a name="CatalogConfig" id="@cdktn/provider-databricks.catalog.CatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.catalog.CatalogConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/catalog"

&catalog.CatalogConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BrowseOnly: interface{},
	Comment: *string,
	ConnectionName: *string,
	CustomMaxRetentionHours: *f64,
	EffectivePredictiveOptimizationFlag: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.catalog.CatalogEffectivePredictiveOptimizationFlag,
	EnablePredictiveOptimization: *string,
	ForceDestroy: interface{},
	Id: *string,
	IsolationMode: *string,
	ManagedEncryptionSettings: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.catalog.CatalogManagedEncryptionSettings,
	MetastoreId: *string,
	Name: *string,
	Options: *map[string]*string,
	Owner: *string,
	Properties: *map[string]*string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.catalog.CatalogProviderConfig,
	ProviderName: *string,
	ProvisioningInfo: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.catalog.CatalogProvisioningInfo,
	ShareName: *string,
	StorageRoot: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.browseOnly">BrowseOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#browse_only Catalog#browse_only}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#comment Catalog#comment}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.connectionName">ConnectionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#connection_name Catalog#connection_name}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.customMaxRetentionHours">CustomMaxRetentionHours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#custom_max_retention_hours Catalog#custom_max_retention_hours}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.effectivePredictiveOptimizationFlag">EffectivePredictiveOptimizationFlag</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a></code> | effective_predictive_optimization_flag block. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.enablePredictiveOptimization">EnablePredictiveOptimization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#enable_predictive_optimization Catalog#enable_predictive_optimization}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#force_destroy Catalog#force_destroy}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#id Catalog#id}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.isolationMode">IsolationMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#isolation_mode Catalog#isolation_mode}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.managedEncryptionSettings">ManagedEncryptionSettings</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings">CatalogManagedEncryptionSettings</a></code> | managed_encryption_settings block. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#metastore_id Catalog#metastore_id}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#name Catalog#name}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.options">Options</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#options Catalog#options}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#owner Catalog#owner}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.properties">Properties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#properties Catalog#properties}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfig">CatalogProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.providerName">ProviderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#provider_name Catalog#provider_name}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.provisioningInfo">ProvisioningInfo</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a></code> | provisioning_info block. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.shareName">ShareName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#share_name Catalog#share_name}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogConfig.property.storageRoot">StorageRoot</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#storage_root Catalog#storage_root}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BrowseOnly`<sup>Optional</sup> <a name="BrowseOnly" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.browseOnly"></a>

```go
BrowseOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#browse_only Catalog#browse_only}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#comment Catalog#comment}.

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.connectionName"></a>

```go
ConnectionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#connection_name Catalog#connection_name}.

---

##### `CustomMaxRetentionHours`<sup>Optional</sup> <a name="CustomMaxRetentionHours" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.customMaxRetentionHours"></a>

```go
CustomMaxRetentionHours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#custom_max_retention_hours Catalog#custom_max_retention_hours}.

---

##### `EffectivePredictiveOptimizationFlag`<sup>Optional</sup> <a name="EffectivePredictiveOptimizationFlag" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.effectivePredictiveOptimizationFlag"></a>

```go
EffectivePredictiveOptimizationFlag CatalogEffectivePredictiveOptimizationFlag
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a>

effective_predictive_optimization_flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#effective_predictive_optimization_flag Catalog#effective_predictive_optimization_flag}

---

##### `EnablePredictiveOptimization`<sup>Optional</sup> <a name="EnablePredictiveOptimization" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.enablePredictiveOptimization"></a>

```go
EnablePredictiveOptimization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#enable_predictive_optimization Catalog#enable_predictive_optimization}.

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.forceDestroy"></a>

```go
ForceDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#force_destroy Catalog#force_destroy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#id Catalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsolationMode`<sup>Optional</sup> <a name="IsolationMode" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.isolationMode"></a>

```go
IsolationMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#isolation_mode Catalog#isolation_mode}.

---

##### `ManagedEncryptionSettings`<sup>Optional</sup> <a name="ManagedEncryptionSettings" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.managedEncryptionSettings"></a>

```go
ManagedEncryptionSettings CatalogManagedEncryptionSettings
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings">CatalogManagedEncryptionSettings</a>

managed_encryption_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#managed_encryption_settings Catalog#managed_encryption_settings}

---

##### `MetastoreId`<sup>Optional</sup> <a name="MetastoreId" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.metastoreId"></a>

```go
MetastoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#metastore_id Catalog#metastore_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#name Catalog#name}.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.options"></a>

```go
Options *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#options Catalog#options}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#owner Catalog#owner}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#properties Catalog#properties}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.providerConfig"></a>

```go
ProviderConfig CatalogProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfig">CatalogProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#provider_config Catalog#provider_config}

---

##### `ProviderName`<sup>Optional</sup> <a name="ProviderName" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.providerName"></a>

```go
ProviderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#provider_name Catalog#provider_name}.

---

##### `ProvisioningInfo`<sup>Optional</sup> <a name="ProvisioningInfo" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.provisioningInfo"></a>

```go
ProvisioningInfo CatalogProvisioningInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a>

provisioning_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#provisioning_info Catalog#provisioning_info}

---

##### `ShareName`<sup>Optional</sup> <a name="ShareName" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.shareName"></a>

```go
ShareName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#share_name Catalog#share_name}.

---

##### `StorageRoot`<sup>Optional</sup> <a name="StorageRoot" id="@cdktn/provider-databricks.catalog.CatalogConfig.property.storageRoot"></a>

```go
StorageRoot *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#storage_root Catalog#storage_root}.

---

### CatalogEffectivePredictiveOptimizationFlag <a name="CatalogEffectivePredictiveOptimizationFlag" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/catalog"

&catalog.CatalogEffectivePredictiveOptimizationFlag {
	Value: *string,
	InheritedFromName: *string,
	InheritedFromType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#value Catalog#value}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.property.inheritedFromName">InheritedFromName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#inherited_from_name Catalog#inherited_from_name}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.property.inheritedFromType">InheritedFromType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#inherited_from_type Catalog#inherited_from_type}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#value Catalog#value}.

---

##### `InheritedFromName`<sup>Optional</sup> <a name="InheritedFromName" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.property.inheritedFromName"></a>

```go
InheritedFromName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#inherited_from_name Catalog#inherited_from_name}.

---

##### `InheritedFromType`<sup>Optional</sup> <a name="InheritedFromType" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.property.inheritedFromType"></a>

```go
InheritedFromType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#inherited_from_type Catalog#inherited_from_type}.

---

### CatalogManagedEncryptionSettings <a name="CatalogManagedEncryptionSettings" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/catalog"

&catalog.CatalogManagedEncryptionSettings {
	AzureEncryptionSettings: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings,
	AzureKeyVaultKeyId: *string,
	CustomerManagedKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings.property.azureEncryptionSettings">AzureEncryptionSettings</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings">CatalogManagedEncryptionSettingsAzureEncryptionSettings</a></code> | azure_encryption_settings block. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings.property.azureKeyVaultKeyId">AzureKeyVaultKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#azure_key_vault_key_id Catalog#azure_key_vault_key_id}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings.property.customerManagedKeyId">CustomerManagedKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#customer_managed_key_id Catalog#customer_managed_key_id}. |

---

##### `AzureEncryptionSettings`<sup>Optional</sup> <a name="AzureEncryptionSettings" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings.property.azureEncryptionSettings"></a>

```go
AzureEncryptionSettings CatalogManagedEncryptionSettingsAzureEncryptionSettings
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings">CatalogManagedEncryptionSettingsAzureEncryptionSettings</a>

azure_encryption_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#azure_encryption_settings Catalog#azure_encryption_settings}

---

##### `AzureKeyVaultKeyId`<sup>Optional</sup> <a name="AzureKeyVaultKeyId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings.property.azureKeyVaultKeyId"></a>

```go
AzureKeyVaultKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#azure_key_vault_key_id Catalog#azure_key_vault_key_id}.

---

##### `CustomerManagedKeyId`<sup>Optional</sup> <a name="CustomerManagedKeyId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings.property.customerManagedKeyId"></a>

```go
CustomerManagedKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#customer_managed_key_id Catalog#customer_managed_key_id}.

---

### CatalogManagedEncryptionSettingsAzureEncryptionSettings <a name="CatalogManagedEncryptionSettingsAzureEncryptionSettings" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/catalog"

&catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings {
	AzureTenantId: *string,
	AzureCmkAccessConnectorId: *string,
	AzureCmkManagedIdentityId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings.property.azureTenantId">AzureTenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#azure_tenant_id Catalog#azure_tenant_id}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings.property.azureCmkAccessConnectorId">AzureCmkAccessConnectorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#azure_cmk_access_connector_id Catalog#azure_cmk_access_connector_id}. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings.property.azureCmkManagedIdentityId">AzureCmkManagedIdentityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#azure_cmk_managed_identity_id Catalog#azure_cmk_managed_identity_id}. |

---

##### `AzureTenantId`<sup>Required</sup> <a name="AzureTenantId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings.property.azureTenantId"></a>

```go
AzureTenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#azure_tenant_id Catalog#azure_tenant_id}.

---

##### `AzureCmkAccessConnectorId`<sup>Optional</sup> <a name="AzureCmkAccessConnectorId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings.property.azureCmkAccessConnectorId"></a>

```go
AzureCmkAccessConnectorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#azure_cmk_access_connector_id Catalog#azure_cmk_access_connector_id}.

---

##### `AzureCmkManagedIdentityId`<sup>Optional</sup> <a name="AzureCmkManagedIdentityId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings.property.azureCmkManagedIdentityId"></a>

```go
AzureCmkManagedIdentityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#azure_cmk_managed_identity_id Catalog#azure_cmk_managed_identity_id}.

---

### CatalogProviderConfig <a name="CatalogProviderConfig" id="@cdktn/provider-databricks.catalog.CatalogProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.catalog.CatalogProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/catalog"

&catalog.CatalogProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#workspace_id Catalog#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.catalog.CatalogProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#workspace_id Catalog#workspace_id}.

---

### CatalogProvisioningInfo <a name="CatalogProvisioningInfo" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/catalog"

&catalog.CatalogProvisioningInfo {
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfo.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#state Catalog#state}. |

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfo.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/catalog#state Catalog#state}.

---

## Classes <a name="Classes" id="Classes"></a>

### CatalogEffectivePredictiveOptimizationFlagOutputReference <a name="CatalogEffectivePredictiveOptimizationFlagOutputReference" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/catalog"

catalog.NewCatalogEffectivePredictiveOptimizationFlagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CatalogEffectivePredictiveOptimizationFlagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName">ResetInheritedFromName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType">ResetInheritedFromType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInheritedFromName` <a name="ResetInheritedFromName" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName"></a>

```go
func ResetInheritedFromName()
```

##### `ResetInheritedFromType` <a name="ResetInheritedFromType" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType"></a>

```go
func ResetInheritedFromType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput">InheritedFromNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput">InheritedFromTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName">InheritedFromName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType">InheritedFromType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InheritedFromNameInput`<sup>Optional</sup> <a name="InheritedFromNameInput" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput"></a>

```go
func InheritedFromNameInput() *string
```

- *Type:* *string

---

##### `InheritedFromTypeInput`<sup>Optional</sup> <a name="InheritedFromTypeInput" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput"></a>

```go
func InheritedFromTypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `InheritedFromName`<sup>Required</sup> <a name="InheritedFromName" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName"></a>

```go
func InheritedFromName() *string
```

- *Type:* *string

---

##### `InheritedFromType`<sup>Required</sup> <a name="InheritedFromType" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType"></a>

```go
func InheritedFromType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.internalValue"></a>

```go
func InternalValue() CatalogEffectivePredictiveOptimizationFlag
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a>

---


### CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference <a name="CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/catalog"

catalog.NewCatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.resetAzureCmkAccessConnectorId">ResetAzureCmkAccessConnectorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.resetAzureCmkManagedIdentityId">ResetAzureCmkManagedIdentityId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAzureCmkAccessConnectorId` <a name="ResetAzureCmkAccessConnectorId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.resetAzureCmkAccessConnectorId"></a>

```go
func ResetAzureCmkAccessConnectorId()
```

##### `ResetAzureCmkManagedIdentityId` <a name="ResetAzureCmkManagedIdentityId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.resetAzureCmkManagedIdentityId"></a>

```go
func ResetAzureCmkManagedIdentityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.azureCmkAccessConnectorIdInput">AzureCmkAccessConnectorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.azureCmkManagedIdentityIdInput">AzureCmkManagedIdentityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.azureTenantIdInput">AzureTenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.azureCmkAccessConnectorId">AzureCmkAccessConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.azureCmkManagedIdentityId">AzureCmkManagedIdentityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.azureTenantId">AzureTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings">CatalogManagedEncryptionSettingsAzureEncryptionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AzureCmkAccessConnectorIdInput`<sup>Optional</sup> <a name="AzureCmkAccessConnectorIdInput" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.azureCmkAccessConnectorIdInput"></a>

```go
func AzureCmkAccessConnectorIdInput() *string
```

- *Type:* *string

---

##### `AzureCmkManagedIdentityIdInput`<sup>Optional</sup> <a name="AzureCmkManagedIdentityIdInput" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.azureCmkManagedIdentityIdInput"></a>

```go
func AzureCmkManagedIdentityIdInput() *string
```

- *Type:* *string

---

##### `AzureTenantIdInput`<sup>Optional</sup> <a name="AzureTenantIdInput" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.azureTenantIdInput"></a>

```go
func AzureTenantIdInput() *string
```

- *Type:* *string

---

##### `AzureCmkAccessConnectorId`<sup>Required</sup> <a name="AzureCmkAccessConnectorId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.azureCmkAccessConnectorId"></a>

```go
func AzureCmkAccessConnectorId() *string
```

- *Type:* *string

---

##### `AzureCmkManagedIdentityId`<sup>Required</sup> <a name="AzureCmkManagedIdentityId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.azureCmkManagedIdentityId"></a>

```go
func AzureCmkManagedIdentityId() *string
```

- *Type:* *string

---

##### `AzureTenantId`<sup>Required</sup> <a name="AzureTenantId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.azureTenantId"></a>

```go
func AzureTenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() CatalogManagedEncryptionSettingsAzureEncryptionSettings
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings">CatalogManagedEncryptionSettingsAzureEncryptionSettings</a>

---


### CatalogManagedEncryptionSettingsOutputReference <a name="CatalogManagedEncryptionSettingsOutputReference" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/catalog"

catalog.NewCatalogManagedEncryptionSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CatalogManagedEncryptionSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.putAzureEncryptionSettings">PutAzureEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.resetAzureEncryptionSettings">ResetAzureEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.resetAzureKeyVaultKeyId">ResetAzureKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.resetCustomerManagedKeyId">ResetCustomerManagedKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAzureEncryptionSettings` <a name="PutAzureEncryptionSettings" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.putAzureEncryptionSettings"></a>

```go
func PutAzureEncryptionSettings(value CatalogManagedEncryptionSettingsAzureEncryptionSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.putAzureEncryptionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings">CatalogManagedEncryptionSettingsAzureEncryptionSettings</a>

---

##### `ResetAzureEncryptionSettings` <a name="ResetAzureEncryptionSettings" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.resetAzureEncryptionSettings"></a>

```go
func ResetAzureEncryptionSettings()
```

##### `ResetAzureKeyVaultKeyId` <a name="ResetAzureKeyVaultKeyId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.resetAzureKeyVaultKeyId"></a>

```go
func ResetAzureKeyVaultKeyId()
```

##### `ResetCustomerManagedKeyId` <a name="ResetCustomerManagedKeyId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.resetCustomerManagedKeyId"></a>

```go
func ResetCustomerManagedKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.azureEncryptionSettings">AzureEncryptionSettings</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference">CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.azureEncryptionSettingsInput">AzureEncryptionSettingsInput</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings">CatalogManagedEncryptionSettingsAzureEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.azureKeyVaultKeyIdInput">AzureKeyVaultKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.customerManagedKeyIdInput">CustomerManagedKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.azureKeyVaultKeyId">AzureKeyVaultKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.customerManagedKeyId">CustomerManagedKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings">CatalogManagedEncryptionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AzureEncryptionSettings`<sup>Required</sup> <a name="AzureEncryptionSettings" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.azureEncryptionSettings"></a>

```go
func AzureEncryptionSettings() CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference">CatalogManagedEncryptionSettingsAzureEncryptionSettingsOutputReference</a>

---

##### `AzureEncryptionSettingsInput`<sup>Optional</sup> <a name="AzureEncryptionSettingsInput" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.azureEncryptionSettingsInput"></a>

```go
func AzureEncryptionSettingsInput() CatalogManagedEncryptionSettingsAzureEncryptionSettings
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsAzureEncryptionSettings">CatalogManagedEncryptionSettingsAzureEncryptionSettings</a>

---

##### `AzureKeyVaultKeyIdInput`<sup>Optional</sup> <a name="AzureKeyVaultKeyIdInput" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.azureKeyVaultKeyIdInput"></a>

```go
func AzureKeyVaultKeyIdInput() *string
```

- *Type:* *string

---

##### `CustomerManagedKeyIdInput`<sup>Optional</sup> <a name="CustomerManagedKeyIdInput" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.customerManagedKeyIdInput"></a>

```go
func CustomerManagedKeyIdInput() *string
```

- *Type:* *string

---

##### `AzureKeyVaultKeyId`<sup>Required</sup> <a name="AzureKeyVaultKeyId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.azureKeyVaultKeyId"></a>

```go
func AzureKeyVaultKeyId() *string
```

- *Type:* *string

---

##### `CustomerManagedKeyId`<sup>Required</sup> <a name="CustomerManagedKeyId" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.customerManagedKeyId"></a>

```go
func CustomerManagedKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() CatalogManagedEncryptionSettings
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogManagedEncryptionSettings">CatalogManagedEncryptionSettings</a>

---


### CatalogProviderConfigOutputReference <a name="CatalogProviderConfigOutputReference" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/catalog"

catalog.NewCatalogProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CatalogProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfig">CatalogProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.catalog.CatalogProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CatalogProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogProviderConfig">CatalogProviderConfig</a>

---


### CatalogProvisioningInfoOutputReference <a name="CatalogProvisioningInfoOutputReference" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/catalog"

catalog.NewCatalogProvisioningInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CatalogProvisioningInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetState` <a name="ResetState" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.resetState"></a>

```go
func ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() CatalogProvisioningInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a>

---



