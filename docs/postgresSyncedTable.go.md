# `postgresSyncedTable` Submodule <a name="`postgresSyncedTable` Submodule" id="@cdktn/provider-databricks.postgresSyncedTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresSyncedTable <a name="PostgresSyncedTable" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table databricks_postgres_synced_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressyncedtable"

postgressyncedtable.NewPostgresSyncedTable(scope Construct, id *string, config PostgresSyncedTableConfig) PostgresSyncedTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig">PostgresSyncedTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig">PostgresSyncedTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetSpec">ResetSpec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putProviderConfig"></a>

```go
func PutProviderConfig(value PostgresSyncedTableProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putSpec"></a>

```go
func PutSpec(value PostgresSyncedTableSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.resetSpec"></a>

```go
func ResetSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PostgresSyncedTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressyncedtable"

postgressyncedtable.PostgresSyncedTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressyncedtable"

postgressyncedtable.PostgresSyncedTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressyncedtable"

postgressyncedtable.PostgresSyncedTable_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressyncedtable"

postgressyncedtable.PostgresSyncedTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PostgresSyncedTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PostgresSyncedTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PostgresSyncedTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PostgresSyncedTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference">PostgresSyncedTableProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference">PostgresSyncedTableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference">PostgresSyncedTableStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.specInput">SpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.syncedTableIdInput">SyncedTableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.syncedTableId">SyncedTableId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.providerConfig"></a>

```go
func ProviderConfig() PostgresSyncedTableProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference">PostgresSyncedTableProviderConfigOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.spec"></a>

```go
func Spec() PostgresSyncedTableSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference">PostgresSyncedTableSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.status"></a>

```go
func Status() PostgresSyncedTableStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference">PostgresSyncedTableStatusOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.specInput"></a>

```go
func SpecInput() interface{}
```

- *Type:* interface{}

---

##### `SyncedTableIdInput`<sup>Optional</sup> <a name="SyncedTableIdInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.syncedTableIdInput"></a>

```go
func SyncedTableIdInput() *string
```

- *Type:* *string

---

##### `SyncedTableId`<sup>Required</sup> <a name="SyncedTableId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.syncedTableId"></a>

```go
func SyncedTableId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresSyncedTableConfig <a name="PostgresSyncedTableConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressyncedtable"

&postgressyncedtable.PostgresSyncedTableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	SyncedTableId: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.postgresSyncedTable.PostgresSyncedTableProviderConfig,
	Spec: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.postgresSyncedTable.PostgresSyncedTableSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.syncedTableId">SyncedTableId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#synced_table_id PostgresSyncedTable#synced_table_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#provider_config PostgresSyncedTable#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#spec PostgresSyncedTable#spec}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SyncedTableId`<sup>Required</sup> <a name="SyncedTableId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.syncedTableId"></a>

```go
SyncedTableId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#synced_table_id PostgresSyncedTable#synced_table_id}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.providerConfig"></a>

```go
ProviderConfig PostgresSyncedTableProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig">PostgresSyncedTableProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#provider_config PostgresSyncedTable#provider_config}.

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableConfig.property.spec"></a>

```go
Spec PostgresSyncedTableSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec">PostgresSyncedTableSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#spec PostgresSyncedTable#spec}.

---

### PostgresSyncedTableProviderConfig <a name="PostgresSyncedTableProviderConfig" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressyncedtable"

&postgressyncedtable.PostgresSyncedTableProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#workspace_id PostgresSyncedTable#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#workspace_id PostgresSyncedTable#workspace_id}.

---

### PostgresSyncedTableSpec <a name="PostgresSyncedTableSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressyncedtable"

&postgressyncedtable.PostgresSyncedTableSpec {
	AcceleratedSync: interface{},
	Branch: *string,
	CreateDatabaseObjectsIfMissing: interface{},
	ExistingPipelineId: *string,
	ExtraColumns: interface{},
	NewPipelineSpec: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec,
	PostgresDatabase: *string,
	PrimaryKeyColumns: *[]*string,
	SchedulingPolicy: *string,
	SourceTableFullName: *string,
	TimeseriesKey: *string,
	TypeOverrides: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.acceleratedSync">AcceleratedSync</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#accelerated_sync PostgresSyncedTable#accelerated_sync}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.branch">Branch</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#branch PostgresSyncedTable#branch}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.createDatabaseObjectsIfMissing">CreateDatabaseObjectsIfMissing</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#create_database_objects_if_missing PostgresSyncedTable#create_database_objects_if_missing}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.existingPipelineId">ExistingPipelineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#existing_pipeline_id PostgresSyncedTable#existing_pipeline_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.extraColumns">ExtraColumns</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#extra_columns PostgresSyncedTable#extra_columns}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.newPipelineSpec">NewPipelineSpec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#new_pipeline_spec PostgresSyncedTable#new_pipeline_spec}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.postgresDatabase">PostgresDatabase</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#postgres_database PostgresSyncedTable#postgres_database}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.primaryKeyColumns">PrimaryKeyColumns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#primary_key_columns PostgresSyncedTable#primary_key_columns}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.schedulingPolicy">SchedulingPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#scheduling_policy PostgresSyncedTable#scheduling_policy}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.sourceTableFullName">SourceTableFullName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#source_table_full_name PostgresSyncedTable#source_table_full_name}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.timeseriesKey">TimeseriesKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#timeseries_key PostgresSyncedTable#timeseries_key}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.typeOverrides">TypeOverrides</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#type_overrides PostgresSyncedTable#type_overrides}. |

---

##### `AcceleratedSync`<sup>Optional</sup> <a name="AcceleratedSync" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.acceleratedSync"></a>

```go
AcceleratedSync interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#accelerated_sync PostgresSyncedTable#accelerated_sync}.

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#branch PostgresSyncedTable#branch}.

---

##### `CreateDatabaseObjectsIfMissing`<sup>Optional</sup> <a name="CreateDatabaseObjectsIfMissing" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.createDatabaseObjectsIfMissing"></a>

```go
CreateDatabaseObjectsIfMissing interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#create_database_objects_if_missing PostgresSyncedTable#create_database_objects_if_missing}.

---

##### `ExistingPipelineId`<sup>Optional</sup> <a name="ExistingPipelineId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.existingPipelineId"></a>

```go
ExistingPipelineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#existing_pipeline_id PostgresSyncedTable#existing_pipeline_id}.

---

##### `ExtraColumns`<sup>Optional</sup> <a name="ExtraColumns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.extraColumns"></a>

```go
ExtraColumns interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#extra_columns PostgresSyncedTable#extra_columns}.

---

##### `NewPipelineSpec`<sup>Optional</sup> <a name="NewPipelineSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.newPipelineSpec"></a>

```go
NewPipelineSpec PostgresSyncedTableSpecNewPipelineSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#new_pipeline_spec PostgresSyncedTable#new_pipeline_spec}.

---

##### `PostgresDatabase`<sup>Optional</sup> <a name="PostgresDatabase" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.postgresDatabase"></a>

```go
PostgresDatabase *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#postgres_database PostgresSyncedTable#postgres_database}.

---

##### `PrimaryKeyColumns`<sup>Optional</sup> <a name="PrimaryKeyColumns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.primaryKeyColumns"></a>

```go
PrimaryKeyColumns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#primary_key_columns PostgresSyncedTable#primary_key_columns}.

---

##### `SchedulingPolicy`<sup>Optional</sup> <a name="SchedulingPolicy" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.schedulingPolicy"></a>

```go
SchedulingPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#scheduling_policy PostgresSyncedTable#scheduling_policy}.

---

##### `SourceTableFullName`<sup>Optional</sup> <a name="SourceTableFullName" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.sourceTableFullName"></a>

```go
SourceTableFullName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#source_table_full_name PostgresSyncedTable#source_table_full_name}.

---

##### `TimeseriesKey`<sup>Optional</sup> <a name="TimeseriesKey" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.timeseriesKey"></a>

```go
TimeseriesKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#timeseries_key PostgresSyncedTable#timeseries_key}.

---

##### `TypeOverrides`<sup>Optional</sup> <a name="TypeOverrides" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpec.property.typeOverrides"></a>

```go
TypeOverrides interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#type_overrides PostgresSyncedTable#type_overrides}.

---

### PostgresSyncedTableSpecExtraColumns <a name="PostgresSyncedTableSpecExtraColumns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressyncedtable"

&postgressyncedtable.PostgresSyncedTableSpecExtraColumns {
	ColumnName: *string,
	ColumnType: *string,
	Compute: *string,
	Maintenance: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.property.columnName">ColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#column_name PostgresSyncedTable#column_name}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.property.columnType">ColumnType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#column_type PostgresSyncedTable#column_type}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.property.compute">Compute</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#compute PostgresSyncedTable#compute}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.property.maintenance">Maintenance</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#maintenance PostgresSyncedTable#maintenance}. |

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.property.columnName"></a>

```go
ColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#column_name PostgresSyncedTable#column_name}.

---

##### `ColumnType`<sup>Required</sup> <a name="ColumnType" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.property.columnType"></a>

```go
ColumnType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#column_type PostgresSyncedTable#column_type}.

---

##### `Compute`<sup>Optional</sup> <a name="Compute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.property.compute"></a>

```go
Compute *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#compute PostgresSyncedTable#compute}.

---

##### `Maintenance`<sup>Optional</sup> <a name="Maintenance" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumns.property.maintenance"></a>

```go
Maintenance *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#maintenance PostgresSyncedTable#maintenance}.

---

### PostgresSyncedTableSpecNewPipelineSpec <a name="PostgresSyncedTableSpecNewPipelineSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressyncedtable"

&postgressyncedtable.PostgresSyncedTableSpecNewPipelineSpec {
	BudgetPolicyId: *string,
	StorageCatalog: *string,
	StorageSchema: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#budget_policy_id PostgresSyncedTable#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.storageCatalog">StorageCatalog</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#storage_catalog PostgresSyncedTable#storage_catalog}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.storageSchema">StorageSchema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#storage_schema PostgresSyncedTable#storage_schema}. |

---

##### `BudgetPolicyId`<sup>Optional</sup> <a name="BudgetPolicyId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.budgetPolicyId"></a>

```go
BudgetPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#budget_policy_id PostgresSyncedTable#budget_policy_id}.

---

##### `StorageCatalog`<sup>Optional</sup> <a name="StorageCatalog" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.storageCatalog"></a>

```go
StorageCatalog *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#storage_catalog PostgresSyncedTable#storage_catalog}.

---

##### `StorageSchema`<sup>Optional</sup> <a name="StorageSchema" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec.property.storageSchema"></a>

```go
StorageSchema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#storage_schema PostgresSyncedTable#storage_schema}.

---

### PostgresSyncedTableSpecTypeOverrides <a name="PostgresSyncedTableSpecTypeOverrides" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressyncedtable"

&postgressyncedtable.PostgresSyncedTableSpecTypeOverrides {
	ColumnName: *string,
	PgType: *string,
	Size: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides.property.columnName">ColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#column_name PostgresSyncedTable#column_name}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides.property.pgType">PgType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#pg_type PostgresSyncedTable#pg_type}. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#size PostgresSyncedTable#size}. |

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides.property.columnName"></a>

```go
ColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#column_name PostgresSyncedTable#column_name}.

---

##### `PgType`<sup>Required</sup> <a name="PgType" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides.property.pgType"></a>

```go
PgType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#pg_type PostgresSyncedTable#pg_type}.

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverrides.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_synced_table#size PostgresSyncedTable#size}.

---

### PostgresSyncedTableStatus <a name="PostgresSyncedTableStatus" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressyncedtable"

&postgressyncedtable.PostgresSyncedTableStatus {

}
```


### PostgresSyncedTableStatusLastSync <a name="PostgresSyncedTableStatusLastSync" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSync.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressyncedtable"

&postgressyncedtable.PostgresSyncedTableStatusLastSync {

}
```


### PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo <a name="PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressyncedtable"

&postgressyncedtable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo {

}
```


### PostgresSyncedTableStatusOngoingSyncProgress <a name="PostgresSyncedTableStatusOngoingSyncProgress" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressyncedtable"

&postgressyncedtable.PostgresSyncedTableStatusOngoingSyncProgress {

}
```


## Classes <a name="Classes" id="Classes"></a>

### PostgresSyncedTableProviderConfigOutputReference <a name="PostgresSyncedTableProviderConfigOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressyncedtable"

postgressyncedtable.NewPostgresSyncedTableProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresSyncedTableProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PostgresSyncedTableSpecExtraColumnsList <a name="PostgresSyncedTableSpecExtraColumnsList" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressyncedtable"

postgressyncedtable.NewPostgresSyncedTableSpecExtraColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PostgresSyncedTableSpecExtraColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.get"></a>

```go
func Get(index *f64) PostgresSyncedTableSpecExtraColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PostgresSyncedTableSpecExtraColumnsOutputReference <a name="PostgresSyncedTableSpecExtraColumnsOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressyncedtable"

postgressyncedtable.NewPostgresSyncedTableSpecExtraColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PostgresSyncedTableSpecExtraColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.resetCompute">ResetCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.resetMaintenance">ResetMaintenance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompute` <a name="ResetCompute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.resetCompute"></a>

```go
func ResetCompute()
```

##### `ResetMaintenance` <a name="ResetMaintenance" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.resetMaintenance"></a>

```go
func ResetMaintenance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.columnTypeInput">ColumnTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.computeInput">ComputeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.maintenanceInput">MaintenanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.columnType">ColumnType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.compute">Compute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.maintenance">Maintenance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.columnNameInput"></a>

```go
func ColumnNameInput() *string
```

- *Type:* *string

---

##### `ColumnTypeInput`<sup>Optional</sup> <a name="ColumnTypeInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.columnTypeInput"></a>

```go
func ColumnTypeInput() *string
```

- *Type:* *string

---

##### `ComputeInput`<sup>Optional</sup> <a name="ComputeInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.computeInput"></a>

```go
func ComputeInput() *string
```

- *Type:* *string

---

##### `MaintenanceInput`<sup>Optional</sup> <a name="MaintenanceInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.maintenanceInput"></a>

```go
func MaintenanceInput() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `ColumnType`<sup>Required</sup> <a name="ColumnType" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.columnType"></a>

```go
func ColumnType() *string
```

- *Type:* *string

---

##### `Compute`<sup>Required</sup> <a name="Compute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.compute"></a>

```go
func Compute() *string
```

- *Type:* *string

---

##### `Maintenance`<sup>Required</sup> <a name="Maintenance" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.maintenance"></a>

```go
func Maintenance() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PostgresSyncedTableSpecNewPipelineSpecOutputReference <a name="PostgresSyncedTableSpecNewPipelineSpecOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressyncedtable"

postgressyncedtable.NewPostgresSyncedTableSpecNewPipelineSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresSyncedTableSpecNewPipelineSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetBudgetPolicyId">ResetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageCatalog">ResetStorageCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageSchema">ResetStorageSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBudgetPolicyId` <a name="ResetBudgetPolicyId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetBudgetPolicyId"></a>

```go
func ResetBudgetPolicyId()
```

##### `ResetStorageCatalog` <a name="ResetStorageCatalog" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageCatalog"></a>

```go
func ResetStorageCatalog()
```

##### `ResetStorageSchema` <a name="ResetStorageSchema" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageSchema"></a>

```go
func ResetStorageSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyIdInput">BudgetPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput">StorageCatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput">StorageSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalog">StorageCatalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchema">StorageSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BudgetPolicyIdInput`<sup>Optional</sup> <a name="BudgetPolicyIdInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyIdInput"></a>

```go
func BudgetPolicyIdInput() *string
```

- *Type:* *string

---

##### `StorageCatalogInput`<sup>Optional</sup> <a name="StorageCatalogInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput"></a>

```go
func StorageCatalogInput() *string
```

- *Type:* *string

---

##### `StorageSchemaInput`<sup>Optional</sup> <a name="StorageSchemaInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput"></a>

```go
func StorageSchemaInput() *string
```

- *Type:* *string

---

##### `BudgetPolicyId`<sup>Required</sup> <a name="BudgetPolicyId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyId"></a>

```go
func BudgetPolicyId() *string
```

- *Type:* *string

---

##### `StorageCatalog`<sup>Required</sup> <a name="StorageCatalog" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalog"></a>

```go
func StorageCatalog() *string
```

- *Type:* *string

---

##### `StorageSchema`<sup>Required</sup> <a name="StorageSchema" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchema"></a>

```go
func StorageSchema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PostgresSyncedTableSpecOutputReference <a name="PostgresSyncedTableSpecOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressyncedtable"

postgressyncedtable.NewPostgresSyncedTableSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresSyncedTableSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putExtraColumns">PutExtraColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putNewPipelineSpec">PutNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putTypeOverrides">PutTypeOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetAcceleratedSync">ResetAcceleratedSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing">ResetCreateDatabaseObjectsIfMissing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetExistingPipelineId">ResetExistingPipelineId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetExtraColumns">ResetExtraColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetNewPipelineSpec">ResetNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetPostgresDatabase">ResetPostgresDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetPrimaryKeyColumns">ResetPrimaryKeyColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetSchedulingPolicy">ResetSchedulingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetSourceTableFullName">ResetSourceTableFullName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetTimeseriesKey">ResetTimeseriesKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetTypeOverrides">ResetTypeOverrides</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExtraColumns` <a name="PutExtraColumns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putExtraColumns"></a>

```go
func PutExtraColumns(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putExtraColumns.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNewPipelineSpec` <a name="PutNewPipelineSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putNewPipelineSpec"></a>

```go
func PutNewPipelineSpec(value PostgresSyncedTableSpecNewPipelineSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putNewPipelineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpec">PostgresSyncedTableSpecNewPipelineSpec</a>

---

##### `PutTypeOverrides` <a name="PutTypeOverrides" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putTypeOverrides"></a>

```go
func PutTypeOverrides(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.putTypeOverrides.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAcceleratedSync` <a name="ResetAcceleratedSync" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetAcceleratedSync"></a>

```go
func ResetAcceleratedSync()
```

##### `ResetBranch` <a name="ResetBranch" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetBranch"></a>

```go
func ResetBranch()
```

##### `ResetCreateDatabaseObjectsIfMissing` <a name="ResetCreateDatabaseObjectsIfMissing" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing"></a>

```go
func ResetCreateDatabaseObjectsIfMissing()
```

##### `ResetExistingPipelineId` <a name="ResetExistingPipelineId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetExistingPipelineId"></a>

```go
func ResetExistingPipelineId()
```

##### `ResetExtraColumns` <a name="ResetExtraColumns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetExtraColumns"></a>

```go
func ResetExtraColumns()
```

##### `ResetNewPipelineSpec` <a name="ResetNewPipelineSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetNewPipelineSpec"></a>

```go
func ResetNewPipelineSpec()
```

##### `ResetPostgresDatabase` <a name="ResetPostgresDatabase" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetPostgresDatabase"></a>

```go
func ResetPostgresDatabase()
```

##### `ResetPrimaryKeyColumns` <a name="ResetPrimaryKeyColumns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetPrimaryKeyColumns"></a>

```go
func ResetPrimaryKeyColumns()
```

##### `ResetSchedulingPolicy` <a name="ResetSchedulingPolicy" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetSchedulingPolicy"></a>

```go
func ResetSchedulingPolicy()
```

##### `ResetSourceTableFullName` <a name="ResetSourceTableFullName" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetSourceTableFullName"></a>

```go
func ResetSourceTableFullName()
```

##### `ResetTimeseriesKey` <a name="ResetTimeseriesKey" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetTimeseriesKey"></a>

```go
func ResetTimeseriesKey()
```

##### `ResetTypeOverrides` <a name="ResetTypeOverrides" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.resetTypeOverrides"></a>

```go
func ResetTypeOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.extraColumns">ExtraColumns</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList">PostgresSyncedTableSpecExtraColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.newPipelineSpec">NewPipelineSpec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference">PostgresSyncedTableSpecNewPipelineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.typeOverrides">TypeOverrides</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList">PostgresSyncedTableSpecTypeOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.acceleratedSyncInput">AcceleratedSyncInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput">CreateDatabaseObjectsIfMissingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.existingPipelineIdInput">ExistingPipelineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.extraColumnsInput">ExtraColumnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.newPipelineSpecInput">NewPipelineSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.postgresDatabaseInput">PostgresDatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.primaryKeyColumnsInput">PrimaryKeyColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.schedulingPolicyInput">SchedulingPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.sourceTableFullNameInput">SourceTableFullNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.timeseriesKeyInput">TimeseriesKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.typeOverridesInput">TypeOverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.acceleratedSync">AcceleratedSync</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissing">CreateDatabaseObjectsIfMissing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.existingPipelineId">ExistingPipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.postgresDatabase">PostgresDatabase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.primaryKeyColumns">PrimaryKeyColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.schedulingPolicy">SchedulingPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.sourceTableFullName">SourceTableFullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.timeseriesKey">TimeseriesKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExtraColumns`<sup>Required</sup> <a name="ExtraColumns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.extraColumns"></a>

```go
func ExtraColumns() PostgresSyncedTableSpecExtraColumnsList
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecExtraColumnsList">PostgresSyncedTableSpecExtraColumnsList</a>

---

##### `NewPipelineSpec`<sup>Required</sup> <a name="NewPipelineSpec" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.newPipelineSpec"></a>

```go
func NewPipelineSpec() PostgresSyncedTableSpecNewPipelineSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecNewPipelineSpecOutputReference">PostgresSyncedTableSpecNewPipelineSpecOutputReference</a>

---

##### `TypeOverrides`<sup>Required</sup> <a name="TypeOverrides" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.typeOverrides"></a>

```go
func TypeOverrides() PostgresSyncedTableSpecTypeOverridesList
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList">PostgresSyncedTableSpecTypeOverridesList</a>

---

##### `AcceleratedSyncInput`<sup>Optional</sup> <a name="AcceleratedSyncInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.acceleratedSyncInput"></a>

```go
func AcceleratedSyncInput() interface{}
```

- *Type:* interface{}

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `CreateDatabaseObjectsIfMissingInput`<sup>Optional</sup> <a name="CreateDatabaseObjectsIfMissingInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput"></a>

```go
func CreateDatabaseObjectsIfMissingInput() interface{}
```

- *Type:* interface{}

---

##### `ExistingPipelineIdInput`<sup>Optional</sup> <a name="ExistingPipelineIdInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.existingPipelineIdInput"></a>

```go
func ExistingPipelineIdInput() *string
```

- *Type:* *string

---

##### `ExtraColumnsInput`<sup>Optional</sup> <a name="ExtraColumnsInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.extraColumnsInput"></a>

```go
func ExtraColumnsInput() interface{}
```

- *Type:* interface{}

---

##### `NewPipelineSpecInput`<sup>Optional</sup> <a name="NewPipelineSpecInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.newPipelineSpecInput"></a>

```go
func NewPipelineSpecInput() interface{}
```

- *Type:* interface{}

---

##### `PostgresDatabaseInput`<sup>Optional</sup> <a name="PostgresDatabaseInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.postgresDatabaseInput"></a>

```go
func PostgresDatabaseInput() *string
```

- *Type:* *string

---

##### `PrimaryKeyColumnsInput`<sup>Optional</sup> <a name="PrimaryKeyColumnsInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.primaryKeyColumnsInput"></a>

```go
func PrimaryKeyColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SchedulingPolicyInput`<sup>Optional</sup> <a name="SchedulingPolicyInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.schedulingPolicyInput"></a>

```go
func SchedulingPolicyInput() *string
```

- *Type:* *string

---

##### `SourceTableFullNameInput`<sup>Optional</sup> <a name="SourceTableFullNameInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.sourceTableFullNameInput"></a>

```go
func SourceTableFullNameInput() *string
```

- *Type:* *string

---

##### `TimeseriesKeyInput`<sup>Optional</sup> <a name="TimeseriesKeyInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.timeseriesKeyInput"></a>

```go
func TimeseriesKeyInput() *string
```

- *Type:* *string

---

##### `TypeOverridesInput`<sup>Optional</sup> <a name="TypeOverridesInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.typeOverridesInput"></a>

```go
func TypeOverridesInput() interface{}
```

- *Type:* interface{}

---

##### `AcceleratedSync`<sup>Required</sup> <a name="AcceleratedSync" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.acceleratedSync"></a>

```go
func AcceleratedSync() interface{}
```

- *Type:* interface{}

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `CreateDatabaseObjectsIfMissing`<sup>Required</sup> <a name="CreateDatabaseObjectsIfMissing" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissing"></a>

```go
func CreateDatabaseObjectsIfMissing() interface{}
```

- *Type:* interface{}

---

##### `ExistingPipelineId`<sup>Required</sup> <a name="ExistingPipelineId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.existingPipelineId"></a>

```go
func ExistingPipelineId() *string
```

- *Type:* *string

---

##### `PostgresDatabase`<sup>Required</sup> <a name="PostgresDatabase" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.postgresDatabase"></a>

```go
func PostgresDatabase() *string
```

- *Type:* *string

---

##### `PrimaryKeyColumns`<sup>Required</sup> <a name="PrimaryKeyColumns" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.primaryKeyColumns"></a>

```go
func PrimaryKeyColumns() *[]*string
```

- *Type:* *[]*string

---

##### `SchedulingPolicy`<sup>Required</sup> <a name="SchedulingPolicy" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.schedulingPolicy"></a>

```go
func SchedulingPolicy() *string
```

- *Type:* *string

---

##### `SourceTableFullName`<sup>Required</sup> <a name="SourceTableFullName" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.sourceTableFullName"></a>

```go
func SourceTableFullName() *string
```

- *Type:* *string

---

##### `TimeseriesKey`<sup>Required</sup> <a name="TimeseriesKey" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.timeseriesKey"></a>

```go
func TimeseriesKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PostgresSyncedTableSpecTypeOverridesList <a name="PostgresSyncedTableSpecTypeOverridesList" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressyncedtable"

postgressyncedtable.NewPostgresSyncedTableSpecTypeOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PostgresSyncedTableSpecTypeOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.get"></a>

```go
func Get(index *f64) PostgresSyncedTableSpecTypeOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PostgresSyncedTableSpecTypeOverridesOutputReference <a name="PostgresSyncedTableSpecTypeOverridesOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressyncedtable"

postgressyncedtable.NewPostgresSyncedTableSpecTypeOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PostgresSyncedTableSpecTypeOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.resetSize">ResetSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSize` <a name="ResetSize" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.resetSize"></a>

```go
func ResetSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.pgTypeInput">PgTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.pgType">PgType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.columnNameInput"></a>

```go
func ColumnNameInput() *string
```

- *Type:* *string

---

##### `PgTypeInput`<sup>Optional</sup> <a name="PgTypeInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.pgTypeInput"></a>

```go
func PgTypeInput() *string
```

- *Type:* *string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `PgType`<sup>Required</sup> <a name="PgType" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.pgType"></a>

```go
func PgType() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableSpecTypeOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference <a name="PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressyncedtable"

postgressyncedtable.NewPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTime">DeltaCommitTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion">DeltaCommitVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo">PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeltaCommitTime`<sup>Required</sup> <a name="DeltaCommitTime" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTime"></a>

```go
func DeltaCommitTime() *string
```

- *Type:* *string

---

##### `DeltaCommitVersion`<sup>Required</sup> <a name="DeltaCommitVersion" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion"></a>

```go
func DeltaCommitVersion() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo">PostgresSyncedTableStatusLastSyncDeltaTableSyncInfo</a>

---


### PostgresSyncedTableStatusLastSyncOutputReference <a name="PostgresSyncedTableStatusLastSyncOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressyncedtable"

postgressyncedtable.NewPostgresSyncedTableStatusLastSyncOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresSyncedTableStatusLastSyncOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.deltaTableSyncInfo">DeltaTableSyncInfo</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference">PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.syncEndTime">SyncEndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.syncStartTime">SyncStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSync">PostgresSyncedTableStatusLastSync</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeltaTableSyncInfo`<sup>Required</sup> <a name="DeltaTableSyncInfo" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.deltaTableSyncInfo"></a>

```go
func DeltaTableSyncInfo() PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference">PostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference</a>

---

##### `SyncEndTime`<sup>Required</sup> <a name="SyncEndTime" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.syncEndTime"></a>

```go
func SyncEndTime() *string
```

- *Type:* *string

---

##### `SyncStartTime`<sup>Required</sup> <a name="SyncStartTime" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.syncStartTime"></a>

```go
func SyncStartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference.property.internalValue"></a>

```go
func InternalValue() PostgresSyncedTableStatusLastSync
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSync">PostgresSyncedTableStatusLastSync</a>

---


### PostgresSyncedTableStatusOngoingSyncProgressOutputReference <a name="PostgresSyncedTableStatusOngoingSyncProgressOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressyncedtable"

postgressyncedtable.NewPostgresSyncedTableStatusOngoingSyncProgressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresSyncedTableStatusOngoingSyncProgressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">EstimatedCompletionTimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">LatestVersionCurrentlyProcessing</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncedRowCount">SyncedRowCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncProgressCompletion">SyncProgressCompletion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.totalRowCount">TotalRowCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgress">PostgresSyncedTableStatusOngoingSyncProgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EstimatedCompletionTimeSeconds`<sup>Required</sup> <a name="EstimatedCompletionTimeSeconds" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```go
func EstimatedCompletionTimeSeconds() *f64
```

- *Type:* *f64

---

##### `LatestVersionCurrentlyProcessing`<sup>Required</sup> <a name="LatestVersionCurrentlyProcessing" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```go
func LatestVersionCurrentlyProcessing() *f64
```

- *Type:* *f64

---

##### `SyncedRowCount`<sup>Required</sup> <a name="SyncedRowCount" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncedRowCount"></a>

```go
func SyncedRowCount() *f64
```

- *Type:* *f64

---

##### `SyncProgressCompletion`<sup>Required</sup> <a name="SyncProgressCompletion" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncProgressCompletion"></a>

```go
func SyncProgressCompletion() *f64
```

- *Type:* *f64

---

##### `TotalRowCount`<sup>Required</sup> <a name="TotalRowCount" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.totalRowCount"></a>

```go
func TotalRowCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.internalValue"></a>

```go
func InternalValue() PostgresSyncedTableStatusOngoingSyncProgress
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgress">PostgresSyncedTableStatusOngoingSyncProgress</a>

---


### PostgresSyncedTableStatusOutputReference <a name="PostgresSyncedTableStatusOutputReference" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/postgressyncedtable"

postgressyncedtable.NewPostgresSyncedTableStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PostgresSyncedTableStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.detailedState">DetailedState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastProcessedCommitVersion">LastProcessedCommitVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastSync">LastSync</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference">PostgresSyncedTableStatusLastSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastSyncTime">LastSyncTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.ongoingSyncProgress">OngoingSyncProgress</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference">PostgresSyncedTableStatusOngoingSyncProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.pipelineId">PipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.provisioningPhase">ProvisioningPhase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.unityCatalogProvisioningState">UnityCatalogProvisioningState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatus">PostgresSyncedTableStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DetailedState`<sup>Required</sup> <a name="DetailedState" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.detailedState"></a>

```go
func DetailedState() *string
```

- *Type:* *string

---

##### `LastProcessedCommitVersion`<sup>Required</sup> <a name="LastProcessedCommitVersion" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastProcessedCommitVersion"></a>

```go
func LastProcessedCommitVersion() *f64
```

- *Type:* *f64

---

##### `LastSync`<sup>Required</sup> <a name="LastSync" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastSync"></a>

```go
func LastSync() PostgresSyncedTableStatusLastSyncOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusLastSyncOutputReference">PostgresSyncedTableStatusLastSyncOutputReference</a>

---

##### `LastSyncTime`<sup>Required</sup> <a name="LastSyncTime" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.lastSyncTime"></a>

```go
func LastSyncTime() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `OngoingSyncProgress`<sup>Required</sup> <a name="OngoingSyncProgress" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.ongoingSyncProgress"></a>

```go
func OngoingSyncProgress() PostgresSyncedTableStatusOngoingSyncProgressOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOngoingSyncProgressOutputReference">PostgresSyncedTableStatusOngoingSyncProgressOutputReference</a>

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.pipelineId"></a>

```go
func PipelineId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ProvisioningPhase`<sup>Required</sup> <a name="ProvisioningPhase" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.provisioningPhase"></a>

```go
func ProvisioningPhase() *string
```

- *Type:* *string

---

##### `UnityCatalogProvisioningState`<sup>Required</sup> <a name="UnityCatalogProvisioningState" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.unityCatalogProvisioningState"></a>

```go
func UnityCatalogProvisioningState() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() PostgresSyncedTableStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresSyncedTable.PostgresSyncedTableStatus">PostgresSyncedTableStatus</a>

---



