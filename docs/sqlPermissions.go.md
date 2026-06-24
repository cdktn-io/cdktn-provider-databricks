# `sqlPermissions` Submodule <a name="`sqlPermissions` Submodule" id="@cdktn/provider-databricks.sqlPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlPermissions <a name="SqlPermissions" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/sql_permissions databricks_sql_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/sqlpermissions"

sqlpermissions.NewSqlPermissions(scope Construct, id *string, config SqlPermissionsConfig) SqlPermissions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig">SqlPermissionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig">SqlPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.putPrivilegeAssignments">PutPrivilegeAssignments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.resetAnonymousFunction">ResetAnonymousFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.resetAnyFile">ResetAnyFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.resetClusterId">ResetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.resetPrivilegeAssignments">ResetPrivilegeAssignments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.resetTable">ResetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.resetView">ResetView</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPrivilegeAssignments` <a name="PutPrivilegeAssignments" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.putPrivilegeAssignments"></a>

```go
func PutPrivilegeAssignments(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.putPrivilegeAssignments.parameter.value"></a>

- *Type:* interface{}

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.putProviderConfig"></a>

```go
func PutProviderConfig(value SqlPermissionsProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfig">SqlPermissionsProviderConfig</a>

---

##### `ResetAnonymousFunction` <a name="ResetAnonymousFunction" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.resetAnonymousFunction"></a>

```go
func ResetAnonymousFunction()
```

##### `ResetAnyFile` <a name="ResetAnyFile" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.resetAnyFile"></a>

```go
func ResetAnyFile()
```

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.resetCatalog"></a>

```go
func ResetCatalog()
```

##### `ResetClusterId` <a name="ResetClusterId" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.resetClusterId"></a>

```go
func ResetClusterId()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.resetId"></a>

```go
func ResetId()
```

##### `ResetPrivilegeAssignments` <a name="ResetPrivilegeAssignments" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.resetPrivilegeAssignments"></a>

```go
func ResetPrivilegeAssignments()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetTable` <a name="ResetTable" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.resetTable"></a>

```go
func ResetTable()
```

##### `ResetView` <a name="ResetView" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.resetView"></a>

```go
func ResetView()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SqlPermissions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/sqlpermissions"

sqlpermissions.SqlPermissions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/sqlpermissions"

sqlpermissions.SqlPermissions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/sqlpermissions"

sqlpermissions.SqlPermissions_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/sqlpermissions"

sqlpermissions.SqlPermissions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SqlPermissions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SqlPermissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SqlPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/sql_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SqlPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.privilegeAssignments">PrivilegeAssignments</a></code> | <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList">SqlPermissionsPrivilegeAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference">SqlPermissionsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.anonymousFunctionInput">AnonymousFunctionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.anyFileInput">AnyFileInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.catalogInput">CatalogInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.privilegeAssignmentsInput">PrivilegeAssignmentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfig">SqlPermissionsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.tableInput">TableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.viewInput">ViewInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.anonymousFunction">AnonymousFunction</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.anyFile">AnyFile</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.catalog">Catalog</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.table">Table</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.view">View</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrivilegeAssignments`<sup>Required</sup> <a name="PrivilegeAssignments" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.privilegeAssignments"></a>

```go
func PrivilegeAssignments() SqlPermissionsPrivilegeAssignmentsList
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList">SqlPermissionsPrivilegeAssignmentsList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.providerConfig"></a>

```go
func ProviderConfig() SqlPermissionsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference">SqlPermissionsProviderConfigOutputReference</a>

---

##### `AnonymousFunctionInput`<sup>Optional</sup> <a name="AnonymousFunctionInput" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.anonymousFunctionInput"></a>

```go
func AnonymousFunctionInput() interface{}
```

- *Type:* interface{}

---

##### `AnyFileInput`<sup>Optional</sup> <a name="AnyFileInput" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.anyFileInput"></a>

```go
func AnyFileInput() interface{}
```

- *Type:* interface{}

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.catalogInput"></a>

```go
func CatalogInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrivilegeAssignmentsInput`<sup>Optional</sup> <a name="PrivilegeAssignmentsInput" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.privilegeAssignmentsInput"></a>

```go
func PrivilegeAssignmentsInput() interface{}
```

- *Type:* interface{}

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.providerConfigInput"></a>

```go
func ProviderConfigInput() SqlPermissionsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfig">SqlPermissionsProviderConfig</a>

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.tableInput"></a>

```go
func TableInput() *string
```

- *Type:* *string

---

##### `ViewInput`<sup>Optional</sup> <a name="ViewInput" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.viewInput"></a>

```go
func ViewInput() *string
```

- *Type:* *string

---

##### `AnonymousFunction`<sup>Required</sup> <a name="AnonymousFunction" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.anonymousFunction"></a>

```go
func AnonymousFunction() interface{}
```

- *Type:* interface{}

---

##### `AnyFile`<sup>Required</sup> <a name="AnyFile" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.anyFile"></a>

```go
func AnyFile() interface{}
```

- *Type:* interface{}

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.catalog"></a>

```go
func Catalog() interface{}
```

- *Type:* interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.table"></a>

```go
func Table() *string
```

- *Type:* *string

---

##### `View`<sup>Required</sup> <a name="View" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.view"></a>

```go
func View() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlPermissionsConfig <a name="SqlPermissionsConfig" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/sqlpermissions"

&sqlpermissions.SqlPermissionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AnonymousFunction: interface{},
	AnyFile: interface{},
	Catalog: interface{},
	ClusterId: *string,
	Database: *string,
	Id: *string,
	PrivilegeAssignments: interface{},
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.sqlPermissions.SqlPermissionsProviderConfig,
	Table: *string,
	View: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.anonymousFunction">AnonymousFunction</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/sql_permissions#anonymous_function SqlPermissions#anonymous_function}. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.anyFile">AnyFile</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/sql_permissions#any_file SqlPermissions#any_file}. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.catalog">Catalog</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/sql_permissions#catalog SqlPermissions#catalog}. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/sql_permissions#cluster_id SqlPermissions#cluster_id}. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.database">Database</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/sql_permissions#database SqlPermissions#database}. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/sql_permissions#id SqlPermissions#id}. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.privilegeAssignments">PrivilegeAssignments</a></code> | <code>interface{}</code> | privilege_assignments block. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfig">SqlPermissionsProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.table">Table</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/sql_permissions#table SqlPermissions#table}. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.view">View</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/sql_permissions#view SqlPermissions#view}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AnonymousFunction`<sup>Optional</sup> <a name="AnonymousFunction" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.anonymousFunction"></a>

```go
AnonymousFunction interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/sql_permissions#anonymous_function SqlPermissions#anonymous_function}.

---

##### `AnyFile`<sup>Optional</sup> <a name="AnyFile" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.anyFile"></a>

```go
AnyFile interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/sql_permissions#any_file SqlPermissions#any_file}.

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.catalog"></a>

```go
Catalog interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/sql_permissions#catalog SqlPermissions#catalog}.

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/sql_permissions#cluster_id SqlPermissions#cluster_id}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/sql_permissions#database SqlPermissions#database}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/sql_permissions#id SqlPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrivilegeAssignments`<sup>Optional</sup> <a name="PrivilegeAssignments" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.privilegeAssignments"></a>

```go
PrivilegeAssignments interface{}
```

- *Type:* interface{}

privilege_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/sql_permissions#privilege_assignments SqlPermissions#privilege_assignments}

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.providerConfig"></a>

```go
ProviderConfig SqlPermissionsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfig">SqlPermissionsProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/sql_permissions#provider_config SqlPermissions#provider_config}

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.table"></a>

```go
Table *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/sql_permissions#table SqlPermissions#table}.

---

##### `View`<sup>Optional</sup> <a name="View" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsConfig.property.view"></a>

```go
View *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/sql_permissions#view SqlPermissions#view}.

---

### SqlPermissionsPrivilegeAssignments <a name="SqlPermissionsPrivilegeAssignments" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/sqlpermissions"

&sqlpermissions.SqlPermissionsPrivilegeAssignments {
	Principal: *string,
	Privileges: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments.property.principal">Principal</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/sql_permissions#principal SqlPermissions#principal}. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments.property.privileges">Privileges</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/sql_permissions#privileges SqlPermissions#privileges}. |

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/sql_permissions#principal SqlPermissions#principal}.

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignments.property.privileges"></a>

```go
Privileges *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/sql_permissions#privileges SqlPermissions#privileges}.

---

### SqlPermissionsProviderConfig <a name="SqlPermissionsProviderConfig" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/sqlpermissions"

&sqlpermissions.SqlPermissionsProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/sql_permissions#workspace_id SqlPermissions#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/sql_permissions#workspace_id SqlPermissions#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlPermissionsPrivilegeAssignmentsList <a name="SqlPermissionsPrivilegeAssignmentsList" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/sqlpermissions"

sqlpermissions.NewSqlPermissionsPrivilegeAssignmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SqlPermissionsPrivilegeAssignmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.get"></a>

```go
func Get(index *f64) SqlPermissionsPrivilegeAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SqlPermissionsPrivilegeAssignmentsOutputReference <a name="SqlPermissionsPrivilegeAssignmentsOutputReference" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/sqlpermissions"

sqlpermissions.NewSqlPermissionsPrivilegeAssignmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SqlPermissionsPrivilegeAssignmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.privilegesInput">PrivilegesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.privileges">Privileges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `PrivilegesInput`<sup>Optional</sup> <a name="PrivilegesInput" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.privilegesInput"></a>

```go
func PrivilegesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.privileges"></a>

```go
func Privileges() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsPrivilegeAssignmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SqlPermissionsProviderConfigOutputReference <a name="SqlPermissionsProviderConfigOutputReference" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/sqlpermissions"

sqlpermissions.NewSqlPermissionsProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlPermissionsProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfig">SqlPermissionsProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlPermissionsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.sqlPermissions.SqlPermissionsProviderConfig">SqlPermissionsProviderConfig</a>

---



