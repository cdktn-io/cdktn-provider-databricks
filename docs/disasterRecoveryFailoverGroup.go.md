# `disasterRecoveryFailoverGroup` Submodule <a name="`disasterRecoveryFailoverGroup` Submodule" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DisasterRecoveryFailoverGroup <a name="DisasterRecoveryFailoverGroup" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group databricks_disaster_recovery_failover_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/disasterrecoveryfailovergroup"

disasterrecoveryfailovergroup.NewDisasterRecoveryFailoverGroup(scope Construct, id *string, config DisasterRecoveryFailoverGroupConfig) DisasterRecoveryFailoverGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig">DisasterRecoveryFailoverGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig">DisasterRecoveryFailoverGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.putUnityCatalogAssets">PutUnityCatalogAssets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.putWorkspaceSets">PutWorkspaceSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.resetUnityCatalogAssets">ResetUnityCatalogAssets</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutUnityCatalogAssets` <a name="PutUnityCatalogAssets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.putUnityCatalogAssets"></a>

```go
func PutUnityCatalogAssets(value DisasterRecoveryFailoverGroupUnityCatalogAssets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.putUnityCatalogAssets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets">DisasterRecoveryFailoverGroupUnityCatalogAssets</a>

---

##### `PutWorkspaceSets` <a name="PutWorkspaceSets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.putWorkspaceSets"></a>

```go
func PutWorkspaceSets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.putWorkspaceSets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetUnityCatalogAssets` <a name="ResetUnityCatalogAssets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.resetUnityCatalogAssets"></a>

```go
func ResetUnityCatalogAssets()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DisasterRecoveryFailoverGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/disasterrecoveryfailovergroup"

disasterrecoveryfailovergroup.DisasterRecoveryFailoverGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/disasterrecoveryfailovergroup"

disasterrecoveryfailovergroup.DisasterRecoveryFailoverGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/disasterrecoveryfailovergroup"

disasterrecoveryfailovergroup.DisasterRecoveryFailoverGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/disasterrecoveryfailovergroup"

disasterrecoveryfailovergroup.DisasterRecoveryFailoverGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DisasterRecoveryFailoverGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DisasterRecoveryFailoverGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DisasterRecoveryFailoverGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DisasterRecoveryFailoverGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.effectivePrimaryRegion">EffectivePrimaryRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.replicationPoint">ReplicationPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.unityCatalogAssets">UnityCatalogAssets</a></code> | <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference">DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.workspaceSets">WorkspaceSets</a></code> | <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList">DisasterRecoveryFailoverGroupWorkspaceSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.failoverGroupIdInput">FailoverGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.initialPrimaryRegionInput">InitialPrimaryRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.regionsInput">RegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.unityCatalogAssetsInput">UnityCatalogAssetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.workspaceSetsInput">WorkspaceSetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.failoverGroupId">FailoverGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.initialPrimaryRegion">InitialPrimaryRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectivePrimaryRegion`<sup>Required</sup> <a name="EffectivePrimaryRegion" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.effectivePrimaryRegion"></a>

```go
func EffectivePrimaryRegion() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReplicationPoint`<sup>Required</sup> <a name="ReplicationPoint" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.replicationPoint"></a>

```go
func ReplicationPoint() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `UnityCatalogAssets`<sup>Required</sup> <a name="UnityCatalogAssets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.unityCatalogAssets"></a>

```go
func UnityCatalogAssets() DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference">DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `WorkspaceSets`<sup>Required</sup> <a name="WorkspaceSets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.workspaceSets"></a>

```go
func WorkspaceSets() DisasterRecoveryFailoverGroupWorkspaceSetsList
```

- *Type:* <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList">DisasterRecoveryFailoverGroupWorkspaceSetsList</a>

---

##### `FailoverGroupIdInput`<sup>Optional</sup> <a name="FailoverGroupIdInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.failoverGroupIdInput"></a>

```go
func FailoverGroupIdInput() *string
```

- *Type:* *string

---

##### `InitialPrimaryRegionInput`<sup>Optional</sup> <a name="InitialPrimaryRegionInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.initialPrimaryRegionInput"></a>

