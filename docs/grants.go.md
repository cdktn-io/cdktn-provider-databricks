# `grants` Submodule <a name="`grants` Submodule" id="@cdktn/provider-databricks.grants"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Grants <a name="Grants" id="@cdktn/provider-databricks.grants.Grants"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants databricks_grants}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.grants.Grants.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/grants"

grants.NewGrants(scope Construct, id *string, config GrantsConfig) Grants
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.grants.GrantsConfig">GrantsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.grants.Grants.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.grants.Grants.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.grants.Grants.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.grants.GrantsConfig">GrantsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.putGrant">PutGrant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.resetCredential">ResetCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.resetExternalLocation">ResetExternalLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.resetForeignConnection">ResetForeignConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.resetFunction">ResetFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.resetMetastore">ResetMetastore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.resetPipeline">ResetPipeline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.resetRecipient">ResetRecipient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.resetShare">ResetShare</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.resetStorageCredential">ResetStorageCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.resetTable">ResetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.resetVolume">ResetVolume</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.grants.Grants.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.grants.Grants.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.grants.Grants.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.grants.Grants.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.grants.Grants.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.grants.Grants.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.grants.Grants.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.grants.Grants.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.grants.Grants.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.grants.Grants.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.grants.Grants.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.grants.Grants.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.grants.Grants.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.grants.Grants.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.grants.Grants.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.Grants.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.grants.Grants.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.Grants.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.grants.Grants.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.Grants.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.grants.Grants.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.Grants.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.grants.Grants.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.Grants.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.grants.Grants.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.Grants.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.grants.Grants.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.Grants.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.grants.Grants.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.Grants.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.grants.Grants.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.Grants.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.grants.Grants.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.grants.Grants.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.grants.Grants.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.grants.Grants.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.grants.Grants.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.Grants.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.grants.Grants.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.grants.Grants.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.grants.Grants.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.grants.Grants.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.grants.Grants.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.grants.Grants.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.grants.Grants.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGrant` <a name="PutGrant" id="@cdktn/provider-databricks.grants.Grants.putGrant"></a>

```go
func PutGrant(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.grants.Grants.putGrant.parameter.value"></a>

- *Type:* interface{}

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.grants.Grants.putProviderConfig"></a>

```go
func PutProviderConfig(value GrantsProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.grants.Grants.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.grants.GrantsProviderConfig">GrantsProviderConfig</a>

---

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-databricks.grants.Grants.resetCatalog"></a>

```go
func ResetCatalog()
```

##### `ResetCredential` <a name="ResetCredential" id="@cdktn/provider-databricks.grants.Grants.resetCredential"></a>

```go
func ResetCredential()
```

##### `ResetExternalLocation` <a name="ResetExternalLocation" id="@cdktn/provider-databricks.grants.Grants.resetExternalLocation"></a>

```go
func ResetExternalLocation()
```

##### `ResetForeignConnection` <a name="ResetForeignConnection" id="@cdktn/provider-databricks.grants.Grants.resetForeignConnection"></a>

```go
func ResetForeignConnection()
```

##### `ResetFunction` <a name="ResetFunction" id="@cdktn/provider-databricks.grants.Grants.resetFunction"></a>

```go
func ResetFunction()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.grants.Grants.resetId"></a>

```go
func ResetId()
```

##### `ResetMetastore` <a name="ResetMetastore" id="@cdktn/provider-databricks.grants.Grants.resetMetastore"></a>

```go
func ResetMetastore()
```

##### `ResetModel` <a name="ResetModel" id="@cdktn/provider-databricks.grants.Grants.resetModel"></a>

```go
func ResetModel()
```

##### `ResetPipeline` <a name="ResetPipeline" id="@cdktn/provider-databricks.grants.Grants.resetPipeline"></a>

```go
func ResetPipeline()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.grants.Grants.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetRecipient` <a name="ResetRecipient" id="@cdktn/provider-databricks.grants.Grants.resetRecipient"></a>

```go
func ResetRecipient()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-databricks.grants.Grants.resetSchema"></a>

```go
func ResetSchema()
```

##### `ResetShare` <a name="ResetShare" id="@cdktn/provider-databricks.grants.Grants.resetShare"></a>

```go
func ResetShare()
```

##### `ResetStorageCredential` <a name="ResetStorageCredential" id="@cdktn/provider-databricks.grants.Grants.resetStorageCredential"></a>

```go
func ResetStorageCredential()
```

##### `ResetTable` <a name="ResetTable" id="@cdktn/provider-databricks.grants.Grants.resetTable"></a>

```go
func ResetTable()
```

##### `ResetVolume` <a name="ResetVolume" id="@cdktn/provider-databricks.grants.Grants.resetVolume"></a>

```go
func ResetVolume()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Grants resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.grants.Grants.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/grants"

grants.Grants_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.grants.Grants.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.grants.Grants.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/grants"

grants.Grants_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.grants.Grants.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.grants.Grants.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/grants"

grants.Grants_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.grants.Grants.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.grants.Grants.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/grants"

grants.Grants_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Grants resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.grants.Grants.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.grants.Grants.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Grants to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.grants.Grants.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Grants that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.grants.Grants.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Grants to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.grant">Grant</a></code> | <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantList">GrantsGrantList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference">GrantsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.catalogInput">CatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.credentialInput">CredentialInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.externalLocationInput">ExternalLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.foreignConnectionInput">ForeignConnectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.functionInput">FunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.grantInput">GrantInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.metastoreInput">MetastoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.modelInput">ModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.pipelineInput">PipelineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.grants.GrantsProviderConfig">GrantsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.recipientInput">RecipientInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.shareInput">ShareInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.storageCredentialInput">StorageCredentialInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.tableInput">TableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.volumeInput">VolumeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.credential">Credential</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.externalLocation">ExternalLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.foreignConnection">ForeignConnection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.function">Function</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.metastore">Metastore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.model">Model</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.pipeline">Pipeline</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.recipient">Recipient</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.share">Share</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.storageCredential">StorageCredential</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.table">Table</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.volume">Volume</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.grants.Grants.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.grants.Grants.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.grants.Grants.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.grants.Grants.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.grants.Grants.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.grants.Grants.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.grants.Grants.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.grants.Grants.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.grants.Grants.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.grants.Grants.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.grants.Grants.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.grants.Grants.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.grants.Grants.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.grants.Grants.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Grant`<sup>Required</sup> <a name="Grant" id="@cdktn/provider-databricks.grants.Grants.property.grant"></a>

```go
func Grant() GrantsGrantList
```

- *Type:* <a href="#@cdktn/provider-databricks.grants.GrantsGrantList">GrantsGrantList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.grants.Grants.property.providerConfig"></a>

```go
func ProviderConfig() GrantsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference">GrantsProviderConfigOutputReference</a>

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-databricks.grants.Grants.property.catalogInput"></a>

```go
func CatalogInput() *string
```

- *Type:* *string

---

##### `CredentialInput`<sup>Optional</sup> <a name="CredentialInput" id="@cdktn/provider-databricks.grants.Grants.property.credentialInput"></a>

```go
func CredentialInput() *string
```

- *Type:* *string

---

##### `ExternalLocationInput`<sup>Optional</sup> <a name="ExternalLocationInput" id="@cdktn/provider-databricks.grants.Grants.property.externalLocationInput"></a>

```go
func ExternalLocationInput() *string
```

- *Type:* *string

---

##### `ForeignConnectionInput`<sup>Optional</sup> <a name="ForeignConnectionInput" id="@cdktn/provider-databricks.grants.Grants.property.foreignConnectionInput"></a>

```go
func ForeignConnectionInput() *string
```

- *Type:* *string

---

##### `FunctionInput`<sup>Optional</sup> <a name="FunctionInput" id="@cdktn/provider-databricks.grants.Grants.property.functionInput"></a>

```go
func FunctionInput() *string
```

- *Type:* *string

---

##### `GrantInput`<sup>Optional</sup> <a name="GrantInput" id="@cdktn/provider-databricks.grants.Grants.property.grantInput"></a>

```go
func GrantInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.grants.Grants.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetastoreInput`<sup>Optional</sup> <a name="MetastoreInput" id="@cdktn/provider-databricks.grants.Grants.property.metastoreInput"></a>

```go
func MetastoreInput() *string
```

- *Type:* *string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-databricks.grants.Grants.property.modelInput"></a>

```go
func ModelInput() *string
```

- *Type:* *string

---

##### `PipelineInput`<sup>Optional</sup> <a name="PipelineInput" id="@cdktn/provider-databricks.grants.Grants.property.pipelineInput"></a>

```go
func PipelineInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.grants.Grants.property.providerConfigInput"></a>

```go
func ProviderConfigInput() GrantsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.grants.GrantsProviderConfig">GrantsProviderConfig</a>

---

##### `RecipientInput`<sup>Optional</sup> <a name="RecipientInput" id="@cdktn/provider-databricks.grants.Grants.property.recipientInput"></a>

```go
func RecipientInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-databricks.grants.Grants.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `ShareInput`<sup>Optional</sup> <a name="ShareInput" id="@cdktn/provider-databricks.grants.Grants.property.shareInput"></a>

```go
func ShareInput() *string
```

- *Type:* *string

---

##### `StorageCredentialInput`<sup>Optional</sup> <a name="StorageCredentialInput" id="@cdktn/provider-databricks.grants.Grants.property.storageCredentialInput"></a>

```go
func StorageCredentialInput() *string
```

- *Type:* *string

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktn/provider-databricks.grants.Grants.property.tableInput"></a>

```go
func TableInput() *string
```

- *Type:* *string

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktn/provider-databricks.grants.Grants.property.volumeInput"></a>

```go
func VolumeInput() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-databricks.grants.Grants.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `Credential`<sup>Required</sup> <a name="Credential" id="@cdktn/provider-databricks.grants.Grants.property.credential"></a>

```go
func Credential() *string
```

- *Type:* *string

---

##### `ExternalLocation`<sup>Required</sup> <a name="ExternalLocation" id="@cdktn/provider-databricks.grants.Grants.property.externalLocation"></a>

```go
func ExternalLocation() *string
```

- *Type:* *string

---

##### `ForeignConnection`<sup>Required</sup> <a name="ForeignConnection" id="@cdktn/provider-databricks.grants.Grants.property.foreignConnection"></a>

```go
func ForeignConnection() *string
```

- *Type:* *string

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktn/provider-databricks.grants.Grants.property.function"></a>

```go
func Function() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.grants.Grants.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Metastore`<sup>Required</sup> <a name="Metastore" id="@cdktn/provider-databricks.grants.Grants.property.metastore"></a>

```go
func Metastore() *string
```

- *Type:* *string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-databricks.grants.Grants.property.model"></a>

```go
func Model() *string
```

- *Type:* *string

---

##### `Pipeline`<sup>Required</sup> <a name="Pipeline" id="@cdktn/provider-databricks.grants.Grants.property.pipeline"></a>

```go
func Pipeline() *string
```

- *Type:* *string

---

##### `Recipient`<sup>Required</sup> <a name="Recipient" id="@cdktn/provider-databricks.grants.Grants.property.recipient"></a>

```go
func Recipient() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-databricks.grants.Grants.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `Share`<sup>Required</sup> <a name="Share" id="@cdktn/provider-databricks.grants.Grants.property.share"></a>

```go
func Share() *string
```

- *Type:* *string

---

##### `StorageCredential`<sup>Required</sup> <a name="StorageCredential" id="@cdktn/provider-databricks.grants.Grants.property.storageCredential"></a>

```go
func StorageCredential() *string
```

- *Type:* *string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktn/provider-databricks.grants.Grants.property.table"></a>

```go
func Table() *string
```

- *Type:* *string

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktn/provider-databricks.grants.Grants.property.volume"></a>

```go
func Volume() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.grants.Grants.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.grants.Grants.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GrantsConfig <a name="GrantsConfig" id="@cdktn/provider-databricks.grants.GrantsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.grants.GrantsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/grants"

&grants.GrantsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Grant: interface{},
	Catalog: *string,
	Credential: *string,
	ExternalLocation: *string,
	ForeignConnection: *string,
	Function: *string,
	Id: *string,
	Metastore: *string,
	Model: *string,
	Pipeline: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.grants.GrantsProviderConfig,
	Recipient: *string,
	Schema: *string,
	Share: *string,
	StorageCredential: *string,
	Table: *string,
	Volume: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsConfig.property.grant">Grant</a></code> | <code>interface{}</code> | grant block. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsConfig.property.catalog">Catalog</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#catalog Grants#catalog}. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsConfig.property.credential">Credential</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#credential Grants#credential}. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsConfig.property.externalLocation">ExternalLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#external_location Grants#external_location}. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsConfig.property.foreignConnection">ForeignConnection</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#foreign_connection Grants#foreign_connection}. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsConfig.property.function">Function</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#function Grants#function}. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#id Grants#id}. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsConfig.property.metastore">Metastore</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#metastore Grants#metastore}. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsConfig.property.model">Model</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#model Grants#model}. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsConfig.property.pipeline">Pipeline</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#pipeline Grants#pipeline}. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.grants.GrantsProviderConfig">GrantsProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsConfig.property.recipient">Recipient</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#recipient Grants#recipient}. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsConfig.property.schema">Schema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#schema Grants#schema}. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsConfig.property.share">Share</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#share Grants#share}. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsConfig.property.storageCredential">StorageCredential</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#storage_credential Grants#storage_credential}. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsConfig.property.table">Table</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#table Grants#table}. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsConfig.property.volume">Volume</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#volume Grants#volume}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.grants.GrantsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.grants.GrantsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.grants.GrantsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.grants.GrantsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.grants.GrantsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.grants.GrantsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.grants.GrantsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Grant`<sup>Required</sup> <a name="Grant" id="@cdktn/provider-databricks.grants.GrantsConfig.property.grant"></a>

```go
Grant interface{}
```

- *Type:* interface{}

grant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#grant Grants#grant}

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-databricks.grants.GrantsConfig.property.catalog"></a>

```go
Catalog *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#catalog Grants#catalog}.

---

##### `Credential`<sup>Optional</sup> <a name="Credential" id="@cdktn/provider-databricks.grants.GrantsConfig.property.credential"></a>

```go
Credential *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#credential Grants#credential}.

---

##### `ExternalLocation`<sup>Optional</sup> <a name="ExternalLocation" id="@cdktn/provider-databricks.grants.GrantsConfig.property.externalLocation"></a>

```go
ExternalLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#external_location Grants#external_location}.

---

##### `ForeignConnection`<sup>Optional</sup> <a name="ForeignConnection" id="@cdktn/provider-databricks.grants.GrantsConfig.property.foreignConnection"></a>

```go
ForeignConnection *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#foreign_connection Grants#foreign_connection}.

---

##### `Function`<sup>Optional</sup> <a name="Function" id="@cdktn/provider-databricks.grants.GrantsConfig.property.function"></a>

```go
Function *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#function Grants#function}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.grants.GrantsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#id Grants#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metastore`<sup>Optional</sup> <a name="Metastore" id="@cdktn/provider-databricks.grants.GrantsConfig.property.metastore"></a>

```go
Metastore *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#metastore Grants#metastore}.

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktn/provider-databricks.grants.GrantsConfig.property.model"></a>

```go
Model *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#model Grants#model}.

---

##### `Pipeline`<sup>Optional</sup> <a name="Pipeline" id="@cdktn/provider-databricks.grants.GrantsConfig.property.pipeline"></a>

```go
Pipeline *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#pipeline Grants#pipeline}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.grants.GrantsConfig.property.providerConfig"></a>

```go
ProviderConfig GrantsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.grants.GrantsProviderConfig">GrantsProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#provider_config Grants#provider_config}

---

##### `Recipient`<sup>Optional</sup> <a name="Recipient" id="@cdktn/provider-databricks.grants.GrantsConfig.property.recipient"></a>

```go
Recipient *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#recipient Grants#recipient}.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-databricks.grants.GrantsConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#schema Grants#schema}.

---

##### `Share`<sup>Optional</sup> <a name="Share" id="@cdktn/provider-databricks.grants.GrantsConfig.property.share"></a>

```go
Share *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#share Grants#share}.

---

##### `StorageCredential`<sup>Optional</sup> <a name="StorageCredential" id="@cdktn/provider-databricks.grants.GrantsConfig.property.storageCredential"></a>

```go
StorageCredential *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#storage_credential Grants#storage_credential}.

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktn/provider-databricks.grants.GrantsConfig.property.table"></a>

```go
Table *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#table Grants#table}.

---

##### `Volume`<sup>Optional</sup> <a name="Volume" id="@cdktn/provider-databricks.grants.GrantsConfig.property.volume"></a>

```go
Volume *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#volume Grants#volume}.

---

### GrantsGrant <a name="GrantsGrant" id="@cdktn/provider-databricks.grants.GrantsGrant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.grants.GrantsGrant.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/grants"

&grants.GrantsGrant {
	Principal: *string,
	Privileges: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrant.property.principal">Principal</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#principal Grants#principal}. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrant.property.privileges">Privileges</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#privileges Grants#privileges}. |

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-databricks.grants.GrantsGrant.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#principal Grants#principal}.

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktn/provider-databricks.grants.GrantsGrant.property.privileges"></a>

```go
Privileges *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#privileges Grants#privileges}.

---

### GrantsProviderConfig <a name="GrantsProviderConfig" id="@cdktn/provider-databricks.grants.GrantsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.grants.GrantsProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/grants"

&grants.GrantsProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#workspace_id Grants#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.grants.GrantsProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/grants#workspace_id Grants#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### GrantsGrantList <a name="GrantsGrantList" id="@cdktn/provider-databricks.grants.GrantsGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.grants.GrantsGrantList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/grants"

grants.NewGrantsGrantList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GrantsGrantList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.grants.GrantsGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.GrantsGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.grants.GrantsGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.grants.GrantsGrantList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.grants.GrantsGrantList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.grants.GrantsGrantList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.grants.GrantsGrantList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.grants.GrantsGrantList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.grants.GrantsGrantList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.grants.GrantsGrantList.get"></a>

```go
func Get(index *f64) GrantsGrantOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.grants.GrantsGrantList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.grants.GrantsGrantList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.grants.GrantsGrantList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.grants.GrantsGrantList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GrantsGrantOutputReference <a name="GrantsGrantOutputReference" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/grants"

grants.NewGrantsGrantOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GrantsGrantOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantOutputReference.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantOutputReference.property.privilegesInput">PrivilegesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantOutputReference.property.privileges">Privileges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsGrantOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `PrivilegesInput`<sup>Optional</sup> <a name="PrivilegesInput" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.property.privilegesInput"></a>

```go
func PrivilegesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.property.privileges"></a>

```go
func Privileges() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.grants.GrantsGrantOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GrantsProviderConfigOutputReference <a name="GrantsProviderConfigOutputReference" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/grants"

grants.NewGrantsProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GrantsProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.grants.GrantsProviderConfig">GrantsProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.grants.GrantsProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GrantsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.grants.GrantsProviderConfig">GrantsProviderConfig</a>

---



