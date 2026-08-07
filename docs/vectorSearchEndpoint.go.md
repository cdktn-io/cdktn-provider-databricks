# `vectorSearchEndpoint` Submodule <a name="`vectorSearchEndpoint` Submodule" id="@cdktn/provider-databricks.vectorSearchEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VectorSearchEndpoint <a name="VectorSearchEndpoint" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/vector_search_endpoint databricks_vector_search_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/vectorsearchendpoint"

vectorsearchendpoint.NewVectorSearchEndpoint(scope Construct, id *string, config VectorSearchEndpointConfig) VectorSearchEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig">VectorSearchEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig">VectorSearchEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putScalingInfo">PutScalingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetBudgetPolicyId">ResetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetScalingInfo">ResetScalingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putProviderConfig"></a>

```go
func PutProviderConfig(value VectorSearchEndpointProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig">VectorSearchEndpointProviderConfig</a>

---

##### `PutScalingInfo` <a name="PutScalingInfo" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putScalingInfo"></a>

```go
func PutScalingInfo(value VectorSearchEndpointScalingInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putScalingInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo">VectorSearchEndpointScalingInfo</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value VectorSearchEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a>

---

##### `ResetBudgetPolicyId` <a name="ResetBudgetPolicyId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetBudgetPolicyId"></a>

```go
func ResetBudgetPolicyId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetScalingInfo` <a name="ResetScalingInfo" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetScalingInfo"></a>

```go
func ResetScalingInfo()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VectorSearchEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/vectorsearchendpoint"

vectorsearchendpoint.VectorSearchEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/vectorsearchendpoint"

vectorsearchendpoint.VectorSearchEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/vectorsearchendpoint"

vectorsearchendpoint.VectorSearchEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/vectorsearchendpoint"

vectorsearchendpoint.VectorSearchEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a VectorSearchEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VectorSearchEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VectorSearchEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/vector_search_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the VectorSearchEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.creationTimestamp">CreationTimestamp</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.creator">Creator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.effectiveBudgetPolicyId">EffectiveBudgetPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointId">EndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointStatus">EndpointStatus</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList">VectorSearchEndpointEndpointStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.lastUpdatedTimestamp">LastUpdatedTimestamp</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.lastUpdatedUser">LastUpdatedUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.numIndexes">NumIndexes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference">VectorSearchEndpointProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.scalingInfo">ScalingInfo</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference">VectorSearchEndpointScalingInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference">VectorSearchEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.budgetPolicyIdInput">BudgetPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig">VectorSearchEndpointProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.scalingInfoInput">ScalingInfoInput</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo">VectorSearchEndpointScalingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.creationTimestamp"></a>

```go
func CreationTimestamp() *f64
```

- *Type:* *f64

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.creator"></a>

```go
func Creator() *string
```

- *Type:* *string

---

##### `EffectiveBudgetPolicyId`<sup>Required</sup> <a name="EffectiveBudgetPolicyId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.effectiveBudgetPolicyId"></a>

```go
func EffectiveBudgetPolicyId() *string
```

- *Type:* *string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointId"></a>

```go
func EndpointId() *string
```

- *Type:* *string

---

##### `EndpointStatus`<sup>Required</sup> <a name="EndpointStatus" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointStatus"></a>

```go
func EndpointStatus() VectorSearchEndpointEndpointStatusList
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList">VectorSearchEndpointEndpointStatusList</a>

---

##### `LastUpdatedTimestamp`<sup>Required</sup> <a name="LastUpdatedTimestamp" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.lastUpdatedTimestamp"></a>

```go
func LastUpdatedTimestamp() *f64
```

- *Type:* *f64

---

##### `LastUpdatedUser`<sup>Required</sup> <a name="LastUpdatedUser" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.lastUpdatedUser"></a>

```go
func LastUpdatedUser() *string
```

- *Type:* *string

---

##### `NumIndexes`<sup>Required</sup> <a name="NumIndexes" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.numIndexes"></a>

```go
func NumIndexes() *f64
```

- *Type:* *f64

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.providerConfig"></a>

```go
func ProviderConfig() VectorSearchEndpointProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference">VectorSearchEndpointProviderConfigOutputReference</a>

---

##### `ScalingInfo`<sup>Required</sup> <a name="ScalingInfo" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.scalingInfo"></a>

```go
func ScalingInfo() VectorSearchEndpointScalingInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference">VectorSearchEndpointScalingInfoOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.timeouts"></a>

```go
func Timeouts() VectorSearchEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference">VectorSearchEndpointTimeoutsOutputReference</a>

---

##### `BudgetPolicyIdInput`<sup>Optional</sup> <a name="BudgetPolicyIdInput" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.budgetPolicyIdInput"></a>

```go
func BudgetPolicyIdInput() *string
```

- *Type:* *string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointTypeInput"></a>

```go
func EndpointTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.providerConfigInput"></a>

```go
func ProviderConfigInput() VectorSearchEndpointProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig">VectorSearchEndpointProviderConfig</a>

---

##### `ScalingInfoInput`<sup>Optional</sup> <a name="ScalingInfoInput" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.scalingInfoInput"></a>

```go
func ScalingInfoInput() VectorSearchEndpointScalingInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo">VectorSearchEndpointScalingInfo</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BudgetPolicyId`<sup>Required</sup> <a name="BudgetPolicyId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.budgetPolicyId"></a>

```go
func BudgetPolicyId() *string
```

- *Type:* *string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VectorSearchEndpointConfig <a name="VectorSearchEndpointConfig" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/vectorsearchendpoint"

&vectorsearchendpoint.VectorSearchEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EndpointType: *string,
	Name: *string,
	BudgetPolicyId: *string,
	Id: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.vectorSearchEndpoint.VectorSearchEndpointProviderConfig,
	ScalingInfo: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.vectorSearchEndpoint.VectorSearchEndpointScalingInfo,
	Timeouts: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.vectorSearchEndpoint.VectorSearchEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.endpointType">EndpointType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/vector_search_endpoint#endpoint_type VectorSearchEndpoint#endpoint_type}. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/vector_search_endpoint#name VectorSearchEndpoint#name}. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/vector_search_endpoint#budget_policy_id VectorSearchEndpoint#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/vector_search_endpoint#id VectorSearchEndpoint#id}. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig">VectorSearchEndpointProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.scalingInfo">ScalingInfo</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo">VectorSearchEndpointScalingInfo</a></code> | scaling_info block. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.endpointType"></a>

```go
EndpointType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/vector_search_endpoint#endpoint_type VectorSearchEndpoint#endpoint_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/vector_search_endpoint#name VectorSearchEndpoint#name}.

---

##### `BudgetPolicyId`<sup>Optional</sup> <a name="BudgetPolicyId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.budgetPolicyId"></a>

```go
BudgetPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/vector_search_endpoint#budget_policy_id VectorSearchEndpoint#budget_policy_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/vector_search_endpoint#id VectorSearchEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.providerConfig"></a>

```go
ProviderConfig VectorSearchEndpointProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig">VectorSearchEndpointProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/vector_search_endpoint#provider_config VectorSearchEndpoint#provider_config}

---

##### `ScalingInfo`<sup>Optional</sup> <a name="ScalingInfo" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.scalingInfo"></a>

```go
ScalingInfo VectorSearchEndpointScalingInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo">VectorSearchEndpointScalingInfo</a>

scaling_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/vector_search_endpoint#scaling_info VectorSearchEndpoint#scaling_info}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.timeouts"></a>

```go
Timeouts VectorSearchEndpointTimeouts
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/vector_search_endpoint#timeouts VectorSearchEndpoint#timeouts}

---

### VectorSearchEndpointEndpointStatus <a name="VectorSearchEndpointEndpointStatus" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/vectorsearchendpoint"

&vectorsearchendpoint.VectorSearchEndpointEndpointStatus {

}
```


### VectorSearchEndpointProviderConfig <a name="VectorSearchEndpointProviderConfig" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/vectorsearchendpoint"

&vectorsearchendpoint.VectorSearchEndpointProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/vector_search_endpoint#workspace_id VectorSearchEndpoint#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/vector_search_endpoint#workspace_id VectorSearchEndpoint#workspace_id}.

---

### VectorSearchEndpointScalingInfo <a name="VectorSearchEndpointScalingInfo" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/vectorsearchendpoint"

&vectorsearchendpoint.VectorSearchEndpointScalingInfo {
	RequestedTargetQps: *f64,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo.property.requestedTargetQps">RequestedTargetQps</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/vector_search_endpoint#requested_target_qps VectorSearchEndpoint#requested_target_qps}. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/vector_search_endpoint#state VectorSearchEndpoint#state}. |

---

##### `RequestedTargetQps`<sup>Optional</sup> <a name="RequestedTargetQps" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo.property.requestedTargetQps"></a>

```go
RequestedTargetQps *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/vector_search_endpoint#requested_target_qps VectorSearchEndpoint#requested_target_qps}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/vector_search_endpoint#state VectorSearchEndpoint#state}.

---

### VectorSearchEndpointTimeouts <a name="VectorSearchEndpointTimeouts" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/vectorsearchendpoint"

&vectorsearchendpoint.VectorSearchEndpointTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/vector_search_endpoint#create VectorSearchEndpoint#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/vector_search_endpoint#create VectorSearchEndpoint#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### VectorSearchEndpointEndpointStatusList <a name="VectorSearchEndpointEndpointStatusList" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/vectorsearchendpoint"

vectorsearchendpoint.NewVectorSearchEndpointEndpointStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VectorSearchEndpointEndpointStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.get"></a>

```go
func Get(index *f64) VectorSearchEndpointEndpointStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### VectorSearchEndpointEndpointStatusOutputReference <a name="VectorSearchEndpointEndpointStatusOutputReference" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/vectorsearchendpoint"

vectorsearchendpoint.NewVectorSearchEndpointEndpointStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VectorSearchEndpointEndpointStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatus">VectorSearchEndpointEndpointStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() VectorSearchEndpointEndpointStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatus">VectorSearchEndpointEndpointStatus</a>

---


### VectorSearchEndpointProviderConfigOutputReference <a name="VectorSearchEndpointProviderConfigOutputReference" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/vectorsearchendpoint"

vectorsearchendpoint.NewVectorSearchEndpointProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VectorSearchEndpointProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig">VectorSearchEndpointProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() VectorSearchEndpointProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig">VectorSearchEndpointProviderConfig</a>

---


### VectorSearchEndpointScalingInfoOutputReference <a name="VectorSearchEndpointScalingInfoOutputReference" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/vectorsearchendpoint"

vectorsearchendpoint.NewVectorSearchEndpointScalingInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VectorSearchEndpointScalingInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.resetRequestedTargetQps">ResetRequestedTargetQps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRequestedTargetQps` <a name="ResetRequestedTargetQps" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.resetRequestedTargetQps"></a>

```go
func ResetRequestedTargetQps()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.resetState"></a>

```go
func ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.requestedTargetQpsInput">RequestedTargetQpsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.requestedTargetQps">RequestedTargetQps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo">VectorSearchEndpointScalingInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RequestedTargetQpsInput`<sup>Optional</sup> <a name="RequestedTargetQpsInput" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.requestedTargetQpsInput"></a>

```go
func RequestedTargetQpsInput() *f64
```

- *Type:* *f64

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `RequestedTargetQps`<sup>Required</sup> <a name="RequestedTargetQps" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.requestedTargetQps"></a>

```go
func RequestedTargetQps() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() VectorSearchEndpointScalingInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo">VectorSearchEndpointScalingInfo</a>

---


### VectorSearchEndpointTimeoutsOutputReference <a name="VectorSearchEndpointTimeoutsOutputReference" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/vectorsearchendpoint"

vectorsearchendpoint.NewVectorSearchEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VectorSearchEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



