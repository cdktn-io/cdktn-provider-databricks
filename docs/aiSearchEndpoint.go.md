# `aiSearchEndpoint` Submodule <a name="`aiSearchEndpoint` Submodule" id="@cdktn/provider-databricks.aiSearchEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiSearchEndpoint <a name="AiSearchEndpoint" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint databricks_ai_search_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aisearchendpoint"

aisearchendpoint.NewAiSearchEndpoint(scope Construct, id *string, config AiSearchEndpointConfig) AiSearchEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig">AiSearchEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig">AiSearchEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.putCustomTags">PutCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetBudgetPolicyId">ResetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetCustomTags">ResetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetEndpointId">ResetEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetReplicaCount">ResetReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetTargetQps">ResetTargetQps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetUsagePolicyId">ResetUsagePolicyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomTags` <a name="PutCustomTags" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.putCustomTags"></a>

```go
func PutCustomTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.putCustomTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.putProviderConfig"></a>

```go
func PutProviderConfig(value AiSearchEndpointProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig">AiSearchEndpointProviderConfig</a>

---

##### `ResetBudgetPolicyId` <a name="ResetBudgetPolicyId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetBudgetPolicyId"></a>

```go
func ResetBudgetPolicyId()
```

##### `ResetCustomTags` <a name="ResetCustomTags" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetCustomTags"></a>

```go
func ResetCustomTags()
```

##### `ResetEndpointId` <a name="ResetEndpointId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetEndpointId"></a>

```go
func ResetEndpointId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetReplicaCount` <a name="ResetReplicaCount" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetReplicaCount"></a>

```go
func ResetReplicaCount()
```

##### `ResetTargetQps` <a name="ResetTargetQps" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetTargetQps"></a>

```go
func ResetTargetQps()
```

##### `ResetUsagePolicyId` <a name="ResetUsagePolicyId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetUsagePolicyId"></a>

```go
func ResetUsagePolicyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AiSearchEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aisearchendpoint"

aisearchendpoint.AiSearchEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aisearchendpoint"

aisearchendpoint.AiSearchEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aisearchendpoint"

aisearchendpoint.AiSearchEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aisearchendpoint"

aisearchendpoint.AiSearchEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AiSearchEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AiSearchEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AiSearchEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AiSearchEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.creator">Creator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.customTags">CustomTags</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList">AiSearchEndpointCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.effectiveBudgetPolicyId">EffectiveBudgetPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointStatus">EndpointStatus</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference">AiSearchEndpointEndpointStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.indexCount">IndexCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.lastUpdatedUser">LastUpdatedUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference">AiSearchEndpointProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.scalingInfo">ScalingInfo</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference">AiSearchEndpointScalingInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.throughputInfo">ThroughputInfo</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference">AiSearchEndpointThroughputInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.budgetPolicyIdInput">BudgetPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.customTagsInput">CustomTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointIdInput">EndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.replicaCountInput">ReplicaCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.targetQpsInput">TargetQpsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.usagePolicyIdInput">UsagePolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointId">EndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.replicaCount">ReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.targetQps">TargetQps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.usagePolicyId">UsagePolicyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.creator"></a>

```go
func Creator() *string
```

- *Type:* *string

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.customTags"></a>

```go
func CustomTags() AiSearchEndpointCustomTagsList
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList">AiSearchEndpointCustomTagsList</a>

---

##### `EffectiveBudgetPolicyId`<sup>Required</sup> <a name="EffectiveBudgetPolicyId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.effectiveBudgetPolicyId"></a>

```go
func EffectiveBudgetPolicyId() *string
```

- *Type:* *string

---

##### `EndpointStatus`<sup>Required</sup> <a name="EndpointStatus" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointStatus"></a>

```go
func EndpointStatus() AiSearchEndpointEndpointStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference">AiSearchEndpointEndpointStatusOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IndexCount`<sup>Required</sup> <a name="IndexCount" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.indexCount"></a>

```go
func IndexCount() *f64
```

- *Type:* *f64

---

##### `LastUpdatedUser`<sup>Required</sup> <a name="LastUpdatedUser" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.lastUpdatedUser"></a>

```go
func LastUpdatedUser() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.providerConfig"></a>

```go
func ProviderConfig() AiSearchEndpointProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference">AiSearchEndpointProviderConfigOutputReference</a>

---

##### `ScalingInfo`<sup>Required</sup> <a name="ScalingInfo" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.scalingInfo"></a>

```go
func ScalingInfo() AiSearchEndpointScalingInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference">AiSearchEndpointScalingInfoOutputReference</a>

---

##### `ThroughputInfo`<sup>Required</sup> <a name="ThroughputInfo" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.throughputInfo"></a>

```go
func ThroughputInfo() AiSearchEndpointThroughputInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference">AiSearchEndpointThroughputInfoOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `BudgetPolicyIdInput`<sup>Optional</sup> <a name="BudgetPolicyIdInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.budgetPolicyIdInput"></a>

```go
func BudgetPolicyIdInput() *string
```

- *Type:* *string

---

##### `CustomTagsInput`<sup>Optional</sup> <a name="CustomTagsInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.customTagsInput"></a>

```go
func CustomTagsInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointIdInput`<sup>Optional</sup> <a name="EndpointIdInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointIdInput"></a>

```go
func EndpointIdInput() *string
```

- *Type:* *string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointTypeInput"></a>

```go
func EndpointTypeInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ReplicaCountInput`<sup>Optional</sup> <a name="ReplicaCountInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.replicaCountInput"></a>

```go
func ReplicaCountInput() *f64
```

- *Type:* *f64

---

##### `TargetQpsInput`<sup>Optional</sup> <a name="TargetQpsInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.targetQpsInput"></a>

```go
func TargetQpsInput() *f64
```

- *Type:* *f64

---

##### `UsagePolicyIdInput`<sup>Optional</sup> <a name="UsagePolicyIdInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.usagePolicyIdInput"></a>

```go
func UsagePolicyIdInput() *string
```

- *Type:* *string

---

##### `BudgetPolicyId`<sup>Required</sup> <a name="BudgetPolicyId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.budgetPolicyId"></a>

```go
func BudgetPolicyId() *string
```

- *Type:* *string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointId"></a>

```go
func EndpointId() *string
```

- *Type:* *string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `ReplicaCount`<sup>Required</sup> <a name="ReplicaCount" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.replicaCount"></a>

```go
func ReplicaCount() *f64
```

- *Type:* *f64

---

##### `TargetQps`<sup>Required</sup> <a name="TargetQps" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.targetQps"></a>

```go
func TargetQps() *f64
```

- *Type:* *f64

---

##### `UsagePolicyId`<sup>Required</sup> <a name="UsagePolicyId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.usagePolicyId"></a>

```go
func UsagePolicyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AiSearchEndpointConfig <a name="AiSearchEndpointConfig" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aisearchendpoint"

&aisearchendpoint.AiSearchEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EndpointType: *string,
	Parent: *string,
	BudgetPolicyId: *string,
	CustomTags: interface{},
	EndpointId: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aiSearchEndpoint.AiSearchEndpointProviderConfig,
	ReplicaCount: *f64,
	TargetQps: *f64,
	UsagePolicyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.endpointType">EndpointType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#endpoint_type AiSearchEndpoint#endpoint_type}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#parent AiSearchEndpoint#parent}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#budget_policy_id AiSearchEndpoint#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.customTags">CustomTags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#custom_tags AiSearchEndpoint#custom_tags}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.endpointId">EndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#endpoint_id AiSearchEndpoint#endpoint_id}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig">AiSearchEndpointProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#provider_config AiSearchEndpoint#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.replicaCount">ReplicaCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#replica_count AiSearchEndpoint#replica_count}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.targetQps">TargetQps</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#target_qps AiSearchEndpoint#target_qps}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.usagePolicyId">UsagePolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#usage_policy_id AiSearchEndpoint#usage_policy_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.endpointType"></a>

```go
EndpointType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#endpoint_type AiSearchEndpoint#endpoint_type}.

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#parent AiSearchEndpoint#parent}.

---

##### `BudgetPolicyId`<sup>Optional</sup> <a name="BudgetPolicyId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.budgetPolicyId"></a>

```go
BudgetPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#budget_policy_id AiSearchEndpoint#budget_policy_id}.

---

##### `CustomTags`<sup>Optional</sup> <a name="CustomTags" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.customTags"></a>

```go
CustomTags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#custom_tags AiSearchEndpoint#custom_tags}.

---

##### `EndpointId`<sup>Optional</sup> <a name="EndpointId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.endpointId"></a>

```go
EndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#endpoint_id AiSearchEndpoint#endpoint_id}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.providerConfig"></a>

```go
ProviderConfig AiSearchEndpointProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig">AiSearchEndpointProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#provider_config AiSearchEndpoint#provider_config}.

---

##### `ReplicaCount`<sup>Optional</sup> <a name="ReplicaCount" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.replicaCount"></a>

```go
ReplicaCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#replica_count AiSearchEndpoint#replica_count}.

---

##### `TargetQps`<sup>Optional</sup> <a name="TargetQps" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.targetQps"></a>

```go
TargetQps *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#target_qps AiSearchEndpoint#target_qps}.

---

##### `UsagePolicyId`<sup>Optional</sup> <a name="UsagePolicyId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.usagePolicyId"></a>

```go
UsagePolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#usage_policy_id AiSearchEndpoint#usage_policy_id}.

---

### AiSearchEndpointCustomTags <a name="AiSearchEndpointCustomTags" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aisearchendpoint"

&aisearchendpoint.AiSearchEndpointCustomTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#key AiSearchEndpoint#key}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#value AiSearchEndpoint#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#key AiSearchEndpoint#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#value AiSearchEndpoint#value}.

---

### AiSearchEndpointEndpointStatus <a name="AiSearchEndpointEndpointStatus" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aisearchendpoint"

&aisearchendpoint.AiSearchEndpointEndpointStatus {

}
```


### AiSearchEndpointProviderConfig <a name="AiSearchEndpointProviderConfig" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aisearchendpoint"

&aisearchendpoint.AiSearchEndpointProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#workspace_id AiSearchEndpoint#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#workspace_id AiSearchEndpoint#workspace_id}.

---

### AiSearchEndpointScalingInfo <a name="AiSearchEndpointScalingInfo" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aisearchendpoint"

&aisearchendpoint.AiSearchEndpointScalingInfo {
	RequestedTargetQps: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfo.property.requestedTargetQps">RequestedTargetQps</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#requested_target_qps AiSearchEndpoint#requested_target_qps}. |

---

##### `RequestedTargetQps`<sup>Optional</sup> <a name="RequestedTargetQps" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfo.property.requestedTargetQps"></a>

```go
RequestedTargetQps *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#requested_target_qps AiSearchEndpoint#requested_target_qps}.

---

### AiSearchEndpointThroughputInfo <a name="AiSearchEndpointThroughputInfo" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aisearchendpoint"

&aisearchendpoint.AiSearchEndpointThroughputInfo {
	MaximumConcurrencyAllowed: *f64,
	MinimalConcurrencyAllowed: *f64,
	RequestedConcurrency: *f64,
	RequestedNumReplicas: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.maximumConcurrencyAllowed">MaximumConcurrencyAllowed</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#maximum_concurrency_allowed AiSearchEndpoint#maximum_concurrency_allowed}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.minimalConcurrencyAllowed">MinimalConcurrencyAllowed</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#minimal_concurrency_allowed AiSearchEndpoint#minimal_concurrency_allowed}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.requestedConcurrency">RequestedConcurrency</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#requested_concurrency AiSearchEndpoint#requested_concurrency}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.requestedNumReplicas">RequestedNumReplicas</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#requested_num_replicas AiSearchEndpoint#requested_num_replicas}. |

---

##### `MaximumConcurrencyAllowed`<sup>Optional</sup> <a name="MaximumConcurrencyAllowed" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.maximumConcurrencyAllowed"></a>

```go
MaximumConcurrencyAllowed *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#maximum_concurrency_allowed AiSearchEndpoint#maximum_concurrency_allowed}.

---

##### `MinimalConcurrencyAllowed`<sup>Optional</sup> <a name="MinimalConcurrencyAllowed" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.minimalConcurrencyAllowed"></a>

```go
MinimalConcurrencyAllowed *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#minimal_concurrency_allowed AiSearchEndpoint#minimal_concurrency_allowed}.

---

##### `RequestedConcurrency`<sup>Optional</sup> <a name="RequestedConcurrency" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.requestedConcurrency"></a>

```go
RequestedConcurrency *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#requested_concurrency AiSearchEndpoint#requested_concurrency}.

---

##### `RequestedNumReplicas`<sup>Optional</sup> <a name="RequestedNumReplicas" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.requestedNumReplicas"></a>

```go
RequestedNumReplicas *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/ai_search_endpoint#requested_num_replicas AiSearchEndpoint#requested_num_replicas}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiSearchEndpointCustomTagsList <a name="AiSearchEndpointCustomTagsList" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aisearchendpoint"

aisearchendpoint.NewAiSearchEndpointCustomTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AiSearchEndpointCustomTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.get"></a>

```go
func Get(index *f64) AiSearchEndpointCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiSearchEndpointCustomTagsOutputReference <a name="AiSearchEndpointCustomTagsOutputReference" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aisearchendpoint"

aisearchendpoint.NewAiSearchEndpointCustomTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AiSearchEndpointCustomTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiSearchEndpointEndpointStatusOutputReference <a name="AiSearchEndpointEndpointStatusOutputReference" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aisearchendpoint"

aisearchendpoint.NewAiSearchEndpointEndpointStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiSearchEndpointEndpointStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatus">AiSearchEndpointEndpointStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() AiSearchEndpointEndpointStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatus">AiSearchEndpointEndpointStatus</a>

---


### AiSearchEndpointProviderConfigOutputReference <a name="AiSearchEndpointProviderConfigOutputReference" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aisearchendpoint"

aisearchendpoint.NewAiSearchEndpointProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiSearchEndpointProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AiSearchEndpointScalingInfoOutputReference <a name="AiSearchEndpointScalingInfoOutputReference" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aisearchendpoint"

aisearchendpoint.NewAiSearchEndpointScalingInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiSearchEndpointScalingInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.resetRequestedTargetQps">ResetRequestedTargetQps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRequestedTargetQps` <a name="ResetRequestedTargetQps" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.resetRequestedTargetQps"></a>

```go
func ResetRequestedTargetQps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.requestedTargetQpsInput">RequestedTargetQpsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.requestedTargetQps">RequestedTargetQps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfo">AiSearchEndpointScalingInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `RequestedTargetQpsInput`<sup>Optional</sup> <a name="RequestedTargetQpsInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.requestedTargetQpsInput"></a>

```go
func RequestedTargetQpsInput() *f64
```

- *Type:* *f64

---

##### `RequestedTargetQps`<sup>Required</sup> <a name="RequestedTargetQps" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.requestedTargetQps"></a>

```go
func RequestedTargetQps() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() AiSearchEndpointScalingInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfo">AiSearchEndpointScalingInfo</a>

---


### AiSearchEndpointThroughputInfoOutputReference <a name="AiSearchEndpointThroughputInfoOutputReference" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aisearchendpoint"

aisearchendpoint.NewAiSearchEndpointThroughputInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AiSearchEndpointThroughputInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetMaximumConcurrencyAllowed">ResetMaximumConcurrencyAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetMinimalConcurrencyAllowed">ResetMinimalConcurrencyAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetRequestedConcurrency">ResetRequestedConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetRequestedNumReplicas">ResetRequestedNumReplicas</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumConcurrencyAllowed` <a name="ResetMaximumConcurrencyAllowed" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetMaximumConcurrencyAllowed"></a>

```go
func ResetMaximumConcurrencyAllowed()
```

##### `ResetMinimalConcurrencyAllowed` <a name="ResetMinimalConcurrencyAllowed" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetMinimalConcurrencyAllowed"></a>

```go
func ResetMinimalConcurrencyAllowed()
```

##### `ResetRequestedConcurrency` <a name="ResetRequestedConcurrency" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetRequestedConcurrency"></a>

```go
func ResetRequestedConcurrency()
```

##### `ResetRequestedNumReplicas` <a name="ResetRequestedNumReplicas" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetRequestedNumReplicas"></a>

```go
func ResetRequestedNumReplicas()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.changeRequestMessage">ChangeRequestMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.changeRequestState">ChangeRequestState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.currentConcurrency">CurrentConcurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.currentConcurrencyUtilizationPercentage">CurrentConcurrencyUtilizationPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.currentNumReplicas">CurrentNumReplicas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowedInput">MaximumConcurrencyAllowedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowedInput">MinimalConcurrencyAllowedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrencyInput">RequestedConcurrencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicasInput">RequestedNumReplicasInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowed">MaximumConcurrencyAllowed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowed">MinimalConcurrencyAllowed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrency">RequestedConcurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicas">RequestedNumReplicas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo">AiSearchEndpointThroughputInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChangeRequestMessage`<sup>Required</sup> <a name="ChangeRequestMessage" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.changeRequestMessage"></a>

```go
func ChangeRequestMessage() *string
```

- *Type:* *string

---

##### `ChangeRequestState`<sup>Required</sup> <a name="ChangeRequestState" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.changeRequestState"></a>

```go
func ChangeRequestState() *string
```

- *Type:* *string

---

##### `CurrentConcurrency`<sup>Required</sup> <a name="CurrentConcurrency" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.currentConcurrency"></a>

```go
func CurrentConcurrency() *f64
```

- *Type:* *f64

---

##### `CurrentConcurrencyUtilizationPercentage`<sup>Required</sup> <a name="CurrentConcurrencyUtilizationPercentage" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.currentConcurrencyUtilizationPercentage"></a>

```go
func CurrentConcurrencyUtilizationPercentage() *f64
```

- *Type:* *f64

---

##### `CurrentNumReplicas`<sup>Required</sup> <a name="CurrentNumReplicas" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.currentNumReplicas"></a>

```go
func CurrentNumReplicas() *f64
```

- *Type:* *f64

---

##### `MaximumConcurrencyAllowedInput`<sup>Optional</sup> <a name="MaximumConcurrencyAllowedInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowedInput"></a>

```go
func MaximumConcurrencyAllowedInput() *f64
```

- *Type:* *f64

---

##### `MinimalConcurrencyAllowedInput`<sup>Optional</sup> <a name="MinimalConcurrencyAllowedInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowedInput"></a>

```go
func MinimalConcurrencyAllowedInput() *f64
```

- *Type:* *f64

---

##### `RequestedConcurrencyInput`<sup>Optional</sup> <a name="RequestedConcurrencyInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrencyInput"></a>

```go
func RequestedConcurrencyInput() *f64
```

- *Type:* *f64

---

##### `RequestedNumReplicasInput`<sup>Optional</sup> <a name="RequestedNumReplicasInput" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicasInput"></a>

```go
func RequestedNumReplicasInput() *f64
```

- *Type:* *f64

---

##### `MaximumConcurrencyAllowed`<sup>Required</sup> <a name="MaximumConcurrencyAllowed" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowed"></a>

```go
func MaximumConcurrencyAllowed() *f64
```

- *Type:* *f64

---

##### `MinimalConcurrencyAllowed`<sup>Required</sup> <a name="MinimalConcurrencyAllowed" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowed"></a>

```go
func MinimalConcurrencyAllowed() *f64
```

- *Type:* *f64

---

##### `RequestedConcurrency`<sup>Required</sup> <a name="RequestedConcurrency" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrency"></a>

```go
func RequestedConcurrency() *f64
```

- *Type:* *f64

---

##### `RequestedNumReplicas`<sup>Required</sup> <a name="RequestedNumReplicas" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicas"></a>

```go
func RequestedNumReplicas() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() AiSearchEndpointThroughputInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo">AiSearchEndpointThroughputInfo</a>

---



