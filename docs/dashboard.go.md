# `dashboard` Submodule <a name="`dashboard` Submodule" id="@cdktn/provider-databricks.dashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Dashboard <a name="Dashboard" id="@cdktn/provider-databricks.dashboard.Dashboard"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard databricks_dashboard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dashboard.Dashboard.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/dashboard"

dashboard.NewDashboard(scope Construct, id *string, config DashboardConfig) Dashboard
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig">DashboardConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dashboard.Dashboard.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dashboard.Dashboard.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dashboard.Dashboard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dashboard.DashboardConfig">DashboardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetCreateTime">ResetCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetDashboardChangeDetected">ResetDashboardChangeDetected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetDashboardId">ResetDashboardId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetDatasetCatalog">ResetDatasetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetDatasetSchema">ResetDatasetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetEmbedCredentials">ResetEmbedCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetFilePath">ResetFilePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetLifecycleState">ResetLifecycleState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetMd5">ResetMd5</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetSerializedDashboard">ResetSerializedDashboard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.resetUpdateTime">ResetUpdateTime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dashboard.Dashboard.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dashboard.Dashboard.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dashboard.Dashboard.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dashboard.Dashboard.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dashboard.Dashboard.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dashboard.Dashboard.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dashboard.Dashboard.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dashboard.Dashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dashboard.Dashboard.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dashboard.Dashboard.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dashboard.Dashboard.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dashboard.Dashboard.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.dashboard.Dashboard.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.dashboard.Dashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.dashboard.Dashboard.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.dashboard.Dashboard.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dashboard.Dashboard.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dashboard.Dashboard.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dashboard.Dashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.dashboard.Dashboard.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dashboard.Dashboard.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.dashboard.Dashboard.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.dashboard.Dashboard.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.dashboard.Dashboard.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.dashboard.Dashboard.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dashboard.Dashboard.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dashboard.Dashboard.putProviderConfig"></a>

```go
func PutProviderConfig(value DashboardProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dashboard.Dashboard.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfig">DashboardProviderConfig</a>

---

##### `ResetCreateTime` <a name="ResetCreateTime" id="@cdktn/provider-databricks.dashboard.Dashboard.resetCreateTime"></a>

```go
func ResetCreateTime()
```

##### `ResetDashboardChangeDetected` <a name="ResetDashboardChangeDetected" id="@cdktn/provider-databricks.dashboard.Dashboard.resetDashboardChangeDetected"></a>

```go
func ResetDashboardChangeDetected()
```

##### `ResetDashboardId` <a name="ResetDashboardId" id="@cdktn/provider-databricks.dashboard.Dashboard.resetDashboardId"></a>

```go
func ResetDashboardId()
```

##### `ResetDatasetCatalog` <a name="ResetDatasetCatalog" id="@cdktn/provider-databricks.dashboard.Dashboard.resetDatasetCatalog"></a>

```go
func ResetDatasetCatalog()
```

##### `ResetDatasetSchema` <a name="ResetDatasetSchema" id="@cdktn/provider-databricks.dashboard.Dashboard.resetDatasetSchema"></a>

```go
func ResetDatasetSchema()
```

##### `ResetEmbedCredentials` <a name="ResetEmbedCredentials" id="@cdktn/provider-databricks.dashboard.Dashboard.resetEmbedCredentials"></a>

```go
func ResetEmbedCredentials()
```

##### `ResetEtag` <a name="ResetEtag" id="@cdktn/provider-databricks.dashboard.Dashboard.resetEtag"></a>

```go
func ResetEtag()
```

##### `ResetFilePath` <a name="ResetFilePath" id="@cdktn/provider-databricks.dashboard.Dashboard.resetFilePath"></a>

```go
func ResetFilePath()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dashboard.Dashboard.resetId"></a>

```go
func ResetId()
```

##### `ResetLifecycleState` <a name="ResetLifecycleState" id="@cdktn/provider-databricks.dashboard.Dashboard.resetLifecycleState"></a>

```go
func ResetLifecycleState()
```

##### `ResetMd5` <a name="ResetMd5" id="@cdktn/provider-databricks.dashboard.Dashboard.resetMd5"></a>

