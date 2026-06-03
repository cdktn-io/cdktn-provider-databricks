# `mwsPrivateAccessSettings` Submodule <a name="`mwsPrivateAccessSettings` Submodule" id="@cdktn/provider-databricks.mwsPrivateAccessSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsPrivateAccessSettings <a name="MwsPrivateAccessSettings" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_private_access_settings databricks_mws_private_access_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/mwsprivateaccesssettings"

mwsprivateaccesssettings.NewMwsPrivateAccessSettings(scope Construct, id *string, config MwsPrivateAccessSettingsConfig) MwsPrivateAccessSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig">MwsPrivateAccessSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig">MwsPrivateAccessSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetAllowedVpcEndpointIds">ResetAllowedVpcEndpointIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPrivateAccessLevel">ResetPrivateAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPrivateAccessSettingsId">ResetPrivateAccessSettingsId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPublicAccessEnabled">ResetPublicAccessEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetAllowedVpcEndpointIds` <a name="ResetAllowedVpcEndpointIds" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetAllowedVpcEndpointIds"></a>

```go
func ResetAllowedVpcEndpointIds()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetId"></a>

```go
func ResetId()
```

##### `ResetPrivateAccessLevel` <a name="ResetPrivateAccessLevel" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPrivateAccessLevel"></a>

```go
func ResetPrivateAccessLevel()
```

##### `ResetPrivateAccessSettingsId` <a name="ResetPrivateAccessSettingsId" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPrivateAccessSettingsId"></a>

```go
func ResetPrivateAccessSettingsId()
```

##### `ResetPublicAccessEnabled` <a name="ResetPublicAccessEnabled" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPublicAccessEnabled"></a>

```go
func ResetPublicAccessEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MwsPrivateAccessSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/mwsprivateaccesssettings"

mwsprivateaccesssettings.MwsPrivateAccessSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/mwsprivateaccesssettings"

mwsprivateaccesssettings.MwsPrivateAccessSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/mwsprivateaccesssettings"

mwsprivateaccesssettings.MwsPrivateAccessSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/mwsprivateaccesssettings"

mwsprivateaccesssettings.MwsPrivateAccessSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MwsPrivateAccessSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MwsPrivateAccessSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MwsPrivateAccessSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_private_access_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MwsPrivateAccessSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.allowedVpcEndpointIdsInput">AllowedVpcEndpointIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessLevelInput">PrivateAccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsIdInput">PrivateAccessSettingsIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsNameInput">PrivateAccessSettingsNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.publicAccessEnabledInput">PublicAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.allowedVpcEndpointIds">AllowedVpcEndpointIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessLevel">PrivateAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsId">PrivateAccessSettingsId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsName">PrivateAccessSettingsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.publicAccessEnabled">PublicAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AllowedVpcEndpointIdsInput`<sup>Optional</sup> <a name="AllowedVpcEndpointIdsInput" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.allowedVpcEndpointIdsInput"></a>

```go
func AllowedVpcEndpointIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrivateAccessLevelInput`<sup>Optional</sup> <a name="PrivateAccessLevelInput" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessLevelInput"></a>

```go
func PrivateAccessLevelInput() *string
```

- *Type:* *string

---

##### `PrivateAccessSettingsIdInput`<sup>Optional</sup> <a name="PrivateAccessSettingsIdInput" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsIdInput"></a>

```go
func PrivateAccessSettingsIdInput() *string
```

- *Type:* *string

---

##### `PrivateAccessSettingsNameInput`<sup>Optional</sup> <a name="PrivateAccessSettingsNameInput" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsNameInput"></a>

```go
func PrivateAccessSettingsNameInput() *string
```

- *Type:* *string

---

##### `PublicAccessEnabledInput`<sup>Optional</sup> <a name="PublicAccessEnabledInput" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.publicAccessEnabledInput"></a>

```go
func PublicAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AllowedVpcEndpointIds`<sup>Required</sup> <a name="AllowedVpcEndpointIds" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.allowedVpcEndpointIds"></a>

