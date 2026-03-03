# `providerResource` Submodule <a name="`providerResource` Submodule" id="@cdktn/provider-databricks.providerResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProviderResource <a name="ProviderResource" id="@cdktn/provider-databricks.providerResource.ProviderResource"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/provider databricks_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.providerResource.ProviderResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/providerresource"

providerresource.NewProviderResource(scope Construct, id *string, config ProviderResourceConfig) ProviderResource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceConfig">ProviderResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.providerResource.ProviderResource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.providerResource.ProviderResource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.providerResource.ProviderResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.providerResource.ProviderResourceConfig">ProviderResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.providerResource.ProviderResource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.providerResource.ProviderResource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.providerResource.ProviderResource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.providerResource.ProviderResource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.providerResource.ProviderResource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.providerResource.ProviderResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.providerResource.ProviderResource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.providerResource.ProviderResource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.providerResource.ProviderResource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.providerResource.ProviderResource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.providerResource.ProviderResource.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.providerResource.ProviderResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.providerResource.ProviderResource.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.providerResource.ProviderResource.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.providerResource.ProviderResource.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.providerResource.ProviderResource.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.providerResource.ProviderResource.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.providerResource.ProviderResource.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.providerResource.ProviderResource.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.providerResource.ProviderResource.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.providerResource.ProviderResource.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.providerResource.ProviderResource.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.providerResource.ProviderResource.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.providerResource.ProviderResource.putProviderConfig"></a>

```go
func PutProviderConfig(value ProviderResourceProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.providerResource.ProviderResource.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfig">ProviderResourceProviderConfig</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-databricks.providerResource.ProviderResource.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.providerResource.ProviderResource.resetId"></a>

```go
func ResetId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.providerResource.ProviderResource.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ProviderResource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.providerResource.ProviderResource.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/providerresource"

providerresource.ProviderResource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.providerResource.ProviderResource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.providerResource.ProviderResource.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/providerresource"

providerresource.ProviderResource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.providerResource.ProviderResource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.providerResource.ProviderResource.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/providerresource"

providerresource.ProviderResource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.providerResource.ProviderResource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.providerResource.ProviderResource.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/providerresource"

providerresource.ProviderResource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ProviderResource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.providerResource.ProviderResource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.providerResource.ProviderResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ProviderResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.providerResource.ProviderResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ProviderResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.providerResource.ProviderResource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ProviderResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference">ProviderResourceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfig">ProviderResourceProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.recipientProfileStrInput">RecipientProfileStrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.recipientProfileStr">RecipientProfileStr</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.providerConfig"></a>

```go
func ProviderConfig() ProviderResourceProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference">ProviderResourceProviderConfigOutputReference</a>

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.authenticationTypeInput"></a>

```go
func AuthenticationTypeInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.providerConfigInput"></a>

```go
func ProviderConfigInput() ProviderResourceProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfig">ProviderResourceProviderConfig</a>

---

##### `RecipientProfileStrInput`<sup>Optional</sup> <a name="RecipientProfileStrInput" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.recipientProfileStrInput"></a>

```go
func RecipientProfileStrInput() *string
```

- *Type:* *string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.authenticationType"></a>

```go
func AuthenticationType() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RecipientProfileStr`<sup>Required</sup> <a name="RecipientProfileStr" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.recipientProfileStr"></a>

```go
func RecipientProfileStr() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.providerResource.ProviderResource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProviderResourceConfig <a name="ProviderResourceConfig" id="@cdktn/provider-databricks.providerResource.ProviderResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.providerResource.ProviderResourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/providerresource"

&providerresource.ProviderResourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AuthenticationType: *string,
	Name: *string,
	RecipientProfileStr: *string,
	Comment: *string,
	Id: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16.providerResource.ProviderResourceProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceConfig.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/provider#authentication_type ProviderResource#authentication_type}. |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/provider#name ProviderResource#name}. |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceConfig.property.recipientProfileStr">RecipientProfileStr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/provider#recipient_profile_str ProviderResource#recipient_profile_str}. |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceConfig.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/provider#comment ProviderResource#comment}. |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/provider#id ProviderResource#id}. |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfig">ProviderResourceProviderConfig</a></code> | provider_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.providerResource.ProviderResourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.providerResource.ProviderResourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.providerResource.ProviderResourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.providerResource.ProviderResourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.providerResource.ProviderResourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.providerResource.ProviderResourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.providerResource.ProviderResourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-databricks.providerResource.ProviderResourceConfig.property.authenticationType"></a>

```go
AuthenticationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/provider#authentication_type ProviderResource#authentication_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.providerResource.ProviderResourceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/provider#name ProviderResource#name}.

---

##### `RecipientProfileStr`<sup>Required</sup> <a name="RecipientProfileStr" id="@cdktn/provider-databricks.providerResource.ProviderResourceConfig.property.recipientProfileStr"></a>

```go
RecipientProfileStr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/provider#recipient_profile_str ProviderResource#recipient_profile_str}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-databricks.providerResource.ProviderResourceConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/provider#comment ProviderResource#comment}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.providerResource.ProviderResourceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/provider#id ProviderResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.providerResource.ProviderResourceConfig.property.providerConfig"></a>

```go
ProviderConfig ProviderResourceProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfig">ProviderResourceProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/provider#provider_config ProviderResource#provider_config}

---

### ProviderResourceProviderConfig <a name="ProviderResourceProviderConfig" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/providerresource"

&providerresource.ProviderResourceProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/provider#workspace_id ProviderResource#workspace_id}. |

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/provider#workspace_id ProviderResource#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProviderResourceProviderConfigOutputReference <a name="ProviderResourceProviderConfigOutputReference" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v16/providerresource"

providerresource.NewProviderResourceProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ProviderResourceProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfig">ProviderResourceProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ProviderResourceProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.providerResource.ProviderResourceProviderConfig">ProviderResourceProviderConfig</a>

---



