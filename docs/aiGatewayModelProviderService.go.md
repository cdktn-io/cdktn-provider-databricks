# `aiGatewayModelProviderService` Submodule <a name="`aiGatewayModelProviderService` Submodule" id="@cdktn/provider-databricks.aiGatewayModelProviderService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiGatewayModelProviderService <a name="AiGatewayModelProviderService" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service databricks_ai_gateway_model_provider_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderService(scope Construct, id *string, config AiGatewayModelProviderServiceConfig) AiGatewayModelProviderService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig">AiGatewayModelProviderServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig">AiGatewayModelProviderServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putConfig"></a>

```go
func PutConfig(value AiGatewayModelProviderServiceConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a>

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putProviderConfig"></a>

```go
func PutProviderConfig(value AiGatewayModelProviderServiceProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetComment"></a>

```go
func ResetComment()
```

##### `ResetConfig` <a name="ResetConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AiGatewayModelProviderService resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.AiGatewayModelProviderService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.AiGatewayModelProviderService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.AiGatewayModelProviderService_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.AiGatewayModelProviderService_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AiGatewayModelProviderService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AiGatewayModelProviderService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AiGatewayModelProviderService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AiGatewayModelProviderService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.browseOnly">BrowseOnly</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference">AiGatewayModelProviderServiceConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.effectiveOwner">EffectiveOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference">AiGatewayModelProviderServiceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.configInput">ConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.modelProviderServiceIdInput">ModelProviderServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.modelProviderServiceId">ModelProviderServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BrowseOnly`<sup>Required</sup> <a name="BrowseOnly" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.browseOnly"></a>

```go
func BrowseOnly() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.config"></a>

```go
func Config() AiGatewayModelProviderServiceConfigAOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference">AiGatewayModelProviderServiceConfigAOutputReference</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveOwner`<sup>Required</sup> <a name="EffectiveOwner" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.effectiveOwner"></a>

```go
func EffectiveOwner() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.metastoreId"></a>

```go
func MetastoreId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.providerConfig"></a>

```go
func ProviderConfig() AiGatewayModelProviderServiceProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference">AiGatewayModelProviderServiceProviderConfigOutputReference</a>

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.configInput"></a>

```go
func ConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ModelProviderServiceIdInput`<sup>Optional</sup> <a name="ModelProviderServiceIdInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.modelProviderServiceIdInput"></a>

```go
func ModelProviderServiceIdInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `ModelProviderServiceId`<sup>Required</sup> <a name="ModelProviderServiceId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.modelProviderServiceId"></a>

```go
func ModelProviderServiceId() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AiGatewayModelProviderServiceConfig <a name="AiGatewayModelProviderServiceConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ModelProviderServiceId: *string,
	Parent: *string,
	Comment: *string,
	Config: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA,
	Owner: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.modelProviderServiceId">ModelProviderServiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#model_provider_service_id AiGatewayModelProviderService#model_provider_service_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#parent AiGatewayModelProviderService#parent}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#comment AiGatewayModelProviderService#comment}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#config AiGatewayModelProviderService#config}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#owner AiGatewayModelProviderService#owner}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#provider_config AiGatewayModelProviderService#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ModelProviderServiceId`<sup>Required</sup> <a name="ModelProviderServiceId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.modelProviderServiceId"></a>

```go
ModelProviderServiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#model_provider_service_id AiGatewayModelProviderService#model_provider_service_id}.

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#parent AiGatewayModelProviderService#parent}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#comment AiGatewayModelProviderService#comment}.

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.config"></a>

```go
Config AiGatewayModelProviderServiceConfigA
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#config AiGatewayModelProviderService#config}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#owner AiGatewayModelProviderService#owner}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.providerConfig"></a>

```go
ProviderConfig AiGatewayModelProviderServiceProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#provider_config AiGatewayModelProviderService#provider_config}.

---

### AiGatewayModelProviderServiceConfigA <a name="AiGatewayModelProviderServiceConfigA" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigA {
	AllowAllTargets: interface{},
	AmazonBedrock: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock,
	Anthropic: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic,
	AzureOpenai: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai,
	Custom: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom,
	ForwardHeaders: interface{},
	ForwardQueryParameters: interface{},
	ForwardUnmanagedPaths: interface{},
	GeminiEnterprise: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise,
	InferenceTable: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable,
	MicrosoftFoundry: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry,
	Openai: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai,
	ProviderType: *string,
	RateLimits: interface{},
	Targets: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.allowAllTargets">AllowAllTargets</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#allow_all_targets AiGatewayModelProviderService#allow_all_targets}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.amazonBedrock">AmazonBedrock</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock">AiGatewayModelProviderServiceConfigAmazonBedrock</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#amazon_bedrock AiGatewayModelProviderService#amazon_bedrock}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.anthropic">Anthropic</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic">AiGatewayModelProviderServiceConfigAnthropic</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#anthropic AiGatewayModelProviderService#anthropic}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.azureOpenai">AzureOpenai</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai">AiGatewayModelProviderServiceConfigAzureOpenai</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#azure_openai AiGatewayModelProviderService#azure_openai}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom">AiGatewayModelProviderServiceConfigCustom</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#custom AiGatewayModelProviderService#custom}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.forwardHeaders">ForwardHeaders</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#forward_headers AiGatewayModelProviderService#forward_headers}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.forwardQueryParameters">ForwardQueryParameters</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#forward_query_parameters AiGatewayModelProviderService#forward_query_parameters}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.forwardUnmanagedPaths">ForwardUnmanagedPaths</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#forward_unmanaged_paths AiGatewayModelProviderService#forward_unmanaged_paths}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.geminiEnterprise">GeminiEnterprise</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise">AiGatewayModelProviderServiceConfigGeminiEnterprise</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#gemini_enterprise AiGatewayModelProviderService#gemini_enterprise}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.inferenceTable">InferenceTable</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable">AiGatewayModelProviderServiceConfigInferenceTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#inference_table AiGatewayModelProviderService#inference_table}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.microsoftFoundry">MicrosoftFoundry</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry">AiGatewayModelProviderServiceConfigMicrosoftFoundry</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#microsoft_foundry AiGatewayModelProviderService#microsoft_foundry}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.openai">Openai</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai">AiGatewayModelProviderServiceConfigOpenai</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#openai AiGatewayModelProviderService#openai}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.providerType">ProviderType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#provider_type AiGatewayModelProviderService#provider_type}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.rateLimits">RateLimits</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#rate_limits AiGatewayModelProviderService#rate_limits}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.targets">Targets</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#targets AiGatewayModelProviderService#targets}. |

---

##### `AllowAllTargets`<sup>Optional</sup> <a name="AllowAllTargets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.allowAllTargets"></a>

```go
AllowAllTargets interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#allow_all_targets AiGatewayModelProviderService#allow_all_targets}.

---

##### `AmazonBedrock`<sup>Optional</sup> <a name="AmazonBedrock" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.amazonBedrock"></a>

```go
AmazonBedrock AiGatewayModelProviderServiceConfigAmazonBedrock
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock">AiGatewayModelProviderServiceConfigAmazonBedrock</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#amazon_bedrock AiGatewayModelProviderService#amazon_bedrock}.

---

##### `Anthropic`<sup>Optional</sup> <a name="Anthropic" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.anthropic"></a>

```go
Anthropic AiGatewayModelProviderServiceConfigAnthropic
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic">AiGatewayModelProviderServiceConfigAnthropic</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#anthropic AiGatewayModelProviderService#anthropic}.

---

##### `AzureOpenai`<sup>Optional</sup> <a name="AzureOpenai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.azureOpenai"></a>

```go
AzureOpenai AiGatewayModelProviderServiceConfigAzureOpenai
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai">AiGatewayModelProviderServiceConfigAzureOpenai</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#azure_openai AiGatewayModelProviderService#azure_openai}.

---

##### `Custom`<sup>Optional</sup> <a name="Custom" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.custom"></a>

```go
Custom AiGatewayModelProviderServiceConfigCustom
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom">AiGatewayModelProviderServiceConfigCustom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#custom AiGatewayModelProviderService#custom}.

---

##### `ForwardHeaders`<sup>Optional</sup> <a name="ForwardHeaders" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.forwardHeaders"></a>

```go
ForwardHeaders interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#forward_headers AiGatewayModelProviderService#forward_headers}.

---

##### `ForwardQueryParameters`<sup>Optional</sup> <a name="ForwardQueryParameters" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.forwardQueryParameters"></a>

```go
ForwardQueryParameters interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#forward_query_parameters AiGatewayModelProviderService#forward_query_parameters}.

---

##### `ForwardUnmanagedPaths`<sup>Optional</sup> <a name="ForwardUnmanagedPaths" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.forwardUnmanagedPaths"></a>

```go
ForwardUnmanagedPaths interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#forward_unmanaged_paths AiGatewayModelProviderService#forward_unmanaged_paths}.

---

##### `GeminiEnterprise`<sup>Optional</sup> <a name="GeminiEnterprise" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.geminiEnterprise"></a>

```go
GeminiEnterprise AiGatewayModelProviderServiceConfigGeminiEnterprise
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise">AiGatewayModelProviderServiceConfigGeminiEnterprise</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#gemini_enterprise AiGatewayModelProviderService#gemini_enterprise}.

---

##### `InferenceTable`<sup>Optional</sup> <a name="InferenceTable" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.inferenceTable"></a>

```go
InferenceTable AiGatewayModelProviderServiceConfigInferenceTable
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable">AiGatewayModelProviderServiceConfigInferenceTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#inference_table AiGatewayModelProviderService#inference_table}.

---

##### `MicrosoftFoundry`<sup>Optional</sup> <a name="MicrosoftFoundry" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.microsoftFoundry"></a>

```go
MicrosoftFoundry AiGatewayModelProviderServiceConfigMicrosoftFoundry
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry">AiGatewayModelProviderServiceConfigMicrosoftFoundry</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#microsoft_foundry AiGatewayModelProviderService#microsoft_foundry}.

---

##### `Openai`<sup>Optional</sup> <a name="Openai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.openai"></a>

```go
Openai AiGatewayModelProviderServiceConfigOpenai
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai">AiGatewayModelProviderServiceConfigOpenai</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#openai AiGatewayModelProviderService#openai}.

---

##### `ProviderType`<sup>Optional</sup> <a name="ProviderType" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.providerType"></a>

```go
ProviderType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#provider_type AiGatewayModelProviderService#provider_type}.

---

##### `RateLimits`<sup>Optional</sup> <a name="RateLimits" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.rateLimits"></a>

```go
RateLimits interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#rate_limits AiGatewayModelProviderService#rate_limits}.

---

##### `Targets`<sup>Optional</sup> <a name="Targets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.targets"></a>

```go
Targets interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#targets AiGatewayModelProviderService#targets}.

---

### AiGatewayModelProviderServiceConfigAmazonBedrock <a name="AiGatewayModelProviderServiceConfigAmazonBedrock" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigAmazonBedrock {
	Direct: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect">AiGatewayModelProviderServiceConfigAmazonBedrockDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock.property.direct"></a>

```go
Direct AiGatewayModelProviderServiceConfigAmazonBedrockDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect">AiGatewayModelProviderServiceConfigAmazonBedrockDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

### AiGatewayModelProviderServiceConfigAmazonBedrockDirect <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigAmazonBedrockDirect {
	AwsAccessKeyId: *string,
	AwsSecretAccessKey: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKey,
	Region: *string,
	ServiceCredential: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.awsAccessKeyId">AwsAccessKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#aws_access_key_id AiGatewayModelProviderService#aws_access_key_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.awsSecretAccessKey">AwsSecretAccessKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#aws_secret_access_key AiGatewayModelProviderService#aws_secret_access_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#region AiGatewayModelProviderService#region}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.serviceCredential">ServiceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}. |

---

##### `AwsAccessKeyId`<sup>Optional</sup> <a name="AwsAccessKeyId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.awsAccessKeyId"></a>

```go
AwsAccessKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#aws_access_key_id AiGatewayModelProviderService#aws_access_key_id}.

---

##### `AwsSecretAccessKey`<sup>Optional</sup> <a name="AwsSecretAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.awsSecretAccessKey"></a>

```go
AwsSecretAccessKey AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKey
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#aws_secret_access_key AiGatewayModelProviderService#aws_secret_access_key}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#region AiGatewayModelProviderService#region}.

---

##### `ServiceCredential`<sup>Optional</sup> <a name="ServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.serviceCredential"></a>

```go
ServiceCredential AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}.

