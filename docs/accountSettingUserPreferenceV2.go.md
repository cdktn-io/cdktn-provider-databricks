# `accountSettingUserPreferenceV2` Submodule <a name="`accountSettingUserPreferenceV2` Submodule" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountSettingUserPreferenceV2 <a name="AccountSettingUserPreferenceV2" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/account_setting_user_preference_v2 databricks_account_setting_user_preference_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/accountsettinguserpreferencev2"

accountsettinguserpreferencev2.NewAccountSettingUserPreferenceV2(scope Construct, id *string, config AccountSettingUserPreferenceV2Config) AccountSettingUserPreferenceV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config">AccountSettingUserPreferenceV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config">AccountSettingUserPreferenceV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.putBooleanVal">PutBooleanVal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.putStringVal">PutStringVal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.resetBooleanVal">ResetBooleanVal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.resetStringVal">ResetStringVal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBooleanVal` <a name="PutBooleanVal" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.putBooleanVal"></a>

```go
func PutBooleanVal(value AccountSettingUserPreferenceV2BooleanVal)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.putBooleanVal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanVal">AccountSettingUserPreferenceV2BooleanVal</a>

---

##### `PutStringVal` <a name="PutStringVal" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.putStringVal"></a>

```go
func PutStringVal(value AccountSettingUserPreferenceV2StringVal)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.putStringVal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringVal">AccountSettingUserPreferenceV2StringVal</a>

---

##### `ResetBooleanVal` <a name="ResetBooleanVal" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.resetBooleanVal"></a>

```go
func ResetBooleanVal()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.resetName"></a>

```go
func ResetName()
```

##### `ResetStringVal` <a name="ResetStringVal" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.resetStringVal"></a>

```go
func ResetStringVal()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.resetUserId"></a>

```go
func ResetUserId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AccountSettingUserPreferenceV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/accountsettinguserpreferencev2"

accountsettinguserpreferencev2.AccountSettingUserPreferenceV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/accountsettinguserpreferencev2"

accountsettinguserpreferencev2.AccountSettingUserPreferenceV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/accountsettinguserpreferencev2"

accountsettinguserpreferencev2.AccountSettingUserPreferenceV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/accountsettinguserpreferencev2"

accountsettinguserpreferencev2.AccountSettingUserPreferenceV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AccountSettingUserPreferenceV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AccountSettingUserPreferenceV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AccountSettingUserPreferenceV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/account_setting_user_preference_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AccountSettingUserPreferenceV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.booleanVal">BooleanVal</a></code> | <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference">AccountSettingUserPreferenceV2BooleanValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.effectiveBooleanVal">EffectiveBooleanVal</a></code> | <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference">AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.effectiveStringVal">EffectiveStringVal</a></code> | <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference">AccountSettingUserPreferenceV2EffectiveStringValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.stringVal">StringVal</a></code> | <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference">AccountSettingUserPreferenceV2StringValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.booleanValInput">BooleanValInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.stringValInput">StringValInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BooleanVal`<sup>Required</sup> <a name="BooleanVal" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.booleanVal"></a>

```go
func BooleanVal() AccountSettingUserPreferenceV2BooleanValOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference">AccountSettingUserPreferenceV2BooleanValOutputReference</a>

---

##### `EffectiveBooleanVal`<sup>Required</sup> <a name="EffectiveBooleanVal" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.effectiveBooleanVal"></a>

```go
func EffectiveBooleanVal() AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference">AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference</a>

---

##### `EffectiveStringVal`<sup>Required</sup> <a name="EffectiveStringVal" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.effectiveStringVal"></a>

```go
func EffectiveStringVal() AccountSettingUserPreferenceV2EffectiveStringValOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference">AccountSettingUserPreferenceV2EffectiveStringValOutputReference</a>

---

##### `StringVal`<sup>Required</sup> <a name="StringVal" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.stringVal"></a>

```go
func StringVal() AccountSettingUserPreferenceV2StringValOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference">AccountSettingUserPreferenceV2StringValOutputReference</a>

---

##### `BooleanValInput`<sup>Optional</sup> <a name="BooleanValInput" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.booleanValInput"></a>

```go
func BooleanValInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StringValInput`<sup>Optional</sup> <a name="StringValInput" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.stringValInput"></a>

```go
func StringValInput() interface{}
```

- *Type:* interface{}

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AccountSettingUserPreferenceV2BooleanVal <a name="AccountSettingUserPreferenceV2BooleanVal" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanVal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanVal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/accountsettinguserpreferencev2"

&accountsettinguserpreferencev2.AccountSettingUserPreferenceV2BooleanVal {
	Value: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanVal.property.value">Value</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/account_setting_user_preference_v2#value AccountSettingUserPreferenceV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanVal.property.value"></a>

```go
Value interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/account_setting_user_preference_v2#value AccountSettingUserPreferenceV2#value}.

---

### AccountSettingUserPreferenceV2Config <a name="AccountSettingUserPreferenceV2Config" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/accountsettinguserpreferencev2"

