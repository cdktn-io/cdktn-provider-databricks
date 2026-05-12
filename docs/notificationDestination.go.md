# `notificationDestination` Submodule <a name="`notificationDestination` Submodule" id="@cdktn/provider-databricks.notificationDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationDestination <a name="NotificationDestination" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination databricks_notification_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/notificationdestination"

notificationdestination.NewNotificationDestination(scope Construct, id *string, config NotificationDestinationConfig) NotificationDestination
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig">NotificationDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig">NotificationDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.resetDestinationType">ResetDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.putConfig"></a>

```go
func PutConfig(value NotificationDestinationConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a>

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.putProviderConfig"></a>

```go
func PutProviderConfig(value NotificationDestinationProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfig">NotificationDestinationProviderConfig</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetDestinationType` <a name="ResetDestinationType" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.resetDestinationType"></a>

```go
func ResetDestinationType()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.resetId"></a>

```go
func ResetId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NotificationDestination resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/notificationdestination"

notificationdestination.NotificationDestination_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/notificationdestination"

notificationdestination.NotificationDestination_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/notificationdestination"

notificationdestination.NotificationDestination_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/notificationdestination"

notificationdestination.NotificationDestination_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NotificationDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NotificationDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NotificationDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NotificationDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference">NotificationDestinationConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference">NotificationDestinationProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfig">NotificationDestinationProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.config"></a>

```go
func Config() NotificationDestinationConfigAOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference">NotificationDestinationConfigAOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.providerConfig"></a>

```go
func ProviderConfig() NotificationDestinationProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference">NotificationDestinationProviderConfigOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.configInput"></a>

```go
func ConfigInput() NotificationDestinationConfigA
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a>

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.destinationTypeInput"></a>

```go
func DestinationTypeInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.providerConfigInput"></a>

```go
func ProviderConfigInput() NotificationDestinationProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfig">NotificationDestinationProviderConfig</a>

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.notificationDestination.NotificationDestination.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationDestinationConfig <a name="NotificationDestinationConfig" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/notificationdestination"

&notificationdestination.NotificationDestinationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Config: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.notificationDestination.NotificationDestinationConfigA,
	DestinationType: *string,
	Id: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.notificationDestination.NotificationDestinationProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#display_name NotificationDestination#display_name}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a></code> | config block. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.destinationType">DestinationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#destination_type NotificationDestination#destination_type}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#id NotificationDestination#id}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfig">NotificationDestinationProviderConfig</a></code> | provider_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#display_name NotificationDestination#display_name}.

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.config"></a>

```go
Config NotificationDestinationConfigA
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#config NotificationDestination#config}

---

##### `DestinationType`<sup>Optional</sup> <a name="DestinationType" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.destinationType"></a>

```go
DestinationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#destination_type NotificationDestination#destination_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#id NotificationDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfig.property.providerConfig"></a>

```go
ProviderConfig NotificationDestinationProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfig">NotificationDestinationProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#provider_config NotificationDestination#provider_config}

---

### NotificationDestinationConfigA <a name="NotificationDestinationConfigA" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/notificationdestination"

&notificationdestination.NotificationDestinationConfigA {
	Email: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.notificationDestination.NotificationDestinationConfigEmail,
	GenericWebhook: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.notificationDestination.NotificationDestinationConfigGenericWebhook,
	MicrosoftTeams: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.notificationDestination.NotificationDestinationConfigMicrosoftTeams,
	Pagerduty: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.notificationDestination.NotificationDestinationConfigPagerduty,
	Slack: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.notificationDestination.NotificationDestinationConfigSlack,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.email">Email</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a></code> | email block. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.genericWebhook">GenericWebhook</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a></code> | generic_webhook block. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.microsoftTeams">MicrosoftTeams</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a></code> | microsoft_teams block. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.pagerduty">Pagerduty</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a></code> | pagerduty block. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.slack">Slack</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a></code> | slack block. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.email"></a>

```go
Email NotificationDestinationConfigEmail
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#email NotificationDestination#email}

---

##### `GenericWebhook`<sup>Optional</sup> <a name="GenericWebhook" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.genericWebhook"></a>

```go
GenericWebhook NotificationDestinationConfigGenericWebhook
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a>

generic_webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#generic_webhook NotificationDestination#generic_webhook}

---

##### `MicrosoftTeams`<sup>Optional</sup> <a name="MicrosoftTeams" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.microsoftTeams"></a>

```go
MicrosoftTeams NotificationDestinationConfigMicrosoftTeams
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a>

microsoft_teams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#microsoft_teams NotificationDestination#microsoft_teams}

---

##### `Pagerduty`<sup>Optional</sup> <a name="Pagerduty" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.pagerduty"></a>

```go
Pagerduty NotificationDestinationConfigPagerduty
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a>

pagerduty block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#pagerduty NotificationDestination#pagerduty}

---

##### `Slack`<sup>Optional</sup> <a name="Slack" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.slack"></a>

```go
Slack NotificationDestinationConfigSlack
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a>

slack block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#slack NotificationDestination#slack}

---

### NotificationDestinationConfigEmail <a name="NotificationDestinationConfigEmail" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmail.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/notificationdestination"

&notificationdestination.NotificationDestinationConfigEmail {
	Addresses: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmail.property.addresses">Addresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#addresses NotificationDestination#addresses}. |

---

##### `Addresses`<sup>Optional</sup> <a name="Addresses" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmail.property.addresses"></a>

```go
Addresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#addresses NotificationDestination#addresses}.

---

### NotificationDestinationConfigGenericWebhook <a name="NotificationDestinationConfigGenericWebhook" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/notificationdestination"

&notificationdestination.NotificationDestinationConfigGenericWebhook {
	Password: *string,
	PasswordSet: interface{},
	Url: *string,
	UrlSet: interface{},
	Username: *string,
	UsernameSet: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#password NotificationDestination#password}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.passwordSet">PasswordSet</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#password_set NotificationDestination#password_set}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#url NotificationDestination#url}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.urlSet">UrlSet</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#username NotificationDestination#username}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.usernameSet">UsernameSet</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#username_set NotificationDestination#username_set}. |

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#password NotificationDestination#password}.

---

##### `PasswordSet`<sup>Optional</sup> <a name="PasswordSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.passwordSet"></a>

```go
PasswordSet interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#password_set NotificationDestination#password_set}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#url NotificationDestination#url}.

---

##### `UrlSet`<sup>Optional</sup> <a name="UrlSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.urlSet"></a>

```go
UrlSet interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#username NotificationDestination#username}.

---

##### `UsernameSet`<sup>Optional</sup> <a name="UsernameSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.usernameSet"></a>

```go
UsernameSet interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#username_set NotificationDestination#username_set}.

---

### NotificationDestinationConfigMicrosoftTeams <a name="NotificationDestinationConfigMicrosoftTeams" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/notificationdestination"

&notificationdestination.NotificationDestinationConfigMicrosoftTeams {
	AppId: *string,
	AppIdSet: interface{},
	AuthSecret: *string,
	AuthSecretSet: interface{},
	ChannelUrl: *string,
	ChannelUrlSet: interface{},
	TenantId: *string,
	TenantIdSet: interface{},
	Url: *string,
	UrlSet: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.appId">AppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#app_id NotificationDestination#app_id}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.appIdSet">AppIdSet</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#app_id_set NotificationDestination#app_id_set}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.authSecret">AuthSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#auth_secret NotificationDestination#auth_secret}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.authSecretSet">AuthSecretSet</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#auth_secret_set NotificationDestination#auth_secret_set}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.channelUrl">ChannelUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#channel_url NotificationDestination#channel_url}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.channelUrlSet">ChannelUrlSet</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#channel_url_set NotificationDestination#channel_url_set}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#tenant_id NotificationDestination#tenant_id}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.tenantIdSet">TenantIdSet</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#tenant_id_set NotificationDestination#tenant_id_set}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#url NotificationDestination#url}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.urlSet">UrlSet</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}. |

---

##### `AppId`<sup>Optional</sup> <a name="AppId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.appId"></a>

```go
AppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#app_id NotificationDestination#app_id}.

---

##### `AppIdSet`<sup>Optional</sup> <a name="AppIdSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.appIdSet"></a>

```go
AppIdSet interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#app_id_set NotificationDestination#app_id_set}.

---

##### `AuthSecret`<sup>Optional</sup> <a name="AuthSecret" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.authSecret"></a>

```go
AuthSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#auth_secret NotificationDestination#auth_secret}.

---

##### `AuthSecretSet`<sup>Optional</sup> <a name="AuthSecretSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.authSecretSet"></a>

```go
AuthSecretSet interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#auth_secret_set NotificationDestination#auth_secret_set}.

---

##### `ChannelUrl`<sup>Optional</sup> <a name="ChannelUrl" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.channelUrl"></a>

```go
ChannelUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#channel_url NotificationDestination#channel_url}.

---

##### `ChannelUrlSet`<sup>Optional</sup> <a name="ChannelUrlSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.channelUrlSet"></a>

```go
ChannelUrlSet interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#channel_url_set NotificationDestination#channel_url_set}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#tenant_id NotificationDestination#tenant_id}.

---

##### `TenantIdSet`<sup>Optional</sup> <a name="TenantIdSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.tenantIdSet"></a>

```go
TenantIdSet interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#tenant_id_set NotificationDestination#tenant_id_set}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#url NotificationDestination#url}.

---

##### `UrlSet`<sup>Optional</sup> <a name="UrlSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.urlSet"></a>

```go
UrlSet interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}.

---

### NotificationDestinationConfigPagerduty <a name="NotificationDestinationConfigPagerduty" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/notificationdestination"

&notificationdestination.NotificationDestinationConfigPagerduty {
	IntegrationKey: *string,
	IntegrationKeySet: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty.property.integrationKey">IntegrationKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#integration_key NotificationDestination#integration_key}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty.property.integrationKeySet">IntegrationKeySet</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#integration_key_set NotificationDestination#integration_key_set}. |

---

##### `IntegrationKey`<sup>Optional</sup> <a name="IntegrationKey" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty.property.integrationKey"></a>

```go
IntegrationKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#integration_key NotificationDestination#integration_key}.

---

##### `IntegrationKeySet`<sup>Optional</sup> <a name="IntegrationKeySet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty.property.integrationKeySet"></a>

```go
IntegrationKeySet interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#integration_key_set NotificationDestination#integration_key_set}.

---

### NotificationDestinationConfigSlack <a name="NotificationDestinationConfigSlack" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/notificationdestination"

&notificationdestination.NotificationDestinationConfigSlack {
	ChannelId: *string,
	ChannelIdSet: interface{},
	OauthToken: *string,
	OauthTokenSet: interface{},
	Url: *string,
	UrlSet: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.channelId">ChannelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#channel_id NotificationDestination#channel_id}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.channelIdSet">ChannelIdSet</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#channel_id_set NotificationDestination#channel_id_set}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.oauthToken">OauthToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#oauth_token NotificationDestination#oauth_token}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.oauthTokenSet">OauthTokenSet</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#oauth_token_set NotificationDestination#oauth_token_set}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#url NotificationDestination#url}. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.urlSet">UrlSet</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}. |

---

##### `ChannelId`<sup>Optional</sup> <a name="ChannelId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.channelId"></a>

```go
ChannelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#channel_id NotificationDestination#channel_id}.

---

##### `ChannelIdSet`<sup>Optional</sup> <a name="ChannelIdSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.channelIdSet"></a>

```go
ChannelIdSet interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#channel_id_set NotificationDestination#channel_id_set}.

---

##### `OauthToken`<sup>Optional</sup> <a name="OauthToken" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.oauthToken"></a>

```go
OauthToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#oauth_token NotificationDestination#oauth_token}.

---

##### `OauthTokenSet`<sup>Optional</sup> <a name="OauthTokenSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.oauthTokenSet"></a>

```go
OauthTokenSet interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#oauth_token_set NotificationDestination#oauth_token_set}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#url NotificationDestination#url}.

---

##### `UrlSet`<sup>Optional</sup> <a name="UrlSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.urlSet"></a>

```go
UrlSet interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}.

---

### NotificationDestinationProviderConfig <a name="NotificationDestinationProviderConfig" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/notificationdestination"

&notificationdestination.NotificationDestinationProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#workspace_id NotificationDestination#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/notification_destination#workspace_id NotificationDestination#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationDestinationConfigAOutputReference <a name="NotificationDestinationConfigAOutputReference" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/notificationdestination"

notificationdestination.NewNotificationDestinationConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NotificationDestinationConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putEmail">PutEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putGenericWebhook">PutGenericWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putMicrosoftTeams">PutMicrosoftTeams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putPagerduty">PutPagerduty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putSlack">PutSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetGenericWebhook">ResetGenericWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetMicrosoftTeams">ResetMicrosoftTeams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetPagerduty">ResetPagerduty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetSlack">ResetSlack</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEmail` <a name="PutEmail" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putEmail"></a>

```go
func PutEmail(value NotificationDestinationConfigEmail)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putEmail.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a>

---

##### `PutGenericWebhook` <a name="PutGenericWebhook" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putGenericWebhook"></a>

```go
func PutGenericWebhook(value NotificationDestinationConfigGenericWebhook)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putGenericWebhook.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a>

---

##### `PutMicrosoftTeams` <a name="PutMicrosoftTeams" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putMicrosoftTeams"></a>

```go
func PutMicrosoftTeams(value NotificationDestinationConfigMicrosoftTeams)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putMicrosoftTeams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a>

---

##### `PutPagerduty` <a name="PutPagerduty" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putPagerduty"></a>

```go
func PutPagerduty(value NotificationDestinationConfigPagerduty)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putPagerduty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a>

---

##### `PutSlack` <a name="PutSlack" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putSlack"></a>

```go
func PutSlack(value NotificationDestinationConfigSlack)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putSlack.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a>

---

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetGenericWebhook` <a name="ResetGenericWebhook" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetGenericWebhook"></a>

```go
func ResetGenericWebhook()
```

##### `ResetMicrosoftTeams` <a name="ResetMicrosoftTeams" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetMicrosoftTeams"></a>

```go
func ResetMicrosoftTeams()
```

##### `ResetPagerduty` <a name="ResetPagerduty" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetPagerduty"></a>

```go
func ResetPagerduty()
```

##### `ResetSlack` <a name="ResetSlack" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetSlack"></a>

```go
func ResetSlack()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.email">Email</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference">NotificationDestinationConfigEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.genericWebhook">GenericWebhook</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference">NotificationDestinationConfigGenericWebhookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.microsoftTeams">MicrosoftTeams</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference">NotificationDestinationConfigMicrosoftTeamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.pagerduty">Pagerduty</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference">NotificationDestinationConfigPagerdutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.slack">Slack</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference">NotificationDestinationConfigSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.emailInput">EmailInput</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.genericWebhookInput">GenericWebhookInput</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.microsoftTeamsInput">MicrosoftTeamsInput</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.pagerdutyInput">PagerdutyInput</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.slackInput">SlackInput</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.email"></a>

```go
func Email() NotificationDestinationConfigEmailOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference">NotificationDestinationConfigEmailOutputReference</a>

---

##### `GenericWebhook`<sup>Required</sup> <a name="GenericWebhook" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.genericWebhook"></a>

```go
func GenericWebhook() NotificationDestinationConfigGenericWebhookOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference">NotificationDestinationConfigGenericWebhookOutputReference</a>

---

##### `MicrosoftTeams`<sup>Required</sup> <a name="MicrosoftTeams" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.microsoftTeams"></a>

```go
func MicrosoftTeams() NotificationDestinationConfigMicrosoftTeamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference">NotificationDestinationConfigMicrosoftTeamsOutputReference</a>

---

##### `Pagerduty`<sup>Required</sup> <a name="Pagerduty" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.pagerduty"></a>

```go
func Pagerduty() NotificationDestinationConfigPagerdutyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference">NotificationDestinationConfigPagerdutyOutputReference</a>

---

##### `Slack`<sup>Required</sup> <a name="Slack" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.slack"></a>

```go
func Slack() NotificationDestinationConfigSlackOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference">NotificationDestinationConfigSlackOutputReference</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.emailInput"></a>

```go
func EmailInput() NotificationDestinationConfigEmail
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a>

---

##### `GenericWebhookInput`<sup>Optional</sup> <a name="GenericWebhookInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.genericWebhookInput"></a>

```go
func GenericWebhookInput() NotificationDestinationConfigGenericWebhook
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a>

---

##### `MicrosoftTeamsInput`<sup>Optional</sup> <a name="MicrosoftTeamsInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.microsoftTeamsInput"></a>

```go
func MicrosoftTeamsInput() NotificationDestinationConfigMicrosoftTeams
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a>

---

##### `PagerdutyInput`<sup>Optional</sup> <a name="PagerdutyInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.pagerdutyInput"></a>

```go
func PagerdutyInput() NotificationDestinationConfigPagerduty
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a>

---

##### `SlackInput`<sup>Optional</sup> <a name="SlackInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.slackInput"></a>

```go
func SlackInput() NotificationDestinationConfigSlack
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() NotificationDestinationConfigA
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a>

---


### NotificationDestinationConfigEmailOutputReference <a name="NotificationDestinationConfigEmailOutputReference" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/notificationdestination"

notificationdestination.NewNotificationDestinationConfigEmailOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NotificationDestinationConfigEmailOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.resetAddresses">ResetAddresses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddresses` <a name="ResetAddresses" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.resetAddresses"></a>

```go
func ResetAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.addressesInput">AddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.addresses">Addresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressesInput`<sup>Optional</sup> <a name="AddressesInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.addressesInput"></a>

```go
func AddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.addresses"></a>

```go
func Addresses() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.internalValue"></a>

```go
func InternalValue() NotificationDestinationConfigEmail
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a>

---


### NotificationDestinationConfigGenericWebhookOutputReference <a name="NotificationDestinationConfigGenericWebhookOutputReference" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/notificationdestination"

notificationdestination.NewNotificationDestinationConfigGenericWebhookOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NotificationDestinationConfigGenericWebhookOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetPasswordSet">ResetPasswordSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUrlSet">ResetUrlSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUsernameSet">ResetUsernameSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPasswordSet` <a name="ResetPasswordSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetPasswordSet"></a>

```go
func ResetPasswordSet()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUrl"></a>

```go
func ResetUrl()
```

##### `ResetUrlSet` <a name="ResetUrlSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUrlSet"></a>

```go
func ResetUrlSet()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetUsernameSet` <a name="ResetUsernameSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUsernameSet"></a>

```go
func ResetUsernameSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordSetInput">PasswordSetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlSetInput">UrlSetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameSetInput">UsernameSetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordSet">PasswordSet</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlSet">UrlSet</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameSet">UsernameSet</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PasswordSetInput`<sup>Optional</sup> <a name="PasswordSetInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordSetInput"></a>

```go
func PasswordSetInput() interface{}
```

- *Type:* interface{}

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UrlSetInput`<sup>Optional</sup> <a name="UrlSetInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlSetInput"></a>

```go
func UrlSetInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `UsernameSetInput`<sup>Optional</sup> <a name="UsernameSetInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameSetInput"></a>

```go
func UsernameSetInput() interface{}
```

- *Type:* interface{}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PasswordSet`<sup>Required</sup> <a name="PasswordSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordSet"></a>

```go
func PasswordSet() interface{}
```

- *Type:* interface{}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UrlSet`<sup>Required</sup> <a name="UrlSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlSet"></a>

```go
func UrlSet() interface{}
```

- *Type:* interface{}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `UsernameSet`<sup>Required</sup> <a name="UsernameSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameSet"></a>

```go
func UsernameSet() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.internalValue"></a>

```go
func InternalValue() NotificationDestinationConfigGenericWebhook
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a>

---


### NotificationDestinationConfigMicrosoftTeamsOutputReference <a name="NotificationDestinationConfigMicrosoftTeamsOutputReference" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/notificationdestination"

notificationdestination.NewNotificationDestinationConfigMicrosoftTeamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NotificationDestinationConfigMicrosoftTeamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAppId">ResetAppId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAppIdSet">ResetAppIdSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAuthSecret">ResetAuthSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAuthSecretSet">ResetAuthSecretSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetChannelUrl">ResetChannelUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetChannelUrlSet">ResetChannelUrlSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetTenantIdSet">ResetTenantIdSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetUrlSet">ResetUrlSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppId` <a name="ResetAppId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAppId"></a>

```go
func ResetAppId()
```

##### `ResetAppIdSet` <a name="ResetAppIdSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAppIdSet"></a>

```go
func ResetAppIdSet()
```

##### `ResetAuthSecret` <a name="ResetAuthSecret" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAuthSecret"></a>

```go
func ResetAuthSecret()
```

##### `ResetAuthSecretSet` <a name="ResetAuthSecretSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAuthSecretSet"></a>

```go
func ResetAuthSecretSet()
```

##### `ResetChannelUrl` <a name="ResetChannelUrl" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetChannelUrl"></a>

```go
func ResetChannelUrl()
```

##### `ResetChannelUrlSet` <a name="ResetChannelUrlSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetChannelUrlSet"></a>

```go
func ResetChannelUrlSet()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetTenantId"></a>

```go
func ResetTenantId()
```

##### `ResetTenantIdSet` <a name="ResetTenantIdSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetTenantIdSet"></a>

```go
func ResetTenantIdSet()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetUrl"></a>

```go
func ResetUrl()
```

##### `ResetUrlSet` <a name="ResetUrlSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetUrlSet"></a>

```go
func ResetUrlSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appIdInput">AppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appIdSetInput">AppIdSetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecretInput">AuthSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecretSetInput">AuthSecretSetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrlInput">ChannelUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrlSetInput">ChannelUrlSetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantIdSetInput">TenantIdSetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlSetInput">UrlSetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appIdSet">AppIdSet</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecret">AuthSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecretSet">AuthSecretSet</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrl">ChannelUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrlSet">ChannelUrlSet</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantIdSet">TenantIdSet</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlSet">UrlSet</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appIdInput"></a>

```go
func AppIdInput() *string
```

- *Type:* *string

---

##### `AppIdSetInput`<sup>Optional</sup> <a name="AppIdSetInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appIdSetInput"></a>

```go
func AppIdSetInput() interface{}
```

- *Type:* interface{}

---

##### `AuthSecretInput`<sup>Optional</sup> <a name="AuthSecretInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecretInput"></a>

```go
func AuthSecretInput() *string
```

- *Type:* *string

---

##### `AuthSecretSetInput`<sup>Optional</sup> <a name="AuthSecretSetInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecretSetInput"></a>

```go
func AuthSecretSetInput() interface{}
```

- *Type:* interface{}

---

##### `ChannelUrlInput`<sup>Optional</sup> <a name="ChannelUrlInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrlInput"></a>

```go
func ChannelUrlInput() *string
```

- *Type:* *string

---

##### `ChannelUrlSetInput`<sup>Optional</sup> <a name="ChannelUrlSetInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrlSetInput"></a>

```go
func ChannelUrlSetInput() interface{}
```

- *Type:* interface{}

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `TenantIdSetInput`<sup>Optional</sup> <a name="TenantIdSetInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantIdSetInput"></a>

```go
func TenantIdSetInput() interface{}
```

- *Type:* interface{}

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UrlSetInput`<sup>Optional</sup> <a name="UrlSetInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlSetInput"></a>

```go
func UrlSetInput() interface{}
```

- *Type:* interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `AppIdSet`<sup>Required</sup> <a name="AppIdSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appIdSet"></a>

```go
func AppIdSet() interface{}
```

- *Type:* interface{}

---

##### `AuthSecret`<sup>Required</sup> <a name="AuthSecret" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecret"></a>

```go
func AuthSecret() *string
```

- *Type:* *string

---

##### `AuthSecretSet`<sup>Required</sup> <a name="AuthSecretSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecretSet"></a>

```go
func AuthSecretSet() interface{}
```

- *Type:* interface{}

---

##### `ChannelUrl`<sup>Required</sup> <a name="ChannelUrl" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrl"></a>

```go
func ChannelUrl() *string
```

- *Type:* *string

---

##### `ChannelUrlSet`<sup>Required</sup> <a name="ChannelUrlSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrlSet"></a>

```go
func ChannelUrlSet() interface{}
```

- *Type:* interface{}

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `TenantIdSet`<sup>Required</sup> <a name="TenantIdSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantIdSet"></a>

```go
func TenantIdSet() interface{}
```

- *Type:* interface{}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UrlSet`<sup>Required</sup> <a name="UrlSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlSet"></a>

```go
func UrlSet() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.internalValue"></a>

```go
func InternalValue() NotificationDestinationConfigMicrosoftTeams
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a>

---


### NotificationDestinationConfigPagerdutyOutputReference <a name="NotificationDestinationConfigPagerdutyOutputReference" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/notificationdestination"

notificationdestination.NewNotificationDestinationConfigPagerdutyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NotificationDestinationConfigPagerdutyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resetIntegrationKey">ResetIntegrationKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resetIntegrationKeySet">ResetIntegrationKeySet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntegrationKey` <a name="ResetIntegrationKey" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resetIntegrationKey"></a>

```go
func ResetIntegrationKey()
```

##### `ResetIntegrationKeySet` <a name="ResetIntegrationKeySet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resetIntegrationKeySet"></a>

```go
func ResetIntegrationKeySet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeyInput">IntegrationKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeySetInput">IntegrationKeySetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKey">IntegrationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeySet">IntegrationKeySet</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IntegrationKeyInput`<sup>Optional</sup> <a name="IntegrationKeyInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeyInput"></a>

```go
func IntegrationKeyInput() *string
```

- *Type:* *string

---

##### `IntegrationKeySetInput`<sup>Optional</sup> <a name="IntegrationKeySetInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeySetInput"></a>

```go
func IntegrationKeySetInput() interface{}
```

- *Type:* interface{}

---

##### `IntegrationKey`<sup>Required</sup> <a name="IntegrationKey" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKey"></a>

```go
func IntegrationKey() *string
```

- *Type:* *string

---

##### `IntegrationKeySet`<sup>Required</sup> <a name="IntegrationKeySet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeySet"></a>

```go
func IntegrationKeySet() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.internalValue"></a>

```go
func InternalValue() NotificationDestinationConfigPagerduty
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a>

---


### NotificationDestinationConfigSlackOutputReference <a name="NotificationDestinationConfigSlackOutputReference" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/notificationdestination"

notificationdestination.NewNotificationDestinationConfigSlackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NotificationDestinationConfigSlackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetChannelId">ResetChannelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetChannelIdSet">ResetChannelIdSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetOauthToken">ResetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetOauthTokenSet">ResetOauthTokenSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetUrlSet">ResetUrlSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannelId` <a name="ResetChannelId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetChannelId"></a>

```go
func ResetChannelId()
```

##### `ResetChannelIdSet` <a name="ResetChannelIdSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetChannelIdSet"></a>

```go
func ResetChannelIdSet()
```

##### `ResetOauthToken` <a name="ResetOauthToken" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetOauthToken"></a>

```go
func ResetOauthToken()
```

##### `ResetOauthTokenSet` <a name="ResetOauthTokenSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetOauthTokenSet"></a>

```go
func ResetOauthTokenSet()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetUrl"></a>

```go
func ResetUrl()
```

##### `ResetUrlSet` <a name="ResetUrlSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetUrlSet"></a>

```go
func ResetUrlSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelIdInput">ChannelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelIdSetInput">ChannelIdSetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthTokenInput">OauthTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthTokenSetInput">OauthTokenSetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlSetInput">UrlSetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelId">ChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelIdSet">ChannelIdSet</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthToken">OauthToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthTokenSet">OauthTokenSet</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlSet">UrlSet</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChannelIdInput`<sup>Optional</sup> <a name="ChannelIdInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelIdInput"></a>

```go
func ChannelIdInput() *string
```

- *Type:* *string

---

##### `ChannelIdSetInput`<sup>Optional</sup> <a name="ChannelIdSetInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelIdSetInput"></a>

```go
func ChannelIdSetInput() interface{}
```

- *Type:* interface{}

---

##### `OauthTokenInput`<sup>Optional</sup> <a name="OauthTokenInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthTokenInput"></a>

```go
func OauthTokenInput() *string
```

- *Type:* *string

---

##### `OauthTokenSetInput`<sup>Optional</sup> <a name="OauthTokenSetInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthTokenSetInput"></a>

```go
func OauthTokenSetInput() interface{}
```

- *Type:* interface{}

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UrlSetInput`<sup>Optional</sup> <a name="UrlSetInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlSetInput"></a>

```go
func UrlSetInput() interface{}
```

- *Type:* interface{}

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelId"></a>

```go
func ChannelId() *string
```

- *Type:* *string

---

##### `ChannelIdSet`<sup>Required</sup> <a name="ChannelIdSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelIdSet"></a>

```go
func ChannelIdSet() interface{}
```

- *Type:* interface{}

---

##### `OauthToken`<sup>Required</sup> <a name="OauthToken" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthToken"></a>

```go
func OauthToken() *string
```

- *Type:* *string

---

##### `OauthTokenSet`<sup>Required</sup> <a name="OauthTokenSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthTokenSet"></a>

```go
func OauthTokenSet() interface{}
```

- *Type:* interface{}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UrlSet`<sup>Required</sup> <a name="UrlSet" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlSet"></a>

```go
func UrlSet() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.internalValue"></a>

```go
func InternalValue() NotificationDestinationConfigSlack
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a>

---


### NotificationDestinationProviderConfigOutputReference <a name="NotificationDestinationProviderConfigOutputReference" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/notificationdestination"

notificationdestination.NewNotificationDestinationProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NotificationDestinationProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfig">NotificationDestinationProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() NotificationDestinationProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.notificationDestination.NotificationDestinationProviderConfig">NotificationDestinationProviderConfig</a>

---



