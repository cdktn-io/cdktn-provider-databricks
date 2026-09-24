# `postgresSnapshotSchedule` Submodule <a name="`postgresSnapshotSchedule` Submodule" id="@cdktn/provider-databricks.postgresSnapshotSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresSnapshotSchedule <a name="PostgresSnapshotSchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule databricks_postgres_snapshot_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressnapshotschedule"

postgressnapshotschedule.NewPostgresSnapshotSchedule(scope Construct, id *string, config PostgresSnapshotScheduleConfig) PostgresSnapshotSchedule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig">PostgresSnapshotScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig">PostgresSnapshotScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.resetSchedule">ResetSchedule</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.putProviderConfig"></a>

```go
func PutProviderConfig(value PostgresSnapshotScheduleProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.putSchedule"></a>

```go
func PutSchedule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.putSchedule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.resetSchedule"></a>

```go
func ResetSchedule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PostgresSnapshotSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressnapshotschedule"

postgressnapshotschedule.PostgresSnapshotSchedule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressnapshotschedule"

postgressnapshotschedule.PostgresSnapshotSchedule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressnapshotschedule"

postgressnapshotschedule.PostgresSnapshotSchedule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressnapshotschedule"

postgressnapshotschedule.PostgresSnapshotSchedule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PostgresSnapshotSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PostgresSnapshotSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PostgresSnapshotSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PostgresSnapshotSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference">PostgresSnapshotScheduleProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList">PostgresSnapshotScheduleScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.scheduleInput">ScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.providerConfig"></a>

```go
func ProviderConfig() PostgresSnapshotScheduleProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference">PostgresSnapshotScheduleProviderConfigOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.schedule"></a>

```go
func Schedule() PostgresSnapshotScheduleScheduleList
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList">PostgresSnapshotScheduleScheduleList</a>

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.scheduleInput"></a>

```go
func ScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotSchedule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresSnapshotScheduleConfig <a name="PostgresSnapshotScheduleConfig" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressnapshotschedule"

&postgressnapshotschedule.PostgresSnapshotScheduleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Parent: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig,
	Schedule: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#parent PostgresSnapshotSchedule#parent}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#provider_config PostgresSnapshotSchedule#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.schedule">Schedule</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#schedule PostgresSnapshotSchedule#schedule}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#parent PostgresSnapshotSchedule#parent}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.providerConfig"></a>

```go
ProviderConfig PostgresSnapshotScheduleProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig">PostgresSnapshotScheduleProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#provider_config PostgresSnapshotSchedule#provider_config}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleConfig.property.schedule"></a>

```go
Schedule interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#schedule PostgresSnapshotSchedule#schedule}.

---

### PostgresSnapshotScheduleProviderConfig <a name="PostgresSnapshotScheduleProviderConfig" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressnapshotschedule"

&postgressnapshotschedule.PostgresSnapshotScheduleProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#workspace_id PostgresSnapshotSchedule#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#workspace_id PostgresSnapshotSchedule#workspace_id}.

---

### PostgresSnapshotScheduleSchedule <a name="PostgresSnapshotScheduleSchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressnapshotschedule"

