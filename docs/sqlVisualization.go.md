# `sqlVisualization` Submodule <a name="`sqlVisualization` Submodule" id="@cdktn/provider-databricks.sqlVisualization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlVisualization <a name="SqlVisualization" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_visualization databricks_sql_visualization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/sqlvisualization"

sqlvisualization.NewSqlVisualization(scope Construct, id *string, config SqlVisualizationConfig) SqlVisualization
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig">SqlVisualizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig">SqlVisualizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.resetQueryPlan">ResetQueryPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.resetVisualizationId">ResetVisualizationId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.putProviderConfig"></a>

```go
func PutProviderConfig(value SqlVisualizationProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfig">SqlVisualizationProviderConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.resetId"></a>

```go
func ResetId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetQueryPlan` <a name="ResetQueryPlan" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.resetQueryPlan"></a>

```go
func ResetQueryPlan()
```

##### `ResetVisualizationId` <a name="ResetVisualizationId" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.resetVisualizationId"></a>

```go
func ResetVisualizationId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SqlVisualization resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/sqlvisualization"

sqlvisualization.SqlVisualization_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/sqlvisualization"

sqlvisualization.SqlVisualization_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/sqlvisualization"

sqlvisualization.SqlVisualization_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/sqlvisualization"

sqlvisualization.SqlVisualization_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SqlVisualization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SqlVisualization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SqlVisualization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_visualization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SqlVisualization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference">SqlVisualizationProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.optionsInput">OptionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfig">SqlVisualizationProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.queryIdInput">QueryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.queryPlanInput">QueryPlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.visualizationIdInput">VisualizationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.options">Options</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.queryId">QueryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.queryPlan">QueryPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.visualizationId">VisualizationId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.providerConfig"></a>

```go
func ProviderConfig() SqlVisualizationProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference">SqlVisualizationProviderConfigOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.optionsInput"></a>

```go
func OptionsInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.providerConfigInput"></a>

```go
func ProviderConfigInput() SqlVisualizationProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfig">SqlVisualizationProviderConfig</a>

---

##### `QueryIdInput`<sup>Optional</sup> <a name="QueryIdInput" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.queryIdInput"></a>

```go
func QueryIdInput() *string
```

- *Type:* *string

---

##### `QueryPlanInput`<sup>Optional</sup> <a name="QueryPlanInput" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.queryPlanInput"></a>

```go
func QueryPlanInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VisualizationIdInput`<sup>Optional</sup> <a name="VisualizationIdInput" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.visualizationIdInput"></a>

```go
func VisualizationIdInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.options"></a>

```go
func Options() *string
```

- *Type:* *string

---

##### `QueryId`<sup>Required</sup> <a name="QueryId" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.queryId"></a>

```go
func QueryId() *string
```

- *Type:* *string

---

##### `QueryPlan`<sup>Required</sup> <a name="QueryPlan" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.queryPlan"></a>

```go
func QueryPlan() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VisualizationId`<sup>Required</sup> <a name="VisualizationId" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.visualizationId"></a>

```go
func VisualizationId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualization.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlVisualizationConfig <a name="SqlVisualizationConfig" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/sqlvisualization"

&sqlvisualization.SqlVisualizationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Options: *string,
	QueryId: *string,
	Type: *string,
	Description: *string,
	Id: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.sqlVisualization.SqlVisualizationProviderConfig,
	QueryPlan: *string,
	VisualizationId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_visualization#name SqlVisualization#name}. |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.options">Options</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_visualization#options SqlVisualization#options}. |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.queryId">QueryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_visualization#query_id SqlVisualization#query_id}. |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_visualization#type SqlVisualization#type}. |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_visualization#description SqlVisualization#description}. |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_visualization#id SqlVisualization#id}. |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfig">SqlVisualizationProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.queryPlan">QueryPlan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_visualization#query_plan SqlVisualization#query_plan}. |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.visualizationId">VisualizationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_visualization#visualization_id SqlVisualization#visualization_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_visualization#name SqlVisualization#name}.

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.options"></a>

```go
Options *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_visualization#options SqlVisualization#options}.

---

##### `QueryId`<sup>Required</sup> <a name="QueryId" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.queryId"></a>

```go
QueryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_visualization#query_id SqlVisualization#query_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_visualization#type SqlVisualization#type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_visualization#description SqlVisualization#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_visualization#id SqlVisualization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.providerConfig"></a>

```go
ProviderConfig SqlVisualizationProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfig">SqlVisualizationProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_visualization#provider_config SqlVisualization#provider_config}

---

##### `QueryPlan`<sup>Optional</sup> <a name="QueryPlan" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.queryPlan"></a>

```go
QueryPlan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_visualization#query_plan SqlVisualization#query_plan}.

---

##### `VisualizationId`<sup>Optional</sup> <a name="VisualizationId" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationConfig.property.visualizationId"></a>

```go
VisualizationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_visualization#visualization_id SqlVisualization#visualization_id}.

---

### SqlVisualizationProviderConfig <a name="SqlVisualizationProviderConfig" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/sqlvisualization"

&sqlvisualization.SqlVisualizationProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_visualization#workspace_id SqlVisualization#workspace_id}. |

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/sql_visualization#workspace_id SqlVisualization#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlVisualizationProviderConfigOutputReference <a name="SqlVisualizationProviderConfigOutputReference" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/sqlvisualization"

sqlvisualization.NewSqlVisualizationProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlVisualizationProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfig">SqlVisualizationProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlVisualizationProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlVisualization.SqlVisualizationProviderConfig">SqlVisualizationProviderConfig</a>

---



