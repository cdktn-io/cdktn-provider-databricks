# `metastore` Submodule <a name="`metastore` Submodule" id="@cdktn/provider-databricks.metastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Metastore <a name="Metastore" id="@cdktn/provider-databricks.metastore.Metastore"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore databricks_metastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.metastore.Metastore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/metastore"

metastore.NewMetastore(scope Construct, id *string, config MetastoreConfig) Metastore
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig">MetastoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.metastore.MetastoreConfig">MetastoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetApi">ResetApi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetDefaultDataAccessConfigId">ResetDefaultDataAccessConfigId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetDeltaSharingOrganizationName">ResetDeltaSharingOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetDeltaSharingRecipientTokenLifetimeInSeconds">ResetDeltaSharingRecipientTokenLifetimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetDeltaSharingScope">ResetDeltaSharingScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetExternalAccessEnabled">ResetExternalAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetPrivilegeModelVersion">ResetPrivilegeModelVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetStorageRoot">ResetStorageRoot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetStorageRootCredentialId">ResetStorageRootCredentialId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetStorageRootCredentialName">ResetStorageRootCredentialName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.metastore.Metastore.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.metastore.Metastore.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.metastore.Metastore.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.metastore.Metastore.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.metastore.Metastore.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.metastore.Metastore.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.metastore.Metastore.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.metastore.Metastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.metastore.Metastore.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.metastore.Metastore.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.metastore.Metastore.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.metastore.Metastore.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.metastore.Metastore.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.metastore.Metastore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.Metastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.metastore.Metastore.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.metastore.Metastore.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.metastore.Metastore.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.metastore.Metastore.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.metastore.Metastore.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.Metastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.metastore.Metastore.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.metastore.Metastore.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.metastore.Metastore.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.metastore.Metastore.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.metastore.Metastore.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.metastore.Metastore.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.metastore.Metastore.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.metastore.Metastore.putProviderConfig"></a>

```go
func PutProviderConfig(value MetastoreProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.metastore.Metastore.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig">MetastoreProviderConfig</a>

---

##### `ResetApi` <a name="ResetApi" id="@cdktn/provider-databricks.metastore.Metastore.resetApi"></a>

```go
func ResetApi()
```

##### `ResetDefaultDataAccessConfigId` <a name="ResetDefaultDataAccessConfigId" id="@cdktn/provider-databricks.metastore.Metastore.resetDefaultDataAccessConfigId"></a>

```go
func ResetDefaultDataAccessConfigId()
```

##### `ResetDeltaSharingOrganizationName` <a name="ResetDeltaSharingOrganizationName" id="@cdktn/provider-databricks.metastore.Metastore.resetDeltaSharingOrganizationName"></a>

```go
func ResetDeltaSharingOrganizationName()
```

##### `ResetDeltaSharingRecipientTokenLifetimeInSeconds` <a name="ResetDeltaSharingRecipientTokenLifetimeInSeconds" id="@cdktn/provider-databricks.metastore.Metastore.resetDeltaSharingRecipientTokenLifetimeInSeconds"></a>

```go
func ResetDeltaSharingRecipientTokenLifetimeInSeconds()
```

##### `ResetDeltaSharingScope` <a name="ResetDeltaSharingScope" id="@cdktn/provider-databricks.metastore.Metastore.resetDeltaSharingScope"></a>

```go
func ResetDeltaSharingScope()
```

##### `ResetExternalAccessEnabled` <a name="ResetExternalAccessEnabled" id="@cdktn/provider-databricks.metastore.Metastore.resetExternalAccessEnabled"></a>

```go
func ResetExternalAccessEnabled()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktn/provider-databricks.metastore.Metastore.resetForceDestroy"></a>

