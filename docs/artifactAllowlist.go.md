# `artifactAllowlist` Submodule <a name="`artifactAllowlist` Submodule" id="@cdktn/provider-databricks.artifactAllowlist"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArtifactAllowlist <a name="ArtifactAllowlist" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/artifact_allowlist databricks_artifact_allowlist}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/artifactallowlist"

artifactallowlist.NewArtifactAllowlist(scope Construct, id *string, config ArtifactAllowlistConfig) ArtifactAllowlist
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig">ArtifactAllowlistConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig">ArtifactAllowlistConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.putArtifactMatcher">PutArtifactMatcher</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetMetastoreId">ResetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutArtifactMatcher` <a name="PutArtifactMatcher" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.putArtifactMatcher"></a>

```go
func PutArtifactMatcher(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.putArtifactMatcher.parameter.value"></a>

- *Type:* interface{}

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.putProviderConfig"></a>

```go
func PutProviderConfig(value ArtifactAllowlistProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig">ArtifactAllowlistProviderConfig</a>

---

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetCreatedAt"></a>

```go
func ResetCreatedAt()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetCreatedBy"></a>

```go
func ResetCreatedBy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetId"></a>

```go
func ResetId()
```

##### `ResetMetastoreId` <a name="ResetMetastoreId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetMetastoreId"></a>

```go
func ResetMetastoreId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ArtifactAllowlist resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/artifactallowlist"

artifactallowlist.ArtifactAllowlist_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/artifactallowlist"

artifactallowlist.ArtifactAllowlist_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/artifactallowlist"

artifactallowlist.ArtifactAllowlist_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/artifactallowlist"

artifactallowlist.ArtifactAllowlist_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ArtifactAllowlist resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ArtifactAllowlist to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ArtifactAllowlist that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/artifact_allowlist#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ArtifactAllowlist to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.artifactMatcher">ArtifactMatcher</a></code> | <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList">ArtifactAllowlistArtifactMatcherList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference">ArtifactAllowlistProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.artifactMatcherInput">ArtifactMatcherInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.artifactTypeInput">ArtifactTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.createdAtInput">CreatedAtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.createdByInput">CreatedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig">ArtifactAllowlistProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.artifactType">ArtifactType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArtifactMatcher`<sup>Required</sup> <a name="ArtifactMatcher" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.artifactMatcher"></a>

```go
func ArtifactMatcher() ArtifactAllowlistArtifactMatcherList
```

- *Type:* <a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList">ArtifactAllowlistArtifactMatcherList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.providerConfig"></a>

```go
func ProviderConfig() ArtifactAllowlistProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference">ArtifactAllowlistProviderConfigOutputReference</a>

---

##### `ArtifactMatcherInput`<sup>Optional</sup> <a name="ArtifactMatcherInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.artifactMatcherInput"></a>

```go
func ArtifactMatcherInput() interface{}
```

- *Type:* interface{}

---

##### `ArtifactTypeInput`<sup>Optional</sup> <a name="ArtifactTypeInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.artifactTypeInput"></a>

```go
func ArtifactTypeInput() *string
```

- *Type:* *string

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.createdAtInput"></a>

```go
func CreatedAtInput() *f64
```

- *Type:* *f64

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.createdByInput"></a>

```go
func CreatedByInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.metastoreIdInput"></a>

```go
func MetastoreIdInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.providerConfigInput"></a>

```go
func ProviderConfigInput() ArtifactAllowlistProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig">ArtifactAllowlistProviderConfig</a>

---

##### `ArtifactType`<sup>Required</sup> <a name="ArtifactType" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.artifactType"></a>

```go
func ArtifactType() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.createdAt"></a>

```go
func CreatedAt() *f64
```

- *Type:* *f64

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.metastoreId"></a>

```go
func MetastoreId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlist.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ArtifactAllowlistArtifactMatcher <a name="ArtifactAllowlistArtifactMatcher" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/artifactallowlist"

&artifactallowlist.ArtifactAllowlistArtifactMatcher {
	Artifact: *string,
	MatchType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher.property.artifact">Artifact</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/artifact_allowlist#artifact ArtifactAllowlist#artifact}. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher.property.matchType">MatchType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/artifact_allowlist#match_type ArtifactAllowlist#match_type}. |

---

##### `Artifact`<sup>Required</sup> <a name="Artifact" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher.property.artifact"></a>

```go
Artifact *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/artifact_allowlist#artifact ArtifactAllowlist#artifact}.

---

##### `MatchType`<sup>Required</sup> <a name="MatchType" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcher.property.matchType"></a>

```go
MatchType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/artifact_allowlist#match_type ArtifactAllowlist#match_type}.

---

### ArtifactAllowlistConfig <a name="ArtifactAllowlistConfig" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/artifactallowlist"

&artifactallowlist.ArtifactAllowlistConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ArtifactMatcher: interface{},
	ArtifactType: *string,
	CreatedAt: *f64,
	CreatedBy: *string,
	Id: *string,
	MetastoreId: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.artifactAllowlist.ArtifactAllowlistProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.artifactMatcher">ArtifactMatcher</a></code> | <code>interface{}</code> | artifact_matcher block. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.artifactType">ArtifactType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/artifact_allowlist#artifact_type ArtifactAllowlist#artifact_type}. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/artifact_allowlist#created_at ArtifactAllowlist#created_at}. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.createdBy">CreatedBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/artifact_allowlist#created_by ArtifactAllowlist#created_by}. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/artifact_allowlist#id ArtifactAllowlist#id}. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/artifact_allowlist#metastore_id ArtifactAllowlist#metastore_id}. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig">ArtifactAllowlistProviderConfig</a></code> | provider_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArtifactMatcher`<sup>Required</sup> <a name="ArtifactMatcher" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.artifactMatcher"></a>

```go
ArtifactMatcher interface{}
```

- *Type:* interface{}

artifact_matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/artifact_allowlist#artifact_matcher ArtifactAllowlist#artifact_matcher}

---

##### `ArtifactType`<sup>Required</sup> <a name="ArtifactType" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.artifactType"></a>

```go
ArtifactType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/artifact_allowlist#artifact_type ArtifactAllowlist#artifact_type}.

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.createdAt"></a>

```go
CreatedAt *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/artifact_allowlist#created_at ArtifactAllowlist#created_at}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.createdBy"></a>

```go
CreatedBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/artifact_allowlist#created_by ArtifactAllowlist#created_by}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/artifact_allowlist#id ArtifactAllowlist#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MetastoreId`<sup>Optional</sup> <a name="MetastoreId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.metastoreId"></a>

```go
MetastoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/artifact_allowlist#metastore_id ArtifactAllowlist#metastore_id}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistConfig.property.providerConfig"></a>

```go
ProviderConfig ArtifactAllowlistProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig">ArtifactAllowlistProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/artifact_allowlist#provider_config ArtifactAllowlist#provider_config}

---

### ArtifactAllowlistProviderConfig <a name="ArtifactAllowlistProviderConfig" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/artifactallowlist"

&artifactallowlist.ArtifactAllowlistProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/artifact_allowlist#workspace_id ArtifactAllowlist#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/artifact_allowlist#workspace_id ArtifactAllowlist#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArtifactAllowlistArtifactMatcherList <a name="ArtifactAllowlistArtifactMatcherList" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/artifactallowlist"

artifactallowlist.NewArtifactAllowlistArtifactMatcherList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ArtifactAllowlistArtifactMatcherList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.get"></a>

```go
func Get(index *f64) ArtifactAllowlistArtifactMatcherOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ArtifactAllowlistArtifactMatcherOutputReference <a name="ArtifactAllowlistArtifactMatcherOutputReference" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/artifactallowlist"

artifactallowlist.NewArtifactAllowlistArtifactMatcherOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ArtifactAllowlistArtifactMatcherOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.artifactInput">ArtifactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.matchTypeInput">MatchTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.artifact">Artifact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.matchType">MatchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArtifactInput`<sup>Optional</sup> <a name="ArtifactInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.artifactInput"></a>

```go
func ArtifactInput() *string
```

- *Type:* *string

---

##### `MatchTypeInput`<sup>Optional</sup> <a name="MatchTypeInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.matchTypeInput"></a>

```go
func MatchTypeInput() *string
```

- *Type:* *string

---

##### `Artifact`<sup>Required</sup> <a name="Artifact" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.artifact"></a>

```go
func Artifact() *string
```

- *Type:* *string

---

##### `MatchType`<sup>Required</sup> <a name="MatchType" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.matchType"></a>

```go
func MatchType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistArtifactMatcherOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ArtifactAllowlistProviderConfigOutputReference <a name="ArtifactAllowlistProviderConfigOutputReference" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/artifactallowlist"

artifactallowlist.NewArtifactAllowlistProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArtifactAllowlistProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig">ArtifactAllowlistProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ArtifactAllowlistProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.artifactAllowlist.ArtifactAllowlistProviderConfig">ArtifactAllowlistProviderConfig</a>

---



