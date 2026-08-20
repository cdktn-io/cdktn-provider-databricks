# `environmentsWorkspaceBaseEnvironment` Submodule <a name="`environmentsWorkspaceBaseEnvironment` Submodule" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnvironmentsWorkspaceBaseEnvironment <a name="EnvironmentsWorkspaceBaseEnvironment" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/environments_workspace_base_environment databricks_environments_workspace_base_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/environmentsworkspacebaseenvironment"

environmentsworkspacebaseenvironment.NewEnvironmentsWorkspaceBaseEnvironment(scope Construct, id *string, config EnvironmentsWorkspaceBaseEnvironmentConfig) EnvironmentsWorkspaceBaseEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig">EnvironmentsWorkspaceBaseEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig">EnvironmentsWorkspaceBaseEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetBaseEnvironmentType">ResetBaseEnvironmentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetFilepath">ResetFilepath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetWorkspaceBaseEnvironmentId">ResetWorkspaceBaseEnvironmentId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.putProviderConfig"></a>

```go
func PutProviderConfig(value EnvironmentsWorkspaceBaseEnvironmentProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a>

---

##### `ResetBaseEnvironmentType` <a name="ResetBaseEnvironmentType" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetBaseEnvironmentType"></a>

```go
func ResetBaseEnvironmentType()
```

##### `ResetFilepath` <a name="ResetFilepath" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetFilepath"></a>

```go
func ResetFilepath()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetWorkspaceBaseEnvironmentId` <a name="ResetWorkspaceBaseEnvironmentId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.resetWorkspaceBaseEnvironmentId"></a>

```go
func ResetWorkspaceBaseEnvironmentId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EnvironmentsWorkspaceBaseEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/environmentsworkspacebaseenvironment"

environmentsworkspacebaseenvironment.EnvironmentsWorkspaceBaseEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/environmentsworkspacebaseenvironment"

environmentsworkspacebaseenvironment.EnvironmentsWorkspaceBaseEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/environmentsworkspacebaseenvironment"

environmentsworkspacebaseenvironment.EnvironmentsWorkspaceBaseEnvironment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/environmentsworkspacebaseenvironment"

environmentsworkspacebaseenvironment.EnvironmentsWorkspaceBaseEnvironment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a EnvironmentsWorkspaceBaseEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EnvironmentsWorkspaceBaseEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EnvironmentsWorkspaceBaseEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/environments_workspace_base_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the EnvironmentsWorkspaceBaseEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.creatorUserId">CreatorUserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.effectiveBaseEnvironmentType">EffectiveBaseEnvironmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.isDefault">IsDefault</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.lastUpdatedUserId">LastUpdatedUserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference">EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference">EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.baseEnvironmentTypeInput">BaseEnvironmentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.filepathInput">FilepathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.workspaceBaseEnvironmentIdInput">WorkspaceBaseEnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.baseEnvironmentType">BaseEnvironmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.filepath">Filepath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.workspaceBaseEnvironmentId">WorkspaceBaseEnvironmentId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `CreatorUserId`<sup>Required</sup> <a name="CreatorUserId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.creatorUserId"></a>

```go
func CreatorUserId() *string
```

- *Type:* *string

---

##### `EffectiveBaseEnvironmentType`<sup>Required</sup> <a name="EffectiveBaseEnvironmentType" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.effectiveBaseEnvironmentType"></a>

```go
func EffectiveBaseEnvironmentType() *string
```

- *Type:* *string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.isDefault"></a>

```go
func IsDefault() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LastUpdatedUserId`<sup>Required</sup> <a name="LastUpdatedUserId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.lastUpdatedUserId"></a>

```go
func LastUpdatedUserId() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.providerConfig"></a>

```go
func ProviderConfig() EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference">EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.spec"></a>

```go
func Spec() EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference">EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `BaseEnvironmentTypeInput`<sup>Optional</sup> <a name="BaseEnvironmentTypeInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.baseEnvironmentTypeInput"></a>

```go
func BaseEnvironmentTypeInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilepathInput`<sup>Optional</sup> <a name="FilepathInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.filepathInput"></a>

```go
func FilepathInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceBaseEnvironmentIdInput`<sup>Optional</sup> <a name="WorkspaceBaseEnvironmentIdInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.workspaceBaseEnvironmentIdInput"></a>

```go
func WorkspaceBaseEnvironmentIdInput() *string
```

- *Type:* *string

---

##### `BaseEnvironmentType`<sup>Required</sup> <a name="BaseEnvironmentType" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.baseEnvironmentType"></a>

```go
func BaseEnvironmentType() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Filepath`<sup>Required</sup> <a name="Filepath" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.filepath"></a>

```go
func Filepath() *string
```

- *Type:* *string

---

##### `WorkspaceBaseEnvironmentId`<sup>Required</sup> <a name="WorkspaceBaseEnvironmentId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.workspaceBaseEnvironmentId"></a>

```go
func WorkspaceBaseEnvironmentId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EnvironmentsWorkspaceBaseEnvironmentConfig <a name="EnvironmentsWorkspaceBaseEnvironmentConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/environmentsworkspacebaseenvironment"