```go
func InitialPrimaryRegionInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.regionsInput"></a>

```go
func RegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UnityCatalogAssetsInput`<sup>Optional</sup> <a name="UnityCatalogAssetsInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.unityCatalogAssetsInput"></a>

```go
func UnityCatalogAssetsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceSetsInput`<sup>Optional</sup> <a name="WorkspaceSetsInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.workspaceSetsInput"></a>

```go
func WorkspaceSetsInput() interface{}
```

- *Type:* interface{}

---

##### `FailoverGroupId`<sup>Required</sup> <a name="FailoverGroupId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.failoverGroupId"></a>

```go
func FailoverGroupId() *string
```

- *Type:* *string

---

##### `InitialPrimaryRegion`<sup>Required</sup> <a name="InitialPrimaryRegion" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.initialPrimaryRegion"></a>

```go
func InitialPrimaryRegion() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DisasterRecoveryFailoverGroupConfig <a name="DisasterRecoveryFailoverGroupConfig" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/disasterrecoveryfailovergroup"

&disasterrecoveryfailovergroup.DisasterRecoveryFailoverGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FailoverGroupId: *string,
	InitialPrimaryRegion: *string,
	Parent: *string,
	Regions: *[]*string,
	WorkspaceSets: interface{},
	UnityCatalogAssets: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.failoverGroupId">FailoverGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#failover_group_id DisasterRecoveryFailoverGroup#failover_group_id}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.initialPrimaryRegion">InitialPrimaryRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#initial_primary_region DisasterRecoveryFailoverGroup#initial_primary_region}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#parent DisasterRecoveryFailoverGroup#parent}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.regions">Regions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#regions DisasterRecoveryFailoverGroup#regions}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.workspaceSets">WorkspaceSets</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#workspace_sets DisasterRecoveryFailoverGroup#workspace_sets}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.unityCatalogAssets">UnityCatalogAssets</a></code> | <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets">DisasterRecoveryFailoverGroupUnityCatalogAssets</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#unity_catalog_assets DisasterRecoveryFailoverGroup#unity_catalog_assets}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FailoverGroupId`<sup>Required</sup> <a name="FailoverGroupId" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.failoverGroupId"></a>

```go
FailoverGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#failover_group_id DisasterRecoveryFailoverGroup#failover_group_id}.

---

##### `InitialPrimaryRegion`<sup>Required</sup> <a name="InitialPrimaryRegion" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.initialPrimaryRegion"></a>

```go
InitialPrimaryRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#initial_primary_region DisasterRecoveryFailoverGroup#initial_primary_region}.

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#parent DisasterRecoveryFailoverGroup#parent}.

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.regions"></a>

```go
Regions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#regions DisasterRecoveryFailoverGroup#regions}.

---

##### `WorkspaceSets`<sup>Required</sup> <a name="WorkspaceSets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.workspaceSets"></a>

```go
WorkspaceSets interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#workspace_sets DisasterRecoveryFailoverGroup#workspace_sets}.

---

##### `UnityCatalogAssets`<sup>Optional</sup> <a name="UnityCatalogAssets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupConfig.property.unityCatalogAssets"></a>

```go
UnityCatalogAssets DisasterRecoveryFailoverGroupUnityCatalogAssets
```

- *Type:* <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets">DisasterRecoveryFailoverGroupUnityCatalogAssets</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#unity_catalog_assets DisasterRecoveryFailoverGroup#unity_catalog_assets}.

---

### DisasterRecoveryFailoverGroupUnityCatalogAssets <a name="DisasterRecoveryFailoverGroupUnityCatalogAssets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/disasterrecoveryfailovergroup"

