# `warehousesDefaultWarehouseOverride` Submodule <a name="`warehousesDefaultWarehouseOverride` Submodule" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WarehousesDefaultWarehouseOverride <a name="WarehousesDefaultWarehouseOverride" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/warehouses_default_warehouse_override databricks_warehouses_default_warehouse_override}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/warehousesdefaultwarehouseoverride"

warehousesdefaultwarehouseoverride.NewWarehousesDefaultWarehouseOverride(scope Construct, id *string, config WarehousesDefaultWarehouseOverrideConfig) WarehousesDefaultWarehouseOverride
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig">WarehousesDefaultWarehouseOverrideConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig">WarehousesDefaultWarehouseOverrideConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.resetWarehouseId">ResetWarehouseId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.putProviderConfig"></a>

```go
func PutProviderConfig(value WarehousesDefaultWarehouseOverrideProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig">WarehousesDefaultWarehouseOverrideProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetWarehouseId` <a name="ResetWarehouseId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.resetWarehouseId"></a>

```go
func ResetWarehouseId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WarehousesDefaultWarehouseOverride resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/warehousesdefaultwarehouseoverride"

warehousesdefaultwarehouseoverride.WarehousesDefaultWarehouseOverride_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/warehousesdefaultwarehouseoverride"

warehousesdefaultwarehouseoverride.WarehousesDefaultWarehouseOverride_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/warehousesdefaultwarehouseoverride"

warehousesdefaultwarehouseoverride.WarehousesDefaultWarehouseOverride_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/warehousesdefaultwarehouseoverride"

warehousesdefaultwarehouseoverride.WarehousesDefaultWarehouseOverride_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a WarehousesDefaultWarehouseOverride resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WarehousesDefaultWarehouseOverride to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WarehousesDefaultWarehouseOverride that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/warehouses_default_warehouse_override#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the WarehousesDefaultWarehouseOverride to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference">WarehousesDefaultWarehouseOverrideProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.defaultWarehouseOverrideIdInput">DefaultWarehouseOverrideIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.warehouseIdInput">WarehouseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.defaultWarehouseOverrideId">DefaultWarehouseOverrideId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.providerConfig"></a>

```go
func ProviderConfig() WarehousesDefaultWarehouseOverrideProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference">WarehousesDefaultWarehouseOverrideProviderConfigOutputReference</a>

---

##### `DefaultWarehouseOverrideIdInput`<sup>Optional</sup> <a name="DefaultWarehouseOverrideIdInput" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.defaultWarehouseOverrideIdInput"></a>

```go
func DefaultWarehouseOverrideIdInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `WarehouseIdInput`<sup>Optional</sup> <a name="WarehouseIdInput" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.warehouseIdInput"></a>

```go
func WarehouseIdInput() *string
```

- *Type:* *string

---

##### `DefaultWarehouseOverrideId`<sup>Required</sup> <a name="DefaultWarehouseOverrideId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.defaultWarehouseOverrideId"></a>

```go
func DefaultWarehouseOverrideId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.warehouseId"></a>

```go
func WarehouseId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WarehousesDefaultWarehouseOverrideConfig <a name="WarehousesDefaultWarehouseOverrideConfig" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/warehousesdefaultwarehouseoverride"

&warehousesdefaultwarehouseoverride.WarehousesDefaultWarehouseOverrideConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DefaultWarehouseOverrideId: *string,
	Type: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig,
	WarehouseId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.defaultWarehouseOverrideId">DefaultWarehouseOverrideId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/warehouses_default_warehouse_override#default_warehouse_override_id WarehousesDefaultWarehouseOverride#default_warehouse_override_id}. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/warehouses_default_warehouse_override#type WarehousesDefaultWarehouseOverride#type}. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig">WarehousesDefaultWarehouseOverrideProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/warehouses_default_warehouse_override#provider_config WarehousesDefaultWarehouseOverride#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/warehouses_default_warehouse_override#warehouse_id WarehousesDefaultWarehouseOverride#warehouse_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultWarehouseOverrideId`<sup>Required</sup> <a name="DefaultWarehouseOverrideId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.defaultWarehouseOverrideId"></a>

```go
DefaultWarehouseOverrideId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/warehouses_default_warehouse_override#default_warehouse_override_id WarehousesDefaultWarehouseOverride#default_warehouse_override_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/warehouses_default_warehouse_override#type WarehousesDefaultWarehouseOverride#type}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.providerConfig"></a>

```go
ProviderConfig WarehousesDefaultWarehouseOverrideProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig">WarehousesDefaultWarehouseOverrideProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/warehouses_default_warehouse_override#provider_config WarehousesDefaultWarehouseOverride#provider_config}.

---

##### `WarehouseId`<sup>Optional</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.warehouseId"></a>

```go
WarehouseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/warehouses_default_warehouse_override#warehouse_id WarehousesDefaultWarehouseOverride#warehouse_id}.

---

### WarehousesDefaultWarehouseOverrideProviderConfig <a name="WarehousesDefaultWarehouseOverrideProviderConfig" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/warehousesdefaultwarehouseoverride"

&warehousesdefaultwarehouseoverride.WarehousesDefaultWarehouseOverrideProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/warehouses_default_warehouse_override#workspace_id WarehousesDefaultWarehouseOverride#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/warehouses_default_warehouse_override#workspace_id WarehousesDefaultWarehouseOverride#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### WarehousesDefaultWarehouseOverrideProviderConfigOutputReference <a name="WarehousesDefaultWarehouseOverrideProviderConfigOutputReference" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/warehousesdefaultwarehouseoverride"

warehousesdefaultwarehouseoverride.NewWarehousesDefaultWarehouseOverrideProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WarehousesDefaultWarehouseOverrideProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



