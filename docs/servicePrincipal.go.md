# `servicePrincipal` Submodule <a name="`servicePrincipal` Submodule" id="@cdktn/provider-databricks.servicePrincipal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipal <a name="ServicePrincipal" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal databricks_service_principal}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/serviceprincipal"

serviceprincipal.NewServicePrincipal(scope Construct, id *string, config ServicePrincipalConfig) ServicePrincipal
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig">ServicePrincipalConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig">ServicePrincipalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetAclPrincipalId">ResetAclPrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetAllowClusterCreate">ResetAllowClusterCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetAllowInstancePoolCreate">ResetAllowInstancePoolCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetApi">ResetApi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetApplicationId">ResetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetDatabricksSqlAccess">ResetDatabricksSqlAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetDisableAsUserDeletion">ResetDisableAsUserDeletion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetForce">ResetForce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetForceDeleteHomeDir">ResetForceDeleteHomeDir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetForceDeleteRepos">ResetForceDeleteRepos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetHome">ResetHome</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetRepos">ResetRepos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetWorkspaceAccess">ResetWorkspaceAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetWorkspaceConsume">ResetWorkspaceConsume</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.putProviderConfig"></a>

```go
func PutProviderConfig(value ServicePrincipalProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfig">ServicePrincipalProviderConfig</a>

---

##### `ResetAclPrincipalId` <a name="ResetAclPrincipalId" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetAclPrincipalId"></a>

```go
func ResetAclPrincipalId()
```

##### `ResetActive` <a name="ResetActive" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetActive"></a>

```go
func ResetActive()
```

##### `ResetAllowClusterCreate` <a name="ResetAllowClusterCreate" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetAllowClusterCreate"></a>

```go
func ResetAllowClusterCreate()
```

##### `ResetAllowInstancePoolCreate` <a name="ResetAllowInstancePoolCreate" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetAllowInstancePoolCreate"></a>

```go
func ResetAllowInstancePoolCreate()
```

##### `ResetApi` <a name="ResetApi" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetApi"></a>

```go
func ResetApi()
```

##### `ResetApplicationId` <a name="ResetApplicationId" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetApplicationId"></a>

```go
func ResetApplicationId()
```

##### `ResetDatabricksSqlAccess` <a name="ResetDatabricksSqlAccess" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetDatabricksSqlAccess"></a>

```go
func ResetDatabricksSqlAccess()
```

##### `ResetDisableAsUserDeletion` <a name="ResetDisableAsUserDeletion" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetDisableAsUserDeletion"></a>

```go
func ResetDisableAsUserDeletion()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetExternalId"></a>

```go
func ResetExternalId()
```

##### `ResetForce` <a name="ResetForce" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetForce"></a>

```go
func ResetForce()
```

##### `ResetForceDeleteHomeDir` <a name="ResetForceDeleteHomeDir" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetForceDeleteHomeDir"></a>

```go
func ResetForceDeleteHomeDir()
```

##### `ResetForceDeleteRepos` <a name="ResetForceDeleteRepos" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetForceDeleteRepos"></a>

```go
func ResetForceDeleteRepos()
```

##### `ResetHome` <a name="ResetHome" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetHome"></a>

```go
func ResetHome()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetId"></a>

```go
func ResetId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetRepos` <a name="ResetRepos" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetRepos"></a>

```go
func ResetRepos()
```

##### `ResetWorkspaceAccess` <a name="ResetWorkspaceAccess" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetWorkspaceAccess"></a>

```go
func ResetWorkspaceAccess()
```

##### `ResetWorkspaceConsume` <a name="ResetWorkspaceConsume" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetWorkspaceConsume"></a>

```go
func ResetWorkspaceConsume()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServicePrincipal resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/serviceprincipal"

serviceprincipal.ServicePrincipal_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/serviceprincipal"

serviceprincipal.ServicePrincipal_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/serviceprincipal"

serviceprincipal.ServicePrincipal_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/serviceprincipal"