---

### AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKey <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKey {
	Plaintext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKey.property.plaintext">Plaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKey.property.plaintext"></a>

```go
Plaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}.

---

### AiGatewayModelProviderServiceConfigAnthropic <a name="AiGatewayModelProviderServiceConfigAnthropic" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigAnthropic {
	Direct: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect,
	Relayed: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect">AiGatewayModelProviderServiceConfigAnthropicDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic.property.relayed">Relayed</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed">AiGatewayModelProviderServiceConfigAnthropicRelayed</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#relayed AiGatewayModelProviderService#relayed}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic.property.direct"></a>

```go
Direct AiGatewayModelProviderServiceConfigAnthropicDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect">AiGatewayModelProviderServiceConfigAnthropicDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

##### `Relayed`<sup>Optional</sup> <a name="Relayed" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic.property.relayed"></a>

```go
Relayed AiGatewayModelProviderServiceConfigAnthropicRelayed
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed">AiGatewayModelProviderServiceConfigAnthropicRelayed</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#relayed AiGatewayModelProviderService#relayed}.

---

### AiGatewayModelProviderServiceConfigAnthropicDirect <a name="AiGatewayModelProviderServiceConfigAnthropicDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigAnthropicDirect {
	ApiKey: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey">AiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect.property.apiKey"></a>

```go
ApiKey AiGatewayModelProviderServiceConfigAnthropicDirectApiKey
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey">AiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

