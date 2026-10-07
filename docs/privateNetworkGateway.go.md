# `privateNetworkGateway` Submodule <a name="`privateNetworkGateway` Submodule" id="@cdktn/provider-databricks.privateNetworkGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateNetworkGateway <a name="PrivateNetworkGateway" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway databricks_private_network_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/privatenetworkgateway"

privatenetworkgateway.NewPrivateNetworkGateway(scope Construct, id *string, config PrivateNetworkGatewayConfig) PrivateNetworkGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig">PrivateNetworkGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig">PrivateNetworkGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAwsCloudConnection">PutAwsCloudConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAzureCloudConnection">PutAzureCloudConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putPrivateDnsResolvers">PutPrivateDnsResolvers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetAwsCloudConnection">ResetAwsCloudConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetAzureCloudConnection">ResetAzureCloudConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetBandwidthTierGigabitsPerSecond">ResetBandwidthTierGigabitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetPrivateDnsResolvers">ResetPrivateDnsResolvers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAwsCloudConnection` <a name="PutAwsCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAwsCloudConnection"></a>

```go
func PutAwsCloudConnection(value PrivateNetworkGatewayAwsCloudConnection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAwsCloudConnection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a>

---

##### `PutAzureCloudConnection` <a name="PutAzureCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAzureCloudConnection"></a>

```go
func PutAzureCloudConnection(value PrivateNetworkGatewayAzureCloudConnection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putAzureCloudConnection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a>

---

##### `PutDestinations` <a name="PutDestinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putDestinations"></a>

```go
func PutDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPrivateDnsResolvers` <a name="PutPrivateDnsResolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putPrivateDnsResolvers"></a>

```go
func PutPrivateDnsResolvers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.putPrivateDnsResolvers.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAwsCloudConnection` <a name="ResetAwsCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetAwsCloudConnection"></a>

```go
func ResetAwsCloudConnection()
```

##### `ResetAzureCloudConnection` <a name="ResetAzureCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetAzureCloudConnection"></a>

```go
func ResetAzureCloudConnection()
```

##### `ResetBandwidthTierGigabitsPerSecond` <a name="ResetBandwidthTierGigabitsPerSecond" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetBandwidthTierGigabitsPerSecond"></a>

```go
func ResetBandwidthTierGigabitsPerSecond()
```

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetDestinations"></a>

```go
func ResetDestinations()
```

##### `ResetPrivateDnsResolvers` <a name="ResetPrivateDnsResolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.resetPrivateDnsResolvers"></a>

```go
func ResetPrivateDnsResolvers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PrivateNetworkGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/privatenetworkgateway"

privatenetworkgateway.PrivateNetworkGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/privatenetworkgateway"

privatenetworkgateway.PrivateNetworkGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/privatenetworkgateway"

privatenetworkgateway.PrivateNetworkGateway_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/privatenetworkgateway"

privatenetworkgateway.PrivateNetworkGateway_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PrivateNetworkGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PrivateNetworkGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PrivateNetworkGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PrivateNetworkGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.awsCloudConnection">AwsCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference">PrivateNetworkGatewayAwsCloudConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.azureCloudConnection">AzureCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference">PrivateNetworkGatewayAzureCloudConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList">PrivateNetworkGatewayDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.privateDnsResolvers">PrivateDnsResolvers</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList">PrivateNetworkGatewayPrivateDnsResolversList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.awsCloudConnectionInput">AwsCloudConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.azureCloudConnectionInput">AzureCloudConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.bandwidthTierGigabitsPerSecondInput">BandwidthTierGigabitsPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.destinationsInput">DestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.privateDnsResolversInput">PrivateDnsResolversInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.trafficModeInput">TrafficModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.bandwidthTierGigabitsPerSecond">BandwidthTierGigabitsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.trafficMode">TrafficMode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwsCloudConnection`<sup>Required</sup> <a name="AwsCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.awsCloudConnection"></a>

```go
func AwsCloudConnection() PrivateNetworkGatewayAwsCloudConnectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference">PrivateNetworkGatewayAwsCloudConnectionOutputReference</a>

---

##### `AzureCloudConnection`<sup>Required</sup> <a name="AzureCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.azureCloudConnection"></a>

```go
func AzureCloudConnection() PrivateNetworkGatewayAzureCloudConnectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference">PrivateNetworkGatewayAzureCloudConnectionOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.destinations"></a>

```go
func Destinations() PrivateNetworkGatewayDestinationsList
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList">PrivateNetworkGatewayDestinationsList</a>

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateDnsResolvers`<sup>Required</sup> <a name="PrivateDnsResolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.privateDnsResolvers"></a>

```go
func PrivateDnsResolvers() PrivateNetworkGatewayPrivateDnsResolversList
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList">PrivateNetworkGatewayPrivateDnsResolversList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AwsCloudConnectionInput`<sup>Optional</sup> <a name="AwsCloudConnectionInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.awsCloudConnectionInput"></a>

```go
func AwsCloudConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `AzureCloudConnectionInput`<sup>Optional</sup> <a name="AzureCloudConnectionInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.azureCloudConnectionInput"></a>

```go
func AzureCloudConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `BandwidthTierGigabitsPerSecondInput`<sup>Optional</sup> <a name="BandwidthTierGigabitsPerSecondInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.bandwidthTierGigabitsPerSecondInput"></a>

```go
func BandwidthTierGigabitsPerSecondInput() *f64
```

- *Type:* *f64

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.destinationsInput"></a>

```go
func DestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `PrivateDnsResolversInput`<sup>Optional</sup> <a name="PrivateDnsResolversInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.privateDnsResolversInput"></a>

```go
func PrivateDnsResolversInput() interface{}
```

- *Type:* interface{}

---

##### `TrafficModeInput`<sup>Optional</sup> <a name="TrafficModeInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.trafficModeInput"></a>

```go
func TrafficModeInput() *string
```

- *Type:* *string

---

##### `BandwidthTierGigabitsPerSecond`<sup>Required</sup> <a name="BandwidthTierGigabitsPerSecond" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.bandwidthTierGigabitsPerSecond"></a>

```go
func BandwidthTierGigabitsPerSecond() *f64
```

- *Type:* *f64

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `TrafficMode`<sup>Required</sup> <a name="TrafficMode" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.trafficMode"></a>

```go
func TrafficMode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateNetworkGatewayAwsCloudConnection <a name="PrivateNetworkGatewayAwsCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/privatenetworkgateway"

&privatenetworkgateway.PrivateNetworkGatewayAwsCloudConnection {
	CrossAccountRole: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole,
	GatewaySubnets: interface{},
	SecurityGroupIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.crossAccountRole">CrossAccountRole</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#cross_account_role PrivateNetworkGateway#cross_account_role}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.gatewaySubnets">GatewaySubnets</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#gateway_subnets PrivateNetworkGateway#gateway_subnets}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#security_group_ids PrivateNetworkGateway#security_group_ids}. |

---

##### `CrossAccountRole`<sup>Required</sup> <a name="CrossAccountRole" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.crossAccountRole"></a>

```go
CrossAccountRole PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#cross_account_role PrivateNetworkGateway#cross_account_role}.

---

##### `GatewaySubnets`<sup>Required</sup> <a name="GatewaySubnets" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.gatewaySubnets"></a>

```go
GatewaySubnets interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#gateway_subnets PrivateNetworkGateway#gateway_subnets}.

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#security_group_ids PrivateNetworkGateway#security_group_ids}.

---

### PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole <a name="PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/privatenetworkgateway"

&privatenetworkgateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole {
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#role_arn PrivateNetworkGateway#role_arn}. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#role_arn PrivateNetworkGateway#role_arn}.

---

### PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets <a name="PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/privatenetworkgateway"

&privatenetworkgateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets {
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#subnet_id PrivateNetworkGateway#subnet_id}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnets.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#subnet_id PrivateNetworkGateway#subnet_id}.

---

### PrivateNetworkGatewayAzureCloudConnection <a name="PrivateNetworkGatewayAzureCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/privatenetworkgateway"

&privatenetworkgateway.PrivateNetworkGatewayAzureCloudConnection {
	GatewaySubnet: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection.property.gatewaySubnet">GatewaySubnet</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#gateway_subnet PrivateNetworkGateway#gateway_subnet}. |

---

##### `GatewaySubnet`<sup>Required</sup> <a name="GatewaySubnet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection.property.gatewaySubnet"></a>

```go
GatewaySubnet PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#gateway_subnet PrivateNetworkGateway#gateway_subnet}.

---

### PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet <a name="PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/privatenetworkgateway"

&privatenetworkgateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet {
	ResourceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#resource_id PrivateNetworkGateway#resource_id}. |

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#resource_id PrivateNetworkGateway#resource_id}.

---

### PrivateNetworkGatewayConfig <a name="PrivateNetworkGatewayConfig" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/privatenetworkgateway"

&privatenetworkgateway.PrivateNetworkGatewayConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Parent: *string,
	TrafficMode: *string,
	AwsCloudConnection: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection,
	AzureCloudConnection: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection,
	BandwidthTierGigabitsPerSecond: *f64,
	Destinations: interface{},
	PrivateDnsResolvers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#display_name PrivateNetworkGateway#display_name}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#parent PrivateNetworkGateway#parent}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.trafficMode">TrafficMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#traffic_mode PrivateNetworkGateway#traffic_mode}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.awsCloudConnection">AwsCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#aws_cloud_connection PrivateNetworkGateway#aws_cloud_connection}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.azureCloudConnection">AzureCloudConnection</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#azure_cloud_connection PrivateNetworkGateway#azure_cloud_connection}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.bandwidthTierGigabitsPerSecond">BandwidthTierGigabitsPerSecond</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#bandwidth_tier_gigabits_per_second PrivateNetworkGateway#bandwidth_tier_gigabits_per_second}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.destinations">Destinations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#destinations PrivateNetworkGateway#destinations}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.privateDnsResolvers">PrivateDnsResolvers</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#private_dns_resolvers PrivateNetworkGateway#private_dns_resolvers}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#display_name PrivateNetworkGateway#display_name}.

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#parent PrivateNetworkGateway#parent}.

---

##### `TrafficMode`<sup>Required</sup> <a name="TrafficMode" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.trafficMode"></a>

```go
TrafficMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#traffic_mode PrivateNetworkGateway#traffic_mode}.

---

##### `AwsCloudConnection`<sup>Optional</sup> <a name="AwsCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.awsCloudConnection"></a>

```go
AwsCloudConnection PrivateNetworkGatewayAwsCloudConnection
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnection">PrivateNetworkGatewayAwsCloudConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#aws_cloud_connection PrivateNetworkGateway#aws_cloud_connection}.

---

##### `AzureCloudConnection`<sup>Optional</sup> <a name="AzureCloudConnection" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.azureCloudConnection"></a>

```go
AzureCloudConnection PrivateNetworkGatewayAzureCloudConnection
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnection">PrivateNetworkGatewayAzureCloudConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#azure_cloud_connection PrivateNetworkGateway#azure_cloud_connection}.

---

##### `BandwidthTierGigabitsPerSecond`<sup>Optional</sup> <a name="BandwidthTierGigabitsPerSecond" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.bandwidthTierGigabitsPerSecond"></a>

```go
BandwidthTierGigabitsPerSecond *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#bandwidth_tier_gigabits_per_second PrivateNetworkGateway#bandwidth_tier_gigabits_per_second}.

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.destinations"></a>

```go
Destinations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#destinations PrivateNetworkGateway#destinations}.

---

##### `PrivateDnsResolvers`<sup>Optional</sup> <a name="PrivateDnsResolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayConfig.property.privateDnsResolvers"></a>

```go
PrivateDnsResolvers interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#private_dns_resolvers PrivateNetworkGateway#private_dns_resolvers}.

---

### PrivateNetworkGatewayDestinations <a name="PrivateNetworkGatewayDestinations" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/privatenetworkgateway"

&privatenetworkgateway.PrivateNetworkGatewayDestinations {
	DestinationType: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations.property.destinationType">DestinationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#destination_type PrivateNetworkGateway#destination_type}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#value PrivateNetworkGateway#value}. |

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations.property.destinationType"></a>

```go
DestinationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#destination_type PrivateNetworkGateway#destination_type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinations.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#value PrivateNetworkGateway#value}.

---

### PrivateNetworkGatewayPrivateDnsResolvers <a name="PrivateNetworkGatewayPrivateDnsResolvers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/privatenetworkgateway"

&privatenetworkgateway.PrivateNetworkGatewayPrivateDnsResolvers {
	ResolverType: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers.property.resolverType">ResolverType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#resolver_type PrivateNetworkGateway#resolver_type}. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#value PrivateNetworkGateway#value}. |

---

##### `ResolverType`<sup>Required</sup> <a name="ResolverType" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers.property.resolverType"></a>

```go
ResolverType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#resolver_type PrivateNetworkGateway#resolver_type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolvers.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/private_network_gateway#value PrivateNetworkGateway#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference <a name="PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/privatenetworkgateway"

privatenetworkgateway.NewPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList <a name="PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/privatenetworkgateway"

privatenetworkgateway.NewPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.get"></a>

```go
func Get(index *f64) PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference <a name="PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/privatenetworkgateway"

privatenetworkgateway.NewPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivateNetworkGatewayAwsCloudConnectionOutputReference <a name="PrivateNetworkGatewayAwsCloudConnectionOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/privatenetworkgateway"

privatenetworkgateway.NewPrivateNetworkGatewayAwsCloudConnectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivateNetworkGatewayAwsCloudConnectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putCrossAccountRole">PutCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putGatewaySubnets">PutGatewaySubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCrossAccountRole` <a name="PutCrossAccountRole" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putCrossAccountRole"></a>

```go
func PutCrossAccountRole(value PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putCrossAccountRole.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

---

##### `PutGatewaySubnets` <a name="PutGatewaySubnets" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putGatewaySubnets"></a>

```go
func PutGatewaySubnets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.putGatewaySubnets.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRole">CrossAccountRole</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnets">GatewaySubnets</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRoleInput">CrossAccountRoleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnetsInput">GatewaySubnetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CrossAccountRole`<sup>Required</sup> <a name="CrossAccountRole" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRole"></a>

```go
func CrossAccountRole() PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference">PrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference</a>

---

##### `GatewaySubnets`<sup>Required</sup> <a name="GatewaySubnets" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnets"></a>

```go
func GatewaySubnets() PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList">PrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList</a>

---

##### `CrossAccountRoleInput`<sup>Optional</sup> <a name="CrossAccountRoleInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRoleInput"></a>

```go
func CrossAccountRoleInput() interface{}
```

- *Type:* interface{}

---

##### `GatewaySubnetsInput`<sup>Optional</sup> <a name="GatewaySubnetsInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnetsInput"></a>

```go
func GatewaySubnetsInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAwsCloudConnectionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference <a name="PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/privatenetworkgateway"

privatenetworkgateway.NewPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivateNetworkGatewayAzureCloudConnectionOutputReference <a name="PrivateNetworkGatewayAzureCloudConnectionOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/privatenetworkgateway"

privatenetworkgateway.NewPrivateNetworkGatewayAzureCloudConnectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivateNetworkGatewayAzureCloudConnectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.putGatewaySubnet">PutGatewaySubnet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGatewaySubnet` <a name="PutGatewaySubnet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.putGatewaySubnet"></a>

```go
func PutGatewaySubnet(value PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.putGatewaySubnet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnet">GatewaySubnet</a></code> | <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnetInput">GatewaySubnetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GatewaySubnet`<sup>Required</sup> <a name="GatewaySubnet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnet"></a>

```go
func GatewaySubnet() PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference">PrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference</a>

---

##### `GatewaySubnetInput`<sup>Optional</sup> <a name="GatewaySubnetInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnetInput"></a>

```go
func GatewaySubnetInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayAzureCloudConnectionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivateNetworkGatewayDestinationsList <a name="PrivateNetworkGatewayDestinationsList" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/privatenetworkgateway"

privatenetworkgateway.NewPrivateNetworkGatewayDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PrivateNetworkGatewayDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.get"></a>

```go
func Get(index *f64) PrivateNetworkGatewayDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivateNetworkGatewayDestinationsOutputReference <a name="PrivateNetworkGatewayDestinationsOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/privatenetworkgateway"

privatenetworkgateway.NewPrivateNetworkGatewayDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PrivateNetworkGatewayDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.destinationTypeInput"></a>

```go
func DestinationTypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivateNetworkGatewayPrivateDnsResolversList <a name="PrivateNetworkGatewayPrivateDnsResolversList" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/privatenetworkgateway"

privatenetworkgateway.NewPrivateNetworkGatewayPrivateDnsResolversList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PrivateNetworkGatewayPrivateDnsResolversList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.get"></a>

```go
func Get(index *f64) PrivateNetworkGatewayPrivateDnsResolversOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivateNetworkGatewayPrivateDnsResolversOutputReference <a name="PrivateNetworkGatewayPrivateDnsResolversOutputReference" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/privatenetworkgateway"

privatenetworkgateway.NewPrivateNetworkGatewayPrivateDnsResolversOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PrivateNetworkGatewayPrivateDnsResolversOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverTypeInput">ResolverTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverType">ResolverType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResolverTypeInput`<sup>Optional</sup> <a name="ResolverTypeInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverTypeInput"></a>

```go
func ResolverTypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ResolverType`<sup>Required</sup> <a name="ResolverType" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverType"></a>

```go
func ResolverType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.privateNetworkGateway.PrivateNetworkGatewayPrivateDnsResolversOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



