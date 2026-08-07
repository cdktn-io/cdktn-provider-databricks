# `aiGatewayModelService` Submodule <a name="`aiGatewayModelService` Submodule" id="@cdktn/provider-databricks.aiGatewayModelService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiGatewayModelService <a name="AiGatewayModelService" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service databricks_ai_gateway_model_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

aigatewaymodelservice.NewAiGatewayModelService(scope Construct, id *string, config AiGatewayModelServiceConfig) AiGatewayModelService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig">AiGatewayModelServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig">AiGatewayModelServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.putConfig"></a>

```go
func PutConfig(value AiGatewayModelServiceConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigA">AiGatewayModelServiceConfigA</a>

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.putProviderConfig"></a>

```go
func PutProviderConfig(value AiGatewayModelServiceProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfig">AiGatewayModelServiceProviderConfig</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.resetComment"></a>

```go
func ResetComment()
```

##### `ResetConfig` <a name="ResetConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AiGatewayModelService resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

aigatewaymodelservice.AiGatewayModelService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

aigatewaymodelservice.AiGatewayModelService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

aigatewaymodelservice.AiGatewayModelService_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

aigatewaymodelservice.AiGatewayModelService_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AiGatewayModelService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AiGatewayModelService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AiGatewayModelService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AiGatewayModelService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.browseOnly">BrowseOnly</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference">AiGatewayModelServiceConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.effectiveOwner">EffectiveOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference">AiGatewayModelServiceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.supportedApiTypes">SupportedApiTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.configInput">ConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.modelServiceIdInput">ModelServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.modelServiceId">ModelServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BrowseOnly`<sup>Required</sup> <a name="BrowseOnly" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.browseOnly"></a>

```go
func BrowseOnly() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.config"></a>

```go
func Config() AiGatewayModelServiceConfigAOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference">AiGatewayModelServiceConfigAOutputReference</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveOwner`<sup>Required</sup> <a name="EffectiveOwner" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.effectiveOwner"></a>

```go
func EffectiveOwner() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.metastoreId"></a>

```go
func MetastoreId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.providerConfig"></a>

```go
func ProviderConfig() AiGatewayModelServiceProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference">AiGatewayModelServiceProviderConfigOutputReference</a>

---

##### `SupportedApiTypes`<sup>Required</sup> <a name="SupportedApiTypes" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.supportedApiTypes"></a>

```go
func SupportedApiTypes() *[]*string
```

- *Type:* *[]*string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.configInput"></a>

```go
func ConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ModelServiceIdInput`<sup>Optional</sup> <a name="ModelServiceIdInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.modelServiceIdInput"></a>

```go
func ModelServiceIdInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `ModelServiceId`<sup>Required</sup> <a name="ModelServiceId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.modelServiceId"></a>

```go
func ModelServiceId() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AiGatewayModelServiceConfig <a name="AiGatewayModelServiceConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

&aigatewaymodelservice.AiGatewayModelServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ModelServiceId: *string,
	Parent: *string,
	Comment: *string,
	Config: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.aiGatewayModelService.AiGatewayModelServiceConfigA,
	Owner: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.aiGatewayModelService.AiGatewayModelServiceProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.modelServiceId">ModelServiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#model_service_id AiGatewayModelService#model_service_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#parent AiGatewayModelService#parent}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#comment AiGatewayModelService#comment}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigA">AiGatewayModelServiceConfigA</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#config AiGatewayModelService#config}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#owner AiGatewayModelService#owner}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfig">AiGatewayModelServiceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#provider_config AiGatewayModelService#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ModelServiceId`<sup>Required</sup> <a name="ModelServiceId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.modelServiceId"></a>

```go
ModelServiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#model_service_id AiGatewayModelService#model_service_id}.

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#parent AiGatewayModelService#parent}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#comment AiGatewayModelService#comment}.

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.config"></a>

```go
Config AiGatewayModelServiceConfigA
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigA">AiGatewayModelServiceConfigA</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#config AiGatewayModelService#config}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#owner AiGatewayModelService#owner}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfig.property.providerConfig"></a>

```go
ProviderConfig AiGatewayModelServiceProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfig">AiGatewayModelServiceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#provider_config AiGatewayModelService#provider_config}.

---

### AiGatewayModelServiceConfigA <a name="AiGatewayModelServiceConfigA" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

&aigatewaymodelservice.AiGatewayModelServiceConfigA {
	InferenceTable: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable,
	RateLimits: interface{},
	Routing: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.aiGatewayModelService.AiGatewayModelServiceConfigRouting,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigA.property.inferenceTable">InferenceTable</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable">AiGatewayModelServiceConfigInferenceTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#inference_table AiGatewayModelService#inference_table}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigA.property.rateLimits">RateLimits</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#rate_limits AiGatewayModelService#rate_limits}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigA.property.routing">Routing</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting">AiGatewayModelServiceConfigRouting</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#routing AiGatewayModelService#routing}. |

---

##### `InferenceTable`<sup>Optional</sup> <a name="InferenceTable" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigA.property.inferenceTable"></a>

```go
InferenceTable AiGatewayModelServiceConfigInferenceTable
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable">AiGatewayModelServiceConfigInferenceTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#inference_table AiGatewayModelService#inference_table}.

---

##### `RateLimits`<sup>Optional</sup> <a name="RateLimits" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigA.property.rateLimits"></a>

```go
RateLimits interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#rate_limits AiGatewayModelService#rate_limits}.

---

##### `Routing`<sup>Optional</sup> <a name="Routing" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigA.property.routing"></a>

```go
Routing AiGatewayModelServiceConfigRouting
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting">AiGatewayModelServiceConfigRouting</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#routing AiGatewayModelService#routing}.

---

### AiGatewayModelServiceConfigInferenceTable <a name="AiGatewayModelServiceConfigInferenceTable" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

&aigatewaymodelservice.AiGatewayModelServiceConfigInferenceTable {
	Parent: *string,
	Disabled: interface{},
	TableNamePrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#parent AiGatewayModelService#parent}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable.property.disabled">Disabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#disabled AiGatewayModelService#disabled}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable.property.tableNamePrefix">TableNamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#table_name_prefix AiGatewayModelService#table_name_prefix}. |

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#parent AiGatewayModelService#parent}.

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#disabled AiGatewayModelService#disabled}.

---

##### `TableNamePrefix`<sup>Optional</sup> <a name="TableNamePrefix" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable.property.tableNamePrefix"></a>

```go
TableNamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#table_name_prefix AiGatewayModelService#table_name_prefix}.

---

### AiGatewayModelServiceConfigRateLimits <a name="AiGatewayModelServiceConfigRateLimits" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

&aigatewaymodelservice.AiGatewayModelServiceConfigRateLimits {
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
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#key AiGatewayModelService#key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.renewalPeriod">RenewalPeriod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#renewal_period AiGatewayModelService#renewal_period}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.principal">Principal</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#principal AiGatewayModelService#principal}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.requests">Requests</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#requests AiGatewayModelService#requests}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.requestTagKey">RequestTagKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#request_tag_key AiGatewayModelService#request_tag_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.requestTagValue">RequestTagValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#request_tag_value AiGatewayModelService#request_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.tokens">Tokens</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#tokens AiGatewayModelService#tokens}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#key AiGatewayModelService#key}.

---

##### `RenewalPeriod`<sup>Required</sup> <a name="RenewalPeriod" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.renewalPeriod"></a>

```go
RenewalPeriod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#renewal_period AiGatewayModelService#renewal_period}.

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#principal AiGatewayModelService#principal}.

---

##### `Requests`<sup>Optional</sup> <a name="Requests" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.requests"></a>

```go
Requests *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#requests AiGatewayModelService#requests}.

---

##### `RequestTagKey`<sup>Optional</sup> <a name="RequestTagKey" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.requestTagKey"></a>

```go
RequestTagKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#request_tag_key AiGatewayModelService#request_tag_key}.

---

##### `RequestTagValue`<sup>Optional</sup> <a name="RequestTagValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.requestTagValue"></a>

```go
RequestTagValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#request_tag_value AiGatewayModelService#request_tag_value}.

---

##### `Tokens`<sup>Optional</sup> <a name="Tokens" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimits.property.tokens"></a>

```go
Tokens *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#tokens AiGatewayModelService#tokens}.

---

### AiGatewayModelServiceConfigRouting <a name="AiGatewayModelServiceConfigRouting" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

&aigatewaymodelservice.AiGatewayModelServiceConfigRouting {
	Destinations: interface{},
	Fallback: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallback,
	FirstTokenTimeout: *string,
	TrafficSplitting: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplitting,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting.property.destinations">Destinations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#destinations AiGatewayModelService#destinations}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting.property.fallback">Fallback</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallback">AiGatewayModelServiceConfigRoutingFallback</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#fallback AiGatewayModelService#fallback}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting.property.firstTokenTimeout">FirstTokenTimeout</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#first_token_timeout AiGatewayModelService#first_token_timeout}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting.property.trafficSplitting">TrafficSplitting</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplitting">AiGatewayModelServiceConfigRoutingTrafficSplitting</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#traffic_splitting AiGatewayModelService#traffic_splitting}. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting.property.destinations"></a>

```go
Destinations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#destinations AiGatewayModelService#destinations}.

---

##### `Fallback`<sup>Optional</sup> <a name="Fallback" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting.property.fallback"></a>

```go
Fallback AiGatewayModelServiceConfigRoutingFallback
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallback">AiGatewayModelServiceConfigRoutingFallback</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#fallback AiGatewayModelService#fallback}.

---

##### `FirstTokenTimeout`<sup>Optional</sup> <a name="FirstTokenTimeout" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting.property.firstTokenTimeout"></a>

```go
FirstTokenTimeout *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#first_token_timeout AiGatewayModelService#first_token_timeout}.

---

##### `TrafficSplitting`<sup>Optional</sup> <a name="TrafficSplitting" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting.property.trafficSplitting"></a>

```go
TrafficSplitting AiGatewayModelServiceConfigRoutingTrafficSplitting
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplitting">AiGatewayModelServiceConfigRoutingTrafficSplitting</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#traffic_splitting AiGatewayModelService#traffic_splitting}.

---

### AiGatewayModelServiceConfigRoutingDestinations <a name="AiGatewayModelServiceConfigRoutingDestinations" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

&aigatewaymodelservice.AiGatewayModelServiceConfigRoutingDestinations {
	DestinationType: *string,
	Name: *string,
	ExternalModelConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig,
	PayPerTokenConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig,
	ProvisionedThroughputConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig,
	TrafficPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations.property.destinationType">DestinationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#destination_type AiGatewayModelService#destination_type}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#name AiGatewayModelService#name}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations.property.externalModelConfig">ExternalModelConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#external_model_config AiGatewayModelService#external_model_config}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations.property.payPerTokenConfig">PayPerTokenConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig">AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#pay_per_token_config AiGatewayModelService#pay_per_token_config}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations.property.provisionedThroughputConfig">ProvisionedThroughputConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig">AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#provisioned_throughput_config AiGatewayModelService#provisioned_throughput_config}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations.property.trafficPercentage">TrafficPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#traffic_percentage AiGatewayModelService#traffic_percentage}. |

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations.property.destinationType"></a>

```go
DestinationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#destination_type AiGatewayModelService#destination_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#name AiGatewayModelService#name}.

---

##### `ExternalModelConfig`<sup>Optional</sup> <a name="ExternalModelConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations.property.externalModelConfig"></a>

```go
ExternalModelConfig AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#external_model_config AiGatewayModelService#external_model_config}.

---

##### `PayPerTokenConfig`<sup>Optional</sup> <a name="PayPerTokenConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations.property.payPerTokenConfig"></a>

```go
PayPerTokenConfig AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig">AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#pay_per_token_config AiGatewayModelService#pay_per_token_config}.

---

##### `ProvisionedThroughputConfig`<sup>Optional</sup> <a name="ProvisionedThroughputConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations.property.provisionedThroughputConfig"></a>

```go
ProvisionedThroughputConfig AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig">AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#provisioned_throughput_config AiGatewayModelService#provisioned_throughput_config}.

---

##### `TrafficPercentage`<sup>Optional</sup> <a name="TrafficPercentage" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinations.property.trafficPercentage"></a>

```go
TrafficPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#traffic_percentage AiGatewayModelService#traffic_percentage}.

---

### AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig <a name="AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

&aigatewaymodelservice.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig {
	ModelProviderService: *string,
	Target: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig.property.modelProviderService">ModelProviderService</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#model_provider_service AiGatewayModelService#model_provider_service}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig.property.target">Target</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#target AiGatewayModelService#target}. |

---

##### `ModelProviderService`<sup>Required</sup> <a name="ModelProviderService" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig.property.modelProviderService"></a>

```go
ModelProviderService *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#model_provider_service AiGatewayModelService#model_provider_service}.

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig.property.target"></a>

```go
Target AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#target AiGatewayModelService#target}.

---

### AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget <a name="AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

&aigatewaymodelservice.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget {
	Model: *string,
	NativeApiTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget.property.model">Model</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#model AiGatewayModelService#model}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget.property.nativeApiTypes">NativeApiTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#native_api_types AiGatewayModelService#native_api_types}. |

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget.property.model"></a>

```go
Model *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#model AiGatewayModelService#model}.

---

##### `NativeApiTypes`<sup>Optional</sup> <a name="NativeApiTypes" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget.property.nativeApiTypes"></a>

```go
NativeApiTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#native_api_types AiGatewayModelService#native_api_types}.

---

### AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig <a name="AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

&aigatewaymodelservice.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig {
	Model: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig.property.model">Model</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#model AiGatewayModelService#model}. |

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig.property.model"></a>

```go
Model *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#model AiGatewayModelService#model}.

---

### AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig <a name="AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

&aigatewaymodelservice.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig {
	ModelServingEndpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig.property.modelServingEndpoint">ModelServingEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#model_serving_endpoint AiGatewayModelService#model_serving_endpoint}. |

---

##### `ModelServingEndpoint`<sup>Required</sup> <a name="ModelServingEndpoint" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig.property.modelServingEndpoint"></a>

```go
ModelServingEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#model_serving_endpoint AiGatewayModelService#model_serving_endpoint}.

---

### AiGatewayModelServiceConfigRoutingFallback <a name="AiGatewayModelServiceConfigRoutingFallback" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallback.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

&aigatewaymodelservice.AiGatewayModelServiceConfigRoutingFallback {
	Destinations: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallback.property.destinations">Destinations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#destinations AiGatewayModelService#destinations}. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallback.property.destinations"></a>

```go
Destinations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#destinations AiGatewayModelService#destinations}.

---

### AiGatewayModelServiceConfigRoutingFallbackDestinations <a name="AiGatewayModelServiceConfigRoutingFallbackDestinations" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

&aigatewaymodelservice.AiGatewayModelServiceConfigRoutingFallbackDestinations {
	DestinationType: *string,
	Name: *string,
	ExternalModelConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig,
	PayPerTokenConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig,
	ProvisionedThroughputConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig,
	TrafficPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations.property.destinationType">DestinationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#destination_type AiGatewayModelService#destination_type}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#name AiGatewayModelService#name}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations.property.externalModelConfig">ExternalModelConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#external_model_config AiGatewayModelService#external_model_config}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations.property.payPerTokenConfig">PayPerTokenConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#pay_per_token_config AiGatewayModelService#pay_per_token_config}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations.property.provisionedThroughputConfig">ProvisionedThroughputConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#provisioned_throughput_config AiGatewayModelService#provisioned_throughput_config}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations.property.trafficPercentage">TrafficPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#traffic_percentage AiGatewayModelService#traffic_percentage}. |

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations.property.destinationType"></a>

```go
DestinationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#destination_type AiGatewayModelService#destination_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#name AiGatewayModelService#name}.

---

##### `ExternalModelConfig`<sup>Optional</sup> <a name="ExternalModelConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations.property.externalModelConfig"></a>

```go
ExternalModelConfig AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#external_model_config AiGatewayModelService#external_model_config}.

---

##### `PayPerTokenConfig`<sup>Optional</sup> <a name="PayPerTokenConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations.property.payPerTokenConfig"></a>

```go
PayPerTokenConfig AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#pay_per_token_config AiGatewayModelService#pay_per_token_config}.

---

##### `ProvisionedThroughputConfig`<sup>Optional</sup> <a name="ProvisionedThroughputConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations.property.provisionedThroughputConfig"></a>

```go
ProvisionedThroughputConfig AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#provisioned_throughput_config AiGatewayModelService#provisioned_throughput_config}.

---

##### `TrafficPercentage`<sup>Optional</sup> <a name="TrafficPercentage" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinations.property.trafficPercentage"></a>

```go
TrafficPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#traffic_percentage AiGatewayModelService#traffic_percentage}.

---

### AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig <a name="AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

&aigatewaymodelservice.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig {
	ModelProviderService: *string,
	Target: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig.property.modelProviderService">ModelProviderService</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#model_provider_service AiGatewayModelService#model_provider_service}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig.property.target">Target</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#target AiGatewayModelService#target}. |

---

##### `ModelProviderService`<sup>Required</sup> <a name="ModelProviderService" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig.property.modelProviderService"></a>

```go
ModelProviderService *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#model_provider_service AiGatewayModelService#model_provider_service}.

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig.property.target"></a>

```go
Target AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#target AiGatewayModelService#target}.

---

### AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget <a name="AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

&aigatewaymodelservice.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget {
	Model: *string,
	NativeApiTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget.property.model">Model</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#model AiGatewayModelService#model}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget.property.nativeApiTypes">NativeApiTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#native_api_types AiGatewayModelService#native_api_types}. |

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget.property.model"></a>

```go
Model *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#model AiGatewayModelService#model}.

---

##### `NativeApiTypes`<sup>Optional</sup> <a name="NativeApiTypes" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget.property.nativeApiTypes"></a>

```go
NativeApiTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#native_api_types AiGatewayModelService#native_api_types}.

---

### AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig <a name="AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

&aigatewaymodelservice.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig {
	Model: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig.property.model">Model</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#model AiGatewayModelService#model}. |

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig.property.model"></a>

```go
Model *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#model AiGatewayModelService#model}.

---

### AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig <a name="AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

&aigatewaymodelservice.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig {
	ModelServingEndpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig.property.modelServingEndpoint">ModelServingEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#model_serving_endpoint AiGatewayModelService#model_serving_endpoint}. |

---

##### `ModelServingEndpoint`<sup>Required</sup> <a name="ModelServingEndpoint" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig.property.modelServingEndpoint"></a>

```go
ModelServingEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#model_serving_endpoint AiGatewayModelService#model_serving_endpoint}.

---

### AiGatewayModelServiceConfigRoutingTrafficSplitting <a name="AiGatewayModelServiceConfigRoutingTrafficSplitting" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplitting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplitting.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

&aigatewaymodelservice.AiGatewayModelServiceConfigRoutingTrafficSplitting {

}
```


### AiGatewayModelServiceProviderConfig <a name="AiGatewayModelServiceProviderConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

&aigatewaymodelservice.AiGatewayModelServiceProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#workspace_id AiGatewayModelService#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_model_service#workspace_id AiGatewayModelService#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiGatewayModelServiceConfigAOutputReference <a name="AiGatewayModelServiceConfigAOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

aigatewaymodelservice.NewAiGatewayModelServiceConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelServiceConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.putInferenceTable">PutInferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.putRateLimits">PutRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.putRouting">PutRouting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.resetInferenceTable">ResetInferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.resetRateLimits">ResetRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.resetRouting">ResetRouting</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInferenceTable` <a name="PutInferenceTable" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.putInferenceTable"></a>

```go
func PutInferenceTable(value AiGatewayModelServiceConfigInferenceTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.putInferenceTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTable">AiGatewayModelServiceConfigInferenceTable</a>

---

##### `PutRateLimits` <a name="PutRateLimits" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.putRateLimits"></a>

```go
func PutRateLimits(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.putRateLimits.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRouting` <a name="PutRouting" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.putRouting"></a>

```go
func PutRouting(value AiGatewayModelServiceConfigRouting)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.putRouting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRouting">AiGatewayModelServiceConfigRouting</a>

---

##### `ResetInferenceTable` <a name="ResetInferenceTable" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.resetInferenceTable"></a>

```go
func ResetInferenceTable()
```

##### `ResetRateLimits` <a name="ResetRateLimits" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.resetRateLimits"></a>

```go
func ResetRateLimits()
```

##### `ResetRouting` <a name="ResetRouting" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.resetRouting"></a>

```go
func ResetRouting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.inferenceTable">InferenceTable</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference">AiGatewayModelServiceConfigInferenceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.rateLimits">RateLimits</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList">AiGatewayModelServiceConfigRateLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.routing">Routing</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference">AiGatewayModelServiceConfigRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.inferenceTableInput">InferenceTableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.rateLimitsInput">RateLimitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.routingInput">RoutingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InferenceTable`<sup>Required</sup> <a name="InferenceTable" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.inferenceTable"></a>

```go
func InferenceTable() AiGatewayModelServiceConfigInferenceTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference">AiGatewayModelServiceConfigInferenceTableOutputReference</a>

---

##### `RateLimits`<sup>Required</sup> <a name="RateLimits" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.rateLimits"></a>

```go
func RateLimits() AiGatewayModelServiceConfigRateLimitsList
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList">AiGatewayModelServiceConfigRateLimitsList</a>

---

##### `Routing`<sup>Required</sup> <a name="Routing" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.routing"></a>

```go
func Routing() AiGatewayModelServiceConfigRoutingOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference">AiGatewayModelServiceConfigRoutingOutputReference</a>

---

##### `InferenceTableInput`<sup>Optional</sup> <a name="InferenceTableInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.inferenceTableInput"></a>

```go
func InferenceTableInput() interface{}
```

- *Type:* interface{}

---

##### `RateLimitsInput`<sup>Optional</sup> <a name="RateLimitsInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.rateLimitsInput"></a>

```go
func RateLimitsInput() interface{}
```

- *Type:* interface{}

---

##### `RoutingInput`<sup>Optional</sup> <a name="RoutingInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.routingInput"></a>

```go
func RoutingInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelServiceConfigInferenceTableOutputReference <a name="AiGatewayModelServiceConfigInferenceTableOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

aigatewaymodelservice.NewAiGatewayModelServiceConfigInferenceTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelServiceConfigInferenceTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.resetTableNamePrefix">ResetTableNamePrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetTableNamePrefix` <a name="ResetTableNamePrefix" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.resetTableNamePrefix"></a>

```go
func ResetTableNamePrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.isDeleted">IsDeleted</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.table">Table</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.tableNamePrefixInput">TableNamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.tableNamePrefix">TableNamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsDeleted`<sup>Required</sup> <a name="IsDeleted" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.isDeleted"></a>

```go
func IsDeleted() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.table"></a>

```go
func Table() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `TableNamePrefixInput`<sup>Optional</sup> <a name="TableNamePrefixInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.tableNamePrefixInput"></a>

```go
func TableNamePrefixInput() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `TableNamePrefix`<sup>Required</sup> <a name="TableNamePrefix" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.tableNamePrefix"></a>

```go
func TableNamePrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigInferenceTableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelServiceConfigRateLimitsList <a name="AiGatewayModelServiceConfigRateLimitsList" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

aigatewaymodelservice.NewAiGatewayModelServiceConfigRateLimitsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AiGatewayModelServiceConfigRateLimitsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.get"></a>

```go
func Get(index *f64) AiGatewayModelServiceConfigRateLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelServiceConfigRateLimitsOutputReference <a name="AiGatewayModelServiceConfigRateLimitsOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

aigatewaymodelservice.NewAiGatewayModelServiceConfigRateLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AiGatewayModelServiceConfigRateLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.resetPrincipal">ResetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.resetRequests">ResetRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.resetRequestTagKey">ResetRequestTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.resetRequestTagValue">ResetRequestTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.resetTokens">ResetTokens</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.resetPrincipal"></a>

```go
func ResetPrincipal()
```

##### `ResetRequests` <a name="ResetRequests" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.resetRequests"></a>

```go
func ResetRequests()
```

##### `ResetRequestTagKey` <a name="ResetRequestTagKey" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.resetRequestTagKey"></a>

```go
func ResetRequestTagKey()
```

##### `ResetRequestTagValue` <a name="ResetRequestTagValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.resetRequestTagValue"></a>

```go
func ResetRequestTagValue()
```

##### `ResetTokens` <a name="ResetTokens" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.resetTokens"></a>

```go
func ResetTokens()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.renewalPeriodInput">RenewalPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.requestsInput">RequestsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.requestTagKeyInput">RequestTagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.requestTagValueInput">RequestTagValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.tokensInput">TokensInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.renewalPeriod">RenewalPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.requests">Requests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.requestTagKey">RequestTagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.requestTagValue">RequestTagValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.tokens">Tokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `RenewalPeriodInput`<sup>Optional</sup> <a name="RenewalPeriodInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.renewalPeriodInput"></a>

```go
func RenewalPeriodInput() *string
```

- *Type:* *string

---

##### `RequestsInput`<sup>Optional</sup> <a name="RequestsInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.requestsInput"></a>

```go
func RequestsInput() *f64
```

- *Type:* *f64

---

##### `RequestTagKeyInput`<sup>Optional</sup> <a name="RequestTagKeyInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.requestTagKeyInput"></a>

```go
func RequestTagKeyInput() *string
```

- *Type:* *string

---

##### `RequestTagValueInput`<sup>Optional</sup> <a name="RequestTagValueInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.requestTagValueInput"></a>

```go
func RequestTagValueInput() *string
```

- *Type:* *string

---

##### `TokensInput`<sup>Optional</sup> <a name="TokensInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.tokensInput"></a>

```go
func TokensInput() *f64
```

- *Type:* *f64

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `RenewalPeriod`<sup>Required</sup> <a name="RenewalPeriod" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.renewalPeriod"></a>

```go
func RenewalPeriod() *string
```

- *Type:* *string

---

##### `Requests`<sup>Required</sup> <a name="Requests" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.requests"></a>

```go
func Requests() *f64
```

- *Type:* *f64

---

##### `RequestTagKey`<sup>Required</sup> <a name="RequestTagKey" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.requestTagKey"></a>

```go
func RequestTagKey() *string
```

- *Type:* *string

---

##### `RequestTagValue`<sup>Required</sup> <a name="RequestTagValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.requestTagValue"></a>

```go
func RequestTagValue() *string
```

- *Type:* *string

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.tokens"></a>

```go
func Tokens() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRateLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference <a name="AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

aigatewaymodelservice.NewAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.putTarget">PutTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTarget` <a name="PutTarget" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.putTarget"></a>

```go
func PutTarget(value AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTarget</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.target">Target</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.modelProviderServiceInput">ModelProviderServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.targetInput">TargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.modelProviderService">ModelProviderService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.target"></a>

```go
func Target() AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference</a>

---

##### `ModelProviderServiceInput`<sup>Optional</sup> <a name="ModelProviderServiceInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.modelProviderServiceInput"></a>

```go
func ModelProviderServiceInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.targetInput"></a>

```go
func TargetInput() interface{}
```

- *Type:* interface{}

---

##### `ModelProviderService`<sup>Required</sup> <a name="ModelProviderService" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.modelProviderService"></a>

```go
func ModelProviderService() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference <a name="AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

aigatewaymodelservice.NewAiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.resetNativeApiTypes">ResetNativeApiTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNativeApiTypes` <a name="ResetNativeApiTypes" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.resetNativeApiTypes"></a>

```go
func ResetNativeApiTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.modelInput">ModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.nativeApiTypesInput">NativeApiTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.model">Model</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.nativeApiTypes">NativeApiTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.modelInput"></a>

```go
func ModelInput() *string
```

- *Type:* *string

---

##### `NativeApiTypesInput`<sup>Optional</sup> <a name="NativeApiTypesInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.nativeApiTypesInput"></a>

```go
func NativeApiTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.model"></a>

```go
func Model() *string
```

- *Type:* *string

---

##### `NativeApiTypes`<sup>Required</sup> <a name="NativeApiTypes" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.nativeApiTypes"></a>

```go
func NativeApiTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelServiceConfigRoutingDestinationsList <a name="AiGatewayModelServiceConfigRoutingDestinationsList" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

aigatewaymodelservice.NewAiGatewayModelServiceConfigRoutingDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AiGatewayModelServiceConfigRoutingDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.get"></a>

```go
func Get(index *f64) AiGatewayModelServiceConfigRoutingDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelServiceConfigRoutingDestinationsOutputReference <a name="AiGatewayModelServiceConfigRoutingDestinationsOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

aigatewaymodelservice.NewAiGatewayModelServiceConfigRoutingDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AiGatewayModelServiceConfigRoutingDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.putExternalModelConfig">PutExternalModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.putPayPerTokenConfig">PutPayPerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.putProvisionedThroughputConfig">PutProvisionedThroughputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.resetExternalModelConfig">ResetExternalModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.resetPayPerTokenConfig">ResetPayPerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.resetProvisionedThroughputConfig">ResetProvisionedThroughputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.resetTrafficPercentage">ResetTrafficPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExternalModelConfig` <a name="PutExternalModelConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.putExternalModelConfig"></a>

```go
func PutExternalModelConfig(value AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.putExternalModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfig</a>

---

##### `PutPayPerTokenConfig` <a name="PutPayPerTokenConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.putPayPerTokenConfig"></a>

```go
func PutPayPerTokenConfig(value AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.putPayPerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig">AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfig</a>

---

##### `PutProvisionedThroughputConfig` <a name="PutProvisionedThroughputConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.putProvisionedThroughputConfig"></a>

```go
func PutProvisionedThroughputConfig(value AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.putProvisionedThroughputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig">AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfig</a>

---

##### `ResetExternalModelConfig` <a name="ResetExternalModelConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.resetExternalModelConfig"></a>

```go
func ResetExternalModelConfig()
```

##### `ResetPayPerTokenConfig` <a name="ResetPayPerTokenConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.resetPayPerTokenConfig"></a>

```go
func ResetPayPerTokenConfig()
```

##### `ResetProvisionedThroughputConfig` <a name="ResetProvisionedThroughputConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.resetProvisionedThroughputConfig"></a>

```go
func ResetProvisionedThroughputConfig()
```

##### `ResetTrafficPercentage` <a name="ResetTrafficPercentage" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.resetTrafficPercentage"></a>

```go
func ResetTrafficPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.externalModelConfig">ExternalModelConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.isDeleted">IsDeleted</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.payPerTokenConfig">PayPerTokenConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference">AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.provisionedThroughputConfig">ProvisionedThroughputConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference">AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.externalModelConfigInput">ExternalModelConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.payPerTokenConfigInput">PayPerTokenConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.provisionedThroughputConfigInput">ProvisionedThroughputConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.trafficPercentageInput">TrafficPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.trafficPercentage">TrafficPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalModelConfig`<sup>Required</sup> <a name="ExternalModelConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.externalModelConfig"></a>

```go
func ExternalModelConfig() AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference">AiGatewayModelServiceConfigRoutingDestinationsExternalModelConfigOutputReference</a>

---

##### `IsDeleted`<sup>Required</sup> <a name="IsDeleted" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.isDeleted"></a>

```go
func IsDeleted() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PayPerTokenConfig`<sup>Required</sup> <a name="PayPerTokenConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.payPerTokenConfig"></a>

```go
func PayPerTokenConfig() AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference">AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference</a>

---

##### `ProvisionedThroughputConfig`<sup>Required</sup> <a name="ProvisionedThroughputConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.provisionedThroughputConfig"></a>

```go
func ProvisionedThroughputConfig() AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference">AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference</a>

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.destinationTypeInput"></a>

```go
func DestinationTypeInput() *string
```

- *Type:* *string

---

##### `ExternalModelConfigInput`<sup>Optional</sup> <a name="ExternalModelConfigInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.externalModelConfigInput"></a>

```go
func ExternalModelConfigInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PayPerTokenConfigInput`<sup>Optional</sup> <a name="PayPerTokenConfigInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.payPerTokenConfigInput"></a>

```go
func PayPerTokenConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ProvisionedThroughputConfigInput`<sup>Optional</sup> <a name="ProvisionedThroughputConfigInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.provisionedThroughputConfigInput"></a>

```go
func ProvisionedThroughputConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TrafficPercentageInput`<sup>Optional</sup> <a name="TrafficPercentageInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.trafficPercentageInput"></a>

```go
func TrafficPercentageInput() *f64
```

- *Type:* *f64

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TrafficPercentage`<sup>Required</sup> <a name="TrafficPercentage" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.trafficPercentage"></a>

```go
func TrafficPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference <a name="AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

aigatewaymodelservice.NewAiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.modelInput">ModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.model">Model</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.modelInput"></a>

```go
func ModelInput() *string
```

- *Type:* *string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.model"></a>

```go
func Model() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsPayPerTokenConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference <a name="AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

aigatewaymodelservice.NewAiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.model">Model</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.modelServingEndpointInput">ModelServingEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.modelServingEndpoint">ModelServingEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.model"></a>

```go
func Model() *string
```

- *Type:* *string

---

##### `ModelServingEndpointInput`<sup>Optional</sup> <a name="ModelServingEndpointInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.modelServingEndpointInput"></a>

```go
func ModelServingEndpointInput() *string
```

- *Type:* *string

---

##### `ModelServingEndpoint`<sup>Required</sup> <a name="ModelServingEndpoint" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.modelServingEndpoint"></a>

```go
func ModelServingEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsProvisionedThroughputConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference <a name="AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

aigatewaymodelservice.NewAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.putTarget">PutTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTarget` <a name="PutTarget" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.putTarget"></a>

```go
func PutTarget(value AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTarget</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.target">Target</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.modelProviderServiceInput">ModelProviderServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.targetInput">TargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.modelProviderService">ModelProviderService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.target"></a>

```go
func Target() AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference</a>

---

##### `ModelProviderServiceInput`<sup>Optional</sup> <a name="ModelProviderServiceInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.modelProviderServiceInput"></a>

```go
func ModelProviderServiceInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.targetInput"></a>

```go
func TargetInput() interface{}
```

- *Type:* interface{}

---

##### `ModelProviderService`<sup>Required</sup> <a name="ModelProviderService" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.modelProviderService"></a>

```go
func ModelProviderService() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference <a name="AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

aigatewaymodelservice.NewAiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.resetNativeApiTypes">ResetNativeApiTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNativeApiTypes` <a name="ResetNativeApiTypes" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.resetNativeApiTypes"></a>

```go
func ResetNativeApiTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.modelInput">ModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.nativeApiTypesInput">NativeApiTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.model">Model</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.nativeApiTypes">NativeApiTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.modelInput"></a>

```go
func ModelInput() *string
```

- *Type:* *string

---

##### `NativeApiTypesInput`<sup>Optional</sup> <a name="NativeApiTypesInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.nativeApiTypesInput"></a>

```go
func NativeApiTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.model"></a>

```go
func Model() *string
```

- *Type:* *string

---

##### `NativeApiTypes`<sup>Required</sup> <a name="NativeApiTypes" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.nativeApiTypes"></a>

```go
func NativeApiTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelServiceConfigRoutingFallbackDestinationsList <a name="AiGatewayModelServiceConfigRoutingFallbackDestinationsList" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

aigatewaymodelservice.NewAiGatewayModelServiceConfigRoutingFallbackDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AiGatewayModelServiceConfigRoutingFallbackDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.get"></a>

```go
func Get(index *f64) AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference <a name="AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

aigatewaymodelservice.NewAiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putExternalModelConfig">PutExternalModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putPayPerTokenConfig">PutPayPerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putProvisionedThroughputConfig">PutProvisionedThroughputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resetExternalModelConfig">ResetExternalModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resetPayPerTokenConfig">ResetPayPerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resetProvisionedThroughputConfig">ResetProvisionedThroughputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resetTrafficPercentage">ResetTrafficPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExternalModelConfig` <a name="PutExternalModelConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putExternalModelConfig"></a>

```go
func PutExternalModelConfig(value AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putExternalModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfig</a>

---

##### `PutPayPerTokenConfig` <a name="PutPayPerTokenConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putPayPerTokenConfig"></a>

```go
func PutPayPerTokenConfig(value AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putPayPerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfig</a>

---

##### `PutProvisionedThroughputConfig` <a name="PutProvisionedThroughputConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putProvisionedThroughputConfig"></a>

```go
func PutProvisionedThroughputConfig(value AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.putProvisionedThroughputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig">AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfig</a>

---

##### `ResetExternalModelConfig` <a name="ResetExternalModelConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resetExternalModelConfig"></a>

```go
func ResetExternalModelConfig()
```

##### `ResetPayPerTokenConfig` <a name="ResetPayPerTokenConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resetPayPerTokenConfig"></a>

```go
func ResetPayPerTokenConfig()
```

##### `ResetProvisionedThroughputConfig` <a name="ResetProvisionedThroughputConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resetProvisionedThroughputConfig"></a>

```go
func ResetProvisionedThroughputConfig()
```

##### `ResetTrafficPercentage` <a name="ResetTrafficPercentage" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.resetTrafficPercentage"></a>

```go
func ResetTrafficPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.externalModelConfig">ExternalModelConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.isDeleted">IsDeleted</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.payPerTokenConfig">PayPerTokenConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference">AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.provisionedThroughputConfig">ProvisionedThroughputConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference">AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.externalModelConfigInput">ExternalModelConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.payPerTokenConfigInput">PayPerTokenConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.provisionedThroughputConfigInput">ProvisionedThroughputConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.trafficPercentageInput">TrafficPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.trafficPercentage">TrafficPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalModelConfig`<sup>Required</sup> <a name="ExternalModelConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.externalModelConfig"></a>

```go
func ExternalModelConfig() AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference">AiGatewayModelServiceConfigRoutingFallbackDestinationsExternalModelConfigOutputReference</a>

---

##### `IsDeleted`<sup>Required</sup> <a name="IsDeleted" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.isDeleted"></a>

```go
func IsDeleted() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PayPerTokenConfig`<sup>Required</sup> <a name="PayPerTokenConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.payPerTokenConfig"></a>

```go
func PayPerTokenConfig() AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference">AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference</a>

---

##### `ProvisionedThroughputConfig`<sup>Required</sup> <a name="ProvisionedThroughputConfig" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.provisionedThroughputConfig"></a>

```go
func ProvisionedThroughputConfig() AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference">AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference</a>

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.destinationTypeInput"></a>

```go
func DestinationTypeInput() *string
```

- *Type:* *string

---

##### `ExternalModelConfigInput`<sup>Optional</sup> <a name="ExternalModelConfigInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.externalModelConfigInput"></a>

```go
func ExternalModelConfigInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PayPerTokenConfigInput`<sup>Optional</sup> <a name="PayPerTokenConfigInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.payPerTokenConfigInput"></a>

```go
func PayPerTokenConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ProvisionedThroughputConfigInput`<sup>Optional</sup> <a name="ProvisionedThroughputConfigInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.provisionedThroughputConfigInput"></a>

```go
func ProvisionedThroughputConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TrafficPercentageInput`<sup>Optional</sup> <a name="TrafficPercentageInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.trafficPercentageInput"></a>

```go
func TrafficPercentageInput() *f64
```

- *Type:* *f64

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TrafficPercentage`<sup>Required</sup> <a name="TrafficPercentage" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.trafficPercentage"></a>

```go
func TrafficPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference <a name="AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

aigatewaymodelservice.NewAiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.modelInput">ModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.model">Model</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.modelInput"></a>

```go
func ModelInput() *string
```

- *Type:* *string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.model"></a>

```go
func Model() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference <a name="AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

aigatewaymodelservice.NewAiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.model">Model</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.modelServingEndpointInput">ModelServingEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.modelServingEndpoint">ModelServingEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.model"></a>

```go
func Model() *string
```

- *Type:* *string

---

##### `ModelServingEndpointInput`<sup>Optional</sup> <a name="ModelServingEndpointInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.modelServingEndpointInput"></a>

```go
func ModelServingEndpointInput() *string
```

- *Type:* *string

---

##### `ModelServingEndpoint`<sup>Required</sup> <a name="ModelServingEndpoint" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.modelServingEndpoint"></a>

```go
func ModelServingEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelServiceConfigRoutingFallbackOutputReference <a name="AiGatewayModelServiceConfigRoutingFallbackOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

aigatewaymodelservice.NewAiGatewayModelServiceConfigRoutingFallbackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelServiceConfigRoutingFallbackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.putDestinations"></a>

```go
func PutDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.putDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.resetDestinations"></a>

```go
func ResetDestinations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList">AiGatewayModelServiceConfigRoutingFallbackDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.property.destinations"></a>

```go
func Destinations() AiGatewayModelServiceConfigRoutingFallbackDestinationsList
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackDestinationsList">AiGatewayModelServiceConfigRoutingFallbackDestinationsList</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.property.destinationsInput"></a>

```go
func DestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelServiceConfigRoutingOutputReference <a name="AiGatewayModelServiceConfigRoutingOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

aigatewaymodelservice.NewAiGatewayModelServiceConfigRoutingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelServiceConfigRoutingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.putFallback">PutFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.putTrafficSplitting">PutTrafficSplitting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.resetFallback">ResetFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.resetFirstTokenTimeout">ResetFirstTokenTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.resetTrafficSplitting">ResetTrafficSplitting</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.putDestinations"></a>

```go
func PutDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.putDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFallback` <a name="PutFallback" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.putFallback"></a>

```go
func PutFallback(value AiGatewayModelServiceConfigRoutingFallback)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.putFallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallback">AiGatewayModelServiceConfigRoutingFallback</a>

---

##### `PutTrafficSplitting` <a name="PutTrafficSplitting" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.putTrafficSplitting"></a>

```go
func PutTrafficSplitting(value AiGatewayModelServiceConfigRoutingTrafficSplitting)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.putTrafficSplitting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplitting">AiGatewayModelServiceConfigRoutingTrafficSplitting</a>

---

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.resetDestinations"></a>

```go
func ResetDestinations()
```

##### `ResetFallback` <a name="ResetFallback" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.resetFallback"></a>

```go
func ResetFallback()
```

##### `ResetFirstTokenTimeout` <a name="ResetFirstTokenTimeout" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.resetFirstTokenTimeout"></a>

```go
func ResetFirstTokenTimeout()
```

##### `ResetTrafficSplitting` <a name="ResetTrafficSplitting" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.resetTrafficSplitting"></a>

```go
func ResetTrafficSplitting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList">AiGatewayModelServiceConfigRoutingDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.fallback">Fallback</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference">AiGatewayModelServiceConfigRoutingFallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.trafficSplitting">TrafficSplitting</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference">AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.fallbackInput">FallbackInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.firstTokenTimeoutInput">FirstTokenTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.trafficSplittingInput">TrafficSplittingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.firstTokenTimeout">FirstTokenTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.destinations"></a>

```go
func Destinations() AiGatewayModelServiceConfigRoutingDestinationsList
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingDestinationsList">AiGatewayModelServiceConfigRoutingDestinationsList</a>

---

##### `Fallback`<sup>Required</sup> <a name="Fallback" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.fallback"></a>

```go
func Fallback() AiGatewayModelServiceConfigRoutingFallbackOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingFallbackOutputReference">AiGatewayModelServiceConfigRoutingFallbackOutputReference</a>

---

##### `TrafficSplitting`<sup>Required</sup> <a name="TrafficSplitting" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.trafficSplitting"></a>

```go
func TrafficSplitting() AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference">AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.destinationsInput"></a>

```go
func DestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `FallbackInput`<sup>Optional</sup> <a name="FallbackInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.fallbackInput"></a>

```go
func FallbackInput() interface{}
```

- *Type:* interface{}

---

##### `FirstTokenTimeoutInput`<sup>Optional</sup> <a name="FirstTokenTimeoutInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.firstTokenTimeoutInput"></a>

```go
func FirstTokenTimeoutInput() *string
```

- *Type:* *string

---

##### `TrafficSplittingInput`<sup>Optional</sup> <a name="TrafficSplittingInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.trafficSplittingInput"></a>

```go
func TrafficSplittingInput() interface{}
```

- *Type:* interface{}

---

##### `FirstTokenTimeout`<sup>Required</sup> <a name="FirstTokenTimeout" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.firstTokenTimeout"></a>

```go
func FirstTokenTimeout() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference <a name="AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

aigatewaymodelservice.NewAiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceConfigRoutingTrafficSplittingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiGatewayModelServiceProviderConfigOutputReference <a name="AiGatewayModelServiceProviderConfigOutputReference" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/aigatewaymodelservice"

aigatewaymodelservice.NewAiGatewayModelServiceProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiGatewayModelServiceProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiGatewayModelService.AiGatewayModelServiceProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