&disasterrecoveryfailovergroup.DisasterRecoveryFailoverGroupUnityCatalogAssets {
	Catalogs: interface{},
	DataReplicationWorkspaceSet: *string,
	LocationMappings: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets.property.catalogs">Catalogs</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#catalogs DisasterRecoveryFailoverGroup#catalogs}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets.property.dataReplicationWorkspaceSet">DataReplicationWorkspaceSet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#data_replication_workspace_set DisasterRecoveryFailoverGroup#data_replication_workspace_set}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets.property.locationMappings">LocationMappings</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#location_mappings DisasterRecoveryFailoverGroup#location_mappings}. |

---

##### `Catalogs`<sup>Required</sup> <a name="Catalogs" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets.property.catalogs"></a>

```go
Catalogs interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#catalogs DisasterRecoveryFailoverGroup#catalogs}.

---

##### `DataReplicationWorkspaceSet`<sup>Required</sup> <a name="DataReplicationWorkspaceSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets.property.dataReplicationWorkspaceSet"></a>

```go
DataReplicationWorkspaceSet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#data_replication_workspace_set DisasterRecoveryFailoverGroup#data_replication_workspace_set}.

---

##### `LocationMappings`<sup>Optional</sup> <a name="LocationMappings" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssets.property.locationMappings"></a>

```go
LocationMappings interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#location_mappings DisasterRecoveryFailoverGroup#location_mappings}.

---

### DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/disasterrecoveryfailovergroup"

&disasterrecoveryfailovergroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#name DisasterRecoveryFailoverGroup#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#name DisasterRecoveryFailoverGroup#name}.

---

### DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/disasterrecoveryfailovergroup"

&disasterrecoveryfailovergroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings {
	Name: *string,
	UriByRegion: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#name DisasterRecoveryFailoverGroup#name}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings.property.uriByRegion">UriByRegion</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#uri_by_region DisasterRecoveryFailoverGroup#uri_by_region}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#name DisasterRecoveryFailoverGroup#name}.

---

##### `UriByRegion`<sup>Required</sup> <a name="UriByRegion" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings.property.uriByRegion"></a>

```go
UriByRegion interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#uri_by_region DisasterRecoveryFailoverGroup#uri_by_region}.

---

### DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/disasterrecoveryfailovergroup"

&disasterrecoveryfailovergroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion {
	Region: *string,
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#region DisasterRecoveryFailoverGroup#region}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion.property.uri">Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#uri DisasterRecoveryFailoverGroup#uri}. |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#region DisasterRecoveryFailoverGroup#region}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#uri DisasterRecoveryFailoverGroup#uri}.

---

### DisasterRecoveryFailoverGroupWorkspaceSets <a name="DisasterRecoveryFailoverGroupWorkspaceSets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/disasterrecoveryfailovergroup"

&disasterrecoveryfailovergroup.DisasterRecoveryFailoverGroupWorkspaceSets {
	Name: *string,
	WorkspaceIds: *[]*string,
	ReplicateWorkspaceAssets: interface{},
	StableUrlNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#name DisasterRecoveryFailoverGroup#name}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.property.workspaceIds">WorkspaceIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#workspace_ids DisasterRecoveryFailoverGroup#workspace_ids}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.property.replicateWorkspaceAssets">ReplicateWorkspaceAssets</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#replicate_workspace_assets DisasterRecoveryFailoverGroup#replicate_workspace_assets}. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.property.stableUrlNames">StableUrlNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#stable_url_names DisasterRecoveryFailoverGroup#stable_url_names}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#name DisasterRecoveryFailoverGroup#name}.

---

##### `WorkspaceIds`<sup>Required</sup> <a name="WorkspaceIds" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.property.workspaceIds"></a>

```go
WorkspaceIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#workspace_ids DisasterRecoveryFailoverGroup#workspace_ids}.

---

##### `ReplicateWorkspaceAssets`<sup>Optional</sup> <a name="ReplicateWorkspaceAssets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.property.replicateWorkspaceAssets"></a>

```go
ReplicateWorkspaceAssets interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#replicate_workspace_assets DisasterRecoveryFailoverGroup#replicate_workspace_assets}.

---

##### `StableUrlNames`<sup>Optional</sup> <a name="StableUrlNames" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSets.property.stableUrlNames"></a>

```go
StableUrlNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/disaster_recovery_failover_group#stable_url_names DisasterRecoveryFailoverGroup#stable_url_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/disasterrecoveryfailovergroup"

disasterrecoveryfailovergroup.NewDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.get"></a>

```go
func Get(index *f64) DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/disasterrecoveryfailovergroup"

disasterrecoveryfailovergroup.NewDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/disasterrecoveryfailovergroup"

disasterrecoveryfailovergroup.NewDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.get"></a>

```go
func Get(index *f64) DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/disasterrecoveryfailovergroup"

disasterrecoveryfailovergroup.NewDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.putUriByRegion">PutUriByRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUriByRegion` <a name="PutUriByRegion" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.putUriByRegion"></a>

```go
func PutUriByRegion(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.putUriByRegion.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegion">UriByRegion</a></code> | <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegionInput">UriByRegionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UriByRegion`<sup>Required</sup> <a name="UriByRegion" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegion"></a>

```go
func UriByRegion() DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList
```

- *Type:* <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `UriByRegionInput`<sup>Optional</sup> <a name="UriByRegionInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegionInput"></a>

```go
func UriByRegionInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/disasterrecoveryfailovergroup"

disasterrecoveryfailovergroup.NewDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.get"></a>

```go
func Get(index *f64) DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/disasterrecoveryfailovergroup"

disasterrecoveryfailovergroup.NewDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference <a name="DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/disasterrecoveryfailovergroup"

disasterrecoveryfailovergroup.NewDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putCatalogs">PutCatalogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putLocationMappings">PutLocationMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.resetLocationMappings">ResetLocationMappings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCatalogs` <a name="PutCatalogs" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putCatalogs"></a>

```go
func PutCatalogs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putCatalogs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLocationMappings` <a name="PutLocationMappings" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putLocationMappings"></a>

```go
func PutLocationMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putLocationMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetLocationMappings` <a name="ResetLocationMappings" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.resetLocationMappings"></a>

```go
func ResetLocationMappings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.catalogs">Catalogs</a></code> | <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList">DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.locationMappings">LocationMappings</a></code> | <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.catalogsInput">CatalogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSetInput">DataReplicationWorkspaceSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.locationMappingsInput">LocationMappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSet">DataReplicationWorkspaceSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Catalogs`<sup>Required</sup> <a name="Catalogs" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.catalogs"></a>

```go
func Catalogs() DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList
```

- *Type:* <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList">DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList</a>

---

##### `LocationMappings`<sup>Required</sup> <a name="LocationMappings" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.locationMappings"></a>

```go
func LocationMappings() DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList
```

- *Type:* <a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList">DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList</a>

---

##### `CatalogsInput`<sup>Optional</sup> <a name="CatalogsInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.catalogsInput"></a>

```go
func CatalogsInput() interface{}
```

- *Type:* interface{}

---

##### `DataReplicationWorkspaceSetInput`<sup>Optional</sup> <a name="DataReplicationWorkspaceSetInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSetInput"></a>

```go
func DataReplicationWorkspaceSetInput() *string
```

- *Type:* *string

---

##### `LocationMappingsInput`<sup>Optional</sup> <a name="LocationMappingsInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.locationMappingsInput"></a>

```go
func LocationMappingsInput() interface{}
```

- *Type:* interface{}

---

##### `DataReplicationWorkspaceSet`<sup>Required</sup> <a name="DataReplicationWorkspaceSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSet"></a>

```go
func DataReplicationWorkspaceSet() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DisasterRecoveryFailoverGroupWorkspaceSetsList <a name="DisasterRecoveryFailoverGroupWorkspaceSetsList" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/disasterrecoveryfailovergroup"

disasterrecoveryfailovergroup.NewDisasterRecoveryFailoverGroupWorkspaceSetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DisasterRecoveryFailoverGroupWorkspaceSetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.get"></a>

```go
func Get(index *f64) DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference <a name="DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/disasterrecoveryfailovergroup"

disasterrecoveryfailovergroup.NewDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resetReplicateWorkspaceAssets">ResetReplicateWorkspaceAssets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resetStableUrlNames">ResetStableUrlNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReplicateWorkspaceAssets` <a name="ResetReplicateWorkspaceAssets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resetReplicateWorkspaceAssets"></a>

```go
func ResetReplicateWorkspaceAssets()
```

##### `ResetStableUrlNames` <a name="ResetStableUrlNames" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resetStableUrlNames"></a>

```go
func ResetStableUrlNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.replicateWorkspaceAssetsInput">ReplicateWorkspaceAssetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.stableUrlNamesInput">StableUrlNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.workspaceIdsInput">WorkspaceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.replicateWorkspaceAssets">ReplicateWorkspaceAssets</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.stableUrlNames">StableUrlNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.workspaceIds">WorkspaceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ReplicateWorkspaceAssetsInput`<sup>Optional</sup> <a name="ReplicateWorkspaceAssetsInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.replicateWorkspaceAssetsInput"></a>

```go
func ReplicateWorkspaceAssetsInput() interface{}
```

- *Type:* interface{}

---

##### `StableUrlNamesInput`<sup>Optional</sup> <a name="StableUrlNamesInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.stableUrlNamesInput"></a>

```go
func StableUrlNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `WorkspaceIdsInput`<sup>Optional</sup> <a name="WorkspaceIdsInput" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.workspaceIdsInput"></a>

```go
func WorkspaceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReplicateWorkspaceAssets`<sup>Required</sup> <a name="ReplicateWorkspaceAssets" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.replicateWorkspaceAssets"></a>

```go
func ReplicateWorkspaceAssets() interface{}
```

- *Type:* interface{}

---

##### `StableUrlNames`<sup>Required</sup> <a name="StableUrlNames" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.stableUrlNames"></a>

```go
func StableUrlNames() *[]*string
```

- *Type:* *[]*string

---

##### `WorkspaceIds`<sup>Required</sup> <a name="WorkspaceIds" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.workspaceIds"></a>

```go
func WorkspaceIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.disasterRecoveryFailoverGroup.DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



