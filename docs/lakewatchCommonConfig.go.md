# `lakewatchCommonConfig` Submodule <a name="`lakewatchCommonConfig` Submodule" id="@cdktn/provider-databricks.lakewatchCommonConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakewatchCommonConfig <a name="LakewatchCommonConfig" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config databricks_lakewatch_common_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/lakewatchcommonconfig"

lakewatchcommonconfig.NewLakewatchCommonConfig(scope Construct, id *string, config LakewatchCommonConfigConfig) LakewatchCommonConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig">LakewatchCommonConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig">LakewatchCommonConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.resetCustomContentPackPath">ResetCustomContentPackPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.resetCustomPresetsPath">ResetCustomPresetsPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.resetPerResourcePermissionsEnabled">ResetPerResourcePermissionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.putProviderConfig"></a>

```go
func PutProviderConfig(value LakewatchCommonConfigProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfig">LakewatchCommonConfigProviderConfig</a>

---

##### `ResetCustomContentPackPath` <a name="ResetCustomContentPackPath" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.resetCustomContentPackPath"></a>

```go
func ResetCustomContentPackPath()
```

##### `ResetCustomPresetsPath` <a name="ResetCustomPresetsPath" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.resetCustomPresetsPath"></a>

```go
func ResetCustomPresetsPath()
```

##### `ResetPerResourcePermissionsEnabled` <a name="ResetPerResourcePermissionsEnabled" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.resetPerResourcePermissionsEnabled"></a>

```go
func ResetPerResourcePermissionsEnabled()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LakewatchCommonConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/lakewatchcommonconfig"

lakewatchcommonconfig.LakewatchCommonConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/lakewatchcommonconfig"

lakewatchcommonconfig.LakewatchCommonConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/lakewatchcommonconfig"

lakewatchcommonconfig.LakewatchCommonConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/lakewatchcommonconfig"

lakewatchcommonconfig.LakewatchCommonConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LakewatchCommonConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LakewatchCommonConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LakewatchCommonConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LakewatchCommonConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference">LakewatchCommonConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.updatedBy">UpdatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference">LakewatchCommonConfigUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.customContentPackPathInput">CustomContentPackPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.customPresetsPathInput">CustomPresetsPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.perResourcePermissionsEnabledInput">PerResourcePermissionsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.customContentPackPath">CustomContentPackPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.customPresetsPath">CustomPresetsPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.perResourcePermissionsEnabled">PerResourcePermissionsEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.providerConfig"></a>

```go
func ProviderConfig() LakewatchCommonConfigProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference">LakewatchCommonConfigProviderConfigOutputReference</a>

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.updatedBy"></a>

```go
func UpdatedBy() LakewatchCommonConfigUpdatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference">LakewatchCommonConfigUpdatedByOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `CustomContentPackPathInput`<sup>Optional</sup> <a name="CustomContentPackPathInput" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.customContentPackPathInput"></a>

```go
func CustomContentPackPathInput() *string
```

- *Type:* *string

---

##### `CustomPresetsPathInput`<sup>Optional</sup> <a name="CustomPresetsPathInput" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.customPresetsPathInput"></a>

```go
func CustomPresetsPathInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `PerResourcePermissionsEnabledInput`<sup>Optional</sup> <a name="PerResourcePermissionsEnabledInput" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.perResourcePermissionsEnabledInput"></a>

```go
func PerResourcePermissionsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `CustomContentPackPath`<sup>Required</sup> <a name="CustomContentPackPath" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.customContentPackPath"></a>

```go
func CustomContentPackPath() *string
```

- *Type:* *string

---

##### `CustomPresetsPath`<sup>Required</sup> <a name="CustomPresetsPath" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.customPresetsPath"></a>

```go
func CustomPresetsPath() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `PerResourcePermissionsEnabled`<sup>Required</sup> <a name="PerResourcePermissionsEnabled" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.perResourcePermissionsEnabled"></a>

```go
func PerResourcePermissionsEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LakewatchCommonConfigConfig <a name="LakewatchCommonConfigConfig" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/lakewatchcommonconfig"