serviceprincipal.ServicePrincipal_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ServicePrincipal resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServicePrincipal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServicePrincipal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ServicePrincipal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference">ServicePrincipalProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.aclPrincipalIdInput">AclPrincipalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.activeInput">ActiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.allowClusterCreateInput">AllowClusterCreateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.allowInstancePoolCreateInput">AllowInstancePoolCreateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.apiInput">ApiInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.databricksSqlAccessInput">DatabricksSqlAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.disableAsUserDeletionInput">DisableAsUserDeletionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteHomeDirInput">ForceDeleteHomeDirInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteReposInput">ForceDeleteReposInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.forceInput">ForceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.homeInput">HomeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfig">ServicePrincipalProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.reposInput">ReposInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceAccessInput">WorkspaceAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceConsumeInput">WorkspaceConsumeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.aclPrincipalId">AclPrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.active">Active</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.allowClusterCreate">AllowClusterCreate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.allowInstancePoolCreate">AllowInstancePoolCreate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.api">Api</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.databricksSqlAccess">DatabricksSqlAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.disableAsUserDeletion">DisableAsUserDeletion</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.force">Force</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteHomeDir">ForceDeleteHomeDir</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteRepos">ForceDeleteRepos</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.home">Home</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.repos">Repos</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceAccess">WorkspaceAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceConsume">WorkspaceConsume</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.providerConfig"></a>

```go
func ProviderConfig() ServicePrincipalProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference">ServicePrincipalProviderConfigOutputReference</a>

---

##### `AclPrincipalIdInput`<sup>Optional</sup> <a name="AclPrincipalIdInput" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.aclPrincipalIdInput"></a>

```go
func AclPrincipalIdInput() *string
```

- *Type:* *string

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.activeInput"></a>

```go
func ActiveInput() interface{}
```

- *Type:* interface{}

---

##### `AllowClusterCreateInput`<sup>Optional</sup> <a name="AllowClusterCreateInput" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.allowClusterCreateInput"></a>

```go
func AllowClusterCreateInput() interface{}
```

- *Type:* interface{}

---

##### `AllowInstancePoolCreateInput`<sup>Optional</sup> <a name="AllowInstancePoolCreateInput" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.allowInstancePoolCreateInput"></a>

```go
func AllowInstancePoolCreateInput() interface{}
```

- *Type:* interface{}

---

##### `ApiInput`<sup>Optional</sup> <a name="ApiInput" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.apiInput"></a>

```go
func ApiInput() *string
```

- *Type:* *string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `DatabricksSqlAccessInput`<sup>Optional</sup> <a name="DatabricksSqlAccessInput" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.databricksSqlAccessInput"></a>

```go
func DatabricksSqlAccessInput() interface{}
```

- *Type:* interface{}

---

##### `DisableAsUserDeletionInput`<sup>Optional</sup> <a name="DisableAsUserDeletionInput" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.disableAsUserDeletionInput"></a>

```go
func DisableAsUserDeletionInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `ForceDeleteHomeDirInput`<sup>Optional</sup> <a name="ForceDeleteHomeDirInput" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteHomeDirInput"></a>

```go
func ForceDeleteHomeDirInput() interface{}
```

- *Type:* interface{}

---

##### `ForceDeleteReposInput`<sup>Optional</sup> <a name="ForceDeleteReposInput" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteReposInput"></a>

```go
func ForceDeleteReposInput() interface{}
```

- *Type:* interface{}

---

##### `ForceInput`<sup>Optional</sup> <a name="ForceInput" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.forceInput"></a>

```go
func ForceInput() interface{}
```

- *Type:* interface{}

---

##### `HomeInput`<sup>Optional</sup> <a name="HomeInput" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.homeInput"></a>

```go
func HomeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.providerConfigInput"></a>

```go
func ProviderConfigInput() ServicePrincipalProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfig">ServicePrincipalProviderConfig</a>

---

##### `ReposInput`<sup>Optional</sup> <a name="ReposInput" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.reposInput"></a>

```go
func ReposInput() *string
```

- *Type:* *string

---

##### `WorkspaceAccessInput`<sup>Optional</sup> <a name="WorkspaceAccessInput" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceAccessInput"></a>

```go
func WorkspaceAccessInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceConsumeInput`<sup>Optional</sup> <a name="WorkspaceConsumeInput" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceConsumeInput"></a>

```go
func WorkspaceConsumeInput() interface{}
```

- *Type:* interface{}

---

##### `AclPrincipalId`<sup>Required</sup> <a name="AclPrincipalId" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.aclPrincipalId"></a>

```go
func AclPrincipalId() *string
```

- *Type:* *string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.active"></a>

```go
func Active() interface{}
```

