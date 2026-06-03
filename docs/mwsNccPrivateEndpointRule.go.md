# `mwsNccPrivateEndpointRule` Submodule <a name="`mwsNccPrivateEndpointRule` Submodule" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsNccPrivateEndpointRule <a name="MwsNccPrivateEndpointRule" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule databricks_mws_ncc_private_endpoint_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/mwsnccprivateendpointrule"

mwsnccprivateendpointrule.NewMwsNccPrivateEndpointRule(scope Construct, id *string, config MwsNccPrivateEndpointRuleConfig) MwsNccPrivateEndpointRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig">MwsNccPrivateEndpointRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig">MwsNccPrivateEndpointRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.putGcpEndpoint">PutGcpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetConnectionState">ResetConnectionState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetCreationTime">ResetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetDeactivated">ResetDeactivated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetDeactivatedAt">ResetDeactivatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetDomainNames">ResetDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetEndpointName">ResetEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetEndpointService">ResetEndpointService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetErrorMessage">ResetErrorMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetGcpEndpoint">ResetGcpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetResourceNames">ResetResourceNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetRuleId">ResetRuleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetUpdatedTime">ResetUpdatedTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetVpcEndpointId">ResetVpcEndpointId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGcpEndpoint` <a name="PutGcpEndpoint" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.putGcpEndpoint"></a>

```go
func PutGcpEndpoint(value MwsNccPrivateEndpointRuleGcpEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.putGcpEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint">MwsNccPrivateEndpointRuleGcpEndpoint</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetConnectionState` <a name="ResetConnectionState" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetConnectionState"></a>

```go
func ResetConnectionState()
```

##### `ResetCreationTime` <a name="ResetCreationTime" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetCreationTime"></a>

```go
func ResetCreationTime()
```

##### `ResetDeactivated` <a name="ResetDeactivated" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetDeactivated"></a>

```go
func ResetDeactivated()
```

##### `ResetDeactivatedAt` <a name="ResetDeactivatedAt" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetDeactivatedAt"></a>

```go
func ResetDeactivatedAt()
```

##### `ResetDomainNames` <a name="ResetDomainNames" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetDomainNames"></a>

```go
func ResetDomainNames()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEndpointName` <a name="ResetEndpointName" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetEndpointName"></a>

```go
func ResetEndpointName()
```

##### `ResetEndpointService` <a name="ResetEndpointService" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetEndpointService"></a>

```go
func ResetEndpointService()
```

##### `ResetErrorMessage` <a name="ResetErrorMessage" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetErrorMessage"></a>

```go
func ResetErrorMessage()
```

##### `ResetGcpEndpoint` <a name="ResetGcpEndpoint" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetGcpEndpoint"></a>

```go
func ResetGcpEndpoint()
```

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetGroupId"></a>

```go
func ResetGroupId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetId"></a>

```go
func ResetId()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetResourceId"></a>

```go
func ResetResourceId()
```

##### `ResetResourceNames` <a name="ResetResourceNames" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetResourceNames"></a>

```go
func ResetResourceNames()
```

##### `ResetRuleId` <a name="ResetRuleId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetRuleId"></a>

```go
func ResetRuleId()
```

##### `ResetUpdatedTime` <a name="ResetUpdatedTime" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetUpdatedTime"></a>

```go
func ResetUpdatedTime()
```

##### `ResetVpcEndpointId` <a name="ResetVpcEndpointId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetVpcEndpointId"></a>

```go
func ResetVpcEndpointId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MwsNccPrivateEndpointRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/mwsnccprivateendpointrule"

mwsnccprivateendpointrule.MwsNccPrivateEndpointRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/mwsnccprivateendpointrule"

mwsnccprivateendpointrule.MwsNccPrivateEndpointRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/mwsnccprivateendpointrule"

mwsnccprivateendpointrule.MwsNccPrivateEndpointRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/mwsnccprivateendpointrule"

mwsnccprivateendpointrule.MwsNccPrivateEndpointRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MwsNccPrivateEndpointRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MwsNccPrivateEndpointRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MwsNccPrivateEndpointRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MwsNccPrivateEndpointRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.gcpEndpoint">GcpEndpoint</a></code> | <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference">MwsNccPrivateEndpointRuleGcpEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connectionStateInput">ConnectionStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.creationTimeInput">CreationTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedAtInput">DeactivatedAtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedInput">DeactivatedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.domainNamesInput">DomainNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointNameInput">EndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointServiceInput">EndpointServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.errorMessageInput">ErrorMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.gcpEndpointInput">GcpEndpointInput</a></code> | <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint">MwsNccPrivateEndpointRuleGcpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.networkConnectivityConfigIdInput">NetworkConnectivityConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceNamesInput">ResourceNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.ruleIdInput">RuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.updatedTimeInput">UpdatedTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.vpcEndpointIdInput">VpcEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connectionState">ConnectionState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.creationTime">CreationTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivated">Deactivated</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedAt">DeactivatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.domainNames">DomainNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointService">EndpointService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.networkConnectivityConfigId">NetworkConnectivityConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceNames">ResourceNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.ruleId">RuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.updatedTime">UpdatedTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GcpEndpoint`<sup>Required</sup> <a name="GcpEndpoint" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.gcpEndpoint"></a>

```go
func GcpEndpoint() MwsNccPrivateEndpointRuleGcpEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference">MwsNccPrivateEndpointRuleGcpEndpointOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ConnectionStateInput`<sup>Optional</sup> <a name="ConnectionStateInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connectionStateInput"></a>

```go
func ConnectionStateInput() *string
```

- *Type:* *string

---

##### `CreationTimeInput`<sup>Optional</sup> <a name="CreationTimeInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.creationTimeInput"></a>

```go
func CreationTimeInput() *f64
```

- *Type:* *f64

---

##### `DeactivatedAtInput`<sup>Optional</sup> <a name="DeactivatedAtInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedAtInput"></a>

```go
func DeactivatedAtInput() *f64
```

- *Type:* *f64

---

##### `DeactivatedInput`<sup>Optional</sup> <a name="DeactivatedInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedInput"></a>

```go
func DeactivatedInput() interface{}
```

- *Type:* interface{}

---

##### `DomainNamesInput`<sup>Optional</sup> <a name="DomainNamesInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.domainNamesInput"></a>

```go
func DomainNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointNameInput"></a>

```go
func EndpointNameInput() *string
```

- *Type:* *string

---

##### `EndpointServiceInput`<sup>Optional</sup> <a name="EndpointServiceInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointServiceInput"></a>

```go
func EndpointServiceInput() *string
```

- *Type:* *string

---

##### `ErrorMessageInput`<sup>Optional</sup> <a name="ErrorMessageInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.errorMessageInput"></a>

```go
func ErrorMessageInput() *string
```

- *Type:* *string

---

##### `GcpEndpointInput`<sup>Optional</sup> <a name="GcpEndpointInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.gcpEndpointInput"></a>

```go
func GcpEndpointInput() MwsNccPrivateEndpointRuleGcpEndpoint
```

- *Type:* <a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint">MwsNccPrivateEndpointRuleGcpEndpoint</a>

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NetworkConnectivityConfigIdInput`<sup>Optional</sup> <a name="NetworkConnectivityConfigIdInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.networkConnectivityConfigIdInput"></a>

```go
func NetworkConnectivityConfigIdInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `ResourceNamesInput`<sup>Optional</sup> <a name="ResourceNamesInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceNamesInput"></a>

```go
func ResourceNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.ruleIdInput"></a>

```go
func RuleIdInput() *string
```

- *Type:* *string

---

##### `UpdatedTimeInput`<sup>Optional</sup> <a name="UpdatedTimeInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.updatedTimeInput"></a>

```go
func UpdatedTimeInput() *f64
```

- *Type:* *f64

---

##### `VpcEndpointIdInput`<sup>Optional</sup> <a name="VpcEndpointIdInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.vpcEndpointIdInput"></a>

```go
func VpcEndpointIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `ConnectionState`<sup>Required</sup> <a name="ConnectionState" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connectionState"></a>

```go
func ConnectionState() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.creationTime"></a>

```go
func CreationTime() *f64
```

- *Type:* *f64

---

##### `Deactivated`<sup>Required</sup> <a name="Deactivated" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivated"></a>

```go
func Deactivated() interface{}
```

- *Type:* interface{}

---

##### `DeactivatedAt`<sup>Required</sup> <a name="DeactivatedAt" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedAt"></a>

```go
func DeactivatedAt() *f64
```

- *Type:* *f64

---

##### `DomainNames`<sup>Required</sup> <a name="DomainNames" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.domainNames"></a>

```go
func DomainNames() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

##### `EndpointService`<sup>Required</sup> <a name="EndpointService" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointService"></a>

```go
func EndpointService() *string
```

- *Type:* *string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NetworkConnectivityConfigId`<sup>Required</sup> <a name="NetworkConnectivityConfigId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.networkConnectivityConfigId"></a>

```go
func NetworkConnectivityConfigId() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceNames`<sup>Required</sup> <a name="ResourceNames" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceNames"></a>

```go
func ResourceNames() *[]*string
```

- *Type:* *[]*string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.ruleId"></a>

```go
func RuleId() *string
```

- *Type:* *string

---

##### `UpdatedTime`<sup>Required</sup> <a name="UpdatedTime" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.updatedTime"></a>

```go
func UpdatedTime() *f64
```

- *Type:* *f64

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.vpcEndpointId"></a>

```go
func VpcEndpointId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MwsNccPrivateEndpointRuleConfig <a name="MwsNccPrivateEndpointRuleConfig" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/mwsnccprivateendpointrule"

&mwsnccprivateendpointrule.MwsNccPrivateEndpointRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	NetworkConnectivityConfigId: *string,
	AccountId: *string,
	ConnectionState: *string,
	CreationTime: *f64,
	Deactivated: interface{},
	DeactivatedAt: *f64,
	DomainNames: *[]*string,
	Enabled: interface{},
	EndpointName: *string,
	EndpointService: *string,
	ErrorMessage: *string,
	GcpEndpoint: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint,
	GroupId: *string,
	Id: *string,
	ResourceId: *string,
	ResourceNames: *[]*string,
	RuleId: *string,
	UpdatedTime: *f64,
	VpcEndpointId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.networkConnectivityConfigId">NetworkConnectivityConfigId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#network_connectivity_config_id MwsNccPrivateEndpointRule#network_connectivity_config_id}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#account_id MwsNccPrivateEndpointRule#account_id}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.connectionState">ConnectionState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#connection_state MwsNccPrivateEndpointRule#connection_state}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.creationTime">CreationTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#creation_time MwsNccPrivateEndpointRule#creation_time}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.deactivated">Deactivated</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#deactivated MwsNccPrivateEndpointRule#deactivated}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.deactivatedAt">DeactivatedAt</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#deactivated_at MwsNccPrivateEndpointRule#deactivated_at}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.domainNames">DomainNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#domain_names MwsNccPrivateEndpointRule#domain_names}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#enabled MwsNccPrivateEndpointRule#enabled}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.endpointName">EndpointName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#endpoint_name MwsNccPrivateEndpointRule#endpoint_name}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.endpointService">EndpointService</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#endpoint_service MwsNccPrivateEndpointRule#endpoint_service}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#error_message MwsNccPrivateEndpointRule#error_message}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.gcpEndpoint">GcpEndpoint</a></code> | <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint">MwsNccPrivateEndpointRuleGcpEndpoint</a></code> | gcp_endpoint block. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.groupId">GroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#group_id MwsNccPrivateEndpointRule#group_id}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#id MwsNccPrivateEndpointRule#id}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#resource_id MwsNccPrivateEndpointRule#resource_id}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.resourceNames">ResourceNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#resource_names MwsNccPrivateEndpointRule#resource_names}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.ruleId">RuleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#rule_id MwsNccPrivateEndpointRule#rule_id}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.updatedTime">UpdatedTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#updated_time MwsNccPrivateEndpointRule#updated_time}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#vpc_endpoint_id MwsNccPrivateEndpointRule#vpc_endpoint_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NetworkConnectivityConfigId`<sup>Required</sup> <a name="NetworkConnectivityConfigId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.networkConnectivityConfigId"></a>

```go
NetworkConnectivityConfigId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#network_connectivity_config_id MwsNccPrivateEndpointRule#network_connectivity_config_id}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#account_id MwsNccPrivateEndpointRule#account_id}.

---

##### `ConnectionState`<sup>Optional</sup> <a name="ConnectionState" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.connectionState"></a>

```go
ConnectionState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#connection_state MwsNccPrivateEndpointRule#connection_state}.

---

##### `CreationTime`<sup>Optional</sup> <a name="CreationTime" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.creationTime"></a>

```go
CreationTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#creation_time MwsNccPrivateEndpointRule#creation_time}.

---

##### `Deactivated`<sup>Optional</sup> <a name="Deactivated" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.deactivated"></a>

```go
Deactivated interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#deactivated MwsNccPrivateEndpointRule#deactivated}.

---

##### `DeactivatedAt`<sup>Optional</sup> <a name="DeactivatedAt" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.deactivatedAt"></a>

```go
DeactivatedAt *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#deactivated_at MwsNccPrivateEndpointRule#deactivated_at}.

---

##### `DomainNames`<sup>Optional</sup> <a name="DomainNames" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.domainNames"></a>

```go
DomainNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#domain_names MwsNccPrivateEndpointRule#domain_names}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#enabled MwsNccPrivateEndpointRule#enabled}.

---

##### `EndpointName`<sup>Optional</sup> <a name="EndpointName" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.endpointName"></a>

```go
EndpointName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#endpoint_name MwsNccPrivateEndpointRule#endpoint_name}.

---

##### `EndpointService`<sup>Optional</sup> <a name="EndpointService" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.endpointService"></a>

```go
EndpointService *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#endpoint_service MwsNccPrivateEndpointRule#endpoint_service}.

---

##### `ErrorMessage`<sup>Optional</sup> <a name="ErrorMessage" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.errorMessage"></a>

```go
ErrorMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#error_message MwsNccPrivateEndpointRule#error_message}.

---

##### `GcpEndpoint`<sup>Optional</sup> <a name="GcpEndpoint" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.gcpEndpoint"></a>

```go
GcpEndpoint MwsNccPrivateEndpointRuleGcpEndpoint
```

- *Type:* <a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint">MwsNccPrivateEndpointRuleGcpEndpoint</a>

gcp_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#gcp_endpoint MwsNccPrivateEndpointRule#gcp_endpoint}

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#group_id MwsNccPrivateEndpointRule#group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#id MwsNccPrivateEndpointRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#resource_id MwsNccPrivateEndpointRule#resource_id}.

---

##### `ResourceNames`<sup>Optional</sup> <a name="ResourceNames" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.resourceNames"></a>

```go
ResourceNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#resource_names MwsNccPrivateEndpointRule#resource_names}.

---

##### `RuleId`<sup>Optional</sup> <a name="RuleId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.ruleId"></a>

```go
RuleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#rule_id MwsNccPrivateEndpointRule#rule_id}.

---

##### `UpdatedTime`<sup>Optional</sup> <a name="UpdatedTime" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.updatedTime"></a>

```go
UpdatedTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#updated_time MwsNccPrivateEndpointRule#updated_time}.

---

##### `VpcEndpointId`<sup>Optional</sup> <a name="VpcEndpointId" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.vpcEndpointId"></a>

```go
VpcEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#vpc_endpoint_id MwsNccPrivateEndpointRule#vpc_endpoint_id}.

---

### MwsNccPrivateEndpointRuleGcpEndpoint <a name="MwsNccPrivateEndpointRuleGcpEndpoint" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/mwsnccprivateendpointrule"

&mwsnccprivateendpointrule.MwsNccPrivateEndpointRuleGcpEndpoint {
	PscEndpointUri: *string,
	ServiceAttachment: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint.property.pscEndpointUri">PscEndpointUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#psc_endpoint_uri MwsNccPrivateEndpointRule#psc_endpoint_uri}. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint.property.serviceAttachment">ServiceAttachment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#service_attachment MwsNccPrivateEndpointRule#service_attachment}. |

---

##### `PscEndpointUri`<sup>Optional</sup> <a name="PscEndpointUri" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint.property.pscEndpointUri"></a>

```go
PscEndpointUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#psc_endpoint_uri MwsNccPrivateEndpointRule#psc_endpoint_uri}.

---

##### `ServiceAttachment`<sup>Optional</sup> <a name="ServiceAttachment" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint.property.serviceAttachment"></a>

```go
ServiceAttachment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/mws_ncc_private_endpoint_rule#service_attachment MwsNccPrivateEndpointRule#service_attachment}.

---

## Classes <a name="Classes" id="Classes"></a>

### MwsNccPrivateEndpointRuleGcpEndpointOutputReference <a name="MwsNccPrivateEndpointRuleGcpEndpointOutputReference" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/mwsnccprivateendpointrule"

mwsnccprivateendpointrule.NewMwsNccPrivateEndpointRuleGcpEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwsNccPrivateEndpointRuleGcpEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.resetPscEndpointUri">ResetPscEndpointUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.resetServiceAttachment">ResetServiceAttachment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPscEndpointUri` <a name="ResetPscEndpointUri" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.resetPscEndpointUri"></a>

```go
func ResetPscEndpointUri()
```

##### `ResetServiceAttachment` <a name="ResetServiceAttachment" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.resetServiceAttachment"></a>

```go
func ResetServiceAttachment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.pscEndpointUriInput">PscEndpointUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.serviceAttachmentInput">ServiceAttachmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.pscEndpointUri">PscEndpointUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.serviceAttachment">ServiceAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint">MwsNccPrivateEndpointRuleGcpEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PscEndpointUriInput`<sup>Optional</sup> <a name="PscEndpointUriInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.pscEndpointUriInput"></a>

```go
func PscEndpointUriInput() *string
```

- *Type:* *string

---

##### `ServiceAttachmentInput`<sup>Optional</sup> <a name="ServiceAttachmentInput" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.serviceAttachmentInput"></a>

```go
func ServiceAttachmentInput() *string
```

- *Type:* *string

---

##### `PscEndpointUri`<sup>Required</sup> <a name="PscEndpointUri" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.pscEndpointUri"></a>

```go
func PscEndpointUri() *string
```

- *Type:* *string

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.serviceAttachment"></a>

```go
func ServiceAttachment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() MwsNccPrivateEndpointRuleGcpEndpoint
```

- *Type:* <a href="#@cdktn/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleGcpEndpoint">MwsNccPrivateEndpointRuleGcpEndpoint</a>

---



