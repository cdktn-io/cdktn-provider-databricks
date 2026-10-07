# `masonManagedMemoryEntry` Submodule <a name="`masonManagedMemoryEntry` Submodule" id="@cdktn/provider-databricks.masonManagedMemoryEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MasonManagedMemoryEntry <a name="MasonManagedMemoryEntry" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry databricks_mason_managed_memory_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/masonmanagedmemoryentry"

masonmanagedmemoryentry.NewMasonManagedMemoryEntry(scope Construct, id *string, config MasonManagedMemoryEntryConfig) MasonManagedMemoryEntry
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig">MasonManagedMemoryEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig">MasonManagedMemoryEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetManagedMemoryEntryId">ResetManagedMemoryEntryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetSessionId">ResetSessionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetSourceType">ResetSourceType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.putProviderConfig"></a>

```go
func PutProviderConfig(value MasonManagedMemoryEntryProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig">MasonManagedMemoryEntryProviderConfig</a>

---

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetContent"></a>

```go
func ResetContent()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetManagedMemoryEntryId` <a name="ResetManagedMemoryEntryId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetManagedMemoryEntryId"></a>

```go
func ResetManagedMemoryEntryId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetSessionId` <a name="ResetSessionId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetSessionId"></a>

```go
func ResetSessionId()
```

##### `ResetSourceType` <a name="ResetSourceType" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.resetSourceType"></a>

```go
func ResetSourceType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MasonManagedMemoryEntry resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/masonmanagedmemoryentry"

masonmanagedmemoryentry.MasonManagedMemoryEntry_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/masonmanagedmemoryentry"

masonmanagedmemoryentry.MasonManagedMemoryEntry_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/masonmanagedmemoryentry"

masonmanagedmemoryentry.MasonManagedMemoryEntry_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/masonmanagedmemoryentry"

masonmanagedmemoryentry.MasonManagedMemoryEntry_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MasonManagedMemoryEntry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MasonManagedMemoryEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MasonManagedMemoryEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MasonManagedMemoryEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference">MasonManagedMemoryEntryProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.actorIdInput">ActorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.managedMemoryEntryIdInput">ManagedMemoryEntryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sessionIdInput">SessionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sourceTypeInput">SourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.actorId">ActorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.managedMemoryEntryId">ManagedMemoryEntryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sessionId">SessionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.providerConfig"></a>

```go
func ProviderConfig() MasonManagedMemoryEntryProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference">MasonManagedMemoryEntryProviderConfigOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ActorIdInput`<sup>Optional</sup> <a name="ActorIdInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.actorIdInput"></a>

```go
func ActorIdInput() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ManagedMemoryEntryIdInput`<sup>Optional</sup> <a name="ManagedMemoryEntryIdInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.managedMemoryEntryIdInput"></a>

```go
func ManagedMemoryEntryIdInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SessionIdInput`<sup>Optional</sup> <a name="SessionIdInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sessionIdInput"></a>

```go
func SessionIdInput() *string
```

- *Type:* *string

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sourceTypeInput"></a>

```go
func SourceTypeInput() *string
```

- *Type:* *string

---

##### `ActorId`<sup>Required</sup> <a name="ActorId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.actorId"></a>

```go
func ActorId() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ManagedMemoryEntryId`<sup>Required</sup> <a name="ManagedMemoryEntryId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.managedMemoryEntryId"></a>

```go
func ManagedMemoryEntryId() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `SessionId`<sup>Required</sup> <a name="SessionId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sessionId"></a>

```go
func SessionId() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntry.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MasonManagedMemoryEntryConfig <a name="MasonManagedMemoryEntryConfig" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/masonmanagedmemoryentry"

&masonmanagedmemoryentry.MasonManagedMemoryEntryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ActorId: *string,
	Parent: *string,
	Path: *string,
	Content: *string,
	Description: *string,
	ManagedMemoryEntryId: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig,
	SessionId: *string,
	SourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.actorId">ActorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#actor_id MasonManagedMemoryEntry#actor_id}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#parent MasonManagedMemoryEntry#parent}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#path MasonManagedMemoryEntry#path}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#content MasonManagedMemoryEntry#content}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#description MasonManagedMemoryEntry#description}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.managedMemoryEntryId">ManagedMemoryEntryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#managed_memory_entry_id MasonManagedMemoryEntry#managed_memory_entry_id}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig">MasonManagedMemoryEntryProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#provider_config MasonManagedMemoryEntry#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.sessionId">SessionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#session_id MasonManagedMemoryEntry#session_id}. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.sourceType">SourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#source_type MasonManagedMemoryEntry#source_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActorId`<sup>Required</sup> <a name="ActorId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.actorId"></a>

```go
ActorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#actor_id MasonManagedMemoryEntry#actor_id}.

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#parent MasonManagedMemoryEntry#parent}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#path MasonManagedMemoryEntry#path}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#content MasonManagedMemoryEntry#content}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#description MasonManagedMemoryEntry#description}.

---

##### `ManagedMemoryEntryId`<sup>Optional</sup> <a name="ManagedMemoryEntryId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.managedMemoryEntryId"></a>

```go
ManagedMemoryEntryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#managed_memory_entry_id MasonManagedMemoryEntry#managed_memory_entry_id}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.providerConfig"></a>

```go
ProviderConfig MasonManagedMemoryEntryProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig">MasonManagedMemoryEntryProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#provider_config MasonManagedMemoryEntry#provider_config}.

---

##### `SessionId`<sup>Optional</sup> <a name="SessionId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.sessionId"></a>

```go
SessionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#session_id MasonManagedMemoryEntry#session_id}.

---

##### `SourceType`<sup>Optional</sup> <a name="SourceType" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryConfig.property.sourceType"></a>

```go
SourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#source_type MasonManagedMemoryEntry#source_type}.

---

### MasonManagedMemoryEntryProviderConfig <a name="MasonManagedMemoryEntryProviderConfig" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/masonmanagedmemoryentry"

&masonmanagedmemoryentry.MasonManagedMemoryEntryProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#workspace_id MasonManagedMemoryEntry#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/resources/mason_managed_memory_entry#workspace_id MasonManagedMemoryEntry#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### MasonManagedMemoryEntryProviderConfigOutputReference <a name="MasonManagedMemoryEntryProviderConfigOutputReference" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/masonmanagedmemoryentry"

masonmanagedmemoryentry.NewMasonManagedMemoryEntryProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MasonManagedMemoryEntryProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.masonManagedMemoryEntry.MasonManagedMemoryEntryProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