```go
func ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.metastore.Metastore.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.metastore.Metastore.resetName"></a>

```go
func ResetName()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktn/provider-databricks.metastore.Metastore.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetPrivilegeModelVersion` <a name="ResetPrivilegeModelVersion" id="@cdktn/provider-databricks.metastore.Metastore.resetPrivilegeModelVersion"></a>

```go
func ResetPrivilegeModelVersion()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.metastore.Metastore.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-databricks.metastore.Metastore.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetStorageRoot` <a name="ResetStorageRoot" id="@cdktn/provider-databricks.metastore.Metastore.resetStorageRoot"></a>

```go
func ResetStorageRoot()
```

##### `ResetStorageRootCredentialId` <a name="ResetStorageRootCredentialId" id="@cdktn/provider-databricks.metastore.Metastore.resetStorageRootCredentialId"></a>

```go
func ResetStorageRootCredentialId()
```

##### `ResetStorageRootCredentialName` <a name="ResetStorageRootCredentialName" id="@cdktn/provider-databricks.metastore.Metastore.resetStorageRootCredentialName"></a>

```go
func ResetStorageRootCredentialName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Metastore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.metastore.Metastore.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/metastore"

metastore.Metastore_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.metastore.Metastore.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.metastore.Metastore.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/metastore"

metastore.Metastore_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.metastore.Metastore.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.metastore.Metastore.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/metastore"

metastore.Metastore_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.metastore.Metastore.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.metastore.Metastore.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/metastore"

metastore.Metastore_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Metastore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.metastore.Metastore.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.metastore.Metastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Metastore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.metastore.Metastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Metastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.metastore.Metastore.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Metastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.cloud">Cloud</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.globalMetastoreId">GlobalMetastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference">MetastoreProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.updatedAt">UpdatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.apiInput">ApiInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.defaultDataAccessConfigIdInput">DefaultDataAccessConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingOrganizationNameInput">DeltaSharingOrganizationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingRecipientTokenLifetimeInSecondsInput">DeltaSharingRecipientTokenLifetimeInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingScopeInput">DeltaSharingScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.externalAccessEnabledInput">ExternalAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.privilegeModelVersionInput">PrivilegeModelVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig">MetastoreProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.storageRootCredentialIdInput">StorageRootCredentialIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.storageRootCredentialNameInput">StorageRootCredentialNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.storageRootInput">StorageRootInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.api">Api</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.defaultDataAccessConfigId">DefaultDataAccessConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingOrganizationName">DeltaSharingOrganizationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingRecipientTokenLifetimeInSeconds">DeltaSharingRecipientTokenLifetimeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingScope">DeltaSharingScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.externalAccessEnabled">ExternalAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.privilegeModelVersion">PrivilegeModelVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.storageRoot">StorageRoot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.storageRootCredentialId">StorageRootCredentialId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.storageRootCredentialName">StorageRootCredentialName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.metastore.Metastore.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.metastore.Metastore.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.metastore.Metastore.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.metastore.Metastore.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.metastore.Metastore.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.metastore.Metastore.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.metastore.Metastore.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.metastore.Metastore.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.metastore.Metastore.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.metastore.Metastore.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.metastore.Metastore.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.metastore.Metastore.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.metastore.Metastore.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.metastore.Metastore.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cloud`<sup>Required</sup> <a name="Cloud" id="@cdktn/provider-databricks.metastore.Metastore.property.cloud"></a>

```go
func Cloud() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-databricks.metastore.Metastore.property.createdAt"></a>

```go
func CreatedAt() *f64
```

- *Type:* *f64

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-databricks.metastore.Metastore.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `GlobalMetastoreId`<sup>Required</sup> <a name="GlobalMetastoreId" id="@cdktn/provider-databricks.metastore.Metastore.property.globalMetastoreId"></a>

```go
func GlobalMetastoreId() *string
```

- *Type:* *string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktn/provider-databricks.metastore.Metastore.property.metastoreId"></a>

```go
func MetastoreId() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.metastore.Metastore.property.providerConfig"></a>