- *Type:* interface{}

---

##### `AllowClusterCreate`<sup>Required</sup> <a name="AllowClusterCreate" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.allowClusterCreate"></a>

```go
func AllowClusterCreate() interface{}
```

- *Type:* interface{}

---

##### `AllowInstancePoolCreate`<sup>Required</sup> <a name="AllowInstancePoolCreate" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.allowInstancePoolCreate"></a>

```go
func AllowInstancePoolCreate() interface{}
```

- *Type:* interface{}

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.api"></a>

```go
func Api() *string
```

- *Type:* *string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `DatabricksSqlAccess`<sup>Required</sup> <a name="DatabricksSqlAccess" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.databricksSqlAccess"></a>

```go
func DatabricksSqlAccess() interface{}
```

- *Type:* interface{}

---

##### `DisableAsUserDeletion`<sup>Required</sup> <a name="DisableAsUserDeletion" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.disableAsUserDeletion"></a>

```go
func DisableAsUserDeletion() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `Force`<sup>Required</sup> <a name="Force" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.force"></a>

```go
func Force() interface{}
```

- *Type:* interface{}

---

##### `ForceDeleteHomeDir`<sup>Required</sup> <a name="ForceDeleteHomeDir" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteHomeDir"></a>

```go
func ForceDeleteHomeDir() interface{}
```

- *Type:* interface{}

---

##### `ForceDeleteRepos`<sup>Required</sup> <a name="ForceDeleteRepos" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteRepos"></a>

```go
func ForceDeleteRepos() interface{}
```

- *Type:* interface{}

---

##### `Home`<sup>Required</sup> <a name="Home" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.home"></a>

```go
func Home() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Repos`<sup>Required</sup> <a name="Repos" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.repos"></a>

```go
func Repos() *string
```

- *Type:* *string

---

##### `WorkspaceAccess`<sup>Required</sup> <a name="WorkspaceAccess" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceAccess"></a>

```go
func WorkspaceAccess() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceConsume`<sup>Required</sup> <a name="WorkspaceConsume" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceConsume"></a>

```go
func WorkspaceConsume() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalConfig <a name="ServicePrincipalConfig" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/serviceprincipal"

&serviceprincipal.ServicePrincipalConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AclPrincipalId: *string,
	Active: interface{},
	AllowClusterCreate: interface{},
	AllowInstancePoolCreate: interface{},
	Api: *string,
	ApplicationId: *string,
	DatabricksSqlAccess: interface{},
	DisableAsUserDeletion: interface{},
	DisplayName: *string,
	ExternalId: *string,
	Force: interface{},
	ForceDeleteHomeDir: interface{},
	ForceDeleteRepos: interface{},
	Home: *string,
	Id: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.servicePrincipal.ServicePrincipalProviderConfig,
	Repos: *string,
	WorkspaceAccess: interface{},
	WorkspaceConsume: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.aclPrincipalId">AclPrincipalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#acl_principal_id ServicePrincipal#acl_principal_id}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.active">Active</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#active ServicePrincipal#active}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.allowClusterCreate">AllowClusterCreate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#allow_cluster_create ServicePrincipal#allow_cluster_create}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.allowInstancePoolCreate">AllowInstancePoolCreate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#allow_instance_pool_create ServicePrincipal#allow_instance_pool_create}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.api">Api</a></code> | <code>*string</code> | Specifies whether to use account-level or workspace-level API. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.applicationId">ApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#application_id ServicePrincipal#application_id}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.databricksSqlAccess">DatabricksSqlAccess</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#databricks_sql_access ServicePrincipal#databricks_sql_access}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.disableAsUserDeletion">DisableAsUserDeletion</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#disable_as_user_deletion ServicePrincipal#disable_as_user_deletion}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#display_name ServicePrincipal#display_name}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.externalId">ExternalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#external_id ServicePrincipal#external_id}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.force">Force</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#force ServicePrincipal#force}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forceDeleteHomeDir">ForceDeleteHomeDir</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#force_delete_home_dir ServicePrincipal#force_delete_home_dir}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forceDeleteRepos">ForceDeleteRepos</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#force_delete_repos ServicePrincipal#force_delete_repos}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.home">Home</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#home ServicePrincipal#home}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#id ServicePrincipal#id}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfig">ServicePrincipalProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.repos">Repos</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#repos ServicePrincipal#repos}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.workspaceAccess">WorkspaceAccess</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#workspace_access ServicePrincipal#workspace_access}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.workspaceConsume">WorkspaceConsume</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#workspace_consume ServicePrincipal#workspace_consume}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AclPrincipalId`<sup>Optional</sup> <a name="AclPrincipalId" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.aclPrincipalId"></a>

