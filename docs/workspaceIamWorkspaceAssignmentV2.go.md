# `workspaceIamWorkspaceAssignmentV2` Submodule <a name="`workspaceIamWorkspaceAssignmentV2` Submodule" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceIamWorkspaceAssignmentV2 <a name="WorkspaceIamWorkspaceAssignmentV2" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_workspace_assignment_v2 databricks_workspace_iam_workspace_assignment_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/workspaceiamworkspaceassignmentv2"

workspaceiamworkspaceassignmentv2.NewWorkspaceIamWorkspaceAssignmentV2(scope Construct, id *string, config WorkspaceIamWorkspaceAssignmentV2Config) WorkspaceIamWorkspaceAssignmentV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2Config">WorkspaceIamWorkspaceAssignmentV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2Config">WorkspaceIamWorkspaceAssignmentV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.resetEntitlements">ResetEntitlements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.putProviderConfig"></a>

```go
func PutProviderConfig(value WorkspaceIamWorkspaceAssignmentV2ProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfig">WorkspaceIamWorkspaceAssignmentV2ProviderConfig</a>

---

##### `ResetEntitlements` <a name="ResetEntitlements" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.resetEntitlements"></a>

```go
func ResetEntitlements()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspaceIamWorkspaceAssignmentV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/workspaceiamworkspaceassignmentv2"

workspaceiamworkspaceassignmentv2.WorkspaceIamWorkspaceAssignmentV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/workspaceiamworkspaceassignmentv2"

workspaceiamworkspaceassignmentv2.WorkspaceIamWorkspaceAssignmentV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/workspaceiamworkspaceassignmentv2"

workspaceiamworkspaceassignmentv2.WorkspaceIamWorkspaceAssignmentV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/workspaceiamworkspaceassignmentv2"

workspaceiamworkspaceassignmentv2.WorkspaceIamWorkspaceAssignmentV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a WorkspaceIamWorkspaceAssignmentV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WorkspaceIamWorkspaceAssignmentV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WorkspaceIamWorkspaceAssignmentV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_workspace_assignment_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the WorkspaceIamWorkspaceAssignmentV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.effectiveEntitlements">EffectiveEntitlements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.principalType">PrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference">WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.entitlementsInput">EntitlementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.principalIdInput">PrincipalIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.entitlements">Entitlements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.principalId">PrincipalId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.workspaceId">WorkspaceId</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `EffectiveEntitlements`<sup>Required</sup> <a name="EffectiveEntitlements" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.effectiveEntitlements"></a>

```go
func EffectiveEntitlements() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.principalType"></a>

```go
func PrincipalType() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.providerConfig"></a>

```go
func ProviderConfig() WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference">WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference</a>

---

##### `EntitlementsInput`<sup>Optional</sup> <a name="EntitlementsInput" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.entitlementsInput"></a>

```go
func EntitlementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.principalIdInput"></a>

```go
func PrincipalIdInput() *f64
```

- *Type:* *f64

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *f64
```

- *Type:* *f64

---

##### `Entitlements`<sup>Required</sup> <a name="Entitlements" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.entitlements"></a>

```go
func Entitlements() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.principalId"></a>

```go
func PrincipalId() *f64
```

- *Type:* *f64

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.workspaceId"></a>

```go
func WorkspaceId() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceIamWorkspaceAssignmentV2Config <a name="WorkspaceIamWorkspaceAssignmentV2Config" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2Config.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/workspaceiamworkspaceassignmentv2"

&workspaceiamworkspaceassignmentv2.WorkspaceIamWorkspaceAssignmentV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	PrincipalId: *f64,
	Entitlements: *[]*string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfig,
	WorkspaceId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2Config.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2Config.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2Config.property.principalId">PrincipalId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_workspace_assignment_v2#principal_id WorkspaceIamWorkspaceAssignmentV2#principal_id}. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2Config.property.entitlements">Entitlements</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_workspace_assignment_v2#entitlements WorkspaceIamWorkspaceAssignmentV2#entitlements}. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2Config.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfig">WorkspaceIamWorkspaceAssignmentV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_workspace_assignment_v2#provider_config WorkspaceIamWorkspaceAssignmentV2#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2Config.property.workspaceId">WorkspaceId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_workspace_assignment_v2#workspace_id WorkspaceIamWorkspaceAssignmentV2#workspace_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2Config.property.principalId"></a>

```go
PrincipalId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_workspace_assignment_v2#principal_id WorkspaceIamWorkspaceAssignmentV2#principal_id}.

---

##### `Entitlements`<sup>Optional</sup> <a name="Entitlements" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2Config.property.entitlements"></a>

```go
Entitlements *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_workspace_assignment_v2#entitlements WorkspaceIamWorkspaceAssignmentV2#entitlements}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2Config.property.providerConfig"></a>

```go
ProviderConfig WorkspaceIamWorkspaceAssignmentV2ProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfig">WorkspaceIamWorkspaceAssignmentV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_workspace_assignment_v2#provider_config WorkspaceIamWorkspaceAssignmentV2#provider_config}.

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2Config.property.workspaceId"></a>

```go
WorkspaceId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_workspace_assignment_v2#workspace_id WorkspaceIamWorkspaceAssignmentV2#workspace_id}.

---

### WorkspaceIamWorkspaceAssignmentV2ProviderConfig <a name="WorkspaceIamWorkspaceAssignmentV2ProviderConfig" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/workspaceiamworkspaceassignmentv2"

&workspaceiamworkspaceassignmentv2.WorkspaceIamWorkspaceAssignmentV2ProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_workspace_assignment_v2#workspace_id WorkspaceIamWorkspaceAssignmentV2#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/resources/workspace_iam_workspace_assignment_v2#workspace_id WorkspaceIamWorkspaceAssignmentV2#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference <a name="WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/workspaceiamworkspaceassignmentv2"

workspaceiamworkspaceassignmentv2.NewWorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.workspaceIamWorkspaceAssignmentV2.WorkspaceIamWorkspaceAssignmentV2ProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