```go
func ProviderConfig() MetastoreProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference">MetastoreProviderConfigOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-databricks.metastore.Metastore.property.updatedAt"></a>

```go
func UpdatedAt() *f64
```

- *Type:* *f64

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-databricks.metastore.Metastore.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `ApiInput`<sup>Optional</sup> <a name="ApiInput" id="@cdktn/provider-databricks.metastore.Metastore.property.apiInput"></a>

```go
func ApiInput() *string
```

- *Type:* *string

---

##### `DefaultDataAccessConfigIdInput`<sup>Optional</sup> <a name="DefaultDataAccessConfigIdInput" id="@cdktn/provider-databricks.metastore.Metastore.property.defaultDataAccessConfigIdInput"></a>

```go
func DefaultDataAccessConfigIdInput() *string
```

- *Type:* *string

---

##### `DeltaSharingOrganizationNameInput`<sup>Optional</sup> <a name="DeltaSharingOrganizationNameInput" id="@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingOrganizationNameInput"></a>

```go
func DeltaSharingOrganizationNameInput() *string
```

- *Type:* *string

---

##### `DeltaSharingRecipientTokenLifetimeInSecondsInput`<sup>Optional</sup> <a name="DeltaSharingRecipientTokenLifetimeInSecondsInput" id="@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingRecipientTokenLifetimeInSecondsInput"></a>

```go
func DeltaSharingRecipientTokenLifetimeInSecondsInput() *f64
```

- *Type:* *f64

---

##### `DeltaSharingScopeInput`<sup>Optional</sup> <a name="DeltaSharingScopeInput" id="@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingScopeInput"></a>

```go
func DeltaSharingScopeInput() *string
```

- *Type:* *string

---

##### `ExternalAccessEnabledInput`<sup>Optional</sup> <a name="ExternalAccessEnabledInput" id="@cdktn/provider-databricks.metastore.Metastore.property.externalAccessEnabledInput"></a>

```go
func ExternalAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktn/provider-databricks.metastore.Metastore.property.forceDestroyInput"></a>

```go
func ForceDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.metastore.Metastore.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.metastore.Metastore.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktn/provider-databricks.metastore.Metastore.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `PrivilegeModelVersionInput`<sup>Optional</sup> <a name="PrivilegeModelVersionInput" id="@cdktn/provider-databricks.metastore.Metastore.property.privilegeModelVersionInput"></a>

```go
func PrivilegeModelVersionInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.metastore.Metastore.property.providerConfigInput"></a>

```go
func ProviderConfigInput() MetastoreProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig">MetastoreProviderConfig</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-databricks.metastore.Metastore.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `StorageRootCredentialIdInput`<sup>Optional</sup> <a name="StorageRootCredentialIdInput" id="@cdktn/provider-databricks.metastore.Metastore.property.storageRootCredentialIdInput"></a>

```go
func StorageRootCredentialIdInput() *string
```

- *Type:* *string

---

##### `StorageRootCredentialNameInput`<sup>Optional</sup> <a name="StorageRootCredentialNameInput" id="@cdktn/provider-databricks.metastore.Metastore.property.storageRootCredentialNameInput"></a>

```go
func StorageRootCredentialNameInput() *string
```

- *Type:* *string

---

##### `StorageRootInput`<sup>Optional</sup> <a name="StorageRootInput" id="@cdktn/provider-databricks.metastore.Metastore.property.storageRootInput"></a>

```go
func StorageRootInput() *string
```

- *Type:* *string

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktn/provider-databricks.metastore.Metastore.property.api"></a>

```go
func Api() *string
```

- *Type:* *string

---

##### `DefaultDataAccessConfigId`<sup>Required</sup> <a name="DefaultDataAccessConfigId" id="@cdktn/provider-databricks.metastore.Metastore.property.defaultDataAccessConfigId"></a>

```go
func DefaultDataAccessConfigId() *string
```

- *Type:* *string

---

##### `DeltaSharingOrganizationName`<sup>Required</sup> <a name="DeltaSharingOrganizationName" id="@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingOrganizationName"></a>

```go
func DeltaSharingOrganizationName() *string
```

- *Type:* *string

---

##### `DeltaSharingRecipientTokenLifetimeInSeconds`<sup>Required</sup> <a name="DeltaSharingRecipientTokenLifetimeInSeconds" id="@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingRecipientTokenLifetimeInSeconds"></a>

```go
func DeltaSharingRecipientTokenLifetimeInSeconds() *f64
```

- *Type:* *f64

---

##### `DeltaSharingScope`<sup>Required</sup> <a name="DeltaSharingScope" id="@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingScope"></a>

```go
func DeltaSharingScope() *string
```

- *Type:* *string

---

##### `ExternalAccessEnabled`<sup>Required</sup> <a name="ExternalAccessEnabled" id="@cdktn/provider-databricks.metastore.Metastore.property.externalAccessEnabled"></a>

```go
func ExternalAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktn/provider-databricks.metastore.Metastore.property.forceDestroy"></a>