```go
AclPrincipalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#acl_principal_id ServicePrincipal#acl_principal_id}.

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.active"></a>

```go
Active interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#active ServicePrincipal#active}.

---

##### `AllowClusterCreate`<sup>Optional</sup> <a name="AllowClusterCreate" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.allowClusterCreate"></a>

```go
AllowClusterCreate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#allow_cluster_create ServicePrincipal#allow_cluster_create}.

---

##### `AllowInstancePoolCreate`<sup>Optional</sup> <a name="AllowInstancePoolCreate" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.allowInstancePoolCreate"></a>

```go
AllowInstancePoolCreate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#allow_instance_pool_create ServicePrincipal#allow_instance_pool_create}.

---

##### `Api`<sup>Optional</sup> <a name="Api" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.api"></a>

```go
Api *string
```

- *Type:* *string

Specifies whether to use account-level or workspace-level API.

Valid values are `account` and `workspace`. When not set, the API level is inferred from the provider host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#api ServicePrincipal#api}

---

##### `ApplicationId`<sup>Optional</sup> <a name="ApplicationId" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#application_id ServicePrincipal#application_id}.

---

##### `DatabricksSqlAccess`<sup>Optional</sup> <a name="DatabricksSqlAccess" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.databricksSqlAccess"></a>

```go
DatabricksSqlAccess interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#databricks_sql_access ServicePrincipal#databricks_sql_access}.

---

##### `DisableAsUserDeletion`<sup>Optional</sup> <a name="DisableAsUserDeletion" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.disableAsUserDeletion"></a>

```go
DisableAsUserDeletion interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#disable_as_user_deletion ServicePrincipal#disable_as_user_deletion}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#display_name ServicePrincipal#display_name}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#external_id ServicePrincipal#external_id}.

---

##### `Force`<sup>Optional</sup> <a name="Force" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.force"></a>

```go
Force interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#force ServicePrincipal#force}.

---

##### `ForceDeleteHomeDir`<sup>Optional</sup> <a name="ForceDeleteHomeDir" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forceDeleteHomeDir"></a>

```go
ForceDeleteHomeDir interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#force_delete_home_dir ServicePrincipal#force_delete_home_dir}.

---

##### `ForceDeleteRepos`<sup>Optional</sup> <a name="ForceDeleteRepos" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forceDeleteRepos"></a>

```go
ForceDeleteRepos interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#force_delete_repos ServicePrincipal#force_delete_repos}.

---

##### `Home`<sup>Optional</sup> <a name="Home" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.home"></a>

```go
Home *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#home ServicePrincipal#home}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#id ServicePrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.providerConfig"></a>

```go
ProviderConfig ServicePrincipalProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfig">ServicePrincipalProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#provider_config ServicePrincipal#provider_config}

---

##### `Repos`<sup>Optional</sup> <a name="Repos" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.repos"></a>

```go
Repos *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#repos ServicePrincipal#repos}.

---

##### `WorkspaceAccess`<sup>Optional</sup> <a name="WorkspaceAccess" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.workspaceAccess"></a>

```go
WorkspaceAccess interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#workspace_access ServicePrincipal#workspace_access}.

---

##### `WorkspaceConsume`<sup>Optional</sup> <a name="WorkspaceConsume" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.workspaceConsume"></a>

```go
WorkspaceConsume interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#workspace_consume ServicePrincipal#workspace_consume}.

---

### ServicePrincipalProviderConfig <a name="ServicePrincipalProviderConfig" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/serviceprincipal"

&serviceprincipal.ServicePrincipalProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#workspace_id ServicePrincipal#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/service_principal#workspace_id ServicePrincipal#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicePrincipalProviderConfigOutputReference <a name="ServicePrincipalProviderConfigOutputReference" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/serviceprincipal"

serviceprincipal.NewServicePrincipalProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServicePrincipalProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfig">ServicePrincipalProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ServicePrincipalProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfig">ServicePrincipalProviderConfig</a>

---



