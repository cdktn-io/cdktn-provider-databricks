# `workspaceEntityTagAssignment` Submodule <a name="`workspaceEntityTagAssignment` Submodule" id="@cdktf/provider-databricks.workspaceEntityTagAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceEntityTagAssignment <a name="WorkspaceEntityTagAssignment" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/workspace_entity_tag_assignment databricks_workspace_entity_tag_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/workspaceentitytagassignment"

workspaceentitytagassignment.NewWorkspaceEntityTagAssignment(scope Construct, id *string, config WorkspaceEntityTagAssignmentConfig) WorkspaceEntityTagAssignment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig">WorkspaceEntityTagAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig">WorkspaceEntityTagAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.resetTagValue">ResetTagValue</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetTagValue` <a name="ResetTagValue" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.resetTagValue"></a>

```go
func ResetTagValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WorkspaceEntityTagAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/workspaceentitytagassignment"

workspaceentitytagassignment.WorkspaceEntityTagAssignment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/workspaceentitytagassignment"

workspaceentitytagassignment.WorkspaceEntityTagAssignment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/workspaceentitytagassignment"

workspaceentitytagassignment.WorkspaceEntityTagAssignment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/workspaceentitytagassignment"

workspaceentitytagassignment.WorkspaceEntityTagAssignment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a WorkspaceEntityTagAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WorkspaceEntityTagAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WorkspaceEntityTagAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/workspace_entity_tag_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceEntityTagAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.entityIdInput">EntityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.entityTypeInput">EntityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tagKeyInput">TagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tagValueInput">TagValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.entityId">EntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tagValue">TagValue</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.entityIdInput"></a>

```go
func EntityIdInput() *string
```

- *Type:* *string

---

##### `EntityTypeInput`<sup>Optional</sup> <a name="EntityTypeInput" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.entityTypeInput"></a>

```go
func EntityTypeInput() *string
```

- *Type:* *string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tagKeyInput"></a>

```go
func TagKeyInput() *string
```

- *Type:* *string

---

##### `TagValueInput`<sup>Optional</sup> <a name="TagValueInput" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tagValueInput"></a>

```go
func TagValueInput() *string
```

- *Type:* *string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.entityId"></a>

```go
func EntityId() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tagValue"></a>

```go
func TagValue() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceEntityTagAssignmentConfig <a name="WorkspaceEntityTagAssignmentConfig" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/workspaceentitytagassignment"

&workspaceentitytagassignment.WorkspaceEntityTagAssignmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EntityId: *string,
	EntityType: *string,
	TagKey: *string,
	TagValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.entityId">EntityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/workspace_entity_tag_assignment#entity_id WorkspaceEntityTagAssignment#entity_id}. |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.entityType">EntityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/workspace_entity_tag_assignment#entity_type WorkspaceEntityTagAssignment#entity_type}. |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.tagKey">TagKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/workspace_entity_tag_assignment#tag_key WorkspaceEntityTagAssignment#tag_key}. |
| <code><a href="#@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.tagValue">TagValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/workspace_entity_tag_assignment#tag_value WorkspaceEntityTagAssignment#tag_value}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.entityId"></a>

```go
EntityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/workspace_entity_tag_assignment#entity_id WorkspaceEntityTagAssignment#entity_id}.

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.entityType"></a>

```go
EntityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/workspace_entity_tag_assignment#entity_type WorkspaceEntityTagAssignment#entity_type}.

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.tagKey"></a>

```go
TagKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/workspace_entity_tag_assignment#tag_key WorkspaceEntityTagAssignment#tag_key}.

---

##### `TagValue`<sup>Optional</sup> <a name="TagValue" id="@cdktf/provider-databricks.workspaceEntityTagAssignment.WorkspaceEntityTagAssignmentConfig.property.tagValue"></a>

```go
TagValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.99.0/docs/resources/workspace_entity_tag_assignment#tag_value WorkspaceEntityTagAssignment#tag_value}.

---