```go
func ForceDestroy() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.metastore.Metastore.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.metastore.Metastore.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-databricks.metastore.Metastore.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `PrivilegeModelVersion`<sup>Required</sup> <a name="PrivilegeModelVersion" id="@cdktn/provider-databricks.metastore.Metastore.property.privilegeModelVersion"></a>

```go
func PrivilegeModelVersion() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-databricks.metastore.Metastore.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `StorageRoot`<sup>Required</sup> <a name="StorageRoot" id="@cdktn/provider-databricks.metastore.Metastore.property.storageRoot"></a>

```go
func StorageRoot() *string
```

- *Type:* *string

---

##### `StorageRootCredentialId`<sup>Required</sup> <a name="StorageRootCredentialId" id="@cdktn/provider-databricks.metastore.Metastore.property.storageRootCredentialId"></a>

```go
func StorageRootCredentialId() *string
```

- *Type:* *string

---

##### `StorageRootCredentialName`<sup>Required</sup> <a name="StorageRootCredentialName" id="@cdktn/provider-databricks.metastore.Metastore.property.storageRootCredentialName"></a>

```go
func StorageRootCredentialName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.metastore.Metastore.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MetastoreConfig <a name="MetastoreConfig" id="@cdktn/provider-databricks.metastore.MetastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.metastore.MetastoreConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/metastore"

&metastore.MetastoreConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Api: *string,
	DefaultDataAccessConfigId: *string,
	DeltaSharingOrganizationName: *string,
	DeltaSharingRecipientTokenLifetimeInSeconds: *f64,
	DeltaSharingScope: *string,
	ExternalAccessEnabled: interface{},
	ForceDestroy: interface{},
	Id: *string,
	Name: *string,
	Owner: *string,
	PrivilegeModelVersion: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.metastore.MetastoreProviderConfig,
	Region: *string,
	StorageRoot: *string,
	StorageRootCredentialId: *string,
	StorageRootCredentialName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.api">Api</a></code> | <code>*string</code> | Specifies whether to use account-level or workspace-level API. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.defaultDataAccessConfigId">DefaultDataAccessConfigId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#default_data_access_config_id Metastore#default_data_access_config_id}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.deltaSharingOrganizationName">DeltaSharingOrganizationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#delta_sharing_organization_name Metastore#delta_sharing_organization_name}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.deltaSharingRecipientTokenLifetimeInSeconds">DeltaSharingRecipientTokenLifetimeInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#delta_sharing_recipient_token_lifetime_in_seconds Metastore#delta_sharing_recipient_token_lifetime_in_seconds}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.deltaSharingScope">DeltaSharingScope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#delta_sharing_scope Metastore#delta_sharing_scope}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.externalAccessEnabled">ExternalAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#external_access_enabled Metastore#external_access_enabled}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#force_destroy Metastore#force_destroy}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#id Metastore#id}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#name Metastore#name}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#owner Metastore#owner}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.privilegeModelVersion">PrivilegeModelVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#privilege_model_version Metastore#privilege_model_version}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig">MetastoreProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#region Metastore#region}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.storageRoot">StorageRoot</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#storage_root Metastore#storage_root}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.storageRootCredentialId">StorageRootCredentialId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#storage_root_credential_id Metastore#storage_root_credential_id}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.storageRootCredentialName">StorageRootCredentialName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#storage_root_credential_name Metastore#storage_root_credential_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Api`<sup>Optional</sup> <a name="Api" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.api"></a>

