# `mwsVpcEndpoint` Submodule <a name="`mwsVpcEndpoint` Submodule" id="@cdktn/provider-databricks.mwsVpcEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsVpcEndpoint <a name="MwsVpcEndpoint" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint databricks_mws_vpc_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/mwsvpcendpoint"

mwsvpcendpoint.NewMwsVpcEndpoint(scope Construct, id *string, config MwsVpcEndpointConfig) MwsVpcEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig">MwsVpcEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig">MwsVpcEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.putGcpVpcEndpointInfo">PutGcpVpcEndpointInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAwsEndpointServiceId">ResetAwsEndpointServiceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAwsVpcEndpointId">ResetAwsVpcEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetGcpVpcEndpointInfo">ResetGcpVpcEndpointInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetUseCase">ResetUseCase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetVpcEndpointId">ResetVpcEndpointId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGcpVpcEndpointInfo` <a name="PutGcpVpcEndpointInfo" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.putGcpVpcEndpointInfo"></a>

```go
func PutGcpVpcEndpointInfo(value MwsVpcEndpointGcpVpcEndpointInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.putGcpVpcEndpointInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo">MwsVpcEndpointGcpVpcEndpointInfo</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAwsAccountId"></a>

```go
func ResetAwsAccountId()
```

##### `ResetAwsEndpointServiceId` <a name="ResetAwsEndpointServiceId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAwsEndpointServiceId"></a>

```go
func ResetAwsEndpointServiceId()
```

##### `ResetAwsVpcEndpointId` <a name="ResetAwsVpcEndpointId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetAwsVpcEndpointId"></a>

```go
func ResetAwsVpcEndpointId()
```

##### `ResetGcpVpcEndpointInfo` <a name="ResetGcpVpcEndpointInfo" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetGcpVpcEndpointInfo"></a>

```go
func ResetGcpVpcEndpointInfo()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetState"></a>

```go
func ResetState()
```

##### `ResetUseCase` <a name="ResetUseCase" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetUseCase"></a>

```go
func ResetUseCase()
```

##### `ResetVpcEndpointId` <a name="ResetVpcEndpointId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.resetVpcEndpointId"></a>

```go
func ResetVpcEndpointId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MwsVpcEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/mwsvpcendpoint"

mwsvpcendpoint.MwsVpcEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/mwsvpcendpoint"

mwsvpcendpoint.MwsVpcEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/mwsvpcendpoint"

mwsvpcendpoint.MwsVpcEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/mwsvpcendpoint"

mwsvpcendpoint.MwsVpcEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MwsVpcEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MwsVpcEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MwsVpcEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MwsVpcEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.gcpVpcEndpointInfo">GcpVpcEndpointInfo</a></code> | <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference">MwsVpcEndpointGcpVpcEndpointInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsEndpointServiceIdInput">AwsEndpointServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsVpcEndpointIdInput">AwsVpcEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.gcpVpcEndpointInfoInput">GcpVpcEndpointInfoInput</a></code> | <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo">MwsVpcEndpointGcpVpcEndpointInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.useCaseInput">UseCaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointIdInput">VpcEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointNameInput">VpcEndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsEndpointServiceId">AwsEndpointServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsVpcEndpointId">AwsVpcEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.useCase">UseCase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointName">VpcEndpointName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GcpVpcEndpointInfo`<sup>Required</sup> <a name="GcpVpcEndpointInfo" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.gcpVpcEndpointInfo"></a>

```go
func GcpVpcEndpointInfo() MwsVpcEndpointGcpVpcEndpointInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference">MwsVpcEndpointGcpVpcEndpointInfoOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `AwsEndpointServiceIdInput`<sup>Optional</sup> <a name="AwsEndpointServiceIdInput" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsEndpointServiceIdInput"></a>

```go
func AwsEndpointServiceIdInput() *string
```

- *Type:* *string

---

##### `AwsVpcEndpointIdInput`<sup>Optional</sup> <a name="AwsVpcEndpointIdInput" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsVpcEndpointIdInput"></a>

```go
func AwsVpcEndpointIdInput() *string
```

- *Type:* *string

---

##### `GcpVpcEndpointInfoInput`<sup>Optional</sup> <a name="GcpVpcEndpointInfoInput" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.gcpVpcEndpointInfoInput"></a>

```go
func GcpVpcEndpointInfoInput() MwsVpcEndpointGcpVpcEndpointInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo">MwsVpcEndpointGcpVpcEndpointInfo</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `UseCaseInput`<sup>Optional</sup> <a name="UseCaseInput" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.useCaseInput"></a>

```go
func UseCaseInput() *string
```

- *Type:* *string

---

##### `VpcEndpointIdInput`<sup>Optional</sup> <a name="VpcEndpointIdInput" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointIdInput"></a>

```go
func VpcEndpointIdInput() *string
```

- *Type:* *string

---

##### `VpcEndpointNameInput`<sup>Optional</sup> <a name="VpcEndpointNameInput" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointNameInput"></a>

```go
func VpcEndpointNameInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `AwsEndpointServiceId`<sup>Required</sup> <a name="AwsEndpointServiceId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsEndpointServiceId"></a>

```go
func AwsEndpointServiceId() *string
```

- *Type:* *string

---

##### `AwsVpcEndpointId`<sup>Required</sup> <a name="AwsVpcEndpointId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.awsVpcEndpointId"></a>

```go
func AwsVpcEndpointId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `UseCase`<sup>Required</sup> <a name="UseCase" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.useCase"></a>

```go
func UseCase() *string
```

- *Type:* *string

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointId"></a>

```go
func VpcEndpointId() *string
```

- *Type:* *string

---

##### `VpcEndpointName`<sup>Required</sup> <a name="VpcEndpointName" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.vpcEndpointName"></a>

```go
func VpcEndpointName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MwsVpcEndpointConfig <a name="MwsVpcEndpointConfig" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/mwsvpcendpoint"

&mwsvpcendpoint.MwsVpcEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	VpcEndpointName: *string,
	AccountId: *string,
	AwsAccountId: *string,
	AwsEndpointServiceId: *string,
	AwsVpcEndpointId: *string,
	GcpVpcEndpointInfo: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo,
	Id: *string,
	Region: *string,
	State: *string,
	UseCase: *string,
	VpcEndpointId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.vpcEndpointName">VpcEndpointName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#vpc_endpoint_name MwsVpcEndpoint#vpc_endpoint_name}. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#account_id MwsVpcEndpoint#account_id}. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#aws_account_id MwsVpcEndpoint#aws_account_id}. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.awsEndpointServiceId">AwsEndpointServiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#aws_endpoint_service_id MwsVpcEndpoint#aws_endpoint_service_id}. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.awsVpcEndpointId">AwsVpcEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#aws_vpc_endpoint_id MwsVpcEndpoint#aws_vpc_endpoint_id}. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.gcpVpcEndpointInfo">GcpVpcEndpointInfo</a></code> | <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo">MwsVpcEndpointGcpVpcEndpointInfo</a></code> | gcp_vpc_endpoint_info block. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#id MwsVpcEndpoint#id}. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#region MwsVpcEndpoint#region}. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#state MwsVpcEndpoint#state}. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.useCase">UseCase</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#use_case MwsVpcEndpoint#use_case}. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#vpc_endpoint_id MwsVpcEndpoint#vpc_endpoint_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `VpcEndpointName`<sup>Required</sup> <a name="VpcEndpointName" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.vpcEndpointName"></a>

```go
VpcEndpointName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#vpc_endpoint_name MwsVpcEndpoint#vpc_endpoint_name}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#account_id MwsVpcEndpoint#account_id}.

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#aws_account_id MwsVpcEndpoint#aws_account_id}.

---

##### `AwsEndpointServiceId`<sup>Optional</sup> <a name="AwsEndpointServiceId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.awsEndpointServiceId"></a>

```go
AwsEndpointServiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#aws_endpoint_service_id MwsVpcEndpoint#aws_endpoint_service_id}.

---

##### `AwsVpcEndpointId`<sup>Optional</sup> <a name="AwsVpcEndpointId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.awsVpcEndpointId"></a>

```go
AwsVpcEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#aws_vpc_endpoint_id MwsVpcEndpoint#aws_vpc_endpoint_id}.

---

##### `GcpVpcEndpointInfo`<sup>Optional</sup> <a name="GcpVpcEndpointInfo" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.gcpVpcEndpointInfo"></a>

```go
GcpVpcEndpointInfo MwsVpcEndpointGcpVpcEndpointInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo">MwsVpcEndpointGcpVpcEndpointInfo</a>

gcp_vpc_endpoint_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#gcp_vpc_endpoint_info MwsVpcEndpoint#gcp_vpc_endpoint_info}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#id MwsVpcEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#region MwsVpcEndpoint#region}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#state MwsVpcEndpoint#state}.

---

##### `UseCase`<sup>Optional</sup> <a name="UseCase" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.useCase"></a>

```go
UseCase *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#use_case MwsVpcEndpoint#use_case}.

---

##### `VpcEndpointId`<sup>Optional</sup> <a name="VpcEndpointId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointConfig.property.vpcEndpointId"></a>

```go
VpcEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#vpc_endpoint_id MwsVpcEndpoint#vpc_endpoint_id}.

---

### MwsVpcEndpointGcpVpcEndpointInfo <a name="MwsVpcEndpointGcpVpcEndpointInfo" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/mwsvpcendpoint"

&mwsvpcendpoint.MwsVpcEndpointGcpVpcEndpointInfo {
	EndpointRegion: *string,
	ProjectId: *string,
	PscEndpointName: *string,
	PscConnectionId: *string,
	ServiceAttachmentId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.endpointRegion">EndpointRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#endpoint_region MwsVpcEndpoint#endpoint_region}. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#project_id MwsVpcEndpoint#project_id}. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.pscEndpointName">PscEndpointName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#psc_endpoint_name MwsVpcEndpoint#psc_endpoint_name}. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.pscConnectionId">PscConnectionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#psc_connection_id MwsVpcEndpoint#psc_connection_id}. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.serviceAttachmentId">ServiceAttachmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#service_attachment_id MwsVpcEndpoint#service_attachment_id}. |

---

##### `EndpointRegion`<sup>Required</sup> <a name="EndpointRegion" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.endpointRegion"></a>

```go
EndpointRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#endpoint_region MwsVpcEndpoint#endpoint_region}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#project_id MwsVpcEndpoint#project_id}.

---

##### `PscEndpointName`<sup>Required</sup> <a name="PscEndpointName" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.pscEndpointName"></a>

```go
PscEndpointName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#psc_endpoint_name MwsVpcEndpoint#psc_endpoint_name}.

---

##### `PscConnectionId`<sup>Optional</sup> <a name="PscConnectionId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.pscConnectionId"></a>

```go
PscConnectionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#psc_connection_id MwsVpcEndpoint#psc_connection_id}.

---

##### `ServiceAttachmentId`<sup>Optional</sup> <a name="ServiceAttachmentId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo.property.serviceAttachmentId"></a>

```go
ServiceAttachmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/mws_vpc_endpoint#service_attachment_id MwsVpcEndpoint#service_attachment_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### MwsVpcEndpointGcpVpcEndpointInfoOutputReference <a name="MwsVpcEndpointGcpVpcEndpointInfoOutputReference" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/mwsvpcendpoint"

mwsvpcendpoint.NewMwsVpcEndpointGcpVpcEndpointInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwsVpcEndpointGcpVpcEndpointInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.resetPscConnectionId">ResetPscConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.resetServiceAttachmentId">ResetServiceAttachmentId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPscConnectionId` <a name="ResetPscConnectionId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.resetPscConnectionId"></a>

```go
func ResetPscConnectionId()
```

##### `ResetServiceAttachmentId` <a name="ResetServiceAttachmentId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.resetServiceAttachmentId"></a>

```go
func ResetServiceAttachmentId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.endpointRegionInput">EndpointRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.pscConnectionIdInput">PscConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.pscEndpointNameInput">PscEndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.serviceAttachmentIdInput">ServiceAttachmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.endpointRegion">EndpointRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.pscConnectionId">PscConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.pscEndpointName">PscEndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.serviceAttachmentId">ServiceAttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo">MwsVpcEndpointGcpVpcEndpointInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointRegionInput`<sup>Optional</sup> <a name="EndpointRegionInput" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.endpointRegionInput"></a>

```go
func EndpointRegionInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `PscConnectionIdInput`<sup>Optional</sup> <a name="PscConnectionIdInput" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.pscConnectionIdInput"></a>

```go
func PscConnectionIdInput() *string
```

- *Type:* *string

---

##### `PscEndpointNameInput`<sup>Optional</sup> <a name="PscEndpointNameInput" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.pscEndpointNameInput"></a>

```go
func PscEndpointNameInput() *string
```

- *Type:* *string

---

##### `ServiceAttachmentIdInput`<sup>Optional</sup> <a name="ServiceAttachmentIdInput" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.serviceAttachmentIdInput"></a>

```go
func ServiceAttachmentIdInput() *string
```

- *Type:* *string

---

##### `EndpointRegion`<sup>Required</sup> <a name="EndpointRegion" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.endpointRegion"></a>

```go
func EndpointRegion() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.pscConnectionId"></a>

```go
func PscConnectionId() *string
```

- *Type:* *string

---

##### `PscEndpointName`<sup>Required</sup> <a name="PscEndpointName" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.pscEndpointName"></a>

```go
func PscEndpointName() *string
```

- *Type:* *string

---

##### `ServiceAttachmentId`<sup>Required</sup> <a name="ServiceAttachmentId" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.serviceAttachmentId"></a>

```go
func ServiceAttachmentId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() MwsVpcEndpointGcpVpcEndpointInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.mwsVpcEndpoint.MwsVpcEndpointGcpVpcEndpointInfo">MwsVpcEndpointGcpVpcEndpointInfo</a>

---



