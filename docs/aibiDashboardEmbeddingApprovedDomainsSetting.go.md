# `aibiDashboardEmbeddingApprovedDomainsSetting` Submodule <a name="`aibiDashboardEmbeddingApprovedDomainsSetting` Submodule" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AibiDashboardEmbeddingApprovedDomainsSetting <a name="AibiDashboardEmbeddingApprovedDomainsSetting" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting databricks_aibi_dashboard_embedding_approved_domains_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aibidashboardembeddingapproveddomainssetting"

aibidashboardembeddingapproveddomainssetting.NewAibiDashboardEmbeddingApprovedDomainsSetting(scope Construct, id *string, config AibiDashboardEmbeddingApprovedDomainsSettingConfig) AibiDashboardEmbeddingApprovedDomainsSetting
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig">AibiDashboardEmbeddingApprovedDomainsSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig">AibiDashboardEmbeddingApprovedDomainsSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.putAibiDashboardEmbeddingApprovedDomains">PutAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetSettingName">ResetSettingName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAibiDashboardEmbeddingApprovedDomains` <a name="PutAibiDashboardEmbeddingApprovedDomains" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.putAibiDashboardEmbeddingApprovedDomains"></a>

```go
func PutAibiDashboardEmbeddingApprovedDomains(value AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.putAibiDashboardEmbeddingApprovedDomains.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a>

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.putProviderConfig"></a>

```go
func PutProviderConfig(value AibiDashboardEmbeddingApprovedDomainsSettingProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfig">AibiDashboardEmbeddingApprovedDomainsSettingProviderConfig</a>

---

##### `ResetEtag` <a name="ResetEtag" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetEtag"></a>

```go
func ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetId"></a>

```go
func ResetId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetSettingName` <a name="ResetSettingName" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.resetSettingName"></a>

```go
func ResetSettingName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AibiDashboardEmbeddingApprovedDomainsSetting resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aibidashboardembeddingapproveddomainssetting"

aibidashboardembeddingapproveddomainssetting.AibiDashboardEmbeddingApprovedDomainsSetting_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aibidashboardembeddingapproveddomainssetting"

aibidashboardembeddingapproveddomainssetting.AibiDashboardEmbeddingApprovedDomainsSetting_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aibidashboardembeddingapproveddomainssetting"

aibidashboardembeddingapproveddomainssetting.AibiDashboardEmbeddingApprovedDomainsSetting_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aibidashboardembeddingapproveddomainssetting"

aibidashboardembeddingapproveddomainssetting.AibiDashboardEmbeddingApprovedDomainsSetting_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AibiDashboardEmbeddingApprovedDomainsSetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AibiDashboardEmbeddingApprovedDomainsSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AibiDashboardEmbeddingApprovedDomainsSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AibiDashboardEmbeddingApprovedDomainsSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.aibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference">AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.aibiDashboardEmbeddingApprovedDomainsInput">AibiDashboardEmbeddingApprovedDomainsInput</a></code> | <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.etagInput">EtagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfig">AibiDashboardEmbeddingApprovedDomainsSettingProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.settingNameInput">SettingNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.settingName">SettingName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AibiDashboardEmbeddingApprovedDomains`<sup>Required</sup> <a name="AibiDashboardEmbeddingApprovedDomains" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.aibiDashboardEmbeddingApprovedDomains"></a>

```go
func AibiDashboardEmbeddingApprovedDomains() AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.providerConfig"></a>

```go
func ProviderConfig() AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference">AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference</a>

---

##### `AibiDashboardEmbeddingApprovedDomainsInput`<sup>Optional</sup> <a name="AibiDashboardEmbeddingApprovedDomainsInput" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.aibiDashboardEmbeddingApprovedDomainsInput"></a>

```go
func AibiDashboardEmbeddingApprovedDomainsInput() AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains
```

- *Type:* <a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a>

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.etagInput"></a>

```go
func EtagInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.providerConfigInput"></a>

```go
func ProviderConfigInput() AibiDashboardEmbeddingApprovedDomainsSettingProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfig">AibiDashboardEmbeddingApprovedDomainsSettingProviderConfig</a>

---

##### `SettingNameInput`<sup>Optional</sup> <a name="SettingNameInput" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.settingNameInput"></a>

```go
func SettingNameInput() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SettingName`<sup>Required</sup> <a name="SettingName" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.settingName"></a>

```go
func SettingName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSetting.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains <a name="AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aibidashboardembeddingapproveddomainssetting"

&aibidashboardembeddingapproveddomainssetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains {
	ApprovedDomains: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains.property.approvedDomains">ApprovedDomains</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#approved_domains AibiDashboardEmbeddingApprovedDomainsSetting#approved_domains}. |

---

##### `ApprovedDomains`<sup>Required</sup> <a name="ApprovedDomains" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains.property.approvedDomains"></a>

```go
ApprovedDomains *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#approved_domains AibiDashboardEmbeddingApprovedDomainsSetting#approved_domains}.

---

### AibiDashboardEmbeddingApprovedDomainsSettingConfig <a name="AibiDashboardEmbeddingApprovedDomainsSettingConfig" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aibidashboardembeddingapproveddomainssetting"

&aibidashboardembeddingapproveddomainssetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AibiDashboardEmbeddingApprovedDomains: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains,
	Etag: *string,
	Id: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfig,
	SettingName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.aibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomains</a></code> | <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a></code> | aibi_dashboard_embedding_approved_domains block. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.etag">Etag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#etag AibiDashboardEmbeddingApprovedDomainsSetting#etag}. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#id AibiDashboardEmbeddingApprovedDomainsSetting#id}. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfig">AibiDashboardEmbeddingApprovedDomainsSettingProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.settingName">SettingName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#setting_name AibiDashboardEmbeddingApprovedDomainsSetting#setting_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AibiDashboardEmbeddingApprovedDomains`<sup>Required</sup> <a name="AibiDashboardEmbeddingApprovedDomains" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.aibiDashboardEmbeddingApprovedDomains"></a>

```go
AibiDashboardEmbeddingApprovedDomains AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains
```

- *Type:* <a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a>

aibi_dashboard_embedding_approved_domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#aibi_dashboard_embedding_approved_domains AibiDashboardEmbeddingApprovedDomainsSetting#aibi_dashboard_embedding_approved_domains}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.etag"></a>

```go
Etag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#etag AibiDashboardEmbeddingApprovedDomainsSetting#etag}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#id AibiDashboardEmbeddingApprovedDomainsSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.providerConfig"></a>

```go
ProviderConfig AibiDashboardEmbeddingApprovedDomainsSettingProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfig">AibiDashboardEmbeddingApprovedDomainsSettingProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#provider_config AibiDashboardEmbeddingApprovedDomainsSetting#provider_config}

---

##### `SettingName`<sup>Optional</sup> <a name="SettingName" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingConfig.property.settingName"></a>

```go
SettingName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#setting_name AibiDashboardEmbeddingApprovedDomainsSetting#setting_name}.

---

### AibiDashboardEmbeddingApprovedDomainsSettingProviderConfig <a name="AibiDashboardEmbeddingApprovedDomainsSettingProviderConfig" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aibidashboardembeddingapproveddomainssetting"

&aibidashboardembeddingapproveddomainssetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#workspace_id AibiDashboardEmbeddingApprovedDomainsSetting#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/aibi_dashboard_embedding_approved_domains_setting#workspace_id AibiDashboardEmbeddingApprovedDomainsSetting#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference <a name="AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aibidashboardembeddingapproveddomainssetting"

aibidashboardembeddingapproveddomainssetting.NewAibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput">ApprovedDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains">ApprovedDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApprovedDomainsInput`<sup>Optional</sup> <a name="ApprovedDomainsInput" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomainsInput"></a>

```go
func ApprovedDomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ApprovedDomains`<sup>Required</sup> <a name="ApprovedDomains" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.approvedDomains"></a>

```go
func ApprovedDomains() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomainsOutputReference.property.internalValue"></a>

```go
func InternalValue() AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains
```

- *Type:* <a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains">AibiDashboardEmbeddingApprovedDomainsSettingAibiDashboardEmbeddingApprovedDomains</a>

---


### AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference <a name="AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/aibidashboardembeddingapproveddomainssetting"

aibidashboardembeddingapproveddomainssetting.NewAibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfig">AibiDashboardEmbeddingApprovedDomainsSettingProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() AibiDashboardEmbeddingApprovedDomainsSettingProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.aibiDashboardEmbeddingApprovedDomainsSetting.AibiDashboardEmbeddingApprovedDomainsSettingProviderConfig">AibiDashboardEmbeddingApprovedDomainsSettingProviderConfig</a>

---



