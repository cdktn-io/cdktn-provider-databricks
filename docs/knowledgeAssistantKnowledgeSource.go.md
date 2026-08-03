# `knowledgeAssistantKnowledgeSource` Submodule <a name="`knowledgeAssistantKnowledgeSource` Submodule" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KnowledgeAssistantKnowledgeSource <a name="KnowledgeAssistantKnowledgeSource" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source databricks_knowledge_assistant_knowledge_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/knowledgeassistantknowledgesource"

knowledgeassistantknowledgesource.NewKnowledgeAssistantKnowledgeSource(scope Construct, id *string, config KnowledgeAssistantKnowledgeSourceConfig) KnowledgeAssistantKnowledgeSource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig">KnowledgeAssistantKnowledgeSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig">KnowledgeAssistantKnowledgeSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putFiles">PutFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putFileTable">PutFileTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putIndex">PutIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetFiles">ResetFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetFileTable">ResetFileTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetIndex">ResetIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFiles` <a name="PutFiles" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putFiles"></a>

```go
func PutFiles(value KnowledgeAssistantKnowledgeSourceFiles)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putFiles.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles">KnowledgeAssistantKnowledgeSourceFiles</a>

---

##### `PutFileTable` <a name="PutFileTable" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putFileTable"></a>

```go
func PutFileTable(value KnowledgeAssistantKnowledgeSourceFileTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putFileTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable">KnowledgeAssistantKnowledgeSourceFileTable</a>

---

##### `PutIndex` <a name="PutIndex" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putIndex"></a>

```go
func PutIndex(value KnowledgeAssistantKnowledgeSourceIndex)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putIndex.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex">KnowledgeAssistantKnowledgeSourceIndex</a>

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putProviderConfig"></a>

```go
func PutProviderConfig(value KnowledgeAssistantKnowledgeSourceProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig">KnowledgeAssistantKnowledgeSourceProviderConfig</a>

---

##### `ResetFiles` <a name="ResetFiles" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetFiles"></a>

```go
func ResetFiles()
```

##### `ResetFileTable` <a name="ResetFileTable" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetFileTable"></a>

```go
func ResetFileTable()
```

##### `ResetIndex` <a name="ResetIndex" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetIndex"></a>

```go
func ResetIndex()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KnowledgeAssistantKnowledgeSource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/knowledgeassistantknowledgesource"

knowledgeassistantknowledgesource.KnowledgeAssistantKnowledgeSource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/knowledgeassistantknowledgesource"

knowledgeassistantknowledgesource.KnowledgeAssistantKnowledgeSource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/knowledgeassistantknowledgesource"

knowledgeassistantknowledgesource.KnowledgeAssistantKnowledgeSource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/knowledgeassistantknowledgesource"

knowledgeassistantknowledgesource.KnowledgeAssistantKnowledgeSource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a KnowledgeAssistantKnowledgeSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KnowledgeAssistantKnowledgeSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KnowledgeAssistantKnowledgeSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the KnowledgeAssistantKnowledgeSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.files">Files</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference">KnowledgeAssistantKnowledgeSourceFilesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.fileTable">FileTable</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference">KnowledgeAssistantKnowledgeSourceFileTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.index">Index</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference">KnowledgeAssistantKnowledgeSourceIndexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.knowledgeCutoffTime">KnowledgeCutoffTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference">KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.filesInput">FilesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.fileTableInput">FileTableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.indexInput">IndexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.sourceTypeInput">SourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Files`<sup>Required</sup> <a name="Files" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.files"></a>

```go
func Files() KnowledgeAssistantKnowledgeSourceFilesOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference">KnowledgeAssistantKnowledgeSourceFilesOutputReference</a>

---

##### `FileTable`<sup>Required</sup> <a name="FileTable" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.fileTable"></a>

```go
func FileTable() KnowledgeAssistantKnowledgeSourceFileTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference">KnowledgeAssistantKnowledgeSourceFileTableOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.index"></a>

```go
func Index() KnowledgeAssistantKnowledgeSourceIndexOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference">KnowledgeAssistantKnowledgeSourceIndexOutputReference</a>

---

##### `KnowledgeCutoffTime`<sup>Required</sup> <a name="KnowledgeCutoffTime" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.knowledgeCutoffTime"></a>

```go
func KnowledgeCutoffTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.providerConfig"></a>

```go
func ProviderConfig() KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference">KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilesInput`<sup>Optional</sup> <a name="FilesInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.filesInput"></a>

