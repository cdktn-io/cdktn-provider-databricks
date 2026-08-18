# `postgresDataApi` Submodule <a name="`postgresDataApi` Submodule" id="@cdktn/provider-databricks.postgresDataApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresDataApi <a name="PostgresDataApi" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api databricks_postgres_data_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgresdataapi"

postgresdataapi.NewPostgresDataApi(scope Construct, id *string, config PostgresDataApiConfig) PostgresDataApi
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig">PostgresDataApiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig">PostgresDataApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.resetSpec">ResetSpec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putProviderConfig"></a>

```go
func PutProviderConfig(value PostgresDataApiProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig">PostgresDataApiProviderConfig</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putSpec"></a>

```go
func PutSpec(value PostgresDataApiSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec">PostgresDataApiSpec</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.resetSpec"></a>

```go
func ResetSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PostgresDataApi resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgresdataapi"

postgresdataapi.PostgresDataApi_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgresdataapi"

postgresdataapi.PostgresDataApi_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgresdataapi"

postgresdataapi.PostgresDataApi_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgresdataapi"

postgresdataapi.PostgresDataApi_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PostgresDataApi resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PostgresDataApi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PostgresDataApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PostgresDataApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference">PostgresDataApiProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference">PostgresDataApiSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference">PostgresDataApiStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.specInput">SpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.providerConfig"></a>

```go
func ProviderConfig() PostgresDataApiProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference">PostgresDataApiProviderConfigOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.spec"></a>

```go
func Spec() PostgresDataApiSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference">PostgresDataApiSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.status"></a>

```go
func Status() PostgresDataApiStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference">PostgresDataApiStatusOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.specInput"></a>

```go
func SpecInput() interface{}
```

- *Type:* interface{}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApi.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresDataApiConfig <a name="PostgresDataApiConfig" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgresdataapi"

&postgresdataapi.PostgresDataApiConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Parent: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.postgresDataApi.PostgresDataApiProviderConfig,
	Spec: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.postgresDataApi.PostgresDataApiSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#parent PostgresDataApi#parent}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig">PostgresDataApiProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#provider_config PostgresDataApi#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec">PostgresDataApiSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#spec PostgresDataApi#spec}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#parent PostgresDataApi#parent}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.providerConfig"></a>

```go
ProviderConfig PostgresDataApiProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig">PostgresDataApiProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#provider_config PostgresDataApi#provider_config}.

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiConfig.property.spec"></a>

```go
Spec PostgresDataApiSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec">PostgresDataApiSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#spec PostgresDataApi#spec}.

---

### PostgresDataApiProviderConfig <a name="PostgresDataApiProviderConfig" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgresdataapi"

&postgresdataapi.PostgresDataApiProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#workspace_id PostgresDataApi#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#workspace_id PostgresDataApi#workspace_id}.

---

### PostgresDataApiSpec <a name="PostgresDataApiSpec" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgresdataapi"

&postgresdataapi.PostgresDataApiSpec {
	DbAggregatesEnabled: interface{},
	DbExtraSearchPath: *[]*string,
	DbMaxRows: *f64,
	DbSchemas: *[]*string,
	JwtCacheMaxLifetime: *string,
	JwtRoleClaimKey: *string,
	OpenapiMode: *string,
	ServerCorsAllowedOrigins: *[]*string,
	ServerTimingEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbAggregatesEnabled">DbAggregatesEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#db_aggregates_enabled PostgresDataApi#db_aggregates_enabled}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbExtraSearchPath">DbExtraSearchPath</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#db_extra_search_path PostgresDataApi#db_extra_search_path}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbMaxRows">DbMaxRows</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#db_max_rows PostgresDataApi#db_max_rows}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbSchemas">DbSchemas</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#db_schemas PostgresDataApi#db_schemas}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.jwtCacheMaxLifetime">JwtCacheMaxLifetime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#jwt_cache_max_lifetime PostgresDataApi#jwt_cache_max_lifetime}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.jwtRoleClaimKey">JwtRoleClaimKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#jwt_role_claim_key PostgresDataApi#jwt_role_claim_key}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.openapiMode">OpenapiMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#openapi_mode PostgresDataApi#openapi_mode}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.serverCorsAllowedOrigins">ServerCorsAllowedOrigins</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#server_cors_allowed_origins PostgresDataApi#server_cors_allowed_origins}. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.serverTimingEnabled">ServerTimingEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#server_timing_enabled PostgresDataApi#server_timing_enabled}. |

---

##### `DbAggregatesEnabled`<sup>Optional</sup> <a name="DbAggregatesEnabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbAggregatesEnabled"></a>

```go
DbAggregatesEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#db_aggregates_enabled PostgresDataApi#db_aggregates_enabled}.

---

##### `DbExtraSearchPath`<sup>Optional</sup> <a name="DbExtraSearchPath" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbExtraSearchPath"></a>

```go
DbExtraSearchPath *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#db_extra_search_path PostgresDataApi#db_extra_search_path}.

---

##### `DbMaxRows`<sup>Optional</sup> <a name="DbMaxRows" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbMaxRows"></a>

```go
DbMaxRows *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#db_max_rows PostgresDataApi#db_max_rows}.

---

##### `DbSchemas`<sup>Optional</sup> <a name="DbSchemas" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.dbSchemas"></a>

```go
DbSchemas *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#db_schemas PostgresDataApi#db_schemas}.

---

##### `JwtCacheMaxLifetime`<sup>Optional</sup> <a name="JwtCacheMaxLifetime" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.jwtCacheMaxLifetime"></a>

```go
JwtCacheMaxLifetime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#jwt_cache_max_lifetime PostgresDataApi#jwt_cache_max_lifetime}.

---

##### `JwtRoleClaimKey`<sup>Optional</sup> <a name="JwtRoleClaimKey" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.jwtRoleClaimKey"></a>

```go
JwtRoleClaimKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#jwt_role_claim_key PostgresDataApi#jwt_role_claim_key}.

---

##### `OpenapiMode`<sup>Optional</sup> <a name="OpenapiMode" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.openapiMode"></a>

```go
OpenapiMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#openapi_mode PostgresDataApi#openapi_mode}.

---

##### `ServerCorsAllowedOrigins`<sup>Optional</sup> <a name="ServerCorsAllowedOrigins" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.serverCorsAllowedOrigins"></a>

```go
ServerCorsAllowedOrigins *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#server_cors_allowed_origins PostgresDataApi#server_cors_allowed_origins}.

---

##### `ServerTimingEnabled`<sup>Optional</sup> <a name="ServerTimingEnabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpec.property.serverTimingEnabled"></a>

```go
ServerTimingEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/postgres_data_api#server_timing_enabled PostgresDataApi#server_timing_enabled}.

---

### PostgresDataApiStatus <a name="PostgresDataApiStatus" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgresdataapi"

&postgresdataapi.PostgresDataApiStatus {

}
```


## Classes <a name="Classes" id="Classes"></a>

### PostgresDataApiProviderConfigOutputReference <a name="PostgresDataApiProviderConfigOutputReference" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgresdataapi"

postgresdataapi.NewPostgresDataApiProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresDataApiProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PostgresDataApiSpecOutputReference <a name="PostgresDataApiSpecOutputReference" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgresdataapi"

postgresdataapi.NewPostgresDataApiSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresDataApiSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbAggregatesEnabled">ResetDbAggregatesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbExtraSearchPath">ResetDbExtraSearchPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbMaxRows">ResetDbMaxRows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbSchemas">ResetDbSchemas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetJwtCacheMaxLifetime">ResetJwtCacheMaxLifetime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetJwtRoleClaimKey">ResetJwtRoleClaimKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetOpenapiMode">ResetOpenapiMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetServerCorsAllowedOrigins">ResetServerCorsAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetServerTimingEnabled">ResetServerTimingEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDbAggregatesEnabled` <a name="ResetDbAggregatesEnabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbAggregatesEnabled"></a>

```go
func ResetDbAggregatesEnabled()
```

##### `ResetDbExtraSearchPath` <a name="ResetDbExtraSearchPath" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbExtraSearchPath"></a>

```go
func ResetDbExtraSearchPath()
```

##### `ResetDbMaxRows` <a name="ResetDbMaxRows" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbMaxRows"></a>

```go
func ResetDbMaxRows()
```

##### `ResetDbSchemas` <a name="ResetDbSchemas" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetDbSchemas"></a>

```go
func ResetDbSchemas()
```

##### `ResetJwtCacheMaxLifetime` <a name="ResetJwtCacheMaxLifetime" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetJwtCacheMaxLifetime"></a>

```go
func ResetJwtCacheMaxLifetime()
```

##### `ResetJwtRoleClaimKey` <a name="ResetJwtRoleClaimKey" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetJwtRoleClaimKey"></a>

```go
func ResetJwtRoleClaimKey()
```

##### `ResetOpenapiMode` <a name="ResetOpenapiMode" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetOpenapiMode"></a>

```go
func ResetOpenapiMode()
```

##### `ResetServerCorsAllowedOrigins` <a name="ResetServerCorsAllowedOrigins" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetServerCorsAllowedOrigins"></a>

```go
func ResetServerCorsAllowedOrigins()
```

##### `ResetServerTimingEnabled` <a name="ResetServerTimingEnabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.resetServerTimingEnabled"></a>

```go
func ResetServerTimingEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbAggregatesEnabledInput">DbAggregatesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbExtraSearchPathInput">DbExtraSearchPathInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbMaxRowsInput">DbMaxRowsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbSchemasInput">DbSchemasInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetimeInput">JwtCacheMaxLifetimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtRoleClaimKeyInput">JwtRoleClaimKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.openapiModeInput">OpenapiModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverCorsAllowedOriginsInput">ServerCorsAllowedOriginsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverTimingEnabledInput">ServerTimingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbAggregatesEnabled">DbAggregatesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbExtraSearchPath">DbExtraSearchPath</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbMaxRows">DbMaxRows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbSchemas">DbSchemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetime">JwtCacheMaxLifetime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtRoleClaimKey">JwtRoleClaimKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.openapiMode">OpenapiMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverCorsAllowedOrigins">ServerCorsAllowedOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverTimingEnabled">ServerTimingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbAggregatesEnabledInput`<sup>Optional</sup> <a name="DbAggregatesEnabledInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbAggregatesEnabledInput"></a>

```go
func DbAggregatesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DbExtraSearchPathInput`<sup>Optional</sup> <a name="DbExtraSearchPathInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbExtraSearchPathInput"></a>

```go
func DbExtraSearchPathInput() *[]*string
```

- *Type:* *[]*string

---

##### `DbMaxRowsInput`<sup>Optional</sup> <a name="DbMaxRowsInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbMaxRowsInput"></a>

```go
func DbMaxRowsInput() *f64
```

- *Type:* *f64

---

##### `DbSchemasInput`<sup>Optional</sup> <a name="DbSchemasInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbSchemasInput"></a>

```go
func DbSchemasInput() *[]*string
```

- *Type:* *[]*string

---

##### `JwtCacheMaxLifetimeInput`<sup>Optional</sup> <a name="JwtCacheMaxLifetimeInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetimeInput"></a>

```go
func JwtCacheMaxLifetimeInput() *string
```

- *Type:* *string

---

##### `JwtRoleClaimKeyInput`<sup>Optional</sup> <a name="JwtRoleClaimKeyInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtRoleClaimKeyInput"></a>

```go
func JwtRoleClaimKeyInput() *string
```

- *Type:* *string

---

##### `OpenapiModeInput`<sup>Optional</sup> <a name="OpenapiModeInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.openapiModeInput"></a>

```go
func OpenapiModeInput() *string
```

- *Type:* *string

---

##### `ServerCorsAllowedOriginsInput`<sup>Optional</sup> <a name="ServerCorsAllowedOriginsInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverCorsAllowedOriginsInput"></a>

```go
func ServerCorsAllowedOriginsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServerTimingEnabledInput`<sup>Optional</sup> <a name="ServerTimingEnabledInput" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverTimingEnabledInput"></a>

```go
func ServerTimingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DbAggregatesEnabled`<sup>Required</sup> <a name="DbAggregatesEnabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbAggregatesEnabled"></a>

```go
func DbAggregatesEnabled() interface{}
```

- *Type:* interface{}

---

##### `DbExtraSearchPath`<sup>Required</sup> <a name="DbExtraSearchPath" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbExtraSearchPath"></a>

```go
func DbExtraSearchPath() *[]*string
```

- *Type:* *[]*string

---

##### `DbMaxRows`<sup>Required</sup> <a name="DbMaxRows" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbMaxRows"></a>

```go
func DbMaxRows() *f64
```

- *Type:* *f64

---

##### `DbSchemas`<sup>Required</sup> <a name="DbSchemas" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.dbSchemas"></a>

```go
func DbSchemas() *[]*string
```

- *Type:* *[]*string

---

##### `JwtCacheMaxLifetime`<sup>Required</sup> <a name="JwtCacheMaxLifetime" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetime"></a>

```go
func JwtCacheMaxLifetime() *string
```

- *Type:* *string

---

##### `JwtRoleClaimKey`<sup>Required</sup> <a name="JwtRoleClaimKey" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.jwtRoleClaimKey"></a>

```go
func JwtRoleClaimKey() *string
```

- *Type:* *string

---

##### `OpenapiMode`<sup>Required</sup> <a name="OpenapiMode" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.openapiMode"></a>

```go
func OpenapiMode() *string
```

- *Type:* *string

---

##### `ServerCorsAllowedOrigins`<sup>Required</sup> <a name="ServerCorsAllowedOrigins" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverCorsAllowedOrigins"></a>

```go
func ServerCorsAllowedOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `ServerTimingEnabled`<sup>Required</sup> <a name="ServerTimingEnabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.serverTimingEnabled"></a>

```go
func ServerTimingEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PostgresDataApiStatusOutputReference <a name="PostgresDataApiStatusOutputReference" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgresdataapi"

postgresdataapi.NewPostgresDataApiStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresDataApiStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.availableSchemas">AvailableSchemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbAggregatesEnabled">DbAggregatesEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbExtraSearchPath">DbExtraSearchPath</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbMaxRows">DbMaxRows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbSchemas">DbSchemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.jwtCacheMaxLifetime">JwtCacheMaxLifetime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.jwtRoleClaimKey">JwtRoleClaimKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.openapiMode">OpenapiMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.serverCorsAllowedOrigins">ServerCorsAllowedOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.serverTimingEnabled">ServerTimingEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatus">PostgresDataApiStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailableSchemas`<sup>Required</sup> <a name="AvailableSchemas" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.availableSchemas"></a>

```go
func AvailableSchemas() *[]*string
```

- *Type:* *[]*string

---

##### `DbAggregatesEnabled`<sup>Required</sup> <a name="DbAggregatesEnabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbAggregatesEnabled"></a>

```go
func DbAggregatesEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DbExtraSearchPath`<sup>Required</sup> <a name="DbExtraSearchPath" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbExtraSearchPath"></a>

```go
func DbExtraSearchPath() *[]*string
```

- *Type:* *[]*string

---

##### `DbMaxRows`<sup>Required</sup> <a name="DbMaxRows" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbMaxRows"></a>

```go
func DbMaxRows() *f64
```

- *Type:* *f64

---

##### `DbSchemas`<sup>Required</sup> <a name="DbSchemas" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.dbSchemas"></a>

```go
func DbSchemas() *[]*string
```

- *Type:* *[]*string

---

##### `JwtCacheMaxLifetime`<sup>Required</sup> <a name="JwtCacheMaxLifetime" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.jwtCacheMaxLifetime"></a>

```go
func JwtCacheMaxLifetime() *string
```

- *Type:* *string

---

##### `JwtRoleClaimKey`<sup>Required</sup> <a name="JwtRoleClaimKey" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.jwtRoleClaimKey"></a>

```go
func JwtRoleClaimKey() *string
```

- *Type:* *string

---

##### `OpenapiMode`<sup>Required</sup> <a name="OpenapiMode" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.openapiMode"></a>

```go
func OpenapiMode() *string
```

- *Type:* *string

---

##### `ServerCorsAllowedOrigins`<sup>Required</sup> <a name="ServerCorsAllowedOrigins" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.serverCorsAllowedOrigins"></a>

```go
func ServerCorsAllowedOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `ServerTimingEnabled`<sup>Required</sup> <a name="ServerTimingEnabled" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.serverTimingEnabled"></a>

```go
func ServerTimingEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() PostgresDataApiStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDataApi.PostgresDataApiStatus">PostgresDataApiStatus</a>

---



