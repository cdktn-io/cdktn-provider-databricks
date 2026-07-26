# `databaseDatabaseCatalog` Submodule <a name="`databaseDatabaseCatalog` Submodule" id="@cdktn/provider-databricks.databaseDatabaseCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDatabaseCatalog <a name="DatabaseDatabaseCatalog" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/database_database_catalog databricks_database_database_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/databasedatabasecatalog"

databasedatabasecatalog.NewDatabaseDatabaseCatalog(scope Construct, id *string, config DatabaseDatabaseCatalogConfig) DatabaseDatabaseCatalog
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig">DatabaseDatabaseCatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig">DatabaseDatabaseCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.resetCreateDatabaseIfNotExists">ResetCreateDatabaseIfNotExists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.putProviderConfig"></a>

```go
func PutProviderConfig(value DatabaseDatabaseCatalogProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfig">DatabaseDatabaseCatalogProviderConfig</a>

---

##### `ResetCreateDatabaseIfNotExists` <a name="ResetCreateDatabaseIfNotExists" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.resetCreateDatabaseIfNotExists"></a>

```go
func ResetCreateDatabaseIfNotExists()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatabaseDatabaseCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/databasedatabasecatalog"

databasedatabasecatalog.DatabaseDatabaseCatalog_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/databasedatabasecatalog"

databasedatabasecatalog.DatabaseDatabaseCatalog_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/databasedatabasecatalog"

databasedatabasecatalog.DatabaseDatabaseCatalog_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/databasedatabasecatalog"

databasedatabasecatalog.DatabaseDatabaseCatalog_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DatabaseDatabaseCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabaseDatabaseCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabaseDatabaseCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/database_database_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DatabaseDatabaseCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference">DatabaseDatabaseCatalogProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.createDatabaseIfNotExistsInput">CreateDatabaseIfNotExistsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseInstanceNameInput">DatabaseInstanceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.createDatabaseIfNotExists">CreateDatabaseIfNotExists</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseInstanceName">DatabaseInstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.providerConfig"></a>

```go
func ProviderConfig() DatabaseDatabaseCatalogProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference">DatabaseDatabaseCatalogProviderConfigOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `CreateDatabaseIfNotExistsInput`<sup>Optional</sup> <a name="CreateDatabaseIfNotExistsInput" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.createDatabaseIfNotExistsInput"></a>

```go
func CreateDatabaseIfNotExistsInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseInstanceNameInput`<sup>Optional</sup> <a name="DatabaseInstanceNameInput" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseInstanceNameInput"></a>

```go
func DatabaseInstanceNameInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `CreateDatabaseIfNotExists`<sup>Required</sup> <a name="CreateDatabaseIfNotExists" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.createDatabaseIfNotExists"></a>

```go
func CreateDatabaseIfNotExists() interface{}
```

- *Type:* interface{}

---

##### `DatabaseInstanceName`<sup>Required</sup> <a name="DatabaseInstanceName" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseInstanceName"></a>

```go
func DatabaseInstanceName() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDatabaseCatalogConfig <a name="DatabaseDatabaseCatalogConfig" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/databasedatabasecatalog"

&databasedatabasecatalog.DatabaseDatabaseCatalogConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DatabaseInstanceName: *string,
	DatabaseName: *string,
	Name: *string,
	CreateDatabaseIfNotExists: interface{},
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.databaseInstanceName">DatabaseInstanceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/database_database_catalog#database_instance_name DatabaseDatabaseCatalog#database_instance_name}. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/database_database_catalog#database_name DatabaseDatabaseCatalog#database_name}. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/database_database_catalog#name DatabaseDatabaseCatalog#name}. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.createDatabaseIfNotExists">CreateDatabaseIfNotExists</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/database_database_catalog#create_database_if_not_exists DatabaseDatabaseCatalog#create_database_if_not_exists}. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfig">DatabaseDatabaseCatalogProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/database_database_catalog#provider_config DatabaseDatabaseCatalog#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatabaseInstanceName`<sup>Required</sup> <a name="DatabaseInstanceName" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.databaseInstanceName"></a>

```go
DatabaseInstanceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/database_database_catalog#database_instance_name DatabaseDatabaseCatalog#database_instance_name}.

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/database_database_catalog#database_name DatabaseDatabaseCatalog#database_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/database_database_catalog#name DatabaseDatabaseCatalog#name}.

---

##### `CreateDatabaseIfNotExists`<sup>Optional</sup> <a name="CreateDatabaseIfNotExists" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.createDatabaseIfNotExists"></a>

```go
CreateDatabaseIfNotExists interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/database_database_catalog#create_database_if_not_exists DatabaseDatabaseCatalog#create_database_if_not_exists}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.providerConfig"></a>

```go
ProviderConfig DatabaseDatabaseCatalogProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfig">DatabaseDatabaseCatalogProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/database_database_catalog#provider_config DatabaseDatabaseCatalog#provider_config}.

---

### DatabaseDatabaseCatalogProviderConfig <a name="DatabaseDatabaseCatalogProviderConfig" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/databasedatabasecatalog"

&databasedatabasecatalog.DatabaseDatabaseCatalogProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/database_database_catalog#workspace_id DatabaseDatabaseCatalog#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/resources/database_database_catalog#workspace_id DatabaseDatabaseCatalog#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseDatabaseCatalogProviderConfigOutputReference <a name="DatabaseDatabaseCatalogProviderConfigOutputReference" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/databasedatabasecatalog"

databasedatabasecatalog.NewDatabaseDatabaseCatalogProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabaseDatabaseCatalogProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