```go
func ResetMd5()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-databricks.dashboard.Dashboard.resetPath"></a>

```go
func ResetPath()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dashboard.Dashboard.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetSerializedDashboard` <a name="ResetSerializedDashboard" id="@cdktn/provider-databricks.dashboard.Dashboard.resetSerializedDashboard"></a>

```go
func ResetSerializedDashboard()
```

##### `ResetUpdateTime` <a name="ResetUpdateTime" id="@cdktn/provider-databricks.dashboard.Dashboard.resetUpdateTime"></a>

```go
func ResetUpdateTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Dashboard resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dashboard.Dashboard.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/dashboard"

dashboard.Dashboard_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dashboard.Dashboard.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dashboard.Dashboard.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/dashboard"

dashboard.Dashboard_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dashboard.Dashboard.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.dashboard.Dashboard.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/dashboard"

dashboard.Dashboard_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dashboard.Dashboard.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dashboard.Dashboard.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/dashboard"

dashboard.Dashboard_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Dashboard resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dashboard.Dashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dashboard.Dashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Dashboard to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dashboard.Dashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Dashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dashboard.Dashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Dashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference">DashboardProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.createTimeInput">CreateTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.dashboardChangeDetectedInput">DashboardChangeDetectedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.dashboardIdInput">DashboardIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.datasetCatalogInput">DatasetCatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.datasetSchemaInput">DatasetSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.embedCredentialsInput">EmbedCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.etagInput">EtagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.filePathInput">FilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.lifecycleStateInput">LifecycleStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.md5Input">Md5Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.parentPathInput">ParentPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfig">DashboardProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.serializedDashboardInput">SerializedDashboardInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.updateTimeInput">UpdateTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.warehouseIdInput">WarehouseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.dashboardChangeDetected">DashboardChangeDetected</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.dashboardId">DashboardId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.datasetCatalog">DatasetCatalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.datasetSchema">DatasetSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.embedCredentials">EmbedCredentials</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.filePath">FilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.lifecycleState">LifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.md5">Md5</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.parentPath">ParentPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.serializedDashboard">SerializedDashboard</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dashboard.Dashboard.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dashboard.Dashboard.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dashboard.Dashboard.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dashboard.Dashboard.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dashboard.Dashboard.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dashboard.Dashboard.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dashboard.Dashboard.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dashboard.Dashboard.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dashboard.Dashboard.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dashboard.Dashboard.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dashboard.Dashboard.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dashboard.Dashboard.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dashboard.Dashboard.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dashboard.Dashboard.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dashboard.Dashboard.property.providerConfig"></a>

```go
func ProviderConfig() DashboardProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference">DashboardProviderConfigOutputReference</a>

---

##### `CreateTimeInput`<sup>Optional</sup> <a name="CreateTimeInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.createTimeInput"></a>

```go
func CreateTimeInput() *string
```

- *Type:* *string

---

##### `DashboardChangeDetectedInput`<sup>Optional</sup> <a name="DashboardChangeDetectedInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.dashboardChangeDetectedInput"></a>

```go
func DashboardChangeDetectedInput() interface{}
```

- *Type:* interface{}

---

##### `DashboardIdInput`<sup>Optional</sup> <a name="DashboardIdInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.dashboardIdInput"></a>

```go
func DashboardIdInput() *string
```

- *Type:* *string

---

##### `DatasetCatalogInput`<sup>Optional</sup> <a name="DatasetCatalogInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.datasetCatalogInput"></a>

```go
func DatasetCatalogInput() *string
```

- *Type:* *string

---

##### `DatasetSchemaInput`<sup>Optional</sup> <a name="DatasetSchemaInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.datasetSchemaInput"></a>

```go
func DatasetSchemaInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EmbedCredentialsInput`<sup>Optional</sup> <a name="EmbedCredentialsInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.embedCredentialsInput"></a>

```go
func EmbedCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.etagInput"></a>

```go
func EtagInput() *string
```

- *Type:* *string

---

##### `FilePathInput`<sup>Optional</sup> <a name="FilePathInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.filePathInput"></a>

```go
func FilePathInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LifecycleStateInput`<sup>Optional</sup> <a name="LifecycleStateInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.lifecycleStateInput"></a>

```go
func LifecycleStateInput() *string
```

- *Type:* *string

---

##### `Md5Input`<sup>Optional</sup> <a name="Md5Input" id="@cdktn/provider-databricks.dashboard.Dashboard.property.md5Input"></a>