```go
func AllowedVpcEndpointIds() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrivateAccessLevel`<sup>Required</sup> <a name="PrivateAccessLevel" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessLevel"></a>

```go
func PrivateAccessLevel() *string
```

- *Type:* *string

---

##### `PrivateAccessSettingsId`<sup>Required</sup> <a name="PrivateAccessSettingsId" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsId"></a>

```go
func PrivateAccessSettingsId() *string
```

- *Type:* *string

---

##### `PrivateAccessSettingsName`<sup>Required</sup> <a name="PrivateAccessSettingsName" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsName"></a>

```go
func PrivateAccessSettingsName() *string
```

- *Type:* *string

---

##### `PublicAccessEnabled`<sup>Required</sup> <a name="PublicAccessEnabled" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.publicAccessEnabled"></a>

```go
func PublicAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MwsPrivateAccessSettingsConfig <a name="MwsPrivateAccessSettingsConfig" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/mwsprivateaccesssettings"

&mwsprivateaccesssettings.MwsPrivateAccessSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	PrivateAccessSettingsName: *string,
	Region: *string,
	AccountId: *string,
	AllowedVpcEndpointIds: *[]*string,
	Id: *string,
	PrivateAccessLevel: *string,
	PrivateAccessSettingsId: *string,
	PublicAccessEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessSettingsName">PrivateAccessSettingsName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_private_access_settings#private_access_settings_name MwsPrivateAccessSettings#private_access_settings_name}. |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_private_access_settings#region MwsPrivateAccessSettings#region}. |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_private_access_settings#account_id MwsPrivateAccessSettings#account_id}. |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.allowedVpcEndpointIds">AllowedVpcEndpointIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_private_access_settings#allowed_vpc_endpoint_ids MwsPrivateAccessSettings#allowed_vpc_endpoint_ids}. |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_private_access_settings#id MwsPrivateAccessSettings#id}. |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessLevel">PrivateAccessLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_private_access_settings#private_access_level MwsPrivateAccessSettings#private_access_level}. |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessSettingsId">PrivateAccessSettingsId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_private_access_settings#private_access_settings_id MwsPrivateAccessSettings#private_access_settings_id}. |
| <code><a href="#@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.publicAccessEnabled">PublicAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_private_access_settings#public_access_enabled MwsPrivateAccessSettings#public_access_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrivateAccessSettingsName`<sup>Required</sup> <a name="PrivateAccessSettingsName" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessSettingsName"></a>

```go
PrivateAccessSettingsName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_private_access_settings#private_access_settings_name MwsPrivateAccessSettings#private_access_settings_name}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_private_access_settings#region MwsPrivateAccessSettings#region}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_private_access_settings#account_id MwsPrivateAccessSettings#account_id}.

---

##### `AllowedVpcEndpointIds`<sup>Optional</sup> <a name="AllowedVpcEndpointIds" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.allowedVpcEndpointIds"></a>

```go
AllowedVpcEndpointIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_private_access_settings#allowed_vpc_endpoint_ids MwsPrivateAccessSettings#allowed_vpc_endpoint_ids}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_private_access_settings#id MwsPrivateAccessSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrivateAccessLevel`<sup>Optional</sup> <a name="PrivateAccessLevel" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessLevel"></a>

```go
PrivateAccessLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_private_access_settings#private_access_level MwsPrivateAccessSettings#private_access_level}.

---

##### `PrivateAccessSettingsId`<sup>Optional</sup> <a name="PrivateAccessSettingsId" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessSettingsId"></a>

```go
PrivateAccessSettingsId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_private_access_settings#private_access_settings_id MwsPrivateAccessSettings#private_access_settings_id}.

---

##### `PublicAccessEnabled`<sup>Optional</sup> <a name="PublicAccessEnabled" id="@cdktn/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.publicAccessEnabled"></a>

```go
PublicAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_private_access_settings#public_access_enabled MwsPrivateAccessSettings#public_access_enabled}.

---