```go
func FilesInput() interface{}
```

- *Type:* interface{}

---

##### `FileTableInput`<sup>Optional</sup> <a name="FileTableInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.fileTableInput"></a>

```go
func FileTableInput() interface{}
```

- *Type:* interface{}

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.indexInput"></a>

```go
func IndexInput() interface{}
```

- *Type:* interface{}

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.sourceTypeInput"></a>

```go
func SourceTypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KnowledgeAssistantKnowledgeSourceConfig <a name="KnowledgeAssistantKnowledgeSourceConfig" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/knowledgeassistantknowledgesource"

&knowledgeassistantknowledgesource.KnowledgeAssistantKnowledgeSourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	DisplayName: *string,
	Parent: *string,
	SourceType: *string,
	Files: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles,
	FileTable: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable,
	Index: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#description KnowledgeAssistantKnowledgeSource#description}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#display_name KnowledgeAssistantKnowledgeSource#display_name}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#parent KnowledgeAssistantKnowledgeSource#parent}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.sourceType">SourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#source_type KnowledgeAssistantKnowledgeSource#source_type}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.files">Files</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles">KnowledgeAssistantKnowledgeSourceFiles</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#files KnowledgeAssistantKnowledgeSource#files}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.fileTable">FileTable</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable">KnowledgeAssistantKnowledgeSourceFileTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#file_table KnowledgeAssistantKnowledgeSource#file_table}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.index">Index</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex">KnowledgeAssistantKnowledgeSourceIndex</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#index KnowledgeAssistantKnowledgeSource#index}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig">KnowledgeAssistantKnowledgeSourceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#provider_config KnowledgeAssistantKnowledgeSource#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#description KnowledgeAssistantKnowledgeSource#description}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#display_name KnowledgeAssistantKnowledgeSource#display_name}.

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#parent KnowledgeAssistantKnowledgeSource#parent}.

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.sourceType"></a>

```go
SourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#source_type KnowledgeAssistantKnowledgeSource#source_type}.

---

##### `Files`<sup>Optional</sup> <a name="Files" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.files"></a>

```go
Files KnowledgeAssistantKnowledgeSourceFiles
```

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles">KnowledgeAssistantKnowledgeSourceFiles</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#files KnowledgeAssistantKnowledgeSource#files}.

---

##### `FileTable`<sup>Optional</sup> <a name="FileTable" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.fileTable"></a>

```go
FileTable KnowledgeAssistantKnowledgeSourceFileTable
```

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable">KnowledgeAssistantKnowledgeSourceFileTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#file_table KnowledgeAssistantKnowledgeSource#file_table}.

---

##### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.index"></a>

```go
Index KnowledgeAssistantKnowledgeSourceIndex
```

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex">KnowledgeAssistantKnowledgeSourceIndex</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#index KnowledgeAssistantKnowledgeSource#index}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceConfig.property.providerConfig"></a>

```go
ProviderConfig KnowledgeAssistantKnowledgeSourceProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig">KnowledgeAssistantKnowledgeSourceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#provider_config KnowledgeAssistantKnowledgeSource#provider_config}.

---

### KnowledgeAssistantKnowledgeSourceFiles <a name="KnowledgeAssistantKnowledgeSourceFiles" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/knowledgeassistantknowledgesource"

&knowledgeassistantknowledgesource.KnowledgeAssistantKnowledgeSourceFiles {
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#path KnowledgeAssistantKnowledgeSource#path}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFiles.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#path KnowledgeAssistantKnowledgeSource#path}.

---

### KnowledgeAssistantKnowledgeSourceFileTable <a name="KnowledgeAssistantKnowledgeSourceFileTable" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/knowledgeassistantknowledgesource"

&knowledgeassistantknowledgesource.KnowledgeAssistantKnowledgeSourceFileTable {
	FileCol: *string,
	TableName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable.property.fileCol">FileCol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#file_col KnowledgeAssistantKnowledgeSource#file_col}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#table_name KnowledgeAssistantKnowledgeSource#table_name}. |

---

##### `FileCol`<sup>Required</sup> <a name="FileCol" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable.property.fileCol"></a>

```go
FileCol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#file_col KnowledgeAssistantKnowledgeSource#file_col}.

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTable.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#table_name KnowledgeAssistantKnowledgeSource#table_name}.

---

