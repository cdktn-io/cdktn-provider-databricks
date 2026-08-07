# `postgresBranch` Submodule <a name="`postgresBranch` Submodule" id="@cdktn/provider-databricks.postgresBranch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresBranch <a name="PostgresBranch" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch databricks_postgres_branch}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgresbranch"

postgresbranch.NewPostgresBranch(scope Construct, id *string, config PostgresBranchConfig) PostgresBranch
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig">PostgresBranchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig">PostgresBranchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetPurgeOnDelete">ResetPurgeOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetReplaceExisting">ResetReplaceExisting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetSpec">ResetSpec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.putProviderConfig"></a>

```go
func PutProviderConfig(value PostgresBranchProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.putSpec"></a>

```go
func PutSpec(value PostgresBranchSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetPurgeOnDelete` <a name="ResetPurgeOnDelete" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetPurgeOnDelete"></a>

```go
func ResetPurgeOnDelete()
```

##### `ResetReplaceExisting` <a name="ResetReplaceExisting" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetReplaceExisting"></a>

```go
func ResetReplaceExisting()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetSpec"></a>

```go
func ResetSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PostgresBranch resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgresbranch"

postgresbranch.PostgresBranch_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgresbranch"

postgresbranch.PostgresBranch_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgresbranch"

postgresbranch.PostgresBranch_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgresbranch"

postgresbranch.PostgresBranch_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PostgresBranch resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PostgresBranch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PostgresBranch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PostgresBranch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference">PostgresBranchProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference">PostgresBranchSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference">PostgresBranchStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.branchIdInput">BranchIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.purgeOnDeleteInput">PurgeOnDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.replaceExistingInput">ReplaceExistingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.specInput">SpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.branchId">BranchId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.purgeOnDelete">PurgeOnDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.replaceExisting">ReplaceExisting</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.providerConfig"></a>

```go
func ProviderConfig() PostgresBranchProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference">PostgresBranchProviderConfigOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.spec"></a>

```go
func Spec() PostgresBranchSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference">PostgresBranchSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.status"></a>

```go
func Status() PostgresBranchStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference">PostgresBranchStatusOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `BranchIdInput`<sup>Optional</sup> <a name="BranchIdInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.branchIdInput"></a>

```go
func BranchIdInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `PurgeOnDeleteInput`<sup>Optional</sup> <a name="PurgeOnDeleteInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.purgeOnDeleteInput"></a>

```go
func PurgeOnDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `ReplaceExistingInput`<sup>Optional</sup> <a name="ReplaceExistingInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.replaceExistingInput"></a>

```go
func ReplaceExistingInput() interface{}
```

- *Type:* interface{}

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.specInput"></a>

```go
func SpecInput() interface{}
```

- *Type:* interface{}

---

##### `BranchId`<sup>Required</sup> <a name="BranchId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.branchId"></a>

```go
func BranchId() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `PurgeOnDelete`<sup>Required</sup> <a name="PurgeOnDelete" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.purgeOnDelete"></a>

```go
func PurgeOnDelete() interface{}
```

- *Type:* interface{}

---

##### `ReplaceExisting`<sup>Required</sup> <a name="ReplaceExisting" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.replaceExisting"></a>

```go
func ReplaceExisting() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresBranchConfig <a name="PostgresBranchConfig" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgresbranch"

&postgresbranch.PostgresBranchConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BranchId: *string,
	Parent: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.postgresBranch.PostgresBranchProviderConfig,
	PurgeOnDelete: interface{},
	ReplaceExisting: interface{},
	Spec: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.postgresBranch.PostgresBranchSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.branchId">BranchId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#branch_id PostgresBranch#branch_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#parent PostgresBranch#parent}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#provider_config PostgresBranch#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.purgeOnDelete">PurgeOnDelete</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#purge_on_delete PostgresBranch#purge_on_delete}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.replaceExisting">ReplaceExisting</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#replace_existing PostgresBranch#replace_existing}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#spec PostgresBranch#spec}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BranchId`<sup>Required</sup> <a name="BranchId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.branchId"></a>

```go
BranchId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#branch_id PostgresBranch#branch_id}.

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#parent PostgresBranch#parent}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.providerConfig"></a>

```go
ProviderConfig PostgresBranchProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#provider_config PostgresBranch#provider_config}.

---

##### `PurgeOnDelete`<sup>Optional</sup> <a name="PurgeOnDelete" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.purgeOnDelete"></a>

```go
PurgeOnDelete interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#purge_on_delete PostgresBranch#purge_on_delete}.

---

##### `ReplaceExisting`<sup>Optional</sup> <a name="ReplaceExisting" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.replaceExisting"></a>

```go
ReplaceExisting interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#replace_existing PostgresBranch#replace_existing}.

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.spec"></a>

```go
Spec PostgresBranchSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#spec PostgresBranch#spec}.

---

### PostgresBranchProviderConfig <a name="PostgresBranchProviderConfig" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgresbranch"

&postgresbranch.PostgresBranchProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#workspace_id PostgresBranch#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#workspace_id PostgresBranch#workspace_id}.

---

### PostgresBranchSpec <a name="PostgresBranchSpec" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgresbranch"

&postgresbranch.PostgresBranchSpec {
	ExpireTime: *string,
	IsProtected: interface{},
	NoExpiry: interface{},
	SourceBranch: *string,
	SourceBranchLsn: *string,
	SourceBranchTime: *string,
	Ttl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.expireTime">ExpireTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#expire_time PostgresBranch#expire_time}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.isProtected">IsProtected</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#is_protected PostgresBranch#is_protected}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.noExpiry">NoExpiry</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#no_expiry PostgresBranch#no_expiry}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.sourceBranch">SourceBranch</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#source_branch PostgresBranch#source_branch}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.sourceBranchLsn">SourceBranchLsn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#source_branch_lsn PostgresBranch#source_branch_lsn}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.sourceBranchTime">SourceBranchTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#source_branch_time PostgresBranch#source_branch_time}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.ttl">Ttl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#ttl PostgresBranch#ttl}. |

---

##### `ExpireTime`<sup>Optional</sup> <a name="ExpireTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.expireTime"></a>

```go
ExpireTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#expire_time PostgresBranch#expire_time}.

---

##### `IsProtected`<sup>Optional</sup> <a name="IsProtected" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.isProtected"></a>

```go
IsProtected interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#is_protected PostgresBranch#is_protected}.

---

##### `NoExpiry`<sup>Optional</sup> <a name="NoExpiry" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.noExpiry"></a>

```go
NoExpiry interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#no_expiry PostgresBranch#no_expiry}.

---

##### `SourceBranch`<sup>Optional</sup> <a name="SourceBranch" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.sourceBranch"></a>

```go
SourceBranch *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#source_branch PostgresBranch#source_branch}.

---

##### `SourceBranchLsn`<sup>Optional</sup> <a name="SourceBranchLsn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.sourceBranchLsn"></a>

```go
SourceBranchLsn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#source_branch_lsn PostgresBranch#source_branch_lsn}.

---

##### `SourceBranchTime`<sup>Optional</sup> <a name="SourceBranchTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.sourceBranchTime"></a>

```go
SourceBranchTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#source_branch_time PostgresBranch#source_branch_time}.

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/postgres_branch#ttl PostgresBranch#ttl}.

---

### PostgresBranchStatus <a name="PostgresBranchStatus" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgresbranch"

&postgresbranch.PostgresBranchStatus {

}
```


## Classes <a name="Classes" id="Classes"></a>

### PostgresBranchProviderConfigOutputReference <a name="PostgresBranchProviderConfigOutputReference" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgresbranch"

postgresbranch.NewPostgresBranchProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresBranchProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PostgresBranchSpecOutputReference <a name="PostgresBranchSpecOutputReference" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgresbranch"

postgresbranch.NewPostgresBranchSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresBranchSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetExpireTime">ResetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetIsProtected">ResetIsProtected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetNoExpiry">ResetNoExpiry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetSourceBranch">ResetSourceBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetSourceBranchLsn">ResetSourceBranchLsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetSourceBranchTime">ResetSourceBranchTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpireTime` <a name="ResetExpireTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetExpireTime"></a>

```go
func ResetExpireTime()
```

##### `ResetIsProtected` <a name="ResetIsProtected" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetIsProtected"></a>

```go
func ResetIsProtected()
```

##### `ResetNoExpiry` <a name="ResetNoExpiry" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetNoExpiry"></a>

```go
func ResetNoExpiry()
```

##### `ResetSourceBranch` <a name="ResetSourceBranch" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetSourceBranch"></a>

```go
func ResetSourceBranch()
```

##### `ResetSourceBranchLsn` <a name="ResetSourceBranchLsn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetSourceBranchLsn"></a>

```go
func ResetSourceBranchLsn()
```

##### `ResetSourceBranchTime` <a name="ResetSourceBranchTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetSourceBranchTime"></a>

```go
func ResetSourceBranchTime()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetTtl"></a>

```go
func ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.expireTimeInput">ExpireTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.isProtectedInput">IsProtectedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.noExpiryInput">NoExpiryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchInput">SourceBranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchLsnInput">SourceBranchLsnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchTimeInput">SourceBranchTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.isProtected">IsProtected</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.noExpiry">NoExpiry</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranch">SourceBranch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchLsn">SourceBranchLsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchTime">SourceBranchTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpireTimeInput`<sup>Optional</sup> <a name="ExpireTimeInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.expireTimeInput"></a>

```go
func ExpireTimeInput() *string
```

- *Type:* *string

---

##### `IsProtectedInput`<sup>Optional</sup> <a name="IsProtectedInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.isProtectedInput"></a>

```go
func IsProtectedInput() interface{}
```

- *Type:* interface{}

---

##### `NoExpiryInput`<sup>Optional</sup> <a name="NoExpiryInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.noExpiryInput"></a>

```go
func NoExpiryInput() interface{}
```

- *Type:* interface{}

---

##### `SourceBranchInput`<sup>Optional</sup> <a name="SourceBranchInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchInput"></a>

```go
func SourceBranchInput() *string
```

- *Type:* *string

---

##### `SourceBranchLsnInput`<sup>Optional</sup> <a name="SourceBranchLsnInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchLsnInput"></a>

```go
func SourceBranchLsnInput() *string
```

- *Type:* *string

---

##### `SourceBranchTimeInput`<sup>Optional</sup> <a name="SourceBranchTimeInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchTimeInput"></a>

```go
func SourceBranchTimeInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `IsProtected`<sup>Required</sup> <a name="IsProtected" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.isProtected"></a>

```go
func IsProtected() interface{}
```

- *Type:* interface{}

---

##### `NoExpiry`<sup>Required</sup> <a name="NoExpiry" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.noExpiry"></a>

```go
func NoExpiry() interface{}
```

- *Type:* interface{}

---

##### `SourceBranch`<sup>Required</sup> <a name="SourceBranch" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranch"></a>

```go
func SourceBranch() *string
```

- *Type:* *string

---

##### `SourceBranchLsn`<sup>Required</sup> <a name="SourceBranchLsn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchLsn"></a>

```go
func SourceBranchLsn() *string
```

- *Type:* *string

---

##### `SourceBranchTime`<sup>Required</sup> <a name="SourceBranchTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchTime"></a>

```go
func SourceBranchTime() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PostgresBranchStatusOutputReference <a name="PostgresBranchStatusOutputReference" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgresbranch"

postgresbranch.NewPostgresBranchStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresBranchStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.branchId">BranchId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.currentState">CurrentState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.default">Default</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.isProtected">IsProtected</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.logicalSizeBytes">LogicalSizeBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.pendingState">PendingState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.purgeTime">PurgeTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.sourceBranch">SourceBranch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.sourceBranchLsn">SourceBranchLsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.sourceBranchTime">SourceBranchTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.stateChangeTime">StateChangeTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatus">PostgresBranchStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchId`<sup>Required</sup> <a name="BranchId" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.branchId"></a>

```go
func BranchId() *string
```

- *Type:* *string

---

##### `CurrentState`<sup>Required</sup> <a name="CurrentState" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.currentState"></a>

```go
func CurrentState() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.default"></a>

```go
func Default() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `IsProtected`<sup>Required</sup> <a name="IsProtected" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.isProtected"></a>

```go
func IsProtected() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LogicalSizeBytes`<sup>Required</sup> <a name="LogicalSizeBytes" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.logicalSizeBytes"></a>

```go
func LogicalSizeBytes() *f64
```

- *Type:* *f64

---

##### `PendingState`<sup>Required</sup> <a name="PendingState" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.pendingState"></a>

```go
func PendingState() *string
```

- *Type:* *string

---

##### `PurgeTime`<sup>Required</sup> <a name="PurgeTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.purgeTime"></a>

```go
func PurgeTime() *string
```

- *Type:* *string

---

##### `SourceBranch`<sup>Required</sup> <a name="SourceBranch" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.sourceBranch"></a>

```go
func SourceBranch() *string
```

- *Type:* *string

---

##### `SourceBranchLsn`<sup>Required</sup> <a name="SourceBranchLsn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.sourceBranchLsn"></a>

```go
func SourceBranchLsn() *string
```

- *Type:* *string

---

##### `SourceBranchTime`<sup>Required</sup> <a name="SourceBranchTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.sourceBranchTime"></a>

```go
func SourceBranchTime() *string
```

- *Type:* *string

---

##### `StateChangeTime`<sup>Required</sup> <a name="StateChangeTime" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.stateChangeTime"></a>

```go
func StateChangeTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() PostgresBranchStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatus">PostgresBranchStatus</a>

---