### AiGatewayModelProviderServiceConfigAnthropicDirectApiKey <a name="AiGatewayModelProviderServiceConfigAnthropicDirectApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey {
	Plaintext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey.property.plaintext">Plaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey.property.plaintext"></a>

```go
Plaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigAnthropicRelayed <a name="AiGatewayModelProviderServiceConfigAnthropicRelayed" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigAnthropicRelayed {
	PlanType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed.property.planType">PlanType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#plan_type AiGatewayModelProviderService#plan_type}. |

---

##### `PlanType`<sup>Optional</sup> <a name="PlanType" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed.property.planType"></a>

```go
PlanType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#plan_type AiGatewayModelProviderService#plan_type}.

---

### AiGatewayModelProviderServiceConfigAzureOpenai <a name="AiGatewayModelProviderServiceConfigAzureOpenai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigAzureOpenai {
	Direct: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect">AiGatewayModelProviderServiceConfigAzureOpenaiDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai.property.direct"></a>

```go
Direct AiGatewayModelProviderServiceConfigAzureOpenaiDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect">AiGatewayModelProviderServiceConfigAzureOpenaiDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

### AiGatewayModelProviderServiceConfigAzureOpenaiDirect <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigAzureOpenaiDirect {
	ApiKey: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey,
	BaseUrl: *string,
	ClientId: *string,
	ClientSecret: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecret,
	ServiceCredential: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential,
	TenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#client_id AiGatewayModelProviderService#client_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecret">AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#client_secret AiGatewayModelProviderService#client_secret}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.serviceCredential">ServiceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#tenant_id AiGatewayModelProviderService#tenant_id}. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.apiKey"></a>

```go
ApiKey AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.baseUrl"></a>

```go
BaseUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#client_id AiGatewayModelProviderService#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.clientSecret"></a>

```go
ClientSecret AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecret
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecret">AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#client_secret AiGatewayModelProviderService#client_secret}.

---

##### `ServiceCredential`<sup>Optional</sup> <a name="ServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.serviceCredential"></a>

```go
ServiceCredential AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#tenant_id AiGatewayModelProviderService#tenant_id}.

---

### AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey {
	Plaintext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey.property.plaintext">Plaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey.property.plaintext"></a>

```go
Plaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecret <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecret.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecret {
	Plaintext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecret.property.plaintext">Plaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecret.property.plaintext"></a>

```go
Plaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}.

---

### AiGatewayModelProviderServiceConfigCustom <a name="AiGatewayModelProviderServiceConfigCustom" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigCustom {
	Direct: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect">AiGatewayModelProviderServiceConfigCustomDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom.property.direct"></a>

```go
Direct AiGatewayModelProviderServiceConfigCustomDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect">AiGatewayModelProviderServiceConfigCustomDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

### AiGatewayModelProviderServiceConfigCustomDirect <a name="AiGatewayModelProviderServiceConfigCustomDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigCustomDirect {
	ApiKey: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey,
	BaseUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey">AiGatewayModelProviderServiceConfigCustomDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect.property.apiKey"></a>

```go
ApiKey AiGatewayModelProviderServiceConfigCustomDirectApiKey
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey">AiGatewayModelProviderServiceConfigCustomDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect.property.baseUrl"></a>

```go
BaseUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}.

---

### AiGatewayModelProviderServiceConfigCustomDirectApiKey <a name="AiGatewayModelProviderServiceConfigCustomDirectApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigCustomDirectApiKey {
	Plaintext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey.property.plaintext">Plaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey.property.plaintext"></a>

```go
Plaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigGeminiEnterprise <a name="AiGatewayModelProviderServiceConfigGeminiEnterprise" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigGeminiEnterprise {
	Direct: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise.property.direct"></a>

```go
Direct AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

### AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect <a name="AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect {
	ApiKey: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey,
	ProjectId: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#project_id AiGatewayModelProviderService#project_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#region AiGatewayModelProviderService#region}. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.apiKey"></a>

