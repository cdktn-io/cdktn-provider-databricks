# `postgresEndpoint` Submodule <a name="`postgresEndpoint` Submodule" id="@cdktn/provider-databricks.postgresEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresEndpoint <a name="PostgresEndpoint" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint databricks_postgres_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/postgresendpoint"

postgresendpoint.NewPostgresEndpoint(scope Construct, id *string, config PostgresEndpointConfig) PostgresEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig">PostgresEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig">PostgresEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.resetReplaceExisting">ResetReplaceExisting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.resetSpec">ResetSpec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.putProviderConfig"></a>

```go
func PutProviderConfig(value PostgresEndpointProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfig">PostgresEndpointProviderConfig</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.putSpec"></a>

```go
func PutSpec(value PostgresEndpointSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec">PostgresEndpointSpec</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetReplaceExisting` <a name="ResetReplaceExisting" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.resetReplaceExisting"></a>

```go
func ResetReplaceExisting()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.resetSpec"></a>

```go
func ResetSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PostgresEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/postgresendpoint"

postgresendpoint.PostgresEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/postgresendpoint"

postgresendpoint.PostgresEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/postgresendpoint"

postgresendpoint.PostgresEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/postgresendpoint"

postgresendpoint.PostgresEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PostgresEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PostgresEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PostgresEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PostgresEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference">PostgresEndpointProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference">PostgresEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference">PostgresEndpointStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.endpointIdInput">EndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.replaceExistingInput">ReplaceExistingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.specInput">SpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.endpointId">EndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.replaceExisting">ReplaceExisting</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.providerConfig"></a>

```go
func ProviderConfig() PostgresEndpointProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference">PostgresEndpointProviderConfigOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.spec"></a>

```go
func Spec() PostgresEndpointSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference">PostgresEndpointSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.status"></a>

```go
func Status() PostgresEndpointStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference">PostgresEndpointStatusOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `EndpointIdInput`<sup>Optional</sup> <a name="EndpointIdInput" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.endpointIdInput"></a>

```go
func EndpointIdInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ReplaceExistingInput`<sup>Optional</sup> <a name="ReplaceExistingInput" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.replaceExistingInput"></a>

```go
func ReplaceExistingInput() interface{}
```

- *Type:* interface{}

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.specInput"></a>

```go
func SpecInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.endpointId"></a>

```go
func EndpointId() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `ReplaceExisting`<sup>Required</sup> <a name="ReplaceExisting" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.replaceExisting"></a>

```go
func ReplaceExisting() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresEndpointConfig <a name="PostgresEndpointConfig" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/postgresendpoint"

&postgresendpoint.PostgresEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EndpointId: *string,
	Parent: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.postgresEndpoint.PostgresEndpointProviderConfig,
	ReplaceExisting: interface{},
	Spec: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.postgresEndpoint.PostgresEndpointSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.endpointId">EndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#endpoint_id PostgresEndpoint#endpoint_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#parent PostgresEndpoint#parent}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfig">PostgresEndpointProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#provider_config PostgresEndpoint#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.replaceExisting">ReplaceExisting</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#replace_existing PostgresEndpoint#replace_existing}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec">PostgresEndpointSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#spec PostgresEndpoint#spec}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.endpointId"></a>

```go
EndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#endpoint_id PostgresEndpoint#endpoint_id}.

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#parent PostgresEndpoint#parent}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.providerConfig"></a>

```go
ProviderConfig PostgresEndpointProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfig">PostgresEndpointProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#provider_config PostgresEndpoint#provider_config}.

---

##### `ReplaceExisting`<sup>Optional</sup> <a name="ReplaceExisting" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.replaceExisting"></a>

```go
ReplaceExisting interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#replace_existing PostgresEndpoint#replace_existing}.

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointConfig.property.spec"></a>

```go
Spec PostgresEndpointSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec">PostgresEndpointSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#spec PostgresEndpoint#spec}.

---

### PostgresEndpointProviderConfig <a name="PostgresEndpointProviderConfig" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/postgresendpoint"

&postgresendpoint.PostgresEndpointProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#workspace_id PostgresEndpoint#workspace_id}. |

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#workspace_id PostgresEndpoint#workspace_id}.

---

### PostgresEndpointSpec <a name="PostgresEndpointSpec" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/postgresendpoint"

&postgresendpoint.PostgresEndpointSpec {
	EndpointType: *string,
	AutoscalingLimitMaxCu: *f64,
	AutoscalingLimitMinCu: *f64,
	Disabled: interface{},
	Group: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.postgresEndpoint.PostgresEndpointSpecGroup,
	NoSuspension: interface{},
	Settings: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.postgresEndpoint.PostgresEndpointSpecSettings,
	SuspendTimeoutDuration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.endpointType">EndpointType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#endpoint_type PostgresEndpoint#endpoint_type}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.autoscalingLimitMaxCu">AutoscalingLimitMaxCu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#autoscaling_limit_max_cu PostgresEndpoint#autoscaling_limit_max_cu}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.autoscalingLimitMinCu">AutoscalingLimitMinCu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#autoscaling_limit_min_cu PostgresEndpoint#autoscaling_limit_min_cu}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.disabled">Disabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#disabled PostgresEndpoint#disabled}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.group">Group</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroup">PostgresEndpointSpecGroup</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#group PostgresEndpoint#group}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.noSuspension">NoSuspension</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#no_suspension PostgresEndpoint#no_suspension}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettings">PostgresEndpointSpecSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#settings PostgresEndpoint#settings}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.suspendTimeoutDuration">SuspendTimeoutDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#suspend_timeout_duration PostgresEndpoint#suspend_timeout_duration}. |

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.endpointType"></a>

```go
EndpointType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#endpoint_type PostgresEndpoint#endpoint_type}.

---

##### `AutoscalingLimitMaxCu`<sup>Optional</sup> <a name="AutoscalingLimitMaxCu" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.autoscalingLimitMaxCu"></a>

```go
AutoscalingLimitMaxCu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#autoscaling_limit_max_cu PostgresEndpoint#autoscaling_limit_max_cu}.

---

##### `AutoscalingLimitMinCu`<sup>Optional</sup> <a name="AutoscalingLimitMinCu" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.autoscalingLimitMinCu"></a>

```go
AutoscalingLimitMinCu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#autoscaling_limit_min_cu PostgresEndpoint#autoscaling_limit_min_cu}.

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#disabled PostgresEndpoint#disabled}.

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.group"></a>

```go
Group PostgresEndpointSpecGroup
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroup">PostgresEndpointSpecGroup</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#group PostgresEndpoint#group}.

---

##### `NoSuspension`<sup>Optional</sup> <a name="NoSuspension" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.noSuspension"></a>

```go
NoSuspension interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#no_suspension PostgresEndpoint#no_suspension}.

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.settings"></a>

```go
Settings PostgresEndpointSpecSettings
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettings">PostgresEndpointSpecSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#settings PostgresEndpoint#settings}.

---

##### `SuspendTimeoutDuration`<sup>Optional</sup> <a name="SuspendTimeoutDuration" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpec.property.suspendTimeoutDuration"></a>

```go
SuspendTimeoutDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#suspend_timeout_duration PostgresEndpoint#suspend_timeout_duration}.

---

### PostgresEndpointSpecGroup <a name="PostgresEndpointSpecGroup" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/postgresendpoint"

&postgresendpoint.PostgresEndpointSpecGroup {
	Max: *f64,
	Min: *f64,
	EnableReadableSecondaries: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroup.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#max PostgresEndpoint#max}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroup.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#min PostgresEndpoint#min}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroup.property.enableReadableSecondaries">EnableReadableSecondaries</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#enable_readable_secondaries PostgresEndpoint#enable_readable_secondaries}. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroup.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#max PostgresEndpoint#max}.

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroup.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#min PostgresEndpoint#min}.

---

##### `EnableReadableSecondaries`<sup>Optional</sup> <a name="EnableReadableSecondaries" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroup.property.enableReadableSecondaries"></a>

```go
EnableReadableSecondaries interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#enable_readable_secondaries PostgresEndpoint#enable_readable_secondaries}.

---

### PostgresEndpointSpecSettings <a name="PostgresEndpointSpecSettings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/postgresendpoint"

&postgresendpoint.PostgresEndpointSpecSettings {
	PgSettings: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettings.property.pgSettings">PgSettings</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#pg_settings PostgresEndpoint#pg_settings}. |

---

##### `PgSettings`<sup>Optional</sup> <a name="PgSettings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettings.property.pgSettings"></a>

```go
PgSettings *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#pg_settings PostgresEndpoint#pg_settings}.

---

### PostgresEndpointStatus <a name="PostgresEndpointStatus" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/postgresendpoint"

&postgresendpoint.PostgresEndpointStatus {

}
```


### PostgresEndpointStatusGroup <a name="PostgresEndpointStatusGroup" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/postgresendpoint"

&postgresendpoint.PostgresEndpointStatusGroup {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroup.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#max PostgresEndpoint#max}. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroup.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#min PostgresEndpoint#min}. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroup.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#max PostgresEndpoint#max}.

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroup.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#min PostgresEndpoint#min}.

---

### PostgresEndpointStatusHosts <a name="PostgresEndpointStatusHosts" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHosts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHosts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/postgresendpoint"

&postgresendpoint.PostgresEndpointStatusHosts {

}
```


### PostgresEndpointStatusSettings <a name="PostgresEndpointStatusSettings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/postgresendpoint"

&postgresendpoint.PostgresEndpointStatusSettings {
	PgSettings: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettings.property.pgSettings">PgSettings</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#pg_settings PostgresEndpoint#pg_settings}. |

---

##### `PgSettings`<sup>Optional</sup> <a name="PgSettings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettings.property.pgSettings"></a>

```go
PgSettings *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/postgres_endpoint#pg_settings PostgresEndpoint#pg_settings}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresEndpointProviderConfigOutputReference <a name="PostgresEndpointProviderConfigOutputReference" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/postgresendpoint"

postgresendpoint.NewPostgresEndpointProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresEndpointProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PostgresEndpointSpecGroupOutputReference <a name="PostgresEndpointSpecGroupOutputReference" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/postgresendpoint"

postgresendpoint.NewPostgresEndpointSpecGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresEndpointSpecGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.resetEnableReadableSecondaries">ResetEnableReadableSecondaries</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableReadableSecondaries` <a name="ResetEnableReadableSecondaries" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.resetEnableReadableSecondaries"></a>

```go
func ResetEnableReadableSecondaries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.enableReadableSecondariesInput">EnableReadableSecondariesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.enableReadableSecondaries">EnableReadableSecondaries</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableReadableSecondariesInput`<sup>Optional</sup> <a name="EnableReadableSecondariesInput" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.enableReadableSecondariesInput"></a>

```go
func EnableReadableSecondariesInput() interface{}
```

- *Type:* interface{}

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `EnableReadableSecondaries`<sup>Required</sup> <a name="EnableReadableSecondaries" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.enableReadableSecondaries"></a>

```go
func EnableReadableSecondaries() interface{}
```

- *Type:* interface{}

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PostgresEndpointSpecOutputReference <a name="PostgresEndpointSpecOutputReference" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/postgresendpoint"

postgresendpoint.NewPostgresEndpointSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresEndpointSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.putGroup">PutGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetAutoscalingLimitMaxCu">ResetAutoscalingLimitMaxCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetAutoscalingLimitMinCu">ResetAutoscalingLimitMinCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetNoSuspension">ResetNoSuspension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetSuspendTimeoutDuration">ResetSuspendTimeoutDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGroup` <a name="PutGroup" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.putGroup"></a>

```go
func PutGroup(value PostgresEndpointSpecGroup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.putGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroup">PostgresEndpointSpecGroup</a>

---

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.putSettings"></a>

```go
func PutSettings(value PostgresEndpointSpecSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettings">PostgresEndpointSpecSettings</a>

---

##### `ResetAutoscalingLimitMaxCu` <a name="ResetAutoscalingLimitMaxCu" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetAutoscalingLimitMaxCu"></a>

```go
func ResetAutoscalingLimitMaxCu()
```

##### `ResetAutoscalingLimitMinCu` <a name="ResetAutoscalingLimitMinCu" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetAutoscalingLimitMinCu"></a>

```go
func ResetAutoscalingLimitMinCu()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetGroup"></a>

```go
func ResetGroup()
```

##### `ResetNoSuspension` <a name="ResetNoSuspension" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetNoSuspension"></a>

```go
func ResetNoSuspension()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetSettings"></a>

```go
func ResetSettings()
```

##### `ResetSuspendTimeoutDuration` <a name="ResetSuspendTimeoutDuration" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.resetSuspendTimeoutDuration"></a>

```go
func ResetSuspendTimeoutDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.group">Group</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference">PostgresEndpointSpecGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference">PostgresEndpointSpecSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.autoscalingLimitMaxCuInput">AutoscalingLimitMaxCuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.autoscalingLimitMinCuInput">AutoscalingLimitMinCuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.groupInput">GroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.noSuspensionInput">NoSuspensionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.settingsInput">SettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.suspendTimeoutDurationInput">SuspendTimeoutDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.autoscalingLimitMaxCu">AutoscalingLimitMaxCu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.autoscalingLimitMinCu">AutoscalingLimitMinCu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.noSuspension">NoSuspension</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.suspendTimeoutDuration">SuspendTimeoutDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.group"></a>

```go
func Group() PostgresEndpointSpecGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecGroupOutputReference">PostgresEndpointSpecGroupOutputReference</a>

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.settings"></a>

```go
func Settings() PostgresEndpointSpecSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference">PostgresEndpointSpecSettingsOutputReference</a>

---

##### `AutoscalingLimitMaxCuInput`<sup>Optional</sup> <a name="AutoscalingLimitMaxCuInput" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.autoscalingLimitMaxCuInput"></a>

```go
func AutoscalingLimitMaxCuInput() *f64
```

- *Type:* *f64

---

##### `AutoscalingLimitMinCuInput`<sup>Optional</sup> <a name="AutoscalingLimitMinCuInput" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.autoscalingLimitMinCuInput"></a>

```go
func AutoscalingLimitMinCuInput() *f64
```

- *Type:* *f64

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.endpointTypeInput"></a>

```go
func EndpointTypeInput() *string
```

- *Type:* *string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.groupInput"></a>

```go
func GroupInput() interface{}
```

- *Type:* interface{}

---

##### `NoSuspensionInput`<sup>Optional</sup> <a name="NoSuspensionInput" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.noSuspensionInput"></a>

```go
func NoSuspensionInput() interface{}
```

- *Type:* interface{}

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.settingsInput"></a>

```go
func SettingsInput() interface{}
```

- *Type:* interface{}

---

##### `SuspendTimeoutDurationInput`<sup>Optional</sup> <a name="SuspendTimeoutDurationInput" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.suspendTimeoutDurationInput"></a>

```go
func SuspendTimeoutDurationInput() *string
```

- *Type:* *string

---

##### `AutoscalingLimitMaxCu`<sup>Required</sup> <a name="AutoscalingLimitMaxCu" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.autoscalingLimitMaxCu"></a>

```go
func AutoscalingLimitMaxCu() *f64
```

- *Type:* *f64

---

##### `AutoscalingLimitMinCu`<sup>Required</sup> <a name="AutoscalingLimitMinCu" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.autoscalingLimitMinCu"></a>

```go
func AutoscalingLimitMinCu() *f64
```

- *Type:* *f64

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `NoSuspension`<sup>Required</sup> <a name="NoSuspension" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.noSuspension"></a>

```go
func NoSuspension() interface{}
```

- *Type:* interface{}

---

##### `SuspendTimeoutDuration`<sup>Required</sup> <a name="SuspendTimeoutDuration" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.suspendTimeoutDuration"></a>

```go
func SuspendTimeoutDuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PostgresEndpointSpecSettingsOutputReference <a name="PostgresEndpointSpecSettingsOutputReference" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/postgresendpoint"

postgresendpoint.NewPostgresEndpointSpecSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresEndpointSpecSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.resetPgSettings">ResetPgSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPgSettings` <a name="ResetPgSettings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.resetPgSettings"></a>

```go
func ResetPgSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.property.pgSettingsInput">PgSettingsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.property.pgSettings">PgSettings</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PgSettingsInput`<sup>Optional</sup> <a name="PgSettingsInput" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.property.pgSettingsInput"></a>

```go
func PgSettingsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PgSettings`<sup>Required</sup> <a name="PgSettings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.property.pgSettings"></a>

```go
func PgSettings() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointSpecSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PostgresEndpointStatusGroupOutputReference <a name="PostgresEndpointStatusGroupOutputReference" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/postgresendpoint"

postgresendpoint.NewPostgresEndpointStatusGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresEndpointStatusGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.enableReadableSecondaries">EnableReadableSecondaries</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroup">PostgresEndpointStatusGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableReadableSecondaries`<sup>Required</sup> <a name="EnableReadableSecondaries" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.enableReadableSecondaries"></a>

```go
func EnableReadableSecondaries() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() PostgresEndpointStatusGroup
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroup">PostgresEndpointStatusGroup</a>

---


### PostgresEndpointStatusHostsOutputReference <a name="PostgresEndpointStatusHostsOutputReference" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/postgresendpoint"

postgresendpoint.NewPostgresEndpointStatusHostsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresEndpointStatusHostsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.property.readOnlyHost">ReadOnlyHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHosts">PostgresEndpointStatusHosts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `ReadOnlyHost`<sup>Required</sup> <a name="ReadOnlyHost" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.property.readOnlyHost"></a>

```go
func ReadOnlyHost() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference.property.internalValue"></a>

```go
func InternalValue() PostgresEndpointStatusHosts
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHosts">PostgresEndpointStatusHosts</a>

---


### PostgresEndpointStatusOutputReference <a name="PostgresEndpointStatusOutputReference" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/postgresendpoint"

postgresendpoint.NewPostgresEndpointStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresEndpointStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.autoscalingLimitMaxCu">AutoscalingLimitMaxCu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.autoscalingLimitMinCu">AutoscalingLimitMinCu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.currentState">CurrentState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.disabled">Disabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.endpointId">EndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.group">Group</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference">PostgresEndpointStatusGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.hosts">Hosts</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference">PostgresEndpointStatusHostsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.pendingState">PendingState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference">PostgresEndpointStatusSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.suspendTimeoutDuration">SuspendTimeoutDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatus">PostgresEndpointStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoscalingLimitMaxCu`<sup>Required</sup> <a name="AutoscalingLimitMaxCu" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.autoscalingLimitMaxCu"></a>

```go
func AutoscalingLimitMaxCu() *f64
```

- *Type:* *f64

---

##### `AutoscalingLimitMinCu`<sup>Required</sup> <a name="AutoscalingLimitMinCu" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.autoscalingLimitMinCu"></a>

```go
func AutoscalingLimitMinCu() *f64
```

- *Type:* *f64

---

##### `CurrentState`<sup>Required</sup> <a name="CurrentState" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.currentState"></a>

```go
func CurrentState() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.disabled"></a>

```go
func Disabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.endpointId"></a>

```go
func EndpointId() *string
```

- *Type:* *string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.group"></a>

```go
func Group() PostgresEndpointStatusGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusGroupOutputReference">PostgresEndpointStatusGroupOutputReference</a>

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.hosts"></a>

```go
func Hosts() PostgresEndpointStatusHostsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusHostsOutputReference">PostgresEndpointStatusHostsOutputReference</a>

---

##### `PendingState`<sup>Required</sup> <a name="PendingState" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.pendingState"></a>

```go
func PendingState() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.settings"></a>

```go
func Settings() PostgresEndpointStatusSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference">PostgresEndpointStatusSettingsOutputReference</a>

---

##### `SuspendTimeoutDuration`<sup>Required</sup> <a name="SuspendTimeoutDuration" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.suspendTimeoutDuration"></a>

```go
func SuspendTimeoutDuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() PostgresEndpointStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatus">PostgresEndpointStatus</a>

---


### PostgresEndpointStatusSettingsOutputReference <a name="PostgresEndpointStatusSettingsOutputReference" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/postgresendpoint"

postgresendpoint.NewPostgresEndpointStatusSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresEndpointStatusSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.resetPgSettings">ResetPgSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPgSettings` <a name="ResetPgSettings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.resetPgSettings"></a>

```go
func ResetPgSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.property.pgSettingsInput">PgSettingsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.property.pgSettings">PgSettings</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettings">PostgresEndpointStatusSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PgSettingsInput`<sup>Optional</sup> <a name="PgSettingsInput" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.property.pgSettingsInput"></a>

```go
func PgSettingsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PgSettings`<sup>Required</sup> <a name="PgSettings" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.property.pgSettings"></a>

```go
func PgSettings() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() PostgresEndpointStatusSettings
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresEndpoint.PostgresEndpointStatusSettings">PostgresEndpointStatusSettings</a>

---