```go
Api *string
```

- *Type:* *string

Specifies whether to use account-level or workspace-level API.

Valid values are `account` and `workspace`. When not set, the API level is inferred from the provider host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#api Metastore#api}

---

##### `DefaultDataAccessConfigId`<sup>Optional</sup> <a name="DefaultDataAccessConfigId" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.defaultDataAccessConfigId"></a>

```go
DefaultDataAccessConfigId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#default_data_access_config_id Metastore#default_data_access_config_id}.

---

##### `DeltaSharingOrganizationName`<sup>Optional</sup> <a name="DeltaSharingOrganizationName" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.deltaSharingOrganizationName"></a>

```go
DeltaSharingOrganizationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#delta_sharing_organization_name Metastore#delta_sharing_organization_name}.

---

##### `DeltaSharingRecipientTokenLifetimeInSeconds`<sup>Optional</sup> <a name="DeltaSharingRecipientTokenLifetimeInSeconds" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.deltaSharingRecipientTokenLifetimeInSeconds"></a>

```go
DeltaSharingRecipientTokenLifetimeInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#delta_sharing_recipient_token_lifetime_in_seconds Metastore#delta_sharing_recipient_token_lifetime_in_seconds}.

---

##### `DeltaSharingScope`<sup>Optional</sup> <a name="DeltaSharingScope" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.deltaSharingScope"></a>

```go
DeltaSharingScope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#delta_sharing_scope Metastore#delta_sharing_scope}.

---

##### `ExternalAccessEnabled`<sup>Optional</sup> <a name="ExternalAccessEnabled" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.externalAccessEnabled"></a>

```go
ExternalAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#external_access_enabled Metastore#external_access_enabled}.

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.forceDestroy"></a>

```go
ForceDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#force_destroy Metastore#force_destroy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#id Metastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#name Metastore#name}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#owner Metastore#owner}.

---

##### `PrivilegeModelVersion`<sup>Optional</sup> <a name="PrivilegeModelVersion" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.privilegeModelVersion"></a>

```go
PrivilegeModelVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#privilege_model_version Metastore#privilege_model_version}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.providerConfig"></a>

```go
ProviderConfig MetastoreProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig">MetastoreProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#provider_config Metastore#provider_config}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#region Metastore#region}.

---

##### `StorageRoot`<sup>Optional</sup> <a name="StorageRoot" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.storageRoot"></a>

```go
StorageRoot *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#storage_root Metastore#storage_root}.

---

##### `StorageRootCredentialId`<sup>Optional</sup> <a name="StorageRootCredentialId" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.storageRootCredentialId"></a>

```go
StorageRootCredentialId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#storage_root_credential_id Metastore#storage_root_credential_id}.

---

##### `StorageRootCredentialName`<sup>Optional</sup> <a name="StorageRootCredentialName" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.storageRootCredentialName"></a>

```go
StorageRootCredentialName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#storage_root_credential_name Metastore#storage_root_credential_name}.

---

### MetastoreProviderConfig <a name="MetastoreProviderConfig" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/metastore"

&metastore.MetastoreProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#workspace_id Metastore#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/resources/metastore#workspace_id Metastore#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### MetastoreProviderConfigOutputReference <a name="MetastoreProviderConfigOutputReference" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/metastore"

metastore.NewMetastoreProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MetastoreProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig">MetastoreProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() MetastoreProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig">MetastoreProviderConfig</a>

---