```go
ApiKey AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#project_id AiGatewayModelProviderService#project_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#region AiGatewayModelProviderService#region}.

---

### AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey <a name="AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey {
	Plaintext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey.property.plaintext">Plaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey.property.plaintext"></a>

```go
Plaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigInferenceTable <a name="AiGatewayModelProviderServiceConfigInferenceTable" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigInferenceTable {
	Parent: *string,
	Disabled: interface{},
	TableNamePrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#parent AiGatewayModelProviderService#parent}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.property.disabled">Disabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#disabled AiGatewayModelProviderService#disabled}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.property.tableNamePrefix">TableNamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#table_name_prefix AiGatewayModelProviderService#table_name_prefix}. |

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#parent AiGatewayModelProviderService#parent}.

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#disabled AiGatewayModelProviderService#disabled}.

---

##### `TableNamePrefix`<sup>Optional</sup> <a name="TableNamePrefix" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.property.tableNamePrefix"></a>

```go
TableNamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#table_name_prefix AiGatewayModelProviderService#table_name_prefix}.

---

### AiGatewayModelProviderServiceConfigMicrosoftFoundry <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundry" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigMicrosoftFoundry {
	Direct: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry.property.direct"></a>

```go
Direct AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect {
	ApiKey: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey,
	BaseUrl: *string,
	ClientId: *string,
	ClientSecret: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecret,
	ServiceCredential: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential,
	TenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#client_id AiGatewayModelProviderService#client_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecret">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#client_secret AiGatewayModelProviderService#client_secret}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.serviceCredential">ServiceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#tenant_id AiGatewayModelProviderService#tenant_id}. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.apiKey"></a>

```go
ApiKey AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.baseUrl"></a>

```go
BaseUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#client_id AiGatewayModelProviderService#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.clientSecret"></a>

```go
ClientSecret AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecret
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecret">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#client_secret AiGatewayModelProviderService#client_secret}.

---

##### `ServiceCredential`<sup>Optional</sup> <a name="ServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.serviceCredential"></a>

```go
ServiceCredential AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#tenant_id AiGatewayModelProviderService#tenant_id}.

---

### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey {
	Plaintext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey.property.plaintext">Plaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey.property.plaintext"></a>

```go
Plaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecret <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecret.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecret {
	Plaintext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecret.property.plaintext">Plaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecret.property.plaintext"></a>

```go
Plaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}.

---

### AiGatewayModelProviderServiceConfigOpenai <a name="AiGatewayModelProviderServiceConfigOpenai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigOpenai {
	Direct: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect">AiGatewayModelProviderServiceConfigOpenaiDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai.property.direct"></a>

```go
Direct AiGatewayModelProviderServiceConfigOpenaiDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect">AiGatewayModelProviderServiceConfigOpenaiDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

### AiGatewayModelProviderServiceConfigOpenaiDirect <a name="AiGatewayModelProviderServiceConfigOpenaiDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigOpenaiDirect {
	ApiKey: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey,
	BaseUrl: *string,
	Organization: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.property.organization">Organization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#organization AiGatewayModelProviderService#organization}. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.property.apiKey"></a>

```go
ApiKey AiGatewayModelProviderServiceConfigOpenaiDirectApiKey
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.property.baseUrl"></a>

```go
BaseUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}.

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#organization AiGatewayModelProviderService#organization}.

---

### AiGatewayModelProviderServiceConfigOpenaiDirectApiKey <a name="AiGatewayModelProviderServiceConfigOpenaiDirectApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey {
	Plaintext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey.property.plaintext">Plaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey.property.plaintext"></a>

```go
Plaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigRateLimits <a name="AiGatewayModelProviderServiceConfigRateLimits" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigRateLimits {
	Key: *string,
	RenewalPeriod: *string,
	Principal: *string,
	Requests: *f64,
	RequestTagKey: *string,
	RequestTagValue: *string,
	Tokens: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#key AiGatewayModelProviderService#key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.renewalPeriod">RenewalPeriod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#renewal_period AiGatewayModelProviderService#renewal_period}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.principal">Principal</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#principal AiGatewayModelProviderService#principal}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.requests">Requests</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#requests AiGatewayModelProviderService#requests}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.requestTagKey">RequestTagKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#request_tag_key AiGatewayModelProviderService#request_tag_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.requestTagValue">RequestTagValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#request_tag_value AiGatewayModelProviderService#request_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.tokens">Tokens</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#tokens AiGatewayModelProviderService#tokens}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#key AiGatewayModelProviderService#key}.

---

##### `RenewalPeriod`<sup>Required</sup> <a name="RenewalPeriod" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.renewalPeriod"></a>

```go
RenewalPeriod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#renewal_period AiGatewayModelProviderService#renewal_period}.

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#principal AiGatewayModelProviderService#principal}.

---

##### `Requests`<sup>Optional</sup> <a name="Requests" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.requests"></a>

```go
Requests *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#requests AiGatewayModelProviderService#requests}.

---

##### `RequestTagKey`<sup>Optional</sup> <a name="RequestTagKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.requestTagKey"></a>

```go
RequestTagKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#request_tag_key AiGatewayModelProviderService#request_tag_key}.

---

##### `RequestTagValue`<sup>Optional</sup> <a name="RequestTagValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.requestTagValue"></a>

```go
RequestTagValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#request_tag_value AiGatewayModelProviderService#request_tag_value}.

---

##### `Tokens`<sup>Optional</sup> <a name="Tokens" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.tokens"></a>

```go
Tokens *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#tokens AiGatewayModelProviderService#tokens}.

---

### AiGatewayModelProviderServiceConfigTargets <a name="AiGatewayModelProviderServiceConfigTargets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceConfigTargets {
	Model: *string,
	NativeApiTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets.property.model">Model</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#model AiGatewayModelProviderService#model}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets.property.nativeApiTypes">NativeApiTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#native_api_types AiGatewayModelProviderService#native_api_types}. |

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets.property.model"></a>

```go
Model *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#model AiGatewayModelProviderService#model}.

---

##### `NativeApiTypes`<sup>Optional</sup> <a name="NativeApiTypes" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets.property.nativeApiTypes"></a>

```go
NativeApiTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#native_api_types AiGatewayModelProviderService#native_api_types}.

---

### AiGatewayModelProviderServiceProviderConfig <a name="AiGatewayModelProviderServiceProviderConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

&aigatewaymodelproviderservice.AiGatewayModelProviderServiceProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#workspace_id AiGatewayModelProviderService#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_provider_service#workspace_id AiGatewayModelProviderService#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.resetPlaintext"></a>

```go
func ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.property.plaintextInput"></a>

```go
func PlaintextInput() *string
```

- *Type:* *string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.property.plaintext"></a>

```go
func Plaintext() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putAwsSecretAccessKey">PutAwsSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putServiceCredential">PutServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetAwsAccessKeyId">ResetAwsAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetAwsSecretAccessKey">ResetAwsSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetServiceCredential">ResetServiceCredential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsSecretAccessKey` <a name="PutAwsSecretAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putAwsSecretAccessKey"></a>

```go
func PutAwsSecretAccessKey(value AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putAwsSecretAccessKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKey</a>

---

##### `PutServiceCredential` <a name="PutServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putServiceCredential"></a>

```go
func PutServiceCredential(value AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putServiceCredential.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a>

---

##### `ResetAwsAccessKeyId` <a name="ResetAwsAccessKeyId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetAwsAccessKeyId"></a>

```go
func ResetAwsAccessKeyId()
```

##### `ResetAwsSecretAccessKey` <a name="ResetAwsSecretAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetAwsSecretAccessKey"></a>

```go
func ResetAwsSecretAccessKey()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetServiceCredential` <a name="ResetServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetServiceCredential"></a>

```go
func ResetServiceCredential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsSecretAccessKey">AwsSecretAccessKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredential">ServiceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKeyIdInput">AwsAccessKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsSecretAccessKeyInput">AwsSecretAccessKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredentialInput">ServiceCredentialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKeyId">AwsAccessKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsSecretAccessKey`<sup>Required</sup> <a name="AwsSecretAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsSecretAccessKey"></a>

```go
func AwsSecretAccessKey() AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsSecretAccessKeyOutputReference</a>

---

##### `ServiceCredential`<sup>Required</sup> <a name="ServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredential"></a>

```go
func ServiceCredential() AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference</a>

---

##### `AwsAccessKeyIdInput`<sup>Optional</sup> <a name="AwsAccessKeyIdInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKeyIdInput"></a>

```go
func AwsAccessKeyIdInput() *string
```

- *Type:* *string

---

##### `AwsSecretAccessKeyInput`<sup>Optional</sup> <a name="AwsSecretAccessKeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsSecretAccessKeyInput"></a>

```go
func AwsSecretAccessKeyInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServiceCredentialInput`<sup>Optional</sup> <a name="ServiceCredentialInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredentialInput"></a>

```go
func ServiceCredentialInput() interface{}
```

- *Type:* interface{}

---

##### `AwsAccessKeyId`<sup>Required</sup> <a name="AwsAccessKeyId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKeyId"></a>

```go
func AwsAccessKeyId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference <a name="AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.putDirect"></a>

```go
func PutDirect(value AiGatewayModelProviderServiceConfigAmazonBedrockDirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect">AiGatewayModelProviderServiceConfigAmazonBedrockDirect</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resetDirect"></a>

```go
func ResetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.directInput">DirectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.direct"></a>

```go
func Direct() AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.directInput"></a>

```go
func DirectInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference <a name="AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resetPlaintext"></a>

```go
func ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintextInput"></a>

```go
func PlaintextInput() *string
```

- *Type:* *string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintext"></a>

```go
func Plaintext() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference <a name="AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.putApiKey"></a>

```go
func PutApiKey(value AiGatewayModelProviderServiceConfigAnthropicDirectApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey">AiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKey"></a>

```go
func ApiKey() AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigAnthropicOutputReference <a name="AiGatewayModelProviderServiceConfigAnthropicOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigAnthropicOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigAnthropicOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.putRelayed">PutRelayed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resetRelayed">ResetRelayed</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.putDirect"></a>

```go
func PutDirect(value AiGatewayModelProviderServiceConfigAnthropicDirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect">AiGatewayModelProviderServiceConfigAnthropicDirect</a>

---

##### `PutRelayed` <a name="PutRelayed" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.putRelayed"></a>

```go
func PutRelayed(value AiGatewayModelProviderServiceConfigAnthropicRelayed)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.putRelayed.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed">AiGatewayModelProviderServiceConfigAnthropicRelayed</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resetDirect"></a>

```go
func ResetDirect()
```

##### `ResetRelayed` <a name="ResetRelayed" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resetRelayed"></a>

```go
func ResetRelayed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference">AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayed">Relayed</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference">AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.directInput">DirectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayedInput">RelayedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.direct"></a>

```go
func Direct() AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference">AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference</a>

---

##### `Relayed`<sup>Required</sup> <a name="Relayed" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayed"></a>

```go
func Relayed() AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference">AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.directInput"></a>

```go
func DirectInput() interface{}
```

- *Type:* interface{}

---

##### `RelayedInput`<sup>Optional</sup> <a name="RelayedInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayedInput"></a>

```go
func RelayedInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference <a name="AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resetPlanType">ResetPlanType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlanType` <a name="ResetPlanType" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resetPlanType"></a>

```go
func ResetPlanType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planTypeInput">PlanTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planType">PlanType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlanTypeInput`<sup>Optional</sup> <a name="PlanTypeInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planTypeInput"></a>

```go
func PlanTypeInput() *string
```

- *Type:* *string

---

##### `PlanType`<sup>Required</sup> <a name="PlanType" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planType"></a>

```go
func PlanType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigAOutputReference <a name="AiGatewayModelProviderServiceConfigAOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAmazonBedrock">PutAmazonBedrock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAnthropic">PutAnthropic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAzureOpenai">PutAzureOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putCustom">PutCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putGeminiEnterprise">PutGeminiEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putInferenceTable">PutInferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putMicrosoftFoundry">PutMicrosoftFoundry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putOpenai">PutOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putRateLimits">PutRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAllowAllTargets">ResetAllowAllTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAmazonBedrock">ResetAmazonBedrock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAnthropic">ResetAnthropic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAzureOpenai">ResetAzureOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetCustom">ResetCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetForwardHeaders">ResetForwardHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetForwardQueryParameters">ResetForwardQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetForwardUnmanagedPaths">ResetForwardUnmanagedPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetGeminiEnterprise">ResetGeminiEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetInferenceTable">ResetInferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetMicrosoftFoundry">ResetMicrosoftFoundry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetOpenai">ResetOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetProviderType">ResetProviderType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetRateLimits">ResetRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetTargets">ResetTargets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAmazonBedrock` <a name="PutAmazonBedrock" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAmazonBedrock"></a>

```go
func PutAmazonBedrock(value AiGatewayModelProviderServiceConfigAmazonBedrock)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAmazonBedrock.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock">AiGatewayModelProviderServiceConfigAmazonBedrock</a>

---

##### `PutAnthropic` <a name="PutAnthropic" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAnthropic"></a>

```go
func PutAnthropic(value AiGatewayModelProviderServiceConfigAnthropic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAnthropic.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic">AiGatewayModelProviderServiceConfigAnthropic</a>

---

##### `PutAzureOpenai` <a name="PutAzureOpenai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAzureOpenai"></a>

```go
func PutAzureOpenai(value AiGatewayModelProviderServiceConfigAzureOpenai)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAzureOpenai.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai">AiGatewayModelProviderServiceConfigAzureOpenai</a>

---

##### `PutCustom` <a name="PutCustom" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putCustom"></a>

```go
func PutCustom(value AiGatewayModelProviderServiceConfigCustom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom">AiGatewayModelProviderServiceConfigCustom</a>

---

##### `PutGeminiEnterprise` <a name="PutGeminiEnterprise" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putGeminiEnterprise"></a>

```go
func PutGeminiEnterprise(value AiGatewayModelProviderServiceConfigGeminiEnterprise)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putGeminiEnterprise.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise">AiGatewayModelProviderServiceConfigGeminiEnterprise</a>

---

##### `PutInferenceTable` <a name="PutInferenceTable" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putInferenceTable"></a>

```go
func PutInferenceTable(value AiGatewayModelProviderServiceConfigInferenceTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putInferenceTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable">AiGatewayModelProviderServiceConfigInferenceTable</a>

---

##### `PutMicrosoftFoundry` <a name="PutMicrosoftFoundry" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putMicrosoftFoundry"></a>

```go
func PutMicrosoftFoundry(value AiGatewayModelProviderServiceConfigMicrosoftFoundry)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putMicrosoftFoundry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry">AiGatewayModelProviderServiceConfigMicrosoftFoundry</a>

---

##### `PutOpenai` <a name="PutOpenai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putOpenai"></a>

```go
func PutOpenai(value AiGatewayModelProviderServiceConfigOpenai)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putOpenai.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai">AiGatewayModelProviderServiceConfigOpenai</a>

---

##### `PutRateLimits` <a name="PutRateLimits" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putRateLimits"></a>

```go
func PutRateLimits(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putRateLimits.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTargets` <a name="PutTargets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putTargets"></a>

```go
func PutTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowAllTargets` <a name="ResetAllowAllTargets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAllowAllTargets"></a>

```go
func ResetAllowAllTargets()
```

##### `ResetAmazonBedrock` <a name="ResetAmazonBedrock" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAmazonBedrock"></a>

```go
func ResetAmazonBedrock()
```

##### `ResetAnthropic` <a name="ResetAnthropic" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAnthropic"></a>

```go
func ResetAnthropic()
```

##### `ResetAzureOpenai` <a name="ResetAzureOpenai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAzureOpenai"></a>

```go
func ResetAzureOpenai()
```

##### `ResetCustom` <a name="ResetCustom" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetCustom"></a>

```go
func ResetCustom()
```

##### `ResetForwardHeaders` <a name="ResetForwardHeaders" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetForwardHeaders"></a>

```go
func ResetForwardHeaders()
```

##### `ResetForwardQueryParameters` <a name="ResetForwardQueryParameters" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetForwardQueryParameters"></a>

```go
func ResetForwardQueryParameters()
```

##### `ResetForwardUnmanagedPaths` <a name="ResetForwardUnmanagedPaths" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetForwardUnmanagedPaths"></a>

```go
func ResetForwardUnmanagedPaths()
```

##### `ResetGeminiEnterprise` <a name="ResetGeminiEnterprise" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetGeminiEnterprise"></a>

```go
func ResetGeminiEnterprise()
```

##### `ResetInferenceTable` <a name="ResetInferenceTable" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetInferenceTable"></a>

```go
func ResetInferenceTable()
```

##### `ResetMicrosoftFoundry` <a name="ResetMicrosoftFoundry" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetMicrosoftFoundry"></a>

```go
func ResetMicrosoftFoundry()
```

##### `ResetOpenai` <a name="ResetOpenai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetOpenai"></a>

```go
func ResetOpenai()
```

##### `ResetProviderType` <a name="ResetProviderType" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetProviderType"></a>

```go
func ResetProviderType()
```

##### `ResetRateLimits` <a name="ResetRateLimits" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetRateLimits"></a>

```go
func ResetRateLimits()
```

##### `ResetTargets` <a name="ResetTargets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetTargets"></a>

```go
func ResetTargets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrock">AmazonBedrock</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.anthropic">Anthropic</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference">AiGatewayModelProviderServiceConfigAnthropicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenai">AzureOpenai</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference">AiGatewayModelProviderServiceConfigCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterprise">GeminiEnterprise</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference">AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTable">InferenceTable</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference">AiGatewayModelProviderServiceConfigInferenceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundry">MicrosoftFoundry</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.openai">Openai</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference">AiGatewayModelProviderServiceConfigOpenaiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.rateLimits">RateLimits</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList">AiGatewayModelProviderServiceConfigRateLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList">AiGatewayModelProviderServiceConfigTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargetsInput">AllowAllTargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrockInput">AmazonBedrockInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.anthropicInput">AnthropicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenaiInput">AzureOpenaiInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.customInput">CustomInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeadersInput">ForwardHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParametersInput">ForwardQueryParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPathsInput">ForwardUnmanagedPathsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterpriseInput">GeminiEnterpriseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTableInput">InferenceTableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundryInput">MicrosoftFoundryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.openaiInput">OpenaiInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.providerTypeInput">ProviderTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.rateLimitsInput">RateLimitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.targetsInput">TargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargets">AllowAllTargets</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeaders">ForwardHeaders</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParameters">ForwardQueryParameters</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPaths">ForwardUnmanagedPaths</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.providerType">ProviderType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AmazonBedrock`<sup>Required</sup> <a name="AmazonBedrock" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrock"></a>

```go
func AmazonBedrock() AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference</a>

---

##### `Anthropic`<sup>Required</sup> <a name="Anthropic" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.anthropic"></a>

```go
func Anthropic() AiGatewayModelProviderServiceConfigAnthropicOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference">AiGatewayModelProviderServiceConfigAnthropicOutputReference</a>

---

##### `AzureOpenai`<sup>Required</sup> <a name="AzureOpenai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenai"></a>

```go
func AzureOpenai() AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference</a>

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.custom"></a>

```go
func Custom() AiGatewayModelProviderServiceConfigCustomOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference">AiGatewayModelProviderServiceConfigCustomOutputReference</a>

---

##### `GeminiEnterprise`<sup>Required</sup> <a name="GeminiEnterprise" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterprise"></a>

```go
func GeminiEnterprise() AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference">AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference</a>

---

##### `InferenceTable`<sup>Required</sup> <a name="InferenceTable" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTable"></a>

```go
func InferenceTable() AiGatewayModelProviderServiceConfigInferenceTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference">AiGatewayModelProviderServiceConfigInferenceTableOutputReference</a>

---

##### `MicrosoftFoundry`<sup>Required</sup> <a name="MicrosoftFoundry" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundry"></a>

```go
func MicrosoftFoundry() AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference</a>

---

##### `Openai`<sup>Required</sup> <a name="Openai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.openai"></a>

```go
func Openai() AiGatewayModelProviderServiceConfigOpenaiOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference">AiGatewayModelProviderServiceConfigOpenaiOutputReference</a>

---

##### `RateLimits`<sup>Required</sup> <a name="RateLimits" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.rateLimits"></a>

```go
func RateLimits() AiGatewayModelProviderServiceConfigRateLimitsList
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList">AiGatewayModelProviderServiceConfigRateLimitsList</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.targets"></a>

```go
func Targets() AiGatewayModelProviderServiceConfigTargetsList
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList">AiGatewayModelProviderServiceConfigTargetsList</a>

---

##### `AllowAllTargetsInput`<sup>Optional</sup> <a name="AllowAllTargetsInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargetsInput"></a>

```go
func AllowAllTargetsInput() interface{}
```

- *Type:* interface{}

---

##### `AmazonBedrockInput`<sup>Optional</sup> <a name="AmazonBedrockInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrockInput"></a>

```go
func AmazonBedrockInput() interface{}
```

- *Type:* interface{}

---

##### `AnthropicInput`<sup>Optional</sup> <a name="AnthropicInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.anthropicInput"></a>

```go
func AnthropicInput() interface{}
```

- *Type:* interface{}

---

##### `AzureOpenaiInput`<sup>Optional</sup> <a name="AzureOpenaiInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenaiInput"></a>

```go
func AzureOpenaiInput() interface{}
```

- *Type:* interface{}

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.customInput"></a>

```go
func CustomInput() interface{}
```

- *Type:* interface{}

---

##### `ForwardHeadersInput`<sup>Optional</sup> <a name="ForwardHeadersInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeadersInput"></a>

```go
func ForwardHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `ForwardQueryParametersInput`<sup>Optional</sup> <a name="ForwardQueryParametersInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParametersInput"></a>

```go
func ForwardQueryParametersInput() interface{}
```

- *Type:* interface{}

---

##### `ForwardUnmanagedPathsInput`<sup>Optional</sup> <a name="ForwardUnmanagedPathsInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPathsInput"></a>

```go
func ForwardUnmanagedPathsInput() interface{}
```

- *Type:* interface{}

---

##### `GeminiEnterpriseInput`<sup>Optional</sup> <a name="GeminiEnterpriseInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterpriseInput"></a>

```go
func GeminiEnterpriseInput() interface{}
```

- *Type:* interface{}

---

##### `InferenceTableInput`<sup>Optional</sup> <a name="InferenceTableInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTableInput"></a>

```go
func InferenceTableInput() interface{}
```

- *Type:* interface{}

---

##### `MicrosoftFoundryInput`<sup>Optional</sup> <a name="MicrosoftFoundryInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundryInput"></a>

```go
func MicrosoftFoundryInput() interface{}
```

- *Type:* interface{}

---

##### `OpenaiInput`<sup>Optional</sup> <a name="OpenaiInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.openaiInput"></a>

```go
func OpenaiInput() interface{}
```

- *Type:* interface{}

---

##### `ProviderTypeInput`<sup>Optional</sup> <a name="ProviderTypeInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.providerTypeInput"></a>

```go
func ProviderTypeInput() *string
```

- *Type:* *string

---

##### `RateLimitsInput`<sup>Optional</sup> <a name="RateLimitsInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.rateLimitsInput"></a>

```go
func RateLimitsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.targetsInput"></a>

```go
func TargetsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowAllTargets`<sup>Required</sup> <a name="AllowAllTargets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargets"></a>

```go
func AllowAllTargets() interface{}
```

- *Type:* interface{}

---

##### `ForwardHeaders`<sup>Required</sup> <a name="ForwardHeaders" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeaders"></a>

```go
func ForwardHeaders() interface{}
```

- *Type:* interface{}

---

##### `ForwardQueryParameters`<sup>Required</sup> <a name="ForwardQueryParameters" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParameters"></a>

```go
func ForwardQueryParameters() interface{}
```

- *Type:* interface{}

---

##### `ForwardUnmanagedPaths`<sup>Required</sup> <a name="ForwardUnmanagedPaths" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPaths"></a>

```go
func ForwardUnmanagedPaths() interface{}
```

- *Type:* interface{}

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.providerType"></a>

```go
func ProviderType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resetPlaintext"></a>

```go
func ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintextInput"></a>

```go
func PlaintextInput() *string
```

- *Type:* *string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintext"></a>

```go
func Plaintext() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.resetPlaintext"></a>

```go
func ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.property.plaintext">Plaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.property.plaintextInput"></a>

```go
func PlaintextInput() *string
```

- *Type:* *string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.property.plaintext"></a>

```go
func Plaintext() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putClientSecret">PutClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putServiceCredential">PutServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetServiceCredential">ResetServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putApiKey"></a>

```go
func PutApiKey(value AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a>

---

##### `PutClientSecret` <a name="PutClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putClientSecret"></a>

```go
func PutClientSecret(value AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecret)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecret">AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecret</a>

---

##### `PutServiceCredential` <a name="PutServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putServiceCredential"></a>

```go
func PutServiceCredential(value AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putServiceCredential.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetBaseUrl"></a>

```go
func ResetBaseUrl()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetServiceCredential` <a name="ResetServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetServiceCredential"></a>

```go
func ResetServiceCredential()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetTenantId"></a>

```go
func ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredential">ServiceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredentialInput">ServiceCredentialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKey"></a>

```go
func ApiKey() AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference</a>

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.clientSecret"></a>

```go
func ClientSecret() AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectClientSecretOutputReference</a>

---

##### `ServiceCredential`<sup>Required</sup> <a name="ServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredential"></a>

```go
func ServiceCredential() AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrlInput"></a>

```go
func BaseUrlInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceCredentialInput`<sup>Optional</sup> <a name="ServiceCredentialInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredentialInput"></a>

```go
func ServiceCredentialInput() interface{}
```

- *Type:* interface{}

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrl"></a>

```go
func BaseUrl() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference <a name="AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect"></a>

```go
func PutDirect(value AiGatewayModelProviderServiceConfigAzureOpenaiDirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect">AiGatewayModelProviderServiceConfigAzureOpenaiDirect</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resetDirect"></a>

```go
func ResetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.directInput">DirectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.direct"></a>

```go
func Direct() AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.directInput"></a>

```go
func DirectInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference <a name="AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resetPlaintext"></a>

```go
func ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintextInput"></a>

```go
func PlaintextInput() *string
```

- *Type:* *string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintext"></a>

```go
func Plaintext() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigCustomDirectOutputReference <a name="AiGatewayModelProviderServiceConfigCustomDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigCustomDirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigCustomDirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.putApiKey"></a>

```go
func PutApiKey(value AiGatewayModelProviderServiceConfigCustomDirectApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey">AiGatewayModelProviderServiceConfigCustomDirectApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetBaseUrl"></a>

```go
func ResetBaseUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKey"></a>

```go
func ApiKey() AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrlInput"></a>

```go
func BaseUrlInput() *string
```

- *Type:* *string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrl"></a>

```go
func BaseUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigCustomOutputReference <a name="AiGatewayModelProviderServiceConfigCustomOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigCustomOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigCustomOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.putDirect"></a>

```go
func PutDirect(value AiGatewayModelProviderServiceConfigCustomDirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect">AiGatewayModelProviderServiceConfigCustomDirect</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.resetDirect"></a>

```go
func ResetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference">AiGatewayModelProviderServiceConfigCustomDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.directInput">DirectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.direct"></a>

```go
func Direct() AiGatewayModelProviderServiceConfigCustomDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference">AiGatewayModelProviderServiceConfigCustomDirectOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.directInput"></a>

```go
func DirectInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference <a name="AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resetPlaintext"></a>

```go
func ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintextInput"></a>

```go
func PlaintextInput() *string
```

- *Type:* *string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintext"></a>

```go
func Plaintext() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference <a name="AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.putApiKey"></a>

```go
func PutApiKey(value AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKey"></a>

```go
func ApiKey() AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference <a name="AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.putDirect"></a>

```go
func PutDirect(value AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resetDirect"></a>

```go
func ResetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.directInput">DirectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.direct"></a>

```go
func Direct() AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.directInput"></a>

```go
func DirectInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigInferenceTableOutputReference <a name="AiGatewayModelProviderServiceConfigInferenceTableOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigInferenceTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigInferenceTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetTableNamePrefix">ResetTableNamePrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetTableNamePrefix` <a name="ResetTableNamePrefix" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetTableNamePrefix"></a>

```go
func ResetTableNamePrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.isDeleted">IsDeleted</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.table">Table</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefixInput">TableNamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefix">TableNamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsDeleted`<sup>Required</sup> <a name="IsDeleted" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.isDeleted"></a>

```go
func IsDeleted() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.table"></a>

```go
func Table() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `TableNamePrefixInput`<sup>Optional</sup> <a name="TableNamePrefixInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefixInput"></a>

```go
func TableNamePrefixInput() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `TableNamePrefix`<sup>Required</sup> <a name="TableNamePrefix" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefix"></a>

```go
func TableNamePrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resetPlaintext"></a>

```go
func ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintextInput"></a>

```go
func PlaintextInput() *string
```

- *Type:* *string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintext"></a>

```go
func Plaintext() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.resetPlaintext"></a>

```go
func ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.property.plaintext">Plaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.property.plaintextInput"></a>

```go
func PlaintextInput() *string
```

- *Type:* *string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.property.plaintext"></a>

```go
func Plaintext() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putClientSecret">PutClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putServiceCredential">PutServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetServiceCredential">ResetServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putApiKey"></a>

```go
func PutApiKey(value AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a>

---

##### `PutClientSecret` <a name="PutClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putClientSecret"></a>

```go
func PutClientSecret(value AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecret)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecret">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecret</a>

---

##### `PutServiceCredential` <a name="PutServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putServiceCredential"></a>

```go
func PutServiceCredential(value AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putServiceCredential.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetBaseUrl"></a>

```go
func ResetBaseUrl()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetServiceCredential` <a name="ResetServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetServiceCredential"></a>

```go
func ResetServiceCredential()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetTenantId"></a>

```go
func ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredential">ServiceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredentialInput">ServiceCredentialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKey"></a>

```go
func ApiKey() AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference</a>

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.clientSecret"></a>

```go
func ClientSecret() AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectClientSecretOutputReference</a>

---

##### `ServiceCredential`<sup>Required</sup> <a name="ServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredential"></a>

```go
func ServiceCredential() AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrlInput"></a>

```go
func BaseUrlInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceCredentialInput`<sup>Optional</sup> <a name="ServiceCredentialInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredentialInput"></a>

```go
func ServiceCredentialInput() interface{}
```

- *Type:* interface{}

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrl"></a>

```go
func BaseUrl() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect"></a>

```go
func PutDirect(value AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resetDirect"></a>

```go
func ResetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.directInput">DirectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.direct"></a>

```go
func Direct() AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.directInput"></a>

```go
func DirectInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference <a name="AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resetPlaintext"></a>

```go
func ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintextInput"></a>

```go
func PlaintextInput() *string
```

- *Type:* *string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintext"></a>

```go
func Plaintext() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference <a name="AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetOrganization">ResetOrganization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.putApiKey"></a>

```go
func PutApiKey(value AiGatewayModelProviderServiceConfigOpenaiDirectApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetBaseUrl"></a>

```go
func ResetBaseUrl()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetOrganization"></a>

```go
func ResetOrganization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKey"></a>

```go
func ApiKey() AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() interface{}
```

- *Type:* interface{}

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrlInput"></a>

```go
func BaseUrlInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrl"></a>

```go
func BaseUrl() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigOpenaiOutputReference <a name="AiGatewayModelProviderServiceConfigOpenaiOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigOpenaiOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceConfigOpenaiOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.putDirect"></a>

```go
func PutDirect(value AiGatewayModelProviderServiceConfigOpenaiDirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect">AiGatewayModelProviderServiceConfigOpenaiDirect</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.resetDirect"></a>

```go
func ResetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference">AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.directInput">DirectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.direct"></a>

```go
func Direct() AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference">AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.directInput"></a>

```go
func DirectInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigRateLimitsList <a name="AiGatewayModelProviderServiceConfigRateLimitsList" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigRateLimitsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AiGatewayModelProviderServiceConfigRateLimitsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.get"></a>

```go
func Get(index *f64) AiGatewayModelProviderServiceConfigRateLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigRateLimitsOutputReference <a name="AiGatewayModelProviderServiceConfigRateLimitsOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigRateLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AiGatewayModelProviderServiceConfigRateLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetPrincipal">ResetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequests">ResetRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagKey">ResetRequestTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagValue">ResetRequestTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetTokens">ResetTokens</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetPrincipal"></a>

```go
func ResetPrincipal()
```

##### `ResetRequests` <a name="ResetRequests" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequests"></a>

```go
func ResetRequests()
```

##### `ResetRequestTagKey` <a name="ResetRequestTagKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagKey"></a>

```go
func ResetRequestTagKey()
```

##### `ResetRequestTagValue` <a name="ResetRequestTagValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagValue"></a>

```go
func ResetRequestTagValue()
```

##### `ResetTokens` <a name="ResetTokens" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetTokens"></a>

```go
func ResetTokens()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriodInput">RenewalPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestsInput">RequestsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKeyInput">RequestTagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValueInput">RequestTagValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokensInput">TokensInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriod">RenewalPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requests">Requests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKey">RequestTagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValue">RequestTagValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokens">Tokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `RenewalPeriodInput`<sup>Optional</sup> <a name="RenewalPeriodInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriodInput"></a>

```go
func RenewalPeriodInput() *string
```

- *Type:* *string

---

##### `RequestsInput`<sup>Optional</sup> <a name="RequestsInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestsInput"></a>

```go
func RequestsInput() *f64
```

- *Type:* *f64

---

##### `RequestTagKeyInput`<sup>Optional</sup> <a name="RequestTagKeyInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKeyInput"></a>

```go
func RequestTagKeyInput() *string
```

- *Type:* *string

---

##### `RequestTagValueInput`<sup>Optional</sup> <a name="RequestTagValueInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValueInput"></a>

```go
func RequestTagValueInput() *string
```

- *Type:* *string

---

##### `TokensInput`<sup>Optional</sup> <a name="TokensInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokensInput"></a>

```go
func TokensInput() *f64
```

- *Type:* *f64

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `RenewalPeriod`<sup>Required</sup> <a name="RenewalPeriod" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriod"></a>

```go
func RenewalPeriod() *string
```

- *Type:* *string

---

##### `Requests`<sup>Required</sup> <a name="Requests" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requests"></a>

```go
func Requests() *f64
```

- *Type:* *f64

---

##### `RequestTagKey`<sup>Required</sup> <a name="RequestTagKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKey"></a>

```go
func RequestTagKey() *string
```

- *Type:* *string

---

##### `RequestTagValue`<sup>Required</sup> <a name="RequestTagValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValue"></a>

```go
func RequestTagValue() *string
```

- *Type:* *string

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokens"></a>

```go
func Tokens() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigTargetsList <a name="AiGatewayModelProviderServiceConfigTargetsList" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AiGatewayModelProviderServiceConfigTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.get"></a>

```go
func Get(index *f64) AiGatewayModelProviderServiceConfigTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceConfigTargetsOutputReference <a name="AiGatewayModelProviderServiceConfigTargetsOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceConfigTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AiGatewayModelProviderServiceConfigTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.resetNativeApiTypes">ResetNativeApiTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNativeApiTypes` <a name="ResetNativeApiTypes" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.resetNativeApiTypes"></a>

```go
func ResetNativeApiTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.modelInput">ModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypesInput">NativeApiTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.model">Model</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypes">NativeApiTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.modelInput"></a>

```go
func ModelInput() *string
```

- *Type:* *string

---

##### `NativeApiTypesInput`<sup>Optional</sup> <a name="NativeApiTypesInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypesInput"></a>

```go
func NativeApiTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.model"></a>

```go
func Model() *string
```

- *Type:* *string

---

##### `NativeApiTypes`<sup>Required</sup> <a name="NativeApiTypes" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypes"></a>

```go
func NativeApiTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelProviderServiceProviderConfigOutputReference <a name="AiGatewayModelProviderServiceProviderConfigOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aigatewaymodelproviderservice"

aigatewaymodelproviderservice.NewAiGatewayModelProviderServiceProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelProviderServiceProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