&lakewatchcommonconfig.LakewatchCommonConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Parent: *string,
	CustomContentPackPath: *string,
	CustomPresetsPath: *string,
	PerResourcePermissionsEnabled: interface{},
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.lakewatchCommonConfig.LakewatchCommonConfigProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#parent LakewatchCommonConfig#parent}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.customContentPackPath">CustomContentPackPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#custom_content_pack_path LakewatchCommonConfig#custom_content_pack_path}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.customPresetsPath">CustomPresetsPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#custom_presets_path LakewatchCommonConfig#custom_presets_path}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.perResourcePermissionsEnabled">PerResourcePermissionsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#per_resource_permissions_enabled LakewatchCommonConfig#per_resource_permissions_enabled}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfig">LakewatchCommonConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#provider_config LakewatchCommonConfig#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#parent LakewatchCommonConfig#parent}.

---

##### `CustomContentPackPath`<sup>Optional</sup> <a name="CustomContentPackPath" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.customContentPackPath"></a>

```go
CustomContentPackPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#custom_content_pack_path LakewatchCommonConfig#custom_content_pack_path}.

---

##### `CustomPresetsPath`<sup>Optional</sup> <a name="CustomPresetsPath" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.customPresetsPath"></a>

```go
CustomPresetsPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#custom_presets_path LakewatchCommonConfig#custom_presets_path}.

---

##### `PerResourcePermissionsEnabled`<sup>Optional</sup> <a name="PerResourcePermissionsEnabled" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.perResourcePermissionsEnabled"></a>

```go
PerResourcePermissionsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#per_resource_permissions_enabled LakewatchCommonConfig#per_resource_permissions_enabled}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigConfig.property.providerConfig"></a>

```go
ProviderConfig LakewatchCommonConfigProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfig">LakewatchCommonConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#provider_config LakewatchCommonConfig#provider_config}.

---

### LakewatchCommonConfigProviderConfig <a name="LakewatchCommonConfigProviderConfig" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/lakewatchcommonconfig"

&lakewatchcommonconfig.LakewatchCommonConfigProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#workspace_id LakewatchCommonConfig#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#workspace_id LakewatchCommonConfig#workspace_id}.

---

### LakewatchCommonConfigUpdatedBy <a name="LakewatchCommonConfigUpdatedBy" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedBy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/lakewatchcommonconfig"

&lakewatchcommonconfig.LakewatchCommonConfigUpdatedBy {
	DisplayName: *string,
	Email: *string,
	Id: *string,
	PrincipalType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedBy.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#display_name LakewatchCommonConfig#display_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedBy.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#email LakewatchCommonConfig#email}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedBy.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#id LakewatchCommonConfig#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedBy.property.principalType">PrincipalType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#principal_type LakewatchCommonConfig#principal_type}. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedBy.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#display_name LakewatchCommonConfig#display_name}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedBy.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#email LakewatchCommonConfig#email}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedBy.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#id LakewatchCommonConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrincipalType`<sup>Optional</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedBy.property.principalType"></a>

```go
PrincipalType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_common_config#principal_type LakewatchCommonConfig#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakewatchCommonConfigProviderConfigOutputReference <a name="LakewatchCommonConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/lakewatchcommonconfig"

lakewatchcommonconfig.NewLakewatchCommonConfigProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakewatchCommonConfigProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakewatchCommonConfigUpdatedByOutputReference <a name="LakewatchCommonConfigUpdatedByOutputReference" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/lakewatchcommonconfig"

lakewatchcommonconfig.NewLakewatchCommonConfigUpdatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakewatchCommonConfigUpdatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.resetPrincipalType">ResetPrincipalType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetPrincipalType` <a name="ResetPrincipalType" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.resetPrincipalType"></a>

```go
func ResetPrincipalType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.principalTypeInput">PrincipalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.principalType">PrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedBy">LakewatchCommonConfigUpdatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrincipalTypeInput`<sup>Optional</sup> <a name="PrincipalTypeInput" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.principalTypeInput"></a>

```go
func PrincipalTypeInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.principalType"></a>

```go
func PrincipalType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() LakewatchCommonConfigUpdatedBy
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchCommonConfig.LakewatchCommonConfigUpdatedBy">LakewatchCommonConfigUpdatedBy</a>

---