```go
func Md5Input() *string
```

- *Type:* *string

---

##### `ParentPathInput`<sup>Optional</sup> <a name="ParentPathInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.parentPathInput"></a>

```go
func ParentPathInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.providerConfigInput"></a>

```go
func ProviderConfigInput() DashboardProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfig">DashboardProviderConfig</a>

---

##### `SerializedDashboardInput`<sup>Optional</sup> <a name="SerializedDashboardInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.serializedDashboardInput"></a>

```go
func SerializedDashboardInput() *string
```

- *Type:* *string

---

##### `UpdateTimeInput`<sup>Optional</sup> <a name="UpdateTimeInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.updateTimeInput"></a>

```go
func UpdateTimeInput() *string
```

- *Type:* *string

---

##### `WarehouseIdInput`<sup>Optional</sup> <a name="WarehouseIdInput" id="@cdktn/provider-databricks.dashboard.Dashboard.property.warehouseIdInput"></a>

```go
func WarehouseIdInput() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dashboard.Dashboard.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DashboardChangeDetected`<sup>Required</sup> <a name="DashboardChangeDetected" id="@cdktn/provider-databricks.dashboard.Dashboard.property.dashboardChangeDetected"></a>

```go
func DashboardChangeDetected() interface{}
```

- *Type:* interface{}

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktn/provider-databricks.dashboard.Dashboard.property.dashboardId"></a>

```go
func DashboardId() *string
```

- *Type:* *string

---

##### `DatasetCatalog`<sup>Required</sup> <a name="DatasetCatalog" id="@cdktn/provider-databricks.dashboard.Dashboard.property.datasetCatalog"></a>

```go
func DatasetCatalog() *string
```

- *Type:* *string

---

##### `DatasetSchema`<sup>Required</sup> <a name="DatasetSchema" id="@cdktn/provider-databricks.dashboard.Dashboard.property.datasetSchema"></a>

```go
func DatasetSchema() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dashboard.Dashboard.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EmbedCredentials`<sup>Required</sup> <a name="EmbedCredentials" id="@cdktn/provider-databricks.dashboard.Dashboard.property.embedCredentials"></a>

```go
func EmbedCredentials() interface{}
```

- *Type:* interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.dashboard.Dashboard.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktn/provider-databricks.dashboard.Dashboard.property.filePath"></a>

```go
func FilePath() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dashboard.Dashboard.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktn/provider-databricks.dashboard.Dashboard.property.lifecycleState"></a>

```go
func LifecycleState() *string
```

- *Type:* *string

---

##### `Md5`<sup>Required</sup> <a name="Md5" id="@cdktn/provider-databricks.dashboard.Dashboard.property.md5"></a>

```go
func Md5() *string
```

- *Type:* *string

---

##### `ParentPath`<sup>Required</sup> <a name="ParentPath" id="@cdktn/provider-databricks.dashboard.Dashboard.property.parentPath"></a>

```go
func ParentPath() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dashboard.Dashboard.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `SerializedDashboard`<sup>Required</sup> <a name="SerializedDashboard" id="@cdktn/provider-databricks.dashboard.Dashboard.property.serializedDashboard"></a>

```go
func SerializedDashboard() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dashboard.Dashboard.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.dashboard.Dashboard.property.warehouseId"></a>

```go
func WarehouseId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dashboard.Dashboard.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dashboard.Dashboard.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DashboardConfig <a name="DashboardConfig" id="@cdktn/provider-databricks.dashboard.DashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dashboard.DashboardConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/dashboard"

