# `automaticClusterUpdateWorkspaceSetting` Submodule <a name="`automaticClusterUpdateWorkspaceSetting` Submodule" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomaticClusterUpdateWorkspaceSetting <a name="AutomaticClusterUpdateWorkspaceSetting" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting databricks_automatic_cluster_update_workspace_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/automaticclusterupdateworkspacesetting"

automaticclusterupdateworkspacesetting.NewAutomaticClusterUpdateWorkspaceSetting(scope Construct, id *string, config AutomaticClusterUpdateWorkspaceSettingConfig) AutomaticClusterUpdateWorkspaceSetting
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig">AutomaticClusterUpdateWorkspaceSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig">AutomaticClusterUpdateWorkspaceSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.putAutomaticClusterUpdateWorkspace">PutAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.resetSettingName">ResetSettingName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutomaticClusterUpdateWorkspace` <a name="PutAutomaticClusterUpdateWorkspace" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.putAutomaticClusterUpdateWorkspace"></a>

```go
func PutAutomaticClusterUpdateWorkspace(value AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.putAutomaticClusterUpdateWorkspace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace</a>

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.putProviderConfig"></a>

```go
func PutProviderConfig(value AutomaticClusterUpdateWorkspaceSettingProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfig">AutomaticClusterUpdateWorkspaceSettingProviderConfig</a>

---

##### `ResetEtag` <a name="ResetEtag" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.resetEtag"></a>

```go
func ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.resetId"></a>

```go
func ResetId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetSettingName` <a name="ResetSettingName" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.resetSettingName"></a>

```go
func ResetSettingName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AutomaticClusterUpdateWorkspaceSetting resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/automaticclusterupdateworkspacesetting"

automaticclusterupdateworkspacesetting.AutomaticClusterUpdateWorkspaceSetting_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/automaticclusterupdateworkspacesetting"

automaticclusterupdateworkspacesetting.AutomaticClusterUpdateWorkspaceSetting_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/automaticclusterupdateworkspacesetting"

automaticclusterupdateworkspacesetting.AutomaticClusterUpdateWorkspaceSetting_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/automaticclusterupdateworkspacesetting"

automaticclusterupdateworkspacesetting.AutomaticClusterUpdateWorkspaceSetting_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AutomaticClusterUpdateWorkspaceSetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AutomaticClusterUpdateWorkspaceSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AutomaticClusterUpdateWorkspaceSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AutomaticClusterUpdateWorkspaceSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.automaticClusterUpdateWorkspace">AutomaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference">AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.automaticClusterUpdateWorkspaceInput">AutomaticClusterUpdateWorkspaceInput</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.etagInput">EtagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfig">AutomaticClusterUpdateWorkspaceSettingProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.settingNameInput">SettingNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.settingName">SettingName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutomaticClusterUpdateWorkspace`<sup>Required</sup> <a name="AutomaticClusterUpdateWorkspace" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.automaticClusterUpdateWorkspace"></a>

```go
func AutomaticClusterUpdateWorkspace() AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.providerConfig"></a>

```go
func ProviderConfig() AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference">AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference</a>

---

##### `AutomaticClusterUpdateWorkspaceInput`<sup>Optional</sup> <a name="AutomaticClusterUpdateWorkspaceInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.automaticClusterUpdateWorkspaceInput"></a>

```go
func AutomaticClusterUpdateWorkspaceInput() AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace</a>

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.etagInput"></a>

```go
func EtagInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.providerConfigInput"></a>

```go
func ProviderConfigInput() AutomaticClusterUpdateWorkspaceSettingProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfig">AutomaticClusterUpdateWorkspaceSettingProviderConfig</a>

---

##### `SettingNameInput`<sup>Optional</sup> <a name="SettingNameInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.settingNameInput"></a>

```go
func SettingNameInput() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SettingName`<sup>Required</sup> <a name="SettingName" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.settingName"></a>

```go
func SettingName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSetting.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace <a name="AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/automaticclusterupdateworkspacesetting"

&automaticclusterupdateworkspacesetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace {
	Enabled: interface{},
	CanToggle: interface{},
	MaintenanceWindow: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow,
	RestartEvenIfNoUpdatesAvailable: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#enabled AutomaticClusterUpdateWorkspaceSetting#enabled}. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace.property.canToggle">CanToggle</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#can_toggle AutomaticClusterUpdateWorkspaceSetting#can_toggle}. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable">RestartEvenIfNoUpdatesAvailable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#restart_even_if_no_updates_available AutomaticClusterUpdateWorkspaceSetting#restart_even_if_no_updates_available}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#enabled AutomaticClusterUpdateWorkspaceSetting#enabled}.

---

##### `CanToggle`<sup>Optional</sup> <a name="CanToggle" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace.property.canToggle"></a>

```go
CanToggle interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#can_toggle AutomaticClusterUpdateWorkspaceSetting#can_toggle}.

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace.property.maintenanceWindow"></a>

```go
MaintenanceWindow AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#maintenance_window AutomaticClusterUpdateWorkspaceSetting#maintenance_window}

---

##### `RestartEvenIfNoUpdatesAvailable`<sup>Optional</sup> <a name="RestartEvenIfNoUpdatesAvailable" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace.property.restartEvenIfNoUpdatesAvailable"></a>

```go
RestartEvenIfNoUpdatesAvailable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#restart_even_if_no_updates_available AutomaticClusterUpdateWorkspaceSetting#restart_even_if_no_updates_available}.

---

### AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails <a name="AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/automaticclusterupdateworkspacesetting"

&automaticclusterupdateworkspacesetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails {

}
```


### AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow <a name="AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/automaticclusterupdateworkspacesetting"

&automaticclusterupdateworkspacesetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow {
	WeekDayBasedSchedule: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule">WeekDayBasedSchedule</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | week_day_based_schedule block. |

---

##### `WeekDayBasedSchedule`<sup>Optional</sup> <a name="WeekDayBasedSchedule" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow.property.weekDayBasedSchedule"></a>

```go
WeekDayBasedSchedule AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

week_day_based_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#week_day_based_schedule AutomaticClusterUpdateWorkspaceSetting#week_day_based_schedule}

---

### AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule <a name="AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/automaticclusterupdateworkspacesetting"

&automaticclusterupdateworkspacesetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule {
	DayOfWeek: *string,
	Frequency: *string,
	WindowStartTime: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#day_of_week AutomaticClusterUpdateWorkspaceSetting#day_of_week}. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency">Frequency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#frequency AutomaticClusterUpdateWorkspaceSetting#frequency}. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime">WindowStartTime</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | window_start_time block. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.dayOfWeek"></a>

```go
DayOfWeek *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#day_of_week AutomaticClusterUpdateWorkspaceSetting#day_of_week}.

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.frequency"></a>

```go
Frequency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#frequency AutomaticClusterUpdateWorkspaceSetting#frequency}.

---

##### `WindowStartTime`<sup>Optional</sup> <a name="WindowStartTime" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule.property.windowStartTime"></a>

```go
WindowStartTime AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

window_start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#window_start_time AutomaticClusterUpdateWorkspaceSetting#window_start_time}

---

### AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime <a name="AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/automaticclusterupdateworkspacesetting"

&automaticclusterupdateworkspacesetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime {
	Hours: *f64,
	Minutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours">Hours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#hours AutomaticClusterUpdateWorkspaceSetting#hours}. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes">Minutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#minutes AutomaticClusterUpdateWorkspaceSetting#minutes}. |

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.hours"></a>

```go
Hours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#hours AutomaticClusterUpdateWorkspaceSetting#hours}.

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime.property.minutes"></a>

```go
Minutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#minutes AutomaticClusterUpdateWorkspaceSetting#minutes}.

---

### AutomaticClusterUpdateWorkspaceSettingConfig <a name="AutomaticClusterUpdateWorkspaceSettingConfig" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/automaticclusterupdateworkspacesetting"

&automaticclusterupdateworkspacesetting.AutomaticClusterUpdateWorkspaceSettingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AutomaticClusterUpdateWorkspace: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace,
	Etag: *string,
	Id: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfig,
	SettingName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.automaticClusterUpdateWorkspace">AutomaticClusterUpdateWorkspace</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace</a></code> | automatic_cluster_update_workspace block. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.etag">Etag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#etag AutomaticClusterUpdateWorkspaceSetting#etag}. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#id AutomaticClusterUpdateWorkspaceSetting#id}. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfig">AutomaticClusterUpdateWorkspaceSettingProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.settingName">SettingName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#setting_name AutomaticClusterUpdateWorkspaceSetting#setting_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutomaticClusterUpdateWorkspace`<sup>Required</sup> <a name="AutomaticClusterUpdateWorkspace" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.automaticClusterUpdateWorkspace"></a>

```go
AutomaticClusterUpdateWorkspace AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace</a>

automatic_cluster_update_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#automatic_cluster_update_workspace AutomaticClusterUpdateWorkspaceSetting#automatic_cluster_update_workspace}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.etag"></a>

```go
Etag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#etag AutomaticClusterUpdateWorkspaceSetting#etag}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#id AutomaticClusterUpdateWorkspaceSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.providerConfig"></a>

```go
ProviderConfig AutomaticClusterUpdateWorkspaceSettingProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfig">AutomaticClusterUpdateWorkspaceSettingProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#provider_config AutomaticClusterUpdateWorkspaceSetting#provider_config}

---

##### `SettingName`<sup>Optional</sup> <a name="SettingName" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingConfig.property.settingName"></a>

```go
SettingName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#setting_name AutomaticClusterUpdateWorkspaceSetting#setting_name}.

---

### AutomaticClusterUpdateWorkspaceSettingProviderConfig <a name="AutomaticClusterUpdateWorkspaceSettingProviderConfig" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/automaticclusterupdateworkspacesetting"

&automaticclusterupdateworkspacesetting.AutomaticClusterUpdateWorkspaceSettingProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#workspace_id AutomaticClusterUpdateWorkspaceSetting#workspace_id}. |

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/resources/automatic_cluster_update_workspace_setting#workspace_id AutomaticClusterUpdateWorkspaceSetting#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList <a name="AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/automaticclusterupdateworkspacesetting"

automaticclusterupdateworkspacesetting.NewAutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.get"></a>

```go
func Get(index *f64) AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference <a name="AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/automaticclusterupdateworkspacesetting"

automaticclusterupdateworkspacesetting.NewAutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode">ForcedForComplianceMode</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement">UnavailableForDisabledEntitlement</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier">UnavailableForNonEnterpriseTier</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForcedForComplianceMode`<sup>Required</sup> <a name="ForcedForComplianceMode" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.forcedForComplianceMode"></a>

```go
func ForcedForComplianceMode() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UnavailableForDisabledEntitlement`<sup>Required</sup> <a name="UnavailableForDisabledEntitlement" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForDisabledEntitlement"></a>

```go
func UnavailableForDisabledEntitlement() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UnavailableForNonEnterpriseTier`<sup>Required</sup> <a name="UnavailableForNonEnterpriseTier" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.unavailableForNonEnterpriseTier"></a>

```go
func UnavailableForNonEnterpriseTier() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetails</a>

---


### AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference <a name="AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/automaticclusterupdateworkspacesetting"

automaticclusterupdateworkspacesetting.NewAutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule">PutWeekDayBasedSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule">ResetWeekDayBasedSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWeekDayBasedSchedule` <a name="PutWeekDayBasedSchedule" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule"></a>

```go
func PutWeekDayBasedSchedule(value AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.putWeekDayBasedSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---

##### `ResetWeekDayBasedSchedule` <a name="ResetWeekDayBasedSchedule" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.resetWeekDayBasedSchedule"></a>

```go
func ResetWeekDayBasedSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule">WeekDayBasedSchedule</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput">WeekDayBasedScheduleInput</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WeekDayBasedSchedule`<sup>Required</sup> <a name="WeekDayBasedSchedule" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedSchedule"></a>

```go
func WeekDayBasedSchedule() AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference</a>

---

##### `WeekDayBasedScheduleInput`<sup>Optional</sup> <a name="WeekDayBasedScheduleInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.weekDayBasedScheduleInput"></a>

```go
func WeekDayBasedScheduleInput() AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---


### AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference <a name="AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/automaticclusterupdateworkspacesetting"

automaticclusterupdateworkspacesetting.NewAutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime">PutWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime">ResetWindowStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWindowStartTime` <a name="PutWindowStartTime" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime"></a>

```go
func PutWindowStartTime(value AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.putWindowStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---

##### `ResetWindowStartTime` <a name="ResetWindowStartTime" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.resetWindowStartTime"></a>

```go
func ResetWindowStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime">WindowStartTime</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput">WindowStartTimeInput</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency">Frequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WindowStartTime`<sup>Required</sup> <a name="WindowStartTime" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTime"></a>

```go
func WindowStartTime() AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference</a>

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeekInput"></a>

```go
func DayOfWeekInput() *string
```

- *Type:* *string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequencyInput"></a>

```go
func FrequencyInput() *string
```

- *Type:* *string

---

##### `WindowStartTimeInput`<sup>Optional</sup> <a name="WindowStartTimeInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.windowStartTimeInput"></a>

```go
func WindowStartTimeInput() AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.frequency"></a>

```go
func Frequency() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedSchedule</a>

---


### AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference <a name="AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/automaticclusterupdateworkspacesetting"

automaticclusterupdateworkspacesetting.NewAutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hoursInput"></a>

```go
func HoursInput() *f64
```

- *Type:* *f64

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutesInput"></a>

```go
func MinutesInput() *f64
```

- *Type:* *f64

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.minutes"></a>

```go
func Minutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowWeekDayBasedScheduleWindowStartTime</a>

---


### AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference <a name="AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/automaticclusterupdateworkspacesetting"

automaticclusterupdateworkspacesetting.NewAutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle">ResetCanToggle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable">ResetRestartEvenIfNoUpdatesAvailable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow"></a>

```go
func PutMaintenanceWindow(value AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---

##### `ResetCanToggle` <a name="ResetCanToggle" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.resetCanToggle"></a>

```go
func ResetCanToggle()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.resetMaintenanceWindow"></a>

```go
func ResetMaintenanceWindow()
```

##### `ResetRestartEvenIfNoUpdatesAvailable` <a name="ResetRestartEvenIfNoUpdatesAvailable" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.resetRestartEvenIfNoUpdatesAvailable"></a>

```go
func ResetRestartEvenIfNoUpdatesAvailable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails">EnablementDetails</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput">CanToggleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput">RestartEvenIfNoUpdatesAvailableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.canToggle">CanToggle</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable">RestartEvenIfNoUpdatesAvailable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnablementDetails`<sup>Required</sup> <a name="EnablementDetails" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.enablementDetails"></a>

```go
func EnablementDetails() AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceEnablementDetailsList</a>

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindowOutputReference</a>

---

##### `CanToggleInput`<sup>Optional</sup> <a name="CanToggleInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.canToggleInput"></a>

```go
func CanToggleInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.maintenanceWindowInput"></a>

```go
func MaintenanceWindowInput() AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceMaintenanceWindow</a>

---

##### `RestartEvenIfNoUpdatesAvailableInput`<sup>Optional</sup> <a name="RestartEvenIfNoUpdatesAvailableInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailableInput"></a>

```go
func RestartEvenIfNoUpdatesAvailableInput() interface{}
```

- *Type:* interface{}

---

##### `CanToggle`<sup>Required</sup> <a name="CanToggle" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.canToggle"></a>

```go
func CanToggle() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `RestartEvenIfNoUpdatesAvailable`<sup>Required</sup> <a name="RestartEvenIfNoUpdatesAvailable" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.restartEvenIfNoUpdatesAvailable"></a>

```go
func RestartEvenIfNoUpdatesAvailable() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspaceOutputReference.property.internalValue"></a>

```go
func InternalValue() AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace">AutomaticClusterUpdateWorkspaceSettingAutomaticClusterUpdateWorkspace</a>

---


### AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference <a name="AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/automaticclusterupdateworkspacesetting"

automaticclusterupdateworkspacesetting.NewAutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfig">AutomaticClusterUpdateWorkspaceSettingProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() AutomaticClusterUpdateWorkspaceSettingProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.automaticClusterUpdateWorkspaceSetting.AutomaticClusterUpdateWorkspaceSettingProviderConfig">AutomaticClusterUpdateWorkspaceSettingProviderConfig</a>

---