&environmentsworkspacebaseenvironment.EnvironmentsWorkspaceBaseEnvironmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	BaseEnvironmentType: *string,
	Filepath: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig,
	WorkspaceBaseEnvironmentId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/environments_workspace_base_environment#display_name EnvironmentsWorkspaceBaseEnvironment#display_name}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.baseEnvironmentType">BaseEnvironmentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/environments_workspace_base_environment#base_environment_type EnvironmentsWorkspaceBaseEnvironment#base_environment_type}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.filepath">Filepath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/environments_workspace_base_environment#filepath EnvironmentsWorkspaceBaseEnvironment#filepath}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/environments_workspace_base_environment#provider_config EnvironmentsWorkspaceBaseEnvironment#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.workspaceBaseEnvironmentId">WorkspaceBaseEnvironmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/environments_workspace_base_environment#workspace_base_environment_id EnvironmentsWorkspaceBaseEnvironment#workspace_base_environment_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/environments_workspace_base_environment#display_name EnvironmentsWorkspaceBaseEnvironment#display_name}.

---

##### `BaseEnvironmentType`<sup>Optional</sup> <a name="BaseEnvironmentType" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.baseEnvironmentType"></a>

```go
BaseEnvironmentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/environments_workspace_base_environment#base_environment_type EnvironmentsWorkspaceBaseEnvironment#base_environment_type}.

---

##### `Filepath`<sup>Optional</sup> <a name="Filepath" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.filepath"></a>

```go
Filepath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/environments_workspace_base_environment#filepath EnvironmentsWorkspaceBaseEnvironment#filepath}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.providerConfig"></a>

```go
ProviderConfig EnvironmentsWorkspaceBaseEnvironmentProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig">EnvironmentsWorkspaceBaseEnvironmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/environments_workspace_base_environment#provider_config EnvironmentsWorkspaceBaseEnvironment#provider_config}.

---

##### `WorkspaceBaseEnvironmentId`<sup>Optional</sup> <a name="WorkspaceBaseEnvironmentId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentConfig.property.workspaceBaseEnvironmentId"></a>

```go
WorkspaceBaseEnvironmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/environments_workspace_base_environment#workspace_base_environment_id EnvironmentsWorkspaceBaseEnvironment#workspace_base_environment_id}.

---

### EnvironmentsWorkspaceBaseEnvironmentProviderConfig <a name="EnvironmentsWorkspaceBaseEnvironmentProviderConfig" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/environmentsworkspacebaseenvironment"

&environmentsworkspacebaseenvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/environments_workspace_base_environment#workspace_id EnvironmentsWorkspaceBaseEnvironment#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/environments_workspace_base_environment#workspace_id EnvironmentsWorkspaceBaseEnvironment#workspace_id}.

---

### EnvironmentsWorkspaceBaseEnvironmentSpec <a name="EnvironmentsWorkspaceBaseEnvironmentSpec" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/environmentsworkspacebaseenvironment"

&environmentsworkspacebaseenvironment.EnvironmentsWorkspaceBaseEnvironmentSpec {
	Dependencies: *[]*string,
	EnvironmentVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpec.property.dependencies">Dependencies</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/environments_workspace_base_environment#dependencies EnvironmentsWorkspaceBaseEnvironment#dependencies}. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpec.property.environmentVersion">EnvironmentVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/environments_workspace_base_environment#environment_version EnvironmentsWorkspaceBaseEnvironment#environment_version}. |

---

##### `Dependencies`<sup>Optional</sup> <a name="Dependencies" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpec.property.dependencies"></a>

```go
Dependencies *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/environments_workspace_base_environment#dependencies EnvironmentsWorkspaceBaseEnvironment#dependencies}.

---

##### `EnvironmentVersion`<sup>Optional</sup> <a name="EnvironmentVersion" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpec.property.environmentVersion"></a>

```go
EnvironmentVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/environments_workspace_base_environment#environment_version EnvironmentsWorkspaceBaseEnvironment#environment_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference <a name="EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/environmentsworkspacebaseenvironment"

environmentsworkspacebaseenvironment.NewEnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference <a name="EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/environmentsworkspacebaseenvironment"

environmentsworkspacebaseenvironment.NewEnvironmentsWorkspaceBaseEnvironmentSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resetDependencies">ResetDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resetEnvironmentVersion">ResetEnvironmentVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDependencies` <a name="ResetDependencies" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resetDependencies"></a>

```go
func ResetDependencies()
```

##### `ResetEnvironmentVersion` <a name="ResetEnvironmentVersion" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.resetEnvironmentVersion"></a>

```go
func ResetEnvironmentVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.dependenciesInput">DependenciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.environmentVersionInput">EnvironmentVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.dependencies">Dependencies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.environmentVersion">EnvironmentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpec">EnvironmentsWorkspaceBaseEnvironmentSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DependenciesInput`<sup>Optional</sup> <a name="DependenciesInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.dependenciesInput"></a>

```go
func DependenciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnvironmentVersionInput`<sup>Optional</sup> <a name="EnvironmentVersionInput" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.environmentVersionInput"></a>

```go
func EnvironmentVersionInput() *string
```

- *Type:* *string

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.dependencies"></a>

```go
func Dependencies() *[]*string
```

- *Type:* *[]*string

---

##### `EnvironmentVersion`<sup>Required</sup> <a name="EnvironmentVersion" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.environmentVersion"></a>

```go
func EnvironmentVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() EnvironmentsWorkspaceBaseEnvironmentSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.environmentsWorkspaceBaseEnvironment.EnvironmentsWorkspaceBaseEnvironmentSpec">EnvironmentsWorkspaceBaseEnvironmentSpec</a>

---