&dashboard.DashboardConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	ParentPath: *string,
	WarehouseId: *string,
	CreateTime: *string,
	DashboardChangeDetected: interface{},
	DashboardId: *string,
	DatasetCatalog: *string,
	DatasetSchema: *string,
	EmbedCredentials: interface{},
	Etag: *string,
	FilePath: *string,
	Id: *string,
	LifecycleState: *string,
	Md5: *string,
	Path: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dashboard.DashboardProviderConfig,
	SerializedDashboard: *string,
	UpdateTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#display_name Dashboard#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.parentPath">ParentPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#parent_path Dashboard#parent_path}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#warehouse_id Dashboard#warehouse_id}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.createTime">CreateTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#create_time Dashboard#create_time}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.dashboardChangeDetected">DashboardChangeDetected</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#dashboard_change_detected Dashboard#dashboard_change_detected}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.dashboardId">DashboardId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#dashboard_id Dashboard#dashboard_id}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.datasetCatalog">DatasetCatalog</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#dataset_catalog Dashboard#dataset_catalog}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.datasetSchema">DatasetSchema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#dataset_schema Dashboard#dataset_schema}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.embedCredentials">EmbedCredentials</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#embed_credentials Dashboard#embed_credentials}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.etag">Etag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#etag Dashboard#etag}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.filePath">FilePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#file_path Dashboard#file_path}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#id Dashboard#id}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.lifecycleState">LifecycleState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#lifecycle_state Dashboard#lifecycle_state}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.md5">Md5</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#md5 Dashboard#md5}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#path Dashboard#path}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfig">DashboardProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.serializedDashboard">SerializedDashboard</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#serialized_dashboard Dashboard#serialized_dashboard}. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardConfig.property.updateTime">UpdateTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#update_time Dashboard#update_time}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#display_name Dashboard#display_name}.

---

##### `ParentPath`<sup>Required</sup> <a name="ParentPath" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.parentPath"></a>

```go
ParentPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#parent_path Dashboard#parent_path}.

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.warehouseId"></a>

```go
WarehouseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#warehouse_id Dashboard#warehouse_id}.

---

##### `CreateTime`<sup>Optional</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.createTime"></a>

```go
CreateTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#create_time Dashboard#create_time}.

---

##### `DashboardChangeDetected`<sup>Optional</sup> <a name="DashboardChangeDetected" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.dashboardChangeDetected"></a>

```go
DashboardChangeDetected interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#dashboard_change_detected Dashboard#dashboard_change_detected}.

---

##### `DashboardId`<sup>Optional</sup> <a name="DashboardId" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.dashboardId"></a>

```go
DashboardId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#dashboard_id Dashboard#dashboard_id}.

---

##### `DatasetCatalog`<sup>Optional</sup> <a name="DatasetCatalog" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.datasetCatalog"></a>

```go
DatasetCatalog *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#dataset_catalog Dashboard#dataset_catalog}.

---

##### `DatasetSchema`<sup>Optional</sup> <a name="DatasetSchema" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.datasetSchema"></a>

```go
DatasetSchema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#dataset_schema Dashboard#dataset_schema}.

---

##### `EmbedCredentials`<sup>Optional</sup> <a name="EmbedCredentials" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.embedCredentials"></a>

```go
EmbedCredentials interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#embed_credentials Dashboard#embed_credentials}.

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.etag"></a>

```go
Etag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#etag Dashboard#etag}.

---

##### `FilePath`<sup>Optional</sup> <a name="FilePath" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.filePath"></a>

```go
FilePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#file_path Dashboard#file_path}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#id Dashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LifecycleState`<sup>Optional</sup> <a name="LifecycleState" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.lifecycleState"></a>

```go
LifecycleState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#lifecycle_state Dashboard#lifecycle_state}.

---

##### `Md5`<sup>Optional</sup> <a name="Md5" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.md5"></a>

```go
Md5 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#md5 Dashboard#md5}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#path Dashboard#path}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.providerConfig"></a>

```go
ProviderConfig DashboardProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfig">DashboardProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#provider_config Dashboard#provider_config}

---

##### `SerializedDashboard`<sup>Optional</sup> <a name="SerializedDashboard" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.serializedDashboard"></a>

```go
SerializedDashboard *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#serialized_dashboard Dashboard#serialized_dashboard}.

---

##### `UpdateTime`<sup>Optional</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dashboard.DashboardConfig.property.updateTime"></a>

```go
UpdateTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#update_time Dashboard#update_time}.

---

### DashboardProviderConfig <a name="DashboardProviderConfig" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/dashboard"

&dashboard.DashboardProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#workspace_id Dashboard#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/dashboard#workspace_id Dashboard#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DashboardProviderConfigOutputReference <a name="DashboardProviderConfigOutputReference" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/dashboard"

dashboard.NewDashboardProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DashboardProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfig">DashboardProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dashboard.DashboardProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DashboardProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dashboard.DashboardProviderConfig">DashboardProviderConfig</a>

---