&accountsettinguserpreferencev2.AccountSettingUserPreferenceV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BooleanVal: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanVal,
	Name: *string,
	StringVal: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringVal,
	UserId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.booleanVal">BooleanVal</a></code> | <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanVal">AccountSettingUserPreferenceV2BooleanVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/account_setting_user_preference_v2#boolean_val AccountSettingUserPreferenceV2#boolean_val}. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/account_setting_user_preference_v2#name AccountSettingUserPreferenceV2#name}. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.stringVal">StringVal</a></code> | <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringVal">AccountSettingUserPreferenceV2StringVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/account_setting_user_preference_v2#string_val AccountSettingUserPreferenceV2#string_val}. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.userId">UserId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/account_setting_user_preference_v2#user_id AccountSettingUserPreferenceV2#user_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BooleanVal`<sup>Optional</sup> <a name="BooleanVal" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.booleanVal"></a>

```go
BooleanVal AccountSettingUserPreferenceV2BooleanVal
```

- *Type:* <a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanVal">AccountSettingUserPreferenceV2BooleanVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/account_setting_user_preference_v2#boolean_val AccountSettingUserPreferenceV2#boolean_val}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/account_setting_user_preference_v2#name AccountSettingUserPreferenceV2#name}.

---

##### `StringVal`<sup>Optional</sup> <a name="StringVal" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.stringVal"></a>

```go
StringVal AccountSettingUserPreferenceV2StringVal
```

- *Type:* <a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringVal">AccountSettingUserPreferenceV2StringVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/account_setting_user_preference_v2#string_val AccountSettingUserPreferenceV2#string_val}.

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/account_setting_user_preference_v2#user_id AccountSettingUserPreferenceV2#user_id}.

---

### AccountSettingUserPreferenceV2EffectiveBooleanVal <a name="AccountSettingUserPreferenceV2EffectiveBooleanVal" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanVal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanVal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/accountsettinguserpreferencev2"

&accountsettinguserpreferencev2.AccountSettingUserPreferenceV2EffectiveBooleanVal {
	Value: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanVal.property.value">Value</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/account_setting_user_preference_v2#value AccountSettingUserPreferenceV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanVal.property.value"></a>

```go
Value interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/account_setting_user_preference_v2#value AccountSettingUserPreferenceV2#value}.

---

### AccountSettingUserPreferenceV2EffectiveStringVal <a name="AccountSettingUserPreferenceV2EffectiveStringVal" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringVal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringVal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/accountsettinguserpreferencev2"

&accountsettinguserpreferencev2.AccountSettingUserPreferenceV2EffectiveStringVal {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringVal.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/account_setting_user_preference_v2#value AccountSettingUserPreferenceV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringVal.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/account_setting_user_preference_v2#value AccountSettingUserPreferenceV2#value}.

---

### AccountSettingUserPreferenceV2StringVal <a name="AccountSettingUserPreferenceV2StringVal" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringVal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringVal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/accountsettinguserpreferencev2"

&accountsettinguserpreferencev2.AccountSettingUserPreferenceV2StringVal {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringVal.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/account_setting_user_preference_v2#value AccountSettingUserPreferenceV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringVal.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/account_setting_user_preference_v2#value AccountSettingUserPreferenceV2#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccountSettingUserPreferenceV2BooleanValOutputReference <a name="AccountSettingUserPreferenceV2BooleanValOutputReference" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/accountsettinguserpreferencev2"

accountsettinguserpreferencev2.NewAccountSettingUserPreferenceV2BooleanValOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccountSettingUserPreferenceV2BooleanValOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.property.value">Value</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.property.value"></a>

```go
func Value() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference <a name="AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/accountsettinguserpreferencev2"

accountsettinguserpreferencev2.NewAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.value">Value</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanVal">AccountSettingUserPreferenceV2EffectiveBooleanVal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.value"></a>

```go
func Value() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.internalValue"></a>

```go
func InternalValue() AccountSettingUserPreferenceV2EffectiveBooleanVal
```

- *Type:* <a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanVal">AccountSettingUserPreferenceV2EffectiveBooleanVal</a>

---


### AccountSettingUserPreferenceV2EffectiveStringValOutputReference <a name="AccountSettingUserPreferenceV2EffectiveStringValOutputReference" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/accountsettinguserpreferencev2"

accountsettinguserpreferencev2.NewAccountSettingUserPreferenceV2EffectiveStringValOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccountSettingUserPreferenceV2EffectiveStringValOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringVal">AccountSettingUserPreferenceV2EffectiveStringVal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.internalValue"></a>

```go
func InternalValue() AccountSettingUserPreferenceV2EffectiveStringVal
```

- *Type:* <a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringVal">AccountSettingUserPreferenceV2EffectiveStringVal</a>

---


### AccountSettingUserPreferenceV2StringValOutputReference <a name="AccountSettingUserPreferenceV2StringValOutputReference" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/accountsettinguserpreferencev2"

accountsettinguserpreferencev2.NewAccountSettingUserPreferenceV2StringValOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccountSettingUserPreferenceV2StringValOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