### KnowledgeAssistantKnowledgeSourceIndex <a name="KnowledgeAssistantKnowledgeSourceIndex" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/knowledgeassistantknowledgesource"

&knowledgeassistantknowledgesource.KnowledgeAssistantKnowledgeSourceIndex {
	DocUriCol: *string,
	IndexName: *string,
	TextCol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex.property.docUriCol">DocUriCol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#doc_uri_col KnowledgeAssistantKnowledgeSource#doc_uri_col}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex.property.indexName">IndexName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#index_name KnowledgeAssistantKnowledgeSource#index_name}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex.property.textCol">TextCol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#text_col KnowledgeAssistantKnowledgeSource#text_col}. |

---

##### `DocUriCol`<sup>Required</sup> <a name="DocUriCol" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex.property.docUriCol"></a>

```go
DocUriCol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#doc_uri_col KnowledgeAssistantKnowledgeSource#doc_uri_col}.

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex.property.indexName"></a>

```go
IndexName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#index_name KnowledgeAssistantKnowledgeSource#index_name}.

---

##### `TextCol`<sup>Required</sup> <a name="TextCol" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndex.property.textCol"></a>

```go
TextCol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#text_col KnowledgeAssistantKnowledgeSource#text_col}.

---

### KnowledgeAssistantKnowledgeSourceProviderConfig <a name="KnowledgeAssistantKnowledgeSourceProviderConfig" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/knowledgeassistantknowledgesource"

&knowledgeassistantknowledgesource.KnowledgeAssistantKnowledgeSourceProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#workspace_id KnowledgeAssistantKnowledgeSource#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant_knowledge_source#workspace_id KnowledgeAssistantKnowledgeSource#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### KnowledgeAssistantKnowledgeSourceFilesOutputReference <a name="KnowledgeAssistantKnowledgeSourceFilesOutputReference" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/knowledgeassistantknowledgesource"

knowledgeassistantknowledgesource.NewKnowledgeAssistantKnowledgeSourceFilesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KnowledgeAssistantKnowledgeSourceFilesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFilesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KnowledgeAssistantKnowledgeSourceFileTableOutputReference <a name="KnowledgeAssistantKnowledgeSourceFileTableOutputReference" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/knowledgeassistantknowledgesource"

knowledgeassistantknowledgesource.NewKnowledgeAssistantKnowledgeSourceFileTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KnowledgeAssistantKnowledgeSourceFileTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fileColInput">FileColInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fileCol">FileCol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileColInput`<sup>Optional</sup> <a name="FileColInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fileColInput"></a>

```go
func FileColInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `FileCol`<sup>Required</sup> <a name="FileCol" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.fileCol"></a>

```go
func FileCol() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceFileTableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KnowledgeAssistantKnowledgeSourceIndexOutputReference <a name="KnowledgeAssistantKnowledgeSourceIndexOutputReference" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/knowledgeassistantknowledgesource"

knowledgeassistantknowledgesource.NewKnowledgeAssistantKnowledgeSourceIndexOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KnowledgeAssistantKnowledgeSourceIndexOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.docUriColInput">DocUriColInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.indexNameInput">IndexNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.textColInput">TextColInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.docUriCol">DocUriCol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.indexName">IndexName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.textCol">TextCol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DocUriColInput`<sup>Optional</sup> <a name="DocUriColInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.docUriColInput"></a>

```go
func DocUriColInput() *string
```

- *Type:* *string

---

##### `IndexNameInput`<sup>Optional</sup> <a name="IndexNameInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.indexNameInput"></a>

```go
func IndexNameInput() *string
```

- *Type:* *string

---

##### `TextColInput`<sup>Optional</sup> <a name="TextColInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.textColInput"></a>

```go
func TextColInput() *string
```

- *Type:* *string

---

##### `DocUriCol`<sup>Required</sup> <a name="DocUriCol" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.docUriCol"></a>

```go
func DocUriCol() *string
```

- *Type:* *string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.indexName"></a>

```go
func IndexName() *string
```

- *Type:* *string

---

##### `TextCol`<sup>Required</sup> <a name="TextCol" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.textCol"></a>

```go
func TextCol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceIndexOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference <a name="KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/knowledgeassistantknowledgesource"

knowledgeassistantknowledgesource.NewKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.knowledgeAssistantKnowledgeSource.KnowledgeAssistantKnowledgeSourceProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



