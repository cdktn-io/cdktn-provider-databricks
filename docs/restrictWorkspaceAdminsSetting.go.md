# `restrictWorkspaceAdminsSetting` Submodule <a name="`restrictWorkspaceAdminsSetting` Submodule" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RestrictWorkspaceAdminsSetting <a name="RestrictWorkspaceAdminsSetting" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/restrict_workspace_admins_setting databricks_restrict_workspace_admins_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/restrictworkspaceadminssetting"

restrictworkspaceadminssetting.NewRestrictWorkspaceAdminsSetting(scope Construct, id *string, config RestrictWorkspaceAdminsSettingConfig) RestrictWorkspaceAdminsSetting
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig">RestrictWorkspaceAdminsSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig">RestrictWorkspaceAdminsSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.putRestrictWorkspaceAdmins">PutRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetSettingName">ResetSettingName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.putProviderConfig"></a>

```go
func PutProviderConfig(value RestrictWorkspaceAdminsSettingProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfig">RestrictWorkspaceAdminsSettingProviderConfig</a>

---

##### `PutRestrictWorkspaceAdmins` <a name="PutRestrictWorkspaceAdmins" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.putRestrictWorkspaceAdmins"></a>

```go
func PutRestrictWorkspaceAdmins(value RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.putRestrictWorkspaceAdmins.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins</a>

---

##### `ResetEtag` <a name="ResetEtag" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetEtag"></a>

```go
func ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetId"></a>

```go
func ResetId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetSettingName` <a name="ResetSettingName" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.resetSettingName"></a>

```go
func ResetSettingName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RestrictWorkspaceAdminsSetting resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/restrictworkspaceadminssetting"

restrictworkspaceadminssetting.RestrictWorkspaceAdminsSetting_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/restrictworkspaceadminssetting"

restrictworkspaceadminssetting.RestrictWorkspaceAdminsSetting_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/restrictworkspaceadminssetting"

restrictworkspaceadminssetting.RestrictWorkspaceAdminsSetting_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/restrictworkspaceadminssetting"

restrictworkspaceadminssetting.RestrictWorkspaceAdminsSetting_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a RestrictWorkspaceAdminsSetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RestrictWorkspaceAdminsSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RestrictWorkspaceAdminsSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/restrict_workspace_admins_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the RestrictWorkspaceAdminsSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference">RestrictWorkspaceAdminsSettingProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.restrictWorkspaceAdmins">RestrictWorkspaceAdmins</a></code> | <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.etagInput">EtagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfig">RestrictWorkspaceAdminsSettingProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.restrictWorkspaceAdminsInput">RestrictWorkspaceAdminsInput</a></code> | <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.settingNameInput">SettingNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.settingName">SettingName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.providerConfig"></a>

```go
func ProviderConfig() RestrictWorkspaceAdminsSettingProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference">RestrictWorkspaceAdminsSettingProviderConfigOutputReference</a>

---

##### `RestrictWorkspaceAdmins`<sup>Required</sup> <a name="RestrictWorkspaceAdmins" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.restrictWorkspaceAdmins"></a>

```go
func RestrictWorkspaceAdmins() RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference</a>

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.etagInput"></a>

```go
func EtagInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.providerConfigInput"></a>

```go
func ProviderConfigInput() RestrictWorkspaceAdminsSettingProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfig">RestrictWorkspaceAdminsSettingProviderConfig</a>

---

##### `RestrictWorkspaceAdminsInput`<sup>Optional</sup> <a name="RestrictWorkspaceAdminsInput" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.restrictWorkspaceAdminsInput"></a>

```go
func RestrictWorkspaceAdminsInput() RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins
```

- *Type:* <a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins</a>

---

##### `SettingNameInput`<sup>Optional</sup> <a name="SettingNameInput" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.settingNameInput"></a>

```go
func SettingNameInput() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SettingName`<sup>Required</sup> <a name="SettingName" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.settingName"></a>

```go
func SettingName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSetting.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RestrictWorkspaceAdminsSettingConfig <a name="RestrictWorkspaceAdminsSettingConfig" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/restrictworkspaceadminssetting"

&restrictworkspaceadminssetting.RestrictWorkspaceAdminsSettingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	RestrictWorkspaceAdmins: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins,
	Etag: *string,
	Id: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfig,
	SettingName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.restrictWorkspaceAdmins">RestrictWorkspaceAdmins</a></code> | <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins</a></code> | restrict_workspace_admins block. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.etag">Etag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/restrict_workspace_admins_setting#etag RestrictWorkspaceAdminsSetting#etag}. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/restrict_workspace_admins_setting#id RestrictWorkspaceAdminsSetting#id}. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfig">RestrictWorkspaceAdminsSettingProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.settingName">SettingName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/restrict_workspace_admins_setting#setting_name RestrictWorkspaceAdminsSetting#setting_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RestrictWorkspaceAdmins`<sup>Required</sup> <a name="RestrictWorkspaceAdmins" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.restrictWorkspaceAdmins"></a>

```go
RestrictWorkspaceAdmins RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins
```

- *Type:* <a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins</a>

restrict_workspace_admins block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/restrict_workspace_admins_setting#restrict_workspace_admins RestrictWorkspaceAdminsSetting#restrict_workspace_admins}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.etag"></a>

```go
Etag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/restrict_workspace_admins_setting#etag RestrictWorkspaceAdminsSetting#etag}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/restrict_workspace_admins_setting#id RestrictWorkspaceAdminsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.providerConfig"></a>

```go
ProviderConfig RestrictWorkspaceAdminsSettingProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfig">RestrictWorkspaceAdminsSettingProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/restrict_workspace_admins_setting#provider_config RestrictWorkspaceAdminsSetting#provider_config}

---

##### `SettingName`<sup>Optional</sup> <a name="SettingName" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingConfig.property.settingName"></a>

```go
SettingName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/restrict_workspace_admins_setting#setting_name RestrictWorkspaceAdminsSetting#setting_name}.

---

### RestrictWorkspaceAdminsSettingProviderConfig <a name="RestrictWorkspaceAdminsSettingProviderConfig" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/restrictworkspaceadminssetting"

&restrictworkspaceadminssetting.RestrictWorkspaceAdminsSettingProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/restrict_workspace_admins_setting#workspace_id RestrictWorkspaceAdminsSetting#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/restrict_workspace_admins_setting#workspace_id RestrictWorkspaceAdminsSetting#workspace_id}.

---

### RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins <a name="RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/restrictworkspaceadminssetting"

&restrictworkspaceadminssetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins {
	Status: *string,
	DisableGovTagCreation: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/restrict_workspace_admins_setting#status RestrictWorkspaceAdminsSetting#status}. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins.property.disableGovTagCreation">DisableGovTagCreation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/restrict_workspace_admins_setting#disable_gov_tag_creation RestrictWorkspaceAdminsSetting#disable_gov_tag_creation}. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/restrict_workspace_admins_setting#status RestrictWorkspaceAdminsSetting#status}.

---

##### `DisableGovTagCreation`<sup>Optional</sup> <a name="DisableGovTagCreation" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins.property.disableGovTagCreation"></a>

```go
DisableGovTagCreation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/restrict_workspace_admins_setting#disable_gov_tag_creation RestrictWorkspaceAdminsSetting#disable_gov_tag_creation}.

---

## Classes <a name="Classes" id="Classes"></a>

### RestrictWorkspaceAdminsSettingProviderConfigOutputReference <a name="RestrictWorkspaceAdminsSettingProviderConfigOutputReference" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/restrictworkspaceadminssetting"

restrictworkspaceadminssetting.NewRestrictWorkspaceAdminsSettingProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RestrictWorkspaceAdminsSettingProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfig">RestrictWorkspaceAdminsSettingProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() RestrictWorkspaceAdminsSettingProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingProviderConfig">RestrictWorkspaceAdminsSettingProviderConfig</a>

---


### RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference <a name="RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/restrictworkspaceadminssetting"

restrictworkspaceadminssetting.NewRestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.resetDisableGovTagCreation">ResetDisableGovTagCreation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisableGovTagCreation` <a name="ResetDisableGovTagCreation" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.resetDisableGovTagCreation"></a>

```go
func ResetDisableGovTagCreation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.disableGovTagCreationInput">DisableGovTagCreationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.disableGovTagCreation">DisableGovTagCreation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisableGovTagCreationInput`<sup>Optional</sup> <a name="DisableGovTagCreationInput" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.disableGovTagCreationInput"></a>

```go
func DisableGovTagCreationInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `DisableGovTagCreation`<sup>Required</sup> <a name="DisableGovTagCreation" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.disableGovTagCreation"></a>

```go
func DisableGovTagCreation() interface{}
```

- *Type:* interface{}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdminsOutputReference.property.internalValue"></a>

```go
func InternalValue() RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins
```

- *Type:* <a href="#@cdktn/provider-databricks.restrictWorkspaceAdminsSetting.RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins">RestrictWorkspaceAdminsSettingRestrictWorkspaceAdmins</a>

---