&postgressnapshotschedule.PostgresSnapshotScheduleSchedule {
	Retention: *string,
	DailySchedule: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule,
	MonthlySchedule: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule,
	WeeklySchedule: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.retention">Retention</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#retention PostgresSnapshotSchedule#retention}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.dailySchedule">DailySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule">PostgresSnapshotScheduleScheduleDailySchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#daily_schedule PostgresSnapshotSchedule#daily_schedule}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.monthlySchedule">MonthlySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule">PostgresSnapshotScheduleScheduleMonthlySchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#monthly_schedule PostgresSnapshotSchedule#monthly_schedule}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.weeklySchedule">WeeklySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule">PostgresSnapshotScheduleScheduleWeeklySchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#weekly_schedule PostgresSnapshotSchedule#weekly_schedule}. |

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.retention"></a>

```go
Retention *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#retention PostgresSnapshotSchedule#retention}.

---

##### `DailySchedule`<sup>Optional</sup> <a name="DailySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.dailySchedule"></a>

```go
DailySchedule PostgresSnapshotScheduleScheduleDailySchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule">PostgresSnapshotScheduleScheduleDailySchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#daily_schedule PostgresSnapshotSchedule#daily_schedule}.

---

##### `MonthlySchedule`<sup>Optional</sup> <a name="MonthlySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.monthlySchedule"></a>

```go
MonthlySchedule PostgresSnapshotScheduleScheduleMonthlySchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule">PostgresSnapshotScheduleScheduleMonthlySchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#monthly_schedule PostgresSnapshotSchedule#monthly_schedule}.

---

##### `WeeklySchedule`<sup>Optional</sup> <a name="WeeklySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleSchedule.property.weeklySchedule"></a>

```go
WeeklySchedule PostgresSnapshotScheduleScheduleWeeklySchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule">PostgresSnapshotScheduleScheduleWeeklySchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#weekly_schedule PostgresSnapshotSchedule#weekly_schedule}.

---

### PostgresSnapshotScheduleScheduleDailySchedule <a name="PostgresSnapshotScheduleScheduleDailySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressnapshotschedule"

&postgressnapshotschedule.PostgresSnapshotScheduleScheduleDailySchedule {
	Hour: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule.property.hour">Hour</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}. |

---

##### `Hour`<sup>Optional</sup> <a name="Hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule.property.hour"></a>

```go
Hour *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}.

---

### PostgresSnapshotScheduleScheduleMonthlySchedule <a name="PostgresSnapshotScheduleScheduleMonthlySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressnapshotschedule"

&postgressnapshotschedule.PostgresSnapshotScheduleScheduleMonthlySchedule {
	Day: *f64,
	Hour: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule.property.day">Day</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#day PostgresSnapshotSchedule#day}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule.property.hour">Hour</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule.property.day"></a>

```go
Day *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#day PostgresSnapshotSchedule#day}.

---

##### `Hour`<sup>Optional</sup> <a name="Hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule.property.hour"></a>

```go
Hour *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}.

---

### PostgresSnapshotScheduleScheduleWeeklySchedule <a name="PostgresSnapshotScheduleScheduleWeeklySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressnapshotschedule"

&postgressnapshotschedule.PostgresSnapshotScheduleScheduleWeeklySchedule {
	DayOfWeek: *string,
	Hour: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#day_of_week PostgresSnapshotSchedule#day_of_week}. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule.property.hour">Hour</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule.property.dayOfWeek"></a>

```go
DayOfWeek *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#day_of_week PostgresSnapshotSchedule#day_of_week}.

---

##### `Hour`<sup>Optional</sup> <a name="Hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule.property.hour"></a>

```go
Hour *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/postgres_snapshot_schedule#hour PostgresSnapshotSchedule#hour}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresSnapshotScheduleProviderConfigOutputReference <a name="PostgresSnapshotScheduleProviderConfigOutputReference" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressnapshotschedule"

postgressnapshotschedule.NewPostgresSnapshotScheduleProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresSnapshotScheduleProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PostgresSnapshotScheduleScheduleDailyScheduleOutputReference <a name="PostgresSnapshotScheduleScheduleDailyScheduleOutputReference" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressnapshotschedule"

postgressnapshotschedule.NewPostgresSnapshotScheduleScheduleDailyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresSnapshotScheduleScheduleDailyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resetHour">ResetHour</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHour` <a name="ResetHour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.resetHour"></a>

```go
func ResetHour()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hourInput">HourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hour">Hour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HourInput`<sup>Optional</sup> <a name="HourInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hourInput"></a>

```go
func HourInput() *f64
```

- *Type:* *f64

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.hour"></a>

```go
func Hour() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PostgresSnapshotScheduleScheduleList <a name="PostgresSnapshotScheduleScheduleList" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressnapshotschedule"

postgressnapshotschedule.NewPostgresSnapshotScheduleScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PostgresSnapshotScheduleScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.get"></a>

```go
func Get(index *f64) PostgresSnapshotScheduleScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference <a name="PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressnapshotschedule"

postgressnapshotschedule.NewPostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resetHour">ResetHour</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHour` <a name="ResetHour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.resetHour"></a>

```go
func ResetHour()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.dayInput">DayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hourInput">HourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.day">Day</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hour">Hour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.dayInput"></a>

```go
func DayInput() *f64
```

- *Type:* *f64

---

##### `HourInput`<sup>Optional</sup> <a name="HourInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hourInput"></a>

```go
func HourInput() *f64
```

- *Type:* *f64

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.day"></a>

```go
func Day() *f64
```

- *Type:* *f64

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.hour"></a>

```go
func Hour() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PostgresSnapshotScheduleScheduleOutputReference <a name="PostgresSnapshotScheduleScheduleOutputReference" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressnapshotschedule"

postgressnapshotschedule.NewPostgresSnapshotScheduleScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PostgresSnapshotScheduleScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putDailySchedule">PutDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putMonthlySchedule">PutMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putWeeklySchedule">PutWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resetDailySchedule">ResetDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resetMonthlySchedule">ResetMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resetWeeklySchedule">ResetWeeklySchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDailySchedule` <a name="PutDailySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putDailySchedule"></a>

```go
func PutDailySchedule(value PostgresSnapshotScheduleScheduleDailySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putDailySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailySchedule">PostgresSnapshotScheduleScheduleDailySchedule</a>

---

##### `PutMonthlySchedule` <a name="PutMonthlySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putMonthlySchedule"></a>

```go
func PutMonthlySchedule(value PostgresSnapshotScheduleScheduleMonthlySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putMonthlySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlySchedule">PostgresSnapshotScheduleScheduleMonthlySchedule</a>

---

##### `PutWeeklySchedule` <a name="PutWeeklySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putWeeklySchedule"></a>

```go
func PutWeeklySchedule(value PostgresSnapshotScheduleScheduleWeeklySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.putWeeklySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklySchedule">PostgresSnapshotScheduleScheduleWeeklySchedule</a>

---

##### `ResetDailySchedule` <a name="ResetDailySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resetDailySchedule"></a>

```go
func ResetDailySchedule()
```

##### `ResetMonthlySchedule` <a name="ResetMonthlySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resetMonthlySchedule"></a>

```go
func ResetMonthlySchedule()
```

##### `ResetWeeklySchedule` <a name="ResetWeeklySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.resetWeeklySchedule"></a>

```go
func ResetWeeklySchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.dailySchedule">DailySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference">PostgresSnapshotScheduleScheduleDailyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.monthlySchedule">MonthlySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference">PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.weeklySchedule">WeeklySchedule</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference">PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.dailyScheduleInput">DailyScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.monthlyScheduleInput">MonthlyScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.retentionInput">RetentionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.weeklyScheduleInput">WeeklyScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.retention">Retention</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DailySchedule`<sup>Required</sup> <a name="DailySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.dailySchedule"></a>

```go
func DailySchedule() PostgresSnapshotScheduleScheduleDailyScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleDailyScheduleOutputReference">PostgresSnapshotScheduleScheduleDailyScheduleOutputReference</a>

---

##### `MonthlySchedule`<sup>Required</sup> <a name="MonthlySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.monthlySchedule"></a>

```go
func MonthlySchedule() PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference">PostgresSnapshotScheduleScheduleMonthlyScheduleOutputReference</a>

---

##### `WeeklySchedule`<sup>Required</sup> <a name="WeeklySchedule" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.weeklySchedule"></a>

```go
func WeeklySchedule() PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference">PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference</a>

---

##### `DailyScheduleInput`<sup>Optional</sup> <a name="DailyScheduleInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.dailyScheduleInput"></a>

```go
func DailyScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `MonthlyScheduleInput`<sup>Optional</sup> <a name="MonthlyScheduleInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.monthlyScheduleInput"></a>

```go
func MonthlyScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionInput`<sup>Optional</sup> <a name="RetentionInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.retentionInput"></a>

```go
func RetentionInput() *string
```

- *Type:* *string

---

##### `WeeklyScheduleInput`<sup>Optional</sup> <a name="WeeklyScheduleInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.weeklyScheduleInput"></a>

```go
func WeeklyScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.retention"></a>

```go
func Retention() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference <a name="PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressnapshotschedule"

postgressnapshotschedule.NewPostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resetHour">ResetHour</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHour` <a name="ResetHour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.resetHour"></a>

```go
func ResetHour()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hourInput">HourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hour">Hour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeekInput"></a>

```go
func DayOfWeekInput() *string
```

- *Type:* *string

---

##### `HourInput`<sup>Optional</sup> <a name="HourInput" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hourInput"></a>

```go
func HourInput() *f64
```

- *Type:* *f64

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.hour"></a>

```go
func Hour() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresSnapshotSchedule.PostgresSnapshotScheduleScheduleWeeklyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



