# `agentKitManagedMemoryEntry` Submodule <a name="`agentKitManagedMemoryEntry` Submodule" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentKitManagedMemoryEntry <a name="AgentKitManagedMemoryEntry" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry databricks_agent_kit_managed_memory_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/agentkitmanagedmemoryentry"

agentkitmanagedmemoryentry.NewAgentKitManagedMemoryEntry(scope Construct, id *string, config AgentKitManagedMemoryEntryConfig) AgentKitManagedMemoryEntry
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig">AgentKitManagedMemoryEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig">AgentKitManagedMemoryEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetManagedMemoryEntryId">ResetManagedMemoryEntryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetSessionId">ResetSessionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetSourceType">ResetSourceType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.putProviderConfig"></a>

```go
func PutProviderConfig(value AgentKitManagedMemoryEntryProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig">AgentKitManagedMemoryEntryProviderConfig</a>

---

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetContent"></a>

```go
func ResetContent()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetManagedMemoryEntryId` <a name="ResetManagedMemoryEntryId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetManagedMemoryEntryId"></a>

```go
func ResetManagedMemoryEntryId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetSessionId` <a name="ResetSessionId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetSessionId"></a>

```go
func ResetSessionId()
```

##### `ResetSourceType` <a name="ResetSourceType" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.resetSourceType"></a>

```go
func ResetSourceType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AgentKitManagedMemoryEntry resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/agentkitmanagedmemoryentry"

agentkitmanagedmemoryentry.AgentKitManagedMemoryEntry_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/agentkitmanagedmemoryentry"

agentkitmanagedmemoryentry.AgentKitManagedMemoryEntry_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/agentkitmanagedmemoryentry"

agentkitmanagedmemoryentry.AgentKitManagedMemoryEntry_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/agentkitmanagedmemoryentry"

agentkitmanagedmemoryentry.AgentKitManagedMemoryEntry_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AgentKitManagedMemoryEntry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AgentKitManagedMemoryEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AgentKitManagedMemoryEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AgentKitManagedMemoryEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference">AgentKitManagedMemoryEntryProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.actorIdInput">ActorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.managedMemoryEntryIdInput">ManagedMemoryEntryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.sessionIdInput">SessionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.sourceTypeInput">SourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.actorId">ActorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.managedMemoryEntryId">ManagedMemoryEntryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.sessionId">SessionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.providerConfig"></a>

```go
func ProviderConfig() AgentKitManagedMemoryEntryProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference">AgentKitManagedMemoryEntryProviderConfigOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ActorIdInput`<sup>Optional</sup> <a name="ActorIdInput" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.actorIdInput"></a>

```go
func ActorIdInput() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ManagedMemoryEntryIdInput`<sup>Optional</sup> <a name="ManagedMemoryEntryIdInput" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.managedMemoryEntryIdInput"></a>

```go
func ManagedMemoryEntryIdInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SessionIdInput`<sup>Optional</sup> <a name="SessionIdInput" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.sessionIdInput"></a>

```go
func SessionIdInput() *string
```

- *Type:* *string

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.sourceTypeInput"></a>

```go
func SourceTypeInput() *string
```

- *Type:* *string

---

##### `ActorId`<sup>Required</sup> <a name="ActorId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.actorId"></a>

```go
func ActorId() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ManagedMemoryEntryId`<sup>Required</sup> <a name="ManagedMemoryEntryId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.managedMemoryEntryId"></a>

```go
func ManagedMemoryEntryId() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `SessionId`<sup>Required</sup> <a name="SessionId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.sessionId"></a>

```go
func SessionId() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntry.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AgentKitManagedMemoryEntryConfig <a name="AgentKitManagedMemoryEntryConfig" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/agentkitmanagedmemoryentry"

&agentkitmanagedmemoryentry.AgentKitManagedMemoryEntryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ActorId: *string,
	Parent: *string,
	Path: *string,
	Content: *string,
	Description: *string,
	ManagedMemoryEntryId: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig,
	SessionId: *string,
	SourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.actorId">ActorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#actor_id AgentKitManagedMemoryEntry#actor_id}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#parent AgentKitManagedMemoryEntry#parent}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#path AgentKitManagedMemoryEntry#path}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#content AgentKitManagedMemoryEntry#content}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#description AgentKitManagedMemoryEntry#description}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.managedMemoryEntryId">ManagedMemoryEntryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#managed_memory_entry_id AgentKitManagedMemoryEntry#managed_memory_entry_id}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig">AgentKitManagedMemoryEntryProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#provider_config AgentKitManagedMemoryEntry#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.sessionId">SessionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#session_id AgentKitManagedMemoryEntry#session_id}. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.sourceType">SourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#source_type AgentKitManagedMemoryEntry#source_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActorId`<sup>Required</sup> <a name="ActorId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.actorId"></a>

```go
ActorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#actor_id AgentKitManagedMemoryEntry#actor_id}.

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#parent AgentKitManagedMemoryEntry#parent}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#path AgentKitManagedMemoryEntry#path}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#content AgentKitManagedMemoryEntry#content}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#description AgentKitManagedMemoryEntry#description}.

---

##### `ManagedMemoryEntryId`<sup>Optional</sup> <a name="ManagedMemoryEntryId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.managedMemoryEntryId"></a>

```go
ManagedMemoryEntryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#managed_memory_entry_id AgentKitManagedMemoryEntry#managed_memory_entry_id}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.providerConfig"></a>

```go
ProviderConfig AgentKitManagedMemoryEntryProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig">AgentKitManagedMemoryEntryProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#provider_config AgentKitManagedMemoryEntry#provider_config}.

---

##### `SessionId`<sup>Optional</sup> <a name="SessionId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.sessionId"></a>

```go
SessionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#session_id AgentKitManagedMemoryEntry#session_id}.

---

##### `SourceType`<sup>Optional</sup> <a name="SourceType" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryConfig.property.sourceType"></a>

```go
SourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#source_type AgentKitManagedMemoryEntry#source_type}.

---

### AgentKitManagedMemoryEntryProviderConfig <a name="AgentKitManagedMemoryEntryProviderConfig" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/agentkitmanagedmemoryentry"

&agentkitmanagedmemoryentry.AgentKitManagedMemoryEntryProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#workspace_id AgentKitManagedMemoryEntry#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/resources/agent_kit_managed_memory_entry#workspace_id AgentKitManagedMemoryEntry#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### AgentKitManagedMemoryEntryProviderConfigOutputReference <a name="AgentKitManagedMemoryEntryProviderConfigOutputReference" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/agentkitmanagedmemoryentry"

agentkitmanagedmemoryentry.NewAgentKitManagedMemoryEntryProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AgentKitManagedMemoryEntryProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.agentKitManagedMemoryEntry.AgentKitManagedMemoryEntryProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



